import { initApp } from '../app.js'
import { t } from '../core/i18n.js'
import { icon } from '../core/icons.js'
import { fmt, escapeHTML, monthly } from '../core/format.js'
import { cart } from '../core/state.js'
import { byId, COLORS, BEST_OFFERS } from '../data/products.js'
import { STORES } from '../data/stores.js'
import { img } from '../data/images.js'
import { productCard } from '../components/product-card.js'
import { initCarousel } from '../components/carousel.js'

initApp()

const WILAYAS = ['Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saïda', 'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', "M'Sila", 'Mascara', 'Ouargla', 'Oran', 'El Bayadh', 'Illizi', 'Bordj Bou Arréridj', 'Boumerdès', 'El Tarf', 'Tindouf', 'Tissemsilt', 'El Oued', 'Khenchela', 'Souk Ahras', 'Tipaza', 'Mila', 'Aïn Defla', 'Naâma', 'Aïn Témouchent', 'Ghardaïa', 'Relizane']
const PROMO = { code: 'ARIKA10', pct: 0.1, cap: 15000 }
const SHIP = { pickup: 0, home: 2500, assembly: 6900 }

const s = {
  step: 1,
  ship: (() => { try { return sessionStorage.getItem('elarika:ship') || 'home' } catch { return 'home' } })(),
  promo: '',
  store: STORES[0].id,
  details: {},
  pay: 'cib',
  order: null,
}

/* ---------- Totals ---------- */
function totals(lines = cart.lines()) {
  const items = lines.map((l) => ({ ...l, p: byId[l.id] })).filter((l) => l.p)
  const subtotal = items.reduce((n, l) => n + (l.unit ?? l.p.price) * l.qty, 0)
  const savings = items.reduce((n, l) => n + (l.p.old ? (l.p.old - l.p.price) * l.qty : 0), 0)
  const discount = s.promo === PROMO.code ? Math.min(PROMO.cap, Math.round(subtotal * PROMO.pct)) : 0
  const delivery = s.ship === 'pickup' ? 0 : subtotal >= 150000 ? 0 : SHIP.home
  const assembly = s.ship === 'assembly' ? SHIP.assembly : 0
  return { items, subtotal, savings, discount, delivery, assembly, total: Math.max(0, subtotal - discount + delivery + assembly) }
}
const sizeLabel = (s) => (/^d+$/.test(s) && Number(s) > 9 ? `${s} cm` : t(`size.${s}`))
const money = (n) => `${fmt(n)} ${t('cur')}`

/* ---------- Summary aside ---------- */
function renderSummary() {
  const T = totals()
  const rows = [
    [t('co.subtotal', { n: T.items.reduce((a, l) => a + l.qty, 0) }), money(T.subtotal)],
    T.savings ? [t('co.savings'), `<span class="text-success">−${money(T.savings)}</span>`] : null,
    T.discount ? [`${t('co.promo')} (${PROMO.code})`, `<span class="text-success">−${money(T.discount)}</span>`] : null,
    [t('co.delivery'), T.delivery ? money(T.delivery) : `<span class="text-success font-bold">${t('free')}</span>`],
    s.ship === 'assembly' ? [t('co.assembly'), money(T.assembly)] : null,
  ].filter(Boolean)
  document.querySelector('[data-summary-lines]').innerHTML = rows.map(([k, v]) => `<dt class="text-muted-strong">${k}</dt><dd class="text-end font-semibold">${v}</dd>`).join('') + `
    <dt class="pt-3 mt-1 border-t border-line font-extrabold text-lg">${t('co.total')}</dt>
    <dd class="pt-3 mt-1 border-t border-line text-end"><span class="price">${fmt(T.total)}<span class="cur">${t('cur')}</span></span></dd>
    <dd class="col-span-2 text-end finance-line">${t('card.finance', { n: fmt(monthly(T.total)) })}</dd>`

  const actions = document.querySelector('[data-summary-actions]')
  if (s.step === 4 || !T.items.length) { actions.innerHTML = ''; return }
  const label = { 1: t('co.next1'), 2: t('co.next2'), 3: t('co.next3') }[s.step]
  actions.innerHTML = `
    ${s.step === 1 ? `
      <form class="flex gap-2 mb-4" data-promo-form>
        <label class="sr-only" for="promo">${t('co.promoLabel')}</label>
        <input id="promo" class="input h-11! min-h-11! text-sm uppercase" placeholder="${t('co.promoPh')}" value="${escapeHTML(s.promo)}" />
        <button class="btn btn-ghost btn-sm">${t('co.apply')}</button>
      </form>
      <p class="text-[13px] -mt-2 mb-3" role="status" data-promo-status></p>` : ''}
    <button class="btn btn-primary btn-block" data-next>${label}</button>
    ${s.step > 1 ? `<button class="btn btn-ghost btn-block mt-2" data-back>${t('co.back')}</button>` : ''}`
}

