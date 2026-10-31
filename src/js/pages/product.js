import { initApp } from '../app.js'
import { t, getLang } from '../core/i18n.js'
import { fmt, priceHTML, escapeHTML } from '../core/format.js'
import { cart, wishlist } from '../core/state.js'
import { PRODUCTS, COLORS, byId, discountPct } from '../data/products.js'
import { catByKey } from '../data/categories.js'
import { STORES } from '../data/stores.js'
import { img, imgUrl } from '../data/images.js'
import { productCard, badgeHTML } from '../components/product-card.js'
import { initCarousel } from '../components/carousel.js'
import { initTabs, toast } from '../components/widgets.js'
import { mountIslands } from '../../islands/mount.js'

initApp()

const params = new URLSearchParams(location.search)
const p = byId[params.get('id')] ?? byId['sofas-0']
const cat = catByKey[p.cat]

/* ---------- Configuration model ---------- */
const COLOR_OPTIONS = {
  sofas: ['green', 'grey', 'beige', 'blue', 'terracotta', 'anthracite'],
  kitchens: ['white', 'oak', 'anthracite', 'green'],
  bedrooms: ['oak', 'white', 'walnut', 'grey'],
}
const SIZE_OPTIONS = {
  sofas: [{ k: '2', i18n: 'size.2', delta: -20000 }, { k: '3', i18n: 'size.3', delta: 0 }, { k: 'corner', i18n: 'size.corner', delta: 45000 }],
  kitchens: [{ k: '180', label: '180 cm', delta: -70000 }, { k: '240', label: '240 cm', delta: 0 }, { k: '300', label: '300 cm', delta: 60000 }],
}
const colors = [...new Set([p.color, ...(COLOR_OPTIONS[p.cat] ?? ['white', 'oak', 'grey'])])]
const sizes = SIZE_OPTIONS[p.cat] ?? null
const viewer = p.cat === 'sofas' ? 'sofa-3d' : p.cat === 'kitchens' ? 'kitchen-3d' : null
const KITCHEN_FINISHES = ['white', 'oak', 'anthracite', 'green'] // keep in sync with islands/Kitchen3D.jsx
const finishFor = (c) => (KITCHEN_FINISHES.includes(c) ? c : 'white')

const state = {
  color: p.color,
  size: sizes ? (p.cat === 'sofas' ? (p.name.includes('2-seater') ? '2' : p.name.startsWith('Corner') ? 'corner' : '3') : '240') : null,
  qty: 1,
  months: 12,
}
const delta = () => sizes?.find((s) => s.k === state.size)?.delta ?? 0
const unitPrice = () => p.price + delta()
const oldPrice = () => (p.old ? Math.round((p.old + delta() * (p.old / p.price)) / 1000) * 1000 - 100 : null)

/* ---------- Gallery ---------- */
const pool = [...new Set([p.img, p.img2, ...PRODUCTS.filter((x) => x.cat === p.cat).map((x) => x.img)])].slice(0, viewer ? 4 : 5)
const mainImg = document.querySelector('[data-main-img]')
function setPhoto(key) {
  mainImg.src = imgUrl(key, 1200, 900)
  mainImg.srcset = `${imgUrl(key, 1200, 900)} 1x, ${imgUrl(key, 2000, 1500, 60)} 2x`
  mainImg.alt = p.name
}
function renderThumbs(activeKey) {
  const thumbs = document.querySelector('[data-thumbs]')
  thumbs.innerHTML = pool.map((k, i) => `
    <button class="relative aspect-[4/3] rounded-input overflow-hidden border-2 ${k === activeKey ? 'border-brand' : 'border-transparent hover:border-line'}" data-thumb="${k}" aria-label="${t('pdp.image', { n: i + 1 })}" aria-pressed="${k === activeKey}">
      ${img(k, { w: 200, alt: '', cls: 'w-full h-full object-cover' })}
    </button>`).join('') + (viewer ? `
    <button class="relative aspect-[4/3] rounded-input overflow-hidden border-2 border-transparent hover:border-line bg-surface grid place-items-center font-extrabold text-sm" data-thumb-3d aria-label="360° 3D">
      <span class="flex flex-col items-center gap-0.5 text-brand"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.8 20.5 7.5v9L12 21.2 3.5 16.5v-9z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9.2"/></svg>360°</span>
    </button>` : '')
}
document.querySelector('[data-thumbs]').addEventListener('click', (e) => {
  const th = e.target.closest('[data-thumb]')
  if (th) { setView('photo'); setPhoto(th.dataset.thumb); renderThumbs(th.dataset.thumb) }
  if (e.target.closest('[data-thumb-3d]')) setView('3d')
})

