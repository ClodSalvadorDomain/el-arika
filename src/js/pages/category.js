import { initApp } from '../app.js'
import { t } from '../core/i18n.js'
import { icon } from '../core/icons.js'
import { fmt, escapeHTML } from '../core/format.js'
import { wishlist } from '../core/state.js'
import { PRODUCTS, COLORS, byCat, discountPct } from '../data/products.js'
import { catByKey } from '../data/categories.js'
import { productCard, cardSkeleton } from '../components/product-card.js'
import { wait } from '../components/widgets.js'

initApp()

const PAGE = 12
const params = new URLSearchParams(location.search)
const catKey = params.get('cat') || (params.get('q') ? 'search' : 'sofas')
const query = (params.get('q') || '').trim()
const cat = catByKey[catKey]

/* ---------- Base list for this listing ---------- */
function baseList() {
  if (catKey === 'wishlist') { const ids = wishlist.ids(); return PRODUCTS.filter((p) => ids.has(p.id)) }
  if (catKey === 'search' || !cat) return PRODUCTS
  return byCat(catKey)
}

/** Loose keyword search across name/spec/style/material/category ("beds" ≈ "bed"). */
function matchQuery(list, q) {
  const tokens = q.toLowerCase().split(/[\s,·]+/).filter((x) => x.length >= 2).map((x) => (x.length > 4 ? x.replace(/s$/, '') : x))
  if (!tokens.length) return list
  return list.filter((p) => {
    const hay = `${p.name} ${p.spec} ${p.style} ${p.material} ${COLORS[p.color].label} ${p.cat} ${t(catByKey[p.cat]?.i18n ?? '')}`.toLowerCase()
    return tokens.every((tk) => hay.includes(tk))
  })
}

let all = baseList()
const note = document.querySelector('[data-search-note]')
if (query) {
  const hits = matchQuery(all, query)
  if (hits.length) all = hits
  else {
    note.hidden = false
    note.innerHTML = t('search.fallback', { q: `<strong>${escapeHTML(query)}</strong>` })
  }
}

/* ---------- Filter state ---------- */
const prices = all.map((p) => p.price)
const bounds = prices.length
  ? { min: Math.floor(Math.min(...prices) / 1000) * 1000, max: Math.ceil(Math.max(...prices) / 1000) * 1000 }
  : { min: 0, max: 1000 }
const state = {
  min: bounds.min, max: bounds.max,
  widths: new Set(), colors: new Set(), materials: new Set(), styles: new Set(), avail: new Set(),
  promo: false, sort: 'relevance', shown: PAGE,
}

const distinct = (key) => [...new Set(all.map((p) => p[key]).filter((v) => v != null))]

function applyFilters() {
  let list = all.filter((p) =>
    p.price >= state.min && p.price <= state.max &&
    (!state.widths.size || state.widths.has(String(p.width))) &&
    (!state.colors.size || state.colors.has(p.color)) &&
    (!state.materials.size || state.materials.has(p.material)) &&
    (!state.styles.size || state.styles.has(p.style)) &&
    (!state.avail.size || [...state.avail].every((a) => p.stock === 'both' || p.stock === a)) &&
    (!state.promo || !!p.old))
  const sorters = {
    'price-asc': (a, b) => a.price - b.price,
    'price-desc': (a, b) => b.price - a.price,
    discount: (a, b) => discountPct(b) - discountPct(a),
    rating: (a, b) => b.rating - a.rating,
  }
  if (sorters[state.sort]) list = [...list].sort(sorters[state.sort])
  return list
}

/* ---------- Header, crumbs, SEO ---------- */
function renderHeader() {
  const name = catKey === 'wishlist' ? t('wish.title') : catKey === 'search' ? t('search.results', { q: query }) : t(cat?.i18n ?? 'nav.sofas')
  document.querySelector('[data-cat-title]').textContent = name
  document.querySelector('[data-crumb]').textContent = name
  document.title = `${name} — EL Arika`
  document.querySelector('[data-seo-title]').textContent = t('seo.title', { c: name })
  document.querySelector('[data-seo-body]').innerHTML = `<p>${t('seo.p1', { c: name.toLowerCase() })}</p><p>${t('seo.p2')}</p>`

  const subs = document.querySelector('[data-subcats]')
  subs.innerHTML = cat && cat.columns
    ? [`<a class="chip" href="category.html?cat=${catKey}" ${!query ? 'aria-current="page" style="background:var(--color-brand);color:#fff;border-color:var(--color-brand)"' : ''}>${t('f.all')}</a>`,
       ...cat.columns[0].links.map((l) => `<a class="chip" href="category.html?cat=${catKey}&amp;q=${encodeURIComponent(l)}" ${query === l ? 'aria-current="page" style="background:var(--color-brand);color:#fff;border-color:var(--color-brand)"' : ''}>${l}</a>`)].join('')
    : ''
}

