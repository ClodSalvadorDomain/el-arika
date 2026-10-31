import { initApp, reducedMotion } from '../app.js'
import { t } from '../core/i18n.js'
import { CATEGORIES } from '../data/categories.js'
import { BEST_OFFERS, byCat, byId } from '../data/products.js'
import { img } from '../data/images.js'
import { productCard, cardSkeleton } from '../components/product-card.js'
import { initCarousel } from '../components/carousel.js'
import { initCountdowns, initTabs, wait } from '../components/widgets.js'
import { enhanceGlass } from '../components/liquid-glass.js'
import { priceHTML, escapeHTML, fmt } from '../core/format.js'
import { icon } from '../core/icons.js'

initApp()

/* ---------- "Offer valid until DD/MM" (rolling 3-week campaign) ---------- */
const until = new Date(Date.now() + 21 * 864e5)
document.querySelectorAll('[data-valid-until]').forEach((el) => {
  el.textContent = `${String(until.getDate()).padStart(2, '0')}/${String(until.getMonth() + 1).padStart(2, '0')}`
})

/* ---------- 4. Hero carousel ---------- */
function initHero() {
  const root = document.querySelector('[data-hero]')
  const slides = [...root.querySelectorAll('.hero-slide')]
  const dots = root.querySelector('[data-hero-dots]')
  const toggle = root.querySelector('[data-hero-toggle]')
  let i = 0, timer = null, playing = !reducedMotion, hovering = false

  dots.innerHTML = slides.map((_, n) => `<button class="carousel__dot on-glass" aria-label="${t('carousel.page', { n: n + 1, total: slides.length })}" data-n="${n}"></button>`).join('')

  const go = (n) => {
    i = (n + slides.length) % slides.length
    slides.forEach((s, k) => {
      s.classList.toggle('is-active', k === i)
      s.inert = k !== i
    })
    dots.querySelectorAll('button').forEach((d, k) => d.setAttribute('aria-current', String(k === i)))
  }
  const schedule = () => {
    clearInterval(timer)
    if (playing && !hovering) timer = setInterval(() => go(i + 1), 6500)
  }
  const setPlaying = (on) => {
    playing = on
    toggle.setAttribute('aria-label', t(on ? 'hero.pause' : 'hero.play'))
    toggle.innerHTML = icon(on ? 'pause' : 'play', 18)
    root.querySelector('.relative').setAttribute('aria-live', on ? 'off' : 'polite')
    schedule()
  }

  root.querySelector('[data-hero-prev]').addEventListener('click', () => { go(i - 1); schedule() })
  root.querySelector('[data-hero-next]').addEventListener('click', () => { go(i + 1); schedule() })
  dots.addEventListener('click', (e) => { const d = e.target.closest('[data-n]'); if (d) { go(Number(d.dataset.n)); schedule() } })
  toggle.addEventListener('click', () => setPlaying(!playing))
  root.addEventListener('pointerenter', () => { hovering = true; schedule() })
  root.addEventListener('pointerleave', () => { hovering = false; schedule() })
  root.addEventListener('focusin', () => { hovering = true; schedule() })
  root.addEventListener('focusout', () => { hovering = false; schedule() })

  // swipe on touch
  let x0 = null
  root.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX }, { passive: true })
  root.addEventListener('touchend', (e) => {
    if (x0 === null) return
    const dx = e.changedTouches[0].clientX - x0
    const rtl = document.dir === 'rtl'
    if (Math.abs(dx) > 50) go(i + ((dx < 0) !== rtl ? 1 : -1))
    x0 = null
    schedule()
  })

  go(0)
  setPlaying(playing)
}

/* ---------- 5. Category shortcuts ---------- */
function renderCategories() {
  document.querySelector('[data-cat-shortcuts]').innerHTML = CATEGORIES.map((c) => `
    <li class="shrink-0">
      <a class="cat-tile" href="category.html?cat=${c.cat}">
        <span class="cat-tile__img${c.isPromo ? ' ring-2 ring-brand' : ''}">${img(c.img, { w: 160, ratio: 1, alt: '' })}</span>
        <span class="${c.isPromo ? 'text-brand' : ''}">${t(c.i18n)}</span>
      </a>
    </li>`).join('')
}

/* ---------- 6. Best offers carousel (skeleton → cards) ---------- */
async function renderOffers(withSkeleton = true) {
  const track = document.querySelector('[data-offers-track]')
  if (withSkeleton) {
    track.innerHTML = Array.from({ length: 4 }, cardSkeleton).join('')
    track.setAttribute('aria-busy', 'true')
    await wait(450) // simulated API latency
  }
  track.innerHTML = BEST_OFFERS.map((p) => productCard(p)).join('')
  track.removeAttribute('aria-busy')
  initCarousel(track.closest('[data-carousel]'))
}