// Hover / keyboard zoom
const zoom = document.querySelector('.zoomable')
zoom.addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse') return
  const r = zoom.getBoundingClientRect()
  zoom.style.setProperty('--zx', `${((e.clientX - r.left) / r.width) * 100}%`)
  zoom.style.setProperty('--zy', `${((e.clientY - r.top) / r.height) * 100}%`)
})
zoom.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') zoom.classList.add('is-zoomed') })
zoom.addEventListener('pointerleave', () => zoom.classList.remove('is-zoomed'))
zoom.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); zoom.classList.toggle('is-zoomed') } })

/* ---------- View switcher: photo / 3D / room ---------- */
const switcher = document.querySelector('[data-view-switch]')
if (!viewer) switcher.querySelector('[data-view="3d"]').remove()
const island = document.querySelector('[data-viewer-island]')
if (viewer) {
  island.dataset.island = viewer
  island.dataset.props = JSON.stringify(viewer === 'sofa-3d'
    ? { color: COLORS[state.color].hex, size: state.size }
    : { width: Number(state.size), finish: finishFor(state.color) })
}
function setView(v) {
  switcher.querySelectorAll('[data-view]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.view === v)))
  document.querySelectorAll('[data-stage]').forEach((s) => { s.hidden = s.dataset.stage !== v })
  if (v === '3d') mountIslands(document.querySelector('[data-stage="3d"]'))
  if (v === 'room') {
    const room = document.querySelector('[data-room-img]')
    const key = cat?.img ?? p.img2
    room.src = imgUrl(key === p.img ? p.img2 : key, 1200, 900)
    room.alt = t('pdp.roomAlt', { n: p.name })
  }
}
switcher.addEventListener('click', (e) => { const b = e.target.closest('[data-view]'); if (b) setView(b.dataset.view) })
document.querySelector('[data-viewer-reset]').addEventListener('click', () => window.dispatchEvent(new CustomEvent('viewer:update', { detail: { reset: true } })))
document.querySelector('[data-viewer-spin]').addEventListener('click', (e) => {
  const b = e.currentTarget
  const on = b.getAttribute('aria-pressed') !== 'true'
  b.setAttribute('aria-pressed', String(on))
  window.dispatchEvent(new CustomEvent('viewer:update', { detail: { autoRotate: on } }))
})

/* ---------- Buy box ---------- */
function renderBuyBox() {
  const unit = unitPrice(), old = oldPrice(), pct = discountPct({ price: unit, old })
  document.querySelector('[data-crumb-cat]').textContent = t(cat?.i18n ?? 'nav.sofas')
  document.querySelector('[data-crumb-cat]').href = `category.html?cat=${p.cat}`
  document.querySelector('[data-crumb-name]').textContent = p.name
  document.querySelector('[data-pdp-name]').textContent = p.name
  document.title = `${p.name} — EL Arika`
  document.querySelector('[data-pdp-code]').textContent = p.code
  const stars = document.querySelector('[data-pdp-stars]')
  stars.style.setProperty('--pct', `${(p.rating / 5) * 100}%`)
  document.querySelector('[data-pdp-rating]').textContent = t('pdp.reviews', { r: p.rating, n: p.reviews })

  const badges = [pct ? `<span class="badge badge-red">-${pct}%</span>` : '', ...p.badges.map(badgeHTML)].join('')
  document.querySelector('[data-pdp-badges-inline]').innerHTML = badges
  document.querySelector('[data-pdp-badges]').innerHTML = p.badges.includes('best') ? badgeHTML('best') : ''

  document.querySelector('[data-pdp-price]').innerHTML = priceHTML(unit, 'price-lg')
  document.querySelector('[data-pdp-old]').textContent = old ? `${fmt(old)} ${t('cur')}` : ''
  document.querySelector('[data-pdp-pct]').hidden = !pct
  document.querySelector('[data-pdp-pct]').textContent = `-${pct}%`
  document.querySelector('[data-pdp-save]').textContent = old ? t('pdp.save', { n: fmt(old - unit) }) : ''

  const rate = state.months > 12 ? 0.059 : 0
  document.querySelector('[data-monthly]').textContent = `${fmt(Math.ceil((unit * (1 + rate)) / state.months / 10) * 10)} ${t('cur')}${t('pdp.perMonth')}`
  document.querySelector('[data-rate]').textContent = rate ? t('pdp.rate24') : t('pdp.rate0')

  document.querySelector('[data-color-name]').textContent = COLORS[state.color].label
  document.querySelector('[data-colors]').innerHTML = colors.map((c) => `
    <button class="swatch w-10! h-10!" role="radio" aria-checked="${c === state.color}" aria-label="${COLORS[c].label}" title="${COLORS[c].label}" style="background:${COLORS[c].hex}" data-color="${c}"></button>`).join('')

  document.querySelector('[data-size-group]').hidden = !sizes
  if (sizes) {
    document.querySelector('[data-sizes]').innerHTML = sizes.map((s) => `
      <button class="chip" role="radio" aria-checked="${s.k === state.size}" style="${s.k === state.size ? 'background:var(--color-brand);color:#fff;border-color:var(--color-brand)' : ''}" data-size="${s.k}">
        ${s.i18n ? t(s.i18n) : s.label}${s.delta ? ` <span class="text-[12px] opacity-80">(${s.delta > 0 ? '+' : '−'}${fmt(Math.abs(s.delta))})</span>` : ''}
      </button>`).join('')
  }

  const freeHome = unit >= 150000
  document.querySelector('[data-ship-price="home"]').innerHTML = freeHome ? `<span class="text-success">${t('free')}</span>` : `${fmt(2500)} ${t('cur')}`
  document.querySelector('[data-ship-price="assembly"]').textContent = `${fmt(p.cat === 'kitchens' ? 14900 : 6900)} ${t('cur')}`
  const fmtDay = new Intl.DateTimeFormat(getLang() === 'ar' ? 'ar-DZ' : 'en-GB', { weekday: 'short', day: 'numeric', month: 'short' })
  const d1 = new Date(Date.now() + 3 * 864e5), d2 = new Date(Date.now() + 6 * 864e5)
  document.querySelector('[data-eta]').textContent = `${fmtDay.format(d1)} – ${fmtDay.format(d2)}`

  const wish = document.querySelector('[data-wish]')
  wish.dataset.wish = p.id
  wish.setAttribute('aria-pressed', String(wishlist.has(p.id)))

  document.querySelector('[data-bar-name]').textContent = p.name
  document.querySelector('[data-bar-price]').innerHTML = priceHTML(unit, 'text-xl!')
}

document.querySelector('[data-colors]').addEventListener('click', (e) => {
  const b = e.target.closest('[data-color]')
  if (!b) return
  state.color = b.dataset.color
  renderBuyBox()
  renderTabs()
  document.querySelector(`[data-color="${state.color}"]`).focus()
  window.dispatchEvent(new CustomEvent('viewer:update', { detail: { color: COLORS[state.color].hex } }))
  window.dispatchEvent(new CustomEvent('kitchen:update', { detail: { finish: finishFor(state.color) } }))
})
document.querySelector('[data-sizes]').addEventListener('click', (e) => {
  const b = e.target.closest('[data-size]')
  if (!b) return
  state.size = b.dataset.size
  renderBuyBox()
  renderTabs()
  document.querySelector(`[data-size="${state.size}"]`).focus()
  window.dispatchEvent(new CustomEvent('viewer:update', { detail: { size: state.size } }))
  window.dispatchEvent(new CustomEvent('kitchen:update', { detail: { width: Number(state.size) } }))
})
document.querySelector('[data-months]').addEventListener('change', (e) => { state.months = Number(e.target.value); renderBuyBox() })

const qtyInput = document.querySelector('[data-qty-input]')
const setQty = (n) => { state.qty = Math.max(1, Math.min(10, n || 1)); qtyInput.value = state.qty }
document.querySelectorAll('[data-qty]').forEach((b) => b.addEventListener('click', () => setQty(state.qty + Number(b.dataset.qty))))
qtyInput.addEventListener('change', () => setQty(parseInt(qtyInput.value, 10)))

document.querySelectorAll('[data-pdp-add]').forEach((b) => b.addEventListener('click', () => {
  const ship = document.querySelector('input[name="ship"]:checked')?.value
  cart.add(p.id, { qty: state.qty, color: state.color, size: state.size ?? '', unit: unitPrice() })
  try { sessionStorage.setItem('elarika:ship', ship) } catch { /* ignore */ }
  toast(`<span class="block">${t('toast.added')}</span><span class="text-muted font-medium">${state.qty} × ${escapeHTML(p.name)}</span>`, { action: { href: 'cart.html', label: t('toast.view') } })
}))

/* ---------- In-store availability ---------- */
const dialog = document.querySelector('[data-stock-dialog]')
document.querySelector('[data-open-stock]').addEventListener('click', () => {
  const seed = [...p.id].reduce((a, c) => a + c.charCodeAt(0), 0)
  document.querySelector('[data-stock-list]').innerHTML = STORES.map((s, i) => {
    const n = (seed * (i + 3)) % 7
    const status = n === 0 ? ['text-brand', t('stock.order')] : n < 3 ? ['text-[#b26a00]', t('stock.low', { n })] : ['text-success', t('stock.in', { n })]
    return `<li class="flex items-center justify-between gap-3 px-5 py-3.5">
      <span><span class="block font-bold">${escapeHTML(s.name)}</span><span class="text-[13px] text-muted">${escapeHTML(s.address)}</span></span>
      <span class="text-sm font-bold whitespace-nowrap ${status[0]}">● ${status[1]}</span></li>`
  }).join('')
  dialog.showModal()
})
dialog.addEventListener('click', (e) => { if (e.target === dialog || e.target.closest('[data-close-dialog]')) dialog.close() })

/* ---------- Tabs content ---------- */
function dims() {
  if (p.cat === 'sofas') return { w: state.size === '2' ? 178 : state.size === 'corner' ? 288 : 228, d: state.size === 'corner' ? 160 : 92, h: 86 }
  if (p.cat === 'kitchens') return { w: Number(state.size), d: 60, h: 215 }
  return { w: p.width ?? 120, d: 50, h: p.cat === 'bedrooms' ? 220 : 80 }
}
function renderTabs() {
  document.querySelector('[data-tab-desc]').innerHTML = `
    <p>${t('desc.p1', { n: escapeHTML(p.name), c: t(cat?.i18n ?? 'nav.sofas').toLowerCase() })}</p>
    <ul class="mt-4 grid sm:grid-cols-2 gap-2">
      ${['desc.b1', 'desc.b2', 'desc.b3', 'desc.b4'].map((k) => `<li class="flex gap-2"><span class="text-brand font-bold">✓</span>${t(k)}</li>`).join('')}
    </ul>`
  const { w, d, h } = dims()
  document.querySelector('[data-tab-dim]').innerHTML = `
    <div class="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
      <figure class="rounded-card border border-line bg-white p-4">
        <svg viewBox="0 0 520 300" class="w-full h-auto" role="img" aria-label="${t('dim.aria', { w, d, h })}">
          <defs><marker id="arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#e30613"/></marker></defs>
          <g fill="none" stroke="#333" stroke-width="2">
            <rect x="60" y="70" width="300" height="150" rx="10"/>
            <rect x="60" y="70" width="300" height="60" rx="8" stroke-dasharray="4 4" stroke="#9a9a9a"/>
            <rect x="400" y="70" width="80" height="150" rx="8"/>
          </g>
          <g stroke="#e30613" stroke-width="1.6" marker-start="url(#arr)" marker-end="url(#arr)">
            <line x1="60" y1="245" x2="360" y2="245"/><line x1="30" y1="70" x2="30" y2="220"/><line x1="400" y1="245" x2="480" y2="245"/>
          </g>
          <g font-family="Montserrat, sans-serif" font-weight="700" font-size="15" fill="#e30613" text-anchor="middle">
            <text x="210" y="270">W ${w} cm</text><text x="18" y="150" transform="rotate(-90 18 150)">H ${h} cm</text><text x="440" y="270">D ${d} cm</text>
          </g>
          <g font-family="Montserrat, sans-serif" font-size="12" fill="#707070" text-anchor="middle"><text x="210" y="40">${t('dim.front')}</text><text x="440" y="40">${t('dim.side')}</text></g>
        </svg>
      </figure>
      <dl class="grid grid-cols-2 gap-y-3 text-[15px]">
        <dt class="text-muted">${t('dim.w')}</dt><dd class="font-bold">${w} cm</dd>
        <dt class="text-muted">${t('dim.d')}</dt><dd class="font-bold">${d} cm</dd>
        <dt class="text-muted">${t('dim.h')}</dt><dd class="font-bold">${h} cm</dd>
        <dt class="text-muted">${t('dim.weight')}</dt><dd class="font-bold">${Math.round((w * d * h) / 9000)} kg</dd>
        <dt class="text-muted">${t('dim.boxes')}</dt><dd class="font-bold">${Math.max(1, Math.round(w / 90))}</dd>
      </dl>
    </div>`
  document.querySelector('[data-tab-mat]').innerHTML = `
    <dl class="grid sm:grid-cols-[220px_1fr] gap-x-6 gap-y-3 max-w-[760px] text-[15px]">
      <dt class="text-muted">${t('mat.main')}</dt><dd class="font-semibold">${p.material}</dd>
      <dt class="text-muted">${t('mat.color')}</dt><dd class="font-semibold">${COLORS[state.color].label}</dd>
      <dt class="text-muted">${t('mat.structure')}</dt><dd class="font-semibold">${t(p.cat === 'sofas' ? 'mat.sofa' : 'mat.board')}</dd>
      <dt class="text-muted">${t('mat.care')}</dt><dd class="font-semibold">${t('mat.careText')}</dd>
      <dt class="text-muted">${t('mat.origin')}</dt><dd class="font-semibold">${t('mat.originText')}</dd>
    </dl>`
}

/* ---------- Cross-sell ---------- */
function renderCrossSell() {
  const look = PRODUCTS.filter((x) => x.cat !== p.cat && ['living', 'decor', 'dining', 'bedrooms'].includes(x.cat) && x.stock !== 'out').filter((_, i) => i % 3 === 0).slice(0, 8)
  const viewed = PRODUCTS.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 10)
  document.querySelector('[data-look]').innerHTML = look.map((x) => productCard(x)).join('')
  document.querySelector('[data-viewed]').innerHTML = viewed.map((x) => productCard(x)).join('')
  document.querySelectorAll('[data-carousel]').forEach(initCarousel)
}

/* ---------- Mobile sticky buy bar ---------- */
const bar = document.querySelector('[data-buy-bar]')
new IntersectionObserver(([e]) => {
  const show = !e.isIntersecting && e.boundingClientRect.top < 0
  bar.classList.toggle('is-visible', show)
  bar.setAttribute('aria-hidden', String(!show))
  bar.querySelector('button').tabIndex = show ? 0 : -1
}).observe(document.querySelector('[data-buy-anchor]'))

setPhoto(p.img)
renderThumbs(p.img)
renderBuyBox()
renderTabs()
renderCrossSell()
initTabs(document.querySelector('[data-pdp-tabs]'))

document.addEventListener('lang:change', () => { renderThumbs(p.img); renderBuyBox(); renderTabs(); renderCrossSell() })
