/**
 * React "islands" for the WebGL pieces of an otherwise static site.
 *   <div data-island="shader-gradient" data-props='{"variant":"hero"}'>
 *     …static fallback markup…
 *     <div data-island-root class="absolute inset-0"></div>
 *   </div>
 * React, three.js and each island are code-split and only downloaded when the
 * element nears the viewport, so the catalogue pages stay light.
 */
const registry = {
  'shader-gradient': () => import('./HeroGradient.jsx'),
  'liquid-logo': () => import('./LiquidLogo.jsx'),
  'sofa-3d': () => import('./Sofa3D.jsx'),
  'kitchen-3d': () => import('./Kitchen3D.jsx'),
}

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches

function webglAvailable() {
  // Data-saver and low-memory devices keep the static fallbacks (no three.js download).
  if (navigator.connection?.saveData || (navigator.deviceMemory && navigator.deviceMemory < 4)) return false
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch { return false }
}

let io
const loaded = new Promise((r) => (document.readyState === 'complete' ? r() : addEventListener('load', r, { once: true })))
const afterIdle = (fn) => loaded.then(() => (window.requestIdleCallback ? requestIdleCallback(fn, { timeout: 3000 }) : setTimeout(fn, 1200)))

export function mountIslands(root = document) {
  if (!webglAvailable()) {
    document.documentElement.classList.add('no-webgl')
    return
  }
  io ??= new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return
      io.unobserve(e.target)
      mount(e.target)
    })
  }, { rootMargin: '300px 0px' })
  root.querySelectorAll('[data-island]').forEach((el) => {
    if (el._island) return
    el._island = true
    // Above-the-fold islands wait for an idle main thread so they never delay first interaction.
    if ('islandDefer' in el.dataset) afterIdle(() => io.observe(el))
    else io.observe(el)
  })
}

async function mount(el) {
  const load = registry[el.dataset.island]
  if (!load) return
  try {
    const [React, { createRoot }, mod] = await Promise.all([import('react'), import('react-dom/client'), load()])
    const props = el.dataset.props ? JSON.parse(el.dataset.props) : {}
    let host = el.querySelector('[data-island-root]')
    if (!host) {
      host = document.createElement('div')
      host.className = 'absolute inset-0'
      el.appendChild(host)
    }

    class Boundary extends React.Component {
      state = { failed: false }
      static getDerivedStateFromError() { return { failed: true } }
      componentDidCatch(err) { console.warn(`[island:${el.dataset.island}]`, err) }
      render() { return this.state.failed ? null : this.props.children }
    }

    createRoot(host).render(
      React.createElement(Boundary, null, React.createElement(mod.default, { ...props, reducedMotion, host: el })),
    )
    el.classList.add('is-mounted')
  } catch (err) {
    console.warn(`[island:${el.dataset.island}] failed to load`, err)
  }
}
