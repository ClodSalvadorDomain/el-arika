/**
 * LIQUID GLASS
 * A DOM port of the liquid-glass-js API (Container / Button, shape types,
 * tintOpacity, warp, addChild, updateSizeFromDOM, Container.instances).
 *
 * Instead of capturing the page with html2canvas + WebGL (too heavy for a
 * catalogue page), each instance gets a per-size SVG displacement map that
 * encodes the edge normals of its shape. Applied as a `backdrop-filter`, it
 * refracts whatever sits behind the element — the same edge / rim / base
 * falloff model as the original shader. Chromium renders the refraction;
 * other engines get the frosted-blur + rim-light fallback from main.css.
 */

const SVG_NS = 'http://www.w3.org/2000/svg'
const supportsRefraction =
  typeof navigator !== 'undefined' && !!navigator.userAgentData?.brands?.some((b) => /Chromium/i.test(b.brand))

/** Global parameters (same names/ranges as liquid-glass-js "Glass Effect Parameters"). */
export const glassControls = {
  edgeIntensity: 0.06, // 0–0.1  refraction strength at edges
  edgeDistance: 0.28,  // 0.05–0.5 falloff band (fraction of the shorter side)
  baseIntensity: 0.01, // 0–0.05 centre distortion
  blurRadius: 3,       // 1–15
}

let defs = null
let uid = 0
function ensureDefs() {
  if (defs) return defs
  const svg = document.createElementNS(SVG_NS, 'svg')
  svg.setAttribute('aria-hidden', 'true')
  svg.setAttribute('width', '0')
  svg.setAttribute('height', '0')
  svg.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden'
  defs = document.createElementNS(SVG_NS, 'defs')
  svg.appendChild(defs)
  document.body.appendChild(svg)
  return defs
}

/** Signed distance + outward normal for a rounded rectangle centred at 0. */
function sdRoundRect(px, py, hw, hh, r) {
  const qx = Math.abs(px) - (hw - r)
  const qy = Math.abs(py) - (hh - r)
  const mx = Math.max(qx, 0), my = Math.max(qy, 0)
  const outside = Math.hypot(mx, my)
  const d = outside + Math.min(Math.max(qx, qy), 0) - r
  let nx, ny
  if (outside > 0) { nx = mx / outside; ny = my / outside } else if (qx > qy) { nx = 1; ny = 0 } else { nx = 0; ny = 1 }
  return { d, nx: nx * Math.sign(px || 1), ny: ny * Math.sign(py || 1) }
}

/** Builds the RG displacement map (R = x offset, G = y offset, 128 = none). */
function displacementMap(w, h, radius) {
  const scale = Math.min(1, 160 / Math.max(w, h))
  const cw = Math.max(8, Math.round(w * scale)), ch = Math.max(8, Math.round(h * scale))
  const canvas = document.createElement('canvas')
  canvas.width = cw; canvas.height = ch
  const ctx = canvas.getContext('2d')
  const data = ctx.createImageData(cw, ch)
  const hw = cw / 2, hh = ch / 2
  const r = Math.min(radius * scale, hw, hh)
  const band = Math.max(2, glassControls.edgeDistance * Math.min(cw, ch))
  for (let y = 0; y < ch; y++) {
    for (let x = 0; x < cw; x++) {
      const px = x + 0.5 - hw, py = y + 0.5 - hh
      const { d, nx, ny } = sdRoundRect(px, py, hw, hh, r)
      const inside = -d
      let m = 0
      if (inside > 0 && inside < band) m = (1 - inside / band) ** 2
      // gentle lens bulge toward the centre ("base" term)
      const bx = (px / hw) * glassControls.baseIntensity * 10
      const by = (py / hh) * glassControls.baseIntensity * 10
      const i = (y * cw + x) * 4
      data.data[i] = 128 - Math.max(-1, Math.min(1, nx * m + bx)) * 127
      data.data[i + 1] = 128 - Math.max(-1, Math.min(1, ny * m + by)) * 127
      data.data[i + 2] = 128
      data.data[i + 3] = 255
    }
  }
  ctx.putImageData(data, 0, 0)
  return canvas.toDataURL()
}

export class Container {
  /** @type {Container[]} */
  static instances = []

  /**
   * @param {{ borderRadius?: number, type?: 'rounded'|'circle'|'pill', tintOpacity?: number,
   *           element?: HTMLElement, tag?: string, refract?: boolean, dark?: boolean }} opts
   */
  constructor({ borderRadius = 48, type = 'rounded', tintOpacity = 0.2, element, tag = 'div', refract = true, dark = false } = {}) {
    this.type = type
    this.borderRadius = borderRadius
    this.tintOpacity = tintOpacity
    this.children = []
    this.element = element ?? document.createElement(tag)
    this.element.classList.add(this.baseClass(), `${this.baseClass()}-${type}`)
    if (dark) this.element.classList.add('glass-dark')
    this.element.style.setProperty('--lg-radius', `${borderRadius}px`)
    this.element.style.setProperty('--lg-tint', String(tintOpacity))
    this.element._glass = this
    this.size = { w: 0, h: 0 }
    Container.instances.push(this)

    this.onPointer = (e) => {
      const r = this.element.getBoundingClientRect()
      this.element.style.setProperty('--lg-x', `${((e.clientX - r.left) / r.width) * 100}%`)
      this.element.style.setProperty('--lg-y', `${((e.clientY - r.top) / r.height) * 100}%`)
    }
    this.element.addEventListener('pointermove', this.onPointer, { passive: true })

    if (refract && supportsRefraction) {
      this.filterId = `lg-${++uid}`
      this.ro = new ResizeObserver(() => {
        cancelAnimationFrame(this.raf)
        this.raf = requestAnimationFrame(() => this.updateSizeFromDOM())
      })
      this.ro.observe(this.element)
    }
  }