/* ---------- Filter controls ---------- */
const form = document.querySelector('[data-filter-form]')
function renderFilterControls() {
  const widths = distinct('width').sort((a, b) => a - b)
  document.querySelector('[data-width-group]').hidden = widths.length < 2
  document.querySelector('[data-widths]').innerHTML = widths.map((w) => `<button type="button" class="chip" aria-pressed="${state.widths.has(String(w))}" data-toggle="widths" data-value="${w}">${w} cm</button>`).join('')

  document.querySelector('[data-colors]').innerHTML = distinct('color').map((c) => `
    <button type="button" class="swatch" style="background:${COLORS[c].hex}" aria-pressed="${state.colors.has(c)}" data-toggle="colors" data-value="${c}" aria-label="${COLORS[c].label}" title="${COLORS[c].label}"></button>`).join('')

  const checks = (key, values) => values.map((v) => `
    <label class="check"><input type="checkbox" ${state[key].has(v) ? 'checked' : ''} data-toggle="${key}" data-value="${v}" /><span>${v}</span>
      <span class="ms-auto text-[12px] text-muted">${all.filter((p) => p[key === 'materials' ? 'material' : 'style'] === v).length}</span></label>`).join('')
  document.querySelector('[data-materials]').innerHTML = checks('materials', distinct('material').sort())
  document.querySelector('[data-styles]').innerHTML = checks('styles', distinct('style').sort())

  const [minI, maxI] = form.querySelectorAll('[data-range] input')
  for (const i of [minI, maxI]) { i.min = bounds.min; i.max = bounds.max }
  minI.value = state.min
  maxI.value = state.max
  syncRange()
}

function syncRange() {
  const [minI, maxI] = form.querySelectorAll('[data-range] input')
  const span = bounds.max - bounds.min || 1
  const a = ((state.min - bounds.min) / span) * 100, b = ((state.max - bounds.min) / span) * 100
  const fill = form.querySelector('[data-range-fill]')
  fill.style.insetInlineStart = `${a}%`
  fill.style.width = `${b - a}%`
  form.querySelector('[data-range-min]').textContent = `${fmt(state.min)} ${t('cur')}`
  form.querySelector('[data-range-max]').textContent = `${fmt(state.max)} ${t('cur')}`
  minI.setAttribute('aria-valuetext', `${fmt(state.min)} ${t('cur')}`)
  maxI.setAttribute('aria-valuetext', `${fmt(state.max)} ${t('cur')}`)
}

form.addEventListener('click', (e) => {
  const b = e.target.closest('button[data-toggle]')
  if (!b) return
  const set = state[b.dataset.toggle]
  set.has(b.dataset.value) ? set.delete(b.dataset.value) : set.add(b.dataset.value)
  b.setAttribute('aria-pressed', String(set.has(b.dataset.value)))
  update()
})
form.addEventListener('change', (e) => {
  const el = e.target
  if (el.matches('input[type="checkbox"][data-toggle]')) {
    el.checked ? state[el.dataset.toggle].add(el.dataset.value) : state[el.dataset.toggle].delete(el.dataset.value)
  } else if (el.name === 'avail') {
    el.checked ? state.avail.add(el.value) : state.avail.delete(el.value)
  } else if (el.name === 'promo') {
    state.promo = el.checked
  } else if (el.type === 'range') {
    update()
    return
  }
  update()
})
form.addEventListener('input', (e) => {
  if (e.target.type !== 'range') return
  const [minI, maxI] = form.querySelectorAll('[data-range] input')
  let lo = Number(minI.value), hi = Number(maxI.value)
  if (lo > hi - 1000) { if (e.target === minI) lo = hi - 1000; else hi = lo + 1000 }
  minI.value = state.min = Math.max(bounds.min, lo)
  maxI.value = state.max = Math.min(bounds.max, hi)
  syncRange()
})

document.querySelector('[data-sort]').addEventListener('change', (e) => { state.sort = e.target.value; update() })

function clearAll() {
  Object.assign(state, { min: bounds.min, max: bounds.max, promo: false })
  for (const k of ['widths', 'colors', 'materials', 'styles', 'avail']) state[k].clear()
  form.querySelectorAll('input[type="checkbox"]').forEach((c) => { c.checked = false })
  renderFilterControls()
  update()
}
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-clear-filters]')) clearAll()
  const rm = e.target.closest('[data-remove-filter]')
  if (rm) {
    const [key, val] = rm.dataset.removeFilter.split(':')
    if (key === 'price') { state.min = bounds.min; state.max = bounds.max }
    else if (key === 'promo') { state.promo = false; form.querySelector('[name="promo"]').checked = false }
    else if (key === 'avail') { state.avail.delete(val); form.querySelector(`[name="avail"][value="${val}"]`).checked = false }
    else state[key].delete(val)
    renderFilterControls()
    update()
  }
})