/* ---------- Step 1: cart ---------- */
function stepCart() {
  const T = totals()
  if (!T.items.length) {
    return `<div class="rounded-card border border-line p-10 text-center">
      <span class="inline-grid place-items-center w-16 h-16 rounded-full bg-surface text-muted">${icon('cart', 30)}</span>
      <h1 class="h2 mt-4">${t('co.empty')}</h1>
      <p class="mt-2 text-muted-strong">${t('co.emptyText')}</p>
      <a class="btn btn-primary mt-6" href="category.html?cat=promotions">${t('hero1.cta')}</a>
    </div>`
  }
  return `
    <h1 class="h2">${t('co.title')} <span class="text-muted font-semibold text-lg">(${T.items.reduce((a, l) => a + l.qty, 0)})</span></h1>
    <ul class="mt-5 divide-y divide-line border-y border-line">
      ${T.items.map((l) => `
        <li class="py-5 grid grid-cols-[96px_1fr] sm:grid-cols-[132px_1fr_auto] gap-4">
          <a href="product.html?id=${l.id}" class="block rounded-input overflow-hidden aspect-[4/3]">${img(l.p.img, { w: 264, alt: escapeHTML(l.p.name), cls: 'w-full h-full object-cover' })}</a>
          <div class="min-w-0">
            <a href="product.html?id=${l.id}" class="font-bold hover:text-brand">${escapeHTML(l.p.name)}</a>
            <p class="text-[13px] text-muted">${escapeHTML(l.p.spec)}</p>
            <p class="text-[13px] mt-1">${l.color ? `${t('pdp.color')}: <b>${COLORS[l.color]?.label ?? l.color}</b>` : ''}${l.size ? ` · ${t('pdp.size')}: <b>${sizeLabel(l.size)}</b>` : ''}</p>
            <p class="text-[13px] mt-1 ${l.p.stock === 'out' ? 'text-brand' : 'text-success'} font-semibold">● ${t(l.p.stock === 'out' ? 'stock.order' : 'co.inStock')}</p>
            <div class="mt-3 flex items-center gap-3">
              <div class="flex items-center rounded-pill border border-line h-10" role="group" aria-label="${t('pdp.qty')}">
                <button class="w-9 h-full grid place-items-center hover:text-brand" data-dec="${l.key}" aria-label="${t('co.dec')}">${icon('minus', 16)}</button>
                <span class="w-8 text-center font-bold" aria-live="polite">${l.qty}</span>
                <button class="w-9 h-full grid place-items-center hover:text-brand" data-inc="${l.key}" aria-label="${t('co.inc')}">${icon('plus', 16)}</button>
              </div>
              <button class="inline-flex items-center gap-1 text-[13px] font-semibold text-muted hover:text-brand" data-remove="${l.key}">${icon('trash', 16)} ${t('co.remove')}</button>
            </div>
          </div>
          <div class="col-span-2 sm:col-span-1 sm:text-end">
            <span class="price text-[22px]!">${fmt((l.unit ?? l.p.price) * l.qty)}<span class="cur">${t('cur')}</span></span>
            ${l.qty > 1 ? `<p class="text-[12px] text-muted">${money(l.unit ?? l.p.price)} / ${t('co.unit')}</p>` : ''}
          </div>
        </li>`).join('')}
    </ul>
    <fieldset class="mt-8">
      <legend class="h3 mb-3">${t('pdp.delivery')}</legend>
      <div class="grid gap-2">
        ${[['pickup', 'ship.pickup', 'ship.pickup.d', 0], ['home', 'ship.home', T.subtotal >= 150000 ? 'co.freeOver' : 'co.homeD', T.subtotal >= 150000 ? 0 : SHIP.home], ['assembly', 'ship.assembly', 'ship.assembly.d', SHIP.assembly]].map(([v, k, d, price]) => `
          <label class="opt"><input type="radio" name="ship" value="${v}" ${s.ship === v ? 'checked' : ''} />
            <span class="flex-1"><span class="font-bold block">${t(k)}</span><span class="text-[13px] text-muted">${t(d)}</span></span>
            <span class="font-bold ${price ? '' : 'text-success'}">${price ? money(price) : t('free')}</span></label>`).join('')}
      </div>
      ${s.ship === 'pickup' ? `
        <label class="label mt-4" for="store">${t('co.store')}</label>
        <select id="store" class="input" data-store>${STORES.map((st) => `<option value="${st.id}" ${st.id === s.store ? 'selected' : ''}>${escapeHTML(st.name)} — ${st.city}</option>`).join('')}</select>` : ''}
    </fieldset>`
}