  baseClass() { return 'glass-container' }

  addChild(child) {
    const el = child.element ?? child
    this.element.appendChild(el)
    this.children.push(child)
    child.parent = this
    return this
  }

  removeChild(child) {
    const el = child.element ?? child
    el.remove()
    this.children = this.children.filter((c) => c !== child)
    return this
  }

  /** Re-measures the element and regenerates the refraction map if its size changed. */
  updateSizeFromDOM() {
    if (!this.filterId) return
    const { width: w, height: h } = this.element.getBoundingClientRect()
    if (w < 4 || h < 4) return
    if (Math.abs(w - this.size.w) < 1 && Math.abs(h - this.size.h) < 1) return
    this.size = { w, h }
    const radius = this.type === 'circle' ? Math.min(w, h) / 2 : this.type === 'pill' ? h / 2 : Math.min(this.borderRadius, w / 2, h / 2)
    this.render(w, h, radius)
  }

  render(w = this.size.w, h = this.size.h, radius = this.borderRadius) {
    const root = ensureDefs()
    let filter = root.querySelector(`#${this.filterId}`)
    if (!filter) {
      filter = document.createElementNS(SVG_NS, 'filter')
      filter.id = this.filterId
      filter.setAttribute('color-interpolation-filters', 'sRGB')
      filter.innerHTML = `
        <feGaussianBlur in="SourceGraphic" result="blur"/>
        <feImage result="map" x="0" y="0" preserveAspectRatio="none"/>
        <feDisplacementMap in="blur" in2="map" xChannelSelector="R" yChannelSelector="G"/>`
      root.appendChild(filter)
    }
    filter.querySelector('feGaussianBlur').setAttribute('stdDeviation', String(glassControls.blurRadius))
    const image = filter.querySelector('feImage')
    image.setAttribute('width', String(w))
    image.setAttribute('height', String(h))
    image.setAttribute('href', displacementMap(w, h, radius))
    filter.querySelector('feDisplacementMap').setAttribute('scale', String(Math.round(glassControls.edgeIntensity * Math.min(w, h) * 6)))
    this.element.style.setProperty('--lg-filter', `url(#${this.filterId})`)
    this.element.classList.add('lg-refract')
  }

  destroy() {
    this.ro?.disconnect()
    this.element.removeEventListener('pointermove', this.onPointer)
    defs?.querySelector(`#${this.filterId}`)?.remove()
    Container.instances = Container.instances.filter((i) => i !== this)
  }
}

export class Button extends Container {
  /**
   * @param {{ text?: string, size?: number, type?: 'rounded'|'circle'|'pill', onClick?: (text: string) => void,
   *           warp?: boolean, tintOpacity?: number, element?: HTMLElement, dark?: boolean, refract?: boolean }} opts
   */
  constructor({ text = 'Button', size = 48, type = 'rounded', onClick = null, warp = false, tintOpacity = 0.2, element, dark, refract, borderRadius = Math.round(size * 0.6) } = {}) {
    const el = element ?? document.createElement('button')
    if (!element) {
      el.type = 'button'
      const span = document.createElement('span')
      span.className = 'glass-button-text'
      span.textContent = text
      span.style.fontSize = `${size}px`
      el.appendChild(span)
      el.style.padding = type === 'circle' ? '0' : `${size * 0.45}px ${size * 0.9}px`
      if (type === 'circle') { el.style.width = el.style.height = `${size * 2.2}px` }
    }
    super({ element: el, type, tintOpacity, borderRadius, dark, refract })
    if (warp) this.element.classList.add('is-warp')
    if (onClick) this.element.addEventListener('click', () => onClick(text))
  }

  baseClass() { return 'glass-button' }
}

/** Global re-render after changing glassControls (mirrors updateAllGlassInstances()). */
export function updateAllGlassInstances() {
  Container.instances.forEach((i) => { i.size = { w: 0, h: 0 }; i.updateSizeFromDOM() })
}

/**
 * Declarative upgrade for server-rendered markup:
 *   <div data-glass data-glass-type="pill" data-glass-tint=".3" data-glass-dark>
 *   <button data-glass="button" data-glass-type="circle">
 *   data-glass-refract="false" skips the SVG filter (use on many tiny items).
 */
export function enhanceGlass(root = document) {
  root.querySelectorAll('[data-glass]').forEach((el) => {
    if (el._glass) return
    const d = el.dataset
    const opts = {
      element: el,
      type: d.glassType || 'rounded',
      tintOpacity: d.glassTint ? Number(d.glassTint) : 0.2,
      borderRadius: d.glassRadius ? Number(d.glassRadius) : 24,
      dark: 'glassDark' in d,
      refract: d.glassRefract !== 'false',
    }
    if (d.glass === 'button') new Button({ ...opts, warp: 'glassWarp' in d })
    else new Container(opts)
  })
}