function renderActiveFilters() {
  const chips = []
  const chip = (label, id) => `<button class="chip h-8! min-h-8! text-[13px]! ps-3! pe-2!" data-remove-filter="${id}" aria-label="${t('f.remove')}: ${escapeHTML(label)}">${escapeHTML(label)} ${icon('close', 14)}</button>`
  if (state.min > bounds.min || state.max < bounds.max) chips.push(chip(`${fmt(state.min)} – ${fmt(state.max)} ${t('cur')}`, 'price'))
  state.widths.forEach((w) => chips.push(chip(`${w} cm`, `widths:${w}`)))
  state.colors.forEach((c) => chips.push(chip(COLORS[c].label, `colors:${c}`)))
  state.materials.forEach((m) => chips.push(chip(m, `materials:${m}`)))
  state.styles.forEach((s) => chips.push(chip(s, `styles:${s}`)))
  state.avail.forEach((a) => chips.push(chip(t(a === 'online' ? 'f.online' : 'f.instore'), `avail:${a}`)))
  if (state.promo) chips.push(chip(t('f.promo'), 'promo'))
  if (chips.length) chips.push(`<button class="text-[13px] font-bold text-brand underline underline-offset-2 px-1" data-clear-filters>${t('f.clear')}</button>`)
  document.querySelectorAll('[data-active-filters]').forEach((el) => { el.innerHTML = chips.join('') })
}

/* ---------- Grid + load more ---------- */
const grid = document.querySelector('[data-grid]')
let renderToken = 0
async function renderGrid({ append = false } = {}) {
  const token = ++renderToken
  const list = applyFilters()
  document.querySelectorAll('[data-cat-count]').forEach((el) => { el.textContent = list.length })
  const visible = list.slice(0, state.shown)
  const from = append ? state.shown - PAGE : 0
  grid.setAttribute('aria-busy', 'true')
  if (append) grid.insertAdjacentHTML('beforeend', Array.from({ length: Math.min(PAGE, visible.length - from) }, cardSkeleton).join(''))
  else grid.innerHTML = Array.from({ length: Math.min(8, visible.length || 4) }, cardSkeleton).join('')
  await wait(append ? 420 : 180) // simulated network latency → skeleton loader
  if (token !== renderToken) return
  grid.removeAttribute('aria-busy')

  if (!list.length) {
    grid.innerHTML = `<div class="col-span-full text-center py-16">
      <p class="font-bold text-lg">${t(catKey === 'wishlist' ? 'wish.empty' : 'cat.none')}</p>
      ${catKey === 'wishlist' ? `<a class="btn btn-primary mt-4" href="category.html?cat=promotions">${t('hero1.cta')}</a>` : `<button class="btn btn-secondary mt-4" data-clear-filters>${t('f.clear')}</button>`}
    </div>`
  } else {
    grid.innerHTML = visible.map((p, i) => productCard(p, { eager: i < 4 })).join('')
    if (append) grid.children[from]?.querySelector('a')?.focus({ preventScroll: true })
  }
  const wrap = document.querySelector('[data-load-more-wrap]')
  wrap.hidden = list.length <= PAGE
  document.querySelector('[data-progress-text]').textContent = t('cat.progress', { n: Math.min(state.shown, list.length), total: list.length })
  document.querySelector('[data-progress-bar]').style.width = `${(Math.min(state.shown, list.length) / Math.max(1, list.length)) * 100}%`
  document.querySelector('[data-load-more]').hidden = state.shown >= list.length
}

document.querySelector('[data-load-more]').addEventListener('click', () => {
  state.shown += PAGE
  renderGrid({ append: true })
})

function update() {
  state.shown = PAGE
  renderActiveFilters()
  renderGrid()
}

/* ---------- Filters panel: drawer on mobile, sidebar on desktop ---------- */
const aside = document.querySelector('[data-filters]')
const desktop = matchMedia('(min-width: 64rem)')
const syncAside = () => {
  if (desktop.matches) { aside.inert = false; aside.removeAttribute('aria-hidden') }
  else if (!aside.classList.contains('is-open')) { aside.inert = true; aside.setAttribute('aria-hidden', 'true') }
}
desktop.addEventListener('change', syncAside)
syncAside()

renderHeader()
renderFilterControls()
update()

document.addEventListener('lang:change', () => { renderHeader(); syncRange(); renderActiveFilters(); renderGrid() })
document.addEventListener('wish:change', () => { if (catKey === 'wishlist') { all = baseList(); renderGrid() } })