/* ---------- Step 2: delivery details ---------- */
function field(id, label, attrs = '', type = 'text') {
  return `<div><label class="label" for="${id}">${label}</label><input id="${id}" name="${id}" type="${type}" class="input" value="${escapeHTML(s.details[id] ?? '')}" ${attrs} /></div>`
}
function stepDelivery() {
  return `
    <h1 class="h2">${t('co.s2')}</h1>
    <form class="mt-6 grid gap-4" data-details novalidate>
      <div class="grid sm:grid-cols-2 gap-4">
        ${field('name', t('co.name'), 'required autocomplete="name"')}
        ${field('phone', t('co.phone'), 'required autocomplete="tel" inputmode="tel" pattern="^(\\+213|0)[5-7][0-9]{8}$" placeholder="0550 00 00 00"', 'tel')}
      </div>
      ${field('email', t('co.email'), 'required autocomplete="email"', 'email')}
      ${s.ship === 'pickup' ? `
        <div class="rounded-card bg-surface p-4 text-sm"><b>${t('co.pickupAt')}</b><br />${escapeHTML(STORES.find((x) => x.id === s.store).name)} — ${escapeHTML(STORES.find((x) => x.id === s.store).address)}</div>` : `
        <div class="grid sm:grid-cols-2 gap-4">
          <div><label class="label" for="wilaya">${t('co.wilaya')}</label>
            <select id="wilaya" name="wilaya" class="input" required><option value="">${t('co.choose')}</option>${WILAYAS.map((w, i) => `<option ${s.details.wilaya === w ? 'selected' : ''} value="${w}">${String(i + 1).padStart(2, '0')} — ${w}</option>`).join('')}</select></div>
          ${field('commune', t('co.commune'), 'required')}
        </div>
        ${field('address', t('co.address'), 'required autocomplete="street-address"')}
        <fieldset><legend class="label">${t('co.slot')}</legend>
          <div class="grid sm:grid-cols-2 gap-2">
            <label class="opt"><input type="radio" name="slot" value="am" ${s.details.slot !== 'pm' ? 'checked' : ''} /><span>${t('co.am')}</span></label>
            <label class="opt"><input type="radio" name="slot" value="pm" ${s.details.slot === 'pm' ? 'checked' : ''} /><span>${t('co.pm')}</span></label>
          </div>
        </fieldset>`}
      <div><label class="label" for="notes">${t('co.notes')}</label><textarea id="notes" name="notes" rows="3" class="input py-3">${escapeHTML(s.details.notes ?? '')}</textarea></div>
      <p class="text-sm font-semibold text-brand" role="alert" data-form-error></p>
    </form>`
}

/* ---------- Step 3: payment ---------- */
function stepPayment() {
  const T = totals()
  const opt = (v, title, desc, extra = '') => `
    <label class="opt"><input type="radio" name="pay" value="${v}" ${s.pay === v ? 'checked' : ''} />
      <span class="flex-1"><span class="font-bold block">${title}</span><span class="text-[13px] text-muted">${desc}</span>${extra}</span></label>`
  return `
    <h1 class="h2">${t('co.s3')}</h1>
    <form class="mt-6 grid gap-3" data-payment novalidate>
      ${opt('cib', t('pay.card'), t('pay.cardD'), s.pay === 'cib' ? `
        <span class="mt-4 grid sm:grid-cols-[1fr_120px_100px] gap-3">
          <span><span class="label">${t('pay.number')}</span><input class="input" inputmode="numeric" autocomplete="cc-number" placeholder="6280 •••• •••• ••••" required pattern="[0-9 ]{16,19}" /></span>
          <span><span class="label">${t('pay.exp')}</span><input class="input" autocomplete="cc-exp" placeholder="MM/YY" required pattern="(0[1-9]|1[0-2])/[0-9]{2}" /></span>
          <span><span class="label">CVV2</span><input class="input" inputmode="numeric" autocomplete="cc-csc" placeholder="•••" required pattern="[0-9]{3}" /></span>
        </span>` : '')}
      ${opt('cod', t('pay.cod'), t('pay.codD'))}
      ${opt('installments', t('pay.inst'), t('pay.instD', { n: fmt(monthly(T.total)) }))}
      <label class="check mt-3"><input type="checkbox" required data-terms /><span>${t('pay.terms')}</span></label>
      <p class="text-sm font-semibold text-brand" role="alert" data-form-error></p>
      <p class="text-[12px] text-muted">${t('pay.demo')}</p>
    </form>`
}