/* ---------- 8. Featured kitchens (tabs by style + width filter) ---------- */
const kitchenState = { style: 'all', w: 'all' }
const widthMatch = (p, w) => w === 'all' || (w === '180' ? p.width <= 210 : w === '240' ? p.width >= 240 && p.width < 300 : p.width >= 300)
async function renderKitchens(withSkeleton = true) {
  const grid = document.querySelector('[data-kitchen-grid]')
  if (withSkeleton) {
    grid.innerHTML = Array.from({ length: 4 }, cardSkeleton).join('')
    await wait(280)
  }
  const list = byCat('kitchens')
    .filter((p) => (kitchenState.style === 'all' || p.style === kitchenState.style) && widthMatch(p, kitchenState.w))
    .slice(0, 8)
  grid.innerHTML = list.length
    ? list.map((p) => productCard(p, { cta: 'discover' })).join('')
    : `<p class="col-span-full py-10 text-center text-muted-strong">${t('kit.none')}</p>`
}
function initKitchens() {
  initTabs(document.querySelector('[data-kitchen-tabs]'), (tab) => {
    if (kitchenState.style === tab.dataset.style) return
    kitchenState.style = tab.dataset.style
    renderKitchens()
  })
  const widths = document.querySelector('[data-kitchen-widths]')
  widths.addEventListener('click', (e) => {
    const b = e.target.closest('[data-w]')
    if (!b) return
    widths.querySelectorAll('[data-w]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)))
    kitchenState.w = b.dataset.w
    renderKitchens()
  })
}

/* ---------- 9b. 3D kitchen planner controls ---------- */
function initPlanner() {
  const base = { 180: 149900, 240: 219900, 300: 289900 }
  const finishExtra = { white: 0, oak: 20000, anthracite: 15000, green: 25000 }
  const state = { width: 240, finish: 'white' }
  const priceEl = document.querySelector('[data-planner-price]')
  const update = () => {
    priceEl.innerHTML = `${fmt(base[state.width] + finishExtra[state.finish])}<span class="cur">${t('cur')}</span>`
    window.dispatchEvent(new CustomEvent('kitchen:update', { detail: state }))
  }
  const bind = (sel, key, attr, cast = (v) => v) => {
    const group = document.querySelector(sel)
    group.addEventListener('click', (e) => {
      const b = e.target.closest(`[${attr}]`)
      if (!b) return
      group.querySelectorAll(`[${attr}]`).forEach((x) => x.setAttribute('aria-pressed', String(x === b)))
      state[key] = cast(b.getAttribute(attr))
      update()
    })
  }
  bind('[data-planner-width]', 'width', 'data-w', Number)
  bind('[data-planner-finish]', 'finish', 'data-f')
}

/* ---------- 10. Shoppable hotspots ---------- */
function initHotspots() {
  let pop = null, active = null
  const close = () => {
    pop?.remove(); pop = null
    active?.setAttribute('aria-expanded', 'false'); active = null
  }
  document.querySelectorAll('[data-hotspots]').forEach((fig) => {
    fig.addEventListener('click', (e) => {
      const hs = e.target.closest('[data-hotspot]')
      if (!hs) return
      e.stopPropagation()
      if (active === hs) return close()
      close()
      const p = byId[hs.dataset.hotspot]
      if (!p) return
      active = hs
      hs.setAttribute('aria-expanded', 'true')
      pop = document.createElement('div')
      pop.className = 'hotspot-pop'
      pop.setAttribute('role', 'dialog')
      pop.setAttribute('aria-label', p.name)
      pop.dataset.glass = ''
      pop.dataset.glassRadius = '14'
      pop.dataset.glassTint = '.82'
      const left = parseFloat(hs.style.left), top = parseFloat(hs.style.top)
      pop.style.left = `clamp(8px, calc(${left}% - 115px), calc(100% - 238px))`
      pop.style[top > 55 ? 'bottom' : 'top'] = top > 55 ? `calc(${100 - top}% + 26px)` : `calc(${top}% + 26px)`
      pop.innerHTML = `
        <div class="flex gap-3">
          ${img(p.img, { w: 140, ratio: 1, alt: '', cls: 'w-16 h-16 rounded-lg object-cover shrink-0' })}
          <div class="min-w-0">
            <p class="font-bold text-sm leading-snug">${escapeHTML(p.name)}</p>
            <div class="mt-1 flex items-center gap-2">${priceHTML(p.price, 'text-xl!')}${p.old ? `<span class="price-old text-[12px]!">${fmt(p.old)}</span>` : ''}</div>
          </div>
        </div>
        <a class="btn btn-primary btn-sm btn-block mt-3" href="product.html?id=${p.id}">${t('card.discover')}</a>`
      fig.appendChild(pop)
      enhanceGlass(fig)
      pop.querySelector('a').focus({ preventScroll: true })
    })
  })
  document.addEventListener('click', (e) => { if (pop && !pop.contains(e.target)) close() })
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && active) { const a = active; close(); a.focus() } })
}

initHero()
renderCategories()
renderOffers()
initKitchens()
renderKitchens(false)
initPlanner()
initHotspots()
initCountdowns()

document.addEventListener('lang:change', () => {
  renderCategories()
  renderOffers(false)
  renderKitchens(false)
  initCountdowns()
})
