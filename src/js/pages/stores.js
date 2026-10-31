import { initApp } from '../app.js'
import { t } from '../core/i18n.js'
import { icon } from '../core/icons.js'
import { escapeHTML } from '../core/format.js'
import { STORES, directionsUrl, mapEmbedUrl, distanceKm } from '../data/stores.js'

initApp()

const params = new URLSearchParams(location.search)
const input = document.querySelector('#sl-q')
input.value = params.get('city') ?? ''
let selected = null
let origin = null

const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

function openNow(s) {
  const now = new Date()
  const [o, c] = (now.getDay() === 5 ? s.hours.fri : s.hours.week).split(' – ').map((x) => { const [h, m] = x.split(':').map(Number); return h * 60 + m })
  const mins = now.getHours() * 60 + now.getMinutes()
  return mins >= o && mins < c
}

function list() {
  const q = norm(input.value.trim())
  // City/name matches win; the address is only a fallback ("Oran" ≠ "Route d’Oran, Mostaganem").
  const byCity = STORES.filter((s) => norm(`${s.city} ${s.name}`).includes(q))
  let out = !q ? STORES : byCity.length ? byCity : STORES.filter((s) => norm(s.address).includes(q))
  if (origin) out = out.map((s) => ({ ...s, km: distanceKm(origin, s) })).sort((a, b) => a.km - b.km)
  return out
}

function render() {
  const stores = list()
  document.querySelector('[data-store-count]').textContent = stores.length
  if (!selected || !stores.some((s) => s.id === selected)) selected = stores[0]?.id ?? null
  document.querySelector('[data-store-list]').innerHTML = stores.length ? stores.map((s) => {
    const open = openNow(s)
    return `
    <li>
      <article class="rounded-card border ${s.id === selected ? 'border-brand shadow-[inset_0_0_0_1px_var(--color-brand)] bg-[#fff7f7]' : 'border-line bg-white'} p-4 transition-colors">
        <div class="flex items-start justify-between gap-3">
          <h3 class="font-bold"><button class="text-start hover:text-brand" data-select="${s.id}" aria-pressed="${s.id === selected}">${escapeHTML(s.name)}</button></h3>
          ${s.km != null ? `<span class="badge badge-outline">${Math.round(s.km)} km</span>` : s.flagship ? `<span class="badge badge-red">${t('sl.flagship')}</span>` : ''}
        </div>
        <p class="text-sm text-muted-strong mt-1">${escapeHTML(s.address)}</p>
        <p class="text-sm mt-2 flex items-center gap-1.5"><span class="${open ? 'text-success' : 'text-brand'} font-bold">● ${t(open ? 'sl.open' : 'sl.closed')}</span><span class="text-muted">· ${t('sl.week')} ${s.hours.week} · ${t('sl.fri')} ${s.hours.fri}</span></p>
        <ul class="mt-2 flex flex-wrap gap-1.5">${s.services.map((x) => `<li class="badge badge-trust normal-case! tracking-normal! font-semibold!">${x}</li>`).join('')}</ul>
        <div class="mt-3 flex flex-wrap gap-2">
          <a class="btn btn-primary btn-sm" href="${directionsUrl(s)}" target="_blank" rel="noopener">${icon('pin', 16)}${t('sl.directions')}</a>
          <a class="btn btn-ghost btn-sm" href="tel:${s.phone.replace(/\s/g, '')}">${icon('phone', 16)}${s.phone}</a>
        </div>
      </article>
    </li>`
  }).join('') : `<li class="rounded-card border border-line p-6 text-center text-muted-strong">${t('sl.none')}</li>`
  renderMap()
}

function renderMap() {
  const s = STORES.find((x) => x.id === selected)
  const map = document.querySelector('[data-map]')
  const card = document.querySelector('[data-map-card]')
  card.hidden = !s
  if (!s) return
  const src = mapEmbedUrl(s)
  if (map.src !== src) map.src = src
  map.title = t('sl.mapOf', { n: s.name })
  card.innerHTML = `
    <p class="text-[12px] font-bold uppercase tracking-wider text-brand">${escapeHTML(s.city)}</p>
    <p class="font-bold">${escapeHTML(s.name)}</p>
    <p class="text-sm">${escapeHTML(s.address)}</p>
    <a class="link-red text-sm mt-2" href="${directionsUrl(s)}" target="_blank" rel="noopener">${t('sl.directions')} ${icon('arrowRight', 14)}</a>`
}

document.querySelector('[data-store-list]').addEventListener('click', (e) => {
  const b = e.target.closest('[data-select]')
  if (!b) return
  selected = b.dataset.select
  render()
  document.querySelector(`[data-select="${selected}"]`)?.focus()
})
input.addEventListener('input', render)
document.querySelector('[data-store-search]').addEventListener('submit', (e) => { e.preventDefault(); render() })

document.querySelector('[data-locate]').addEventListener('click', () => {
  const status = document.querySelector('[data-geo-status]')
  if (!navigator.geolocation) { status.textContent = t('sl.geoNo'); return }
  status.textContent = t('sl.geoWait')
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      origin = { lat: pos.coords.latitude, lng: pos.coords.longitude }
      input.value = ''
      selected = null
      status.textContent = t('sl.geoOk')
      render()
    },
    () => { status.textContent = t('sl.geoNo') },
    { timeout: 8000 },
  )
})

render()
document.addEventListener('lang:change', render)