/* ---------- Step 4: confirmation ---------- */
function stepDone() {
  const o = s.order
  return `
    <div class="rounded-card border border-line p-8 lg:p-12 text-center">
      <span class="inline-grid place-items-center w-16 h-16 rounded-full bg-brand text-white">${icon('check', 32)}</span>
      <h1 class="h2 mt-5">${t('co.thanks')}</h1>
      <p class="mt-2 text-muted-strong">${t('co.orderNo')} <b class="text-ink">${o.no}</b></p>
      <p class="mt-1 text-muted-strong">${t(o.ship === 'pickup' ? 'co.doneP' : 'co.doneH')}</p>
      <div class="mt-6 flex flex-wrap justify-center gap-3">
        <a class="btn btn-primary" href="index.html">${t('co.continue')}</a>
        <a class="btn btn-secondary" href="stores.html">${t('util.store')}</a>
      </div>
    </div>`
}

/* ---------- Render & navigation ---------- */
const view = document.querySelector('[data-step-view]')
function render(focus = false) {
  document.querySelectorAll('[data-step]').forEach((li) => {
    const n = Number(li.dataset.step)
    li.classList.toggle('is-done', n < s.step)
    li.classList.toggle('is-current', n === s.step)
    if (n === s.step) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current')
  })
  view.innerHTML = { 1: stepCart, 2: stepDelivery, 3: stepPayment, 4: stepDone }[s.step]()
  renderSummary()
  document.querySelector('[data-reco]').hidden = s.step > 1
  if (focus) { view.querySelector('h1')?.setAttribute('tabindex', '-1'); view.querySelector('h1')?.focus(); scrollTo({ top: 0, behavior: 'smooth' }) }
}

function validate(form) {
  const err = form.querySelector('[data-form-error]')
  const bad = [...form.querySelectorAll('input, select, textarea')].find((el) => !el.checkValidity())
  if (bad) {
    err.textContent = t('co.fix')
    bad.focus()
    form.querySelectorAll('input, select').forEach((el) => el.setAttribute('aria-invalid', String(!el.checkValidity())))
    return false
  }
  err.textContent = ''
  return true
}

document.addEventListener('click', (e) => {
  const key = (a) => e.target.closest(`[${a}]`)?.getAttribute(a)
  const inc = key('data-inc'), dec = key('data-dec'), rm = key('data-remove')
  if (inc || dec) {
    const k = inc || dec
    const line = cart.lines().find((l) => l.key === k)
    if (line) cart.setQty(k, line.qty + (inc ? 1 : -1))
  }
  if (rm) cart.remove(rm)
  if (e.target.closest('[data-back]')) { s.step--; render(true) }
  if (e.target.closest('[data-next]')) {
    if (s.step === 2) {
      const f = view.querySelector('[data-details]')
      if (!validate(f)) return
      s.details = Object.fromEntries(new FormData(f))
    }
    if (s.step === 3) {
      const f = view.querySelector('[data-payment]')
      if (!validate(f)) return
      s.order = { no: `EA-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 900000) + 100000)}`, ship: s.ship }
      cart.clear()
    }
    s.step++
    render(true)
  }
})
document.addEventListener('change', (e) => {
  if (e.target.name === 'ship') { s.ship = e.target.value; render() }
  if (e.target.name === 'pay') { s.pay = e.target.value; render(); view.querySelector(`[value="${s.pay}"]`).focus() }
  if (e.target.matches('[data-store]')) s.store = e.target.value
})
document.addEventListener('submit', (e) => {
  if (!e.target.matches('[data-promo-form]')) return
  e.preventDefault()
  const code = e.target.querySelector('input').value.trim().toUpperCase()
  s.promo = code === PROMO.code ? code : ''
  renderSummary()
  const st = document.querySelector('[data-promo-status]')
  st.textContent = code === PROMO.code ? t('co.promoOk') : t('co.promoBad')
  st.className = `text-[13px] -mt-2 mb-3 font-semibold ${code === PROMO.code ? 'text-success' : 'text-brand'}`
})
document.addEventListener('cart:change', () => { if (s.step === 1) render() })
document.addEventListener('lang:change', () => { render(); renderReco() })

function renderReco() {
  document.querySelector('[data-reco-track]').innerHTML = BEST_OFFERS.map((p) => productCard(p)).join('')
  initCarousel(document.querySelector('[data-reco] [data-carousel]'))
}

render()
renderReco()
