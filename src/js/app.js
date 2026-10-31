/**
 * Shared runtime loaded by every page: header (utility bar, search, mega-menu,
 * mobile drawer), cart & wishlist wiring, newsletter, cookie consent,
 * liquid-glass enhancement and lazy WebGL islands.
 */
import '../styles/main.css'
import { t, setLang, getLang, applyI18n } from './core/i18n.js'
import { icon } from './core/icons.js'
import { cart, wishlist } from './core/state.js'
import { CATEGORIES } from './data/categories.js'
import { PRODUCTS, byId } from './data/products.js'
import { img, imgUrl } from './data/images.js'
import { priceHTML, escapeHTML } from './core/format.js'
import { enhanceGlass } from './components/liquid-glass.js'
import { toast } from './components/widgets.js'
import { mountIslands } from '../islands/mount.js'

export const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------------- Mega menu (desktop) ---------------- */
function renderMegaMenu() {
  const list = document.querySelector('[data-mega-list]')
  if (!list) return
  mega.current = null
  list.innerHTML = CATEGORIES.map((c) => `
    <li class="static">
      <button class="mega-trigger${c.isPromo ? ' is-promo' : ''}" aria-expanded="false" aria-controls="mega-${c.cat}" data-mega-trigger>
        ${c.isPromo ? icon('tag', 16) : ''}<span>${t(c.i18n)}</span>
      </button>
      <div id="mega-${c.cat}" class="mega-panel" hidden>
        <div class="container-x grid grid-cols-[1fr_340px] gap-10 py-8">
          <div>
            <div class="grid grid-cols-4 gap-8">
              ${c.columns.map((col) => `
                <div>
                  <p class="font-bold mb-3">${col.title}</p>
                  <ul class="grid gap-2 text-[14px] text-muted-strong">
                    ${col.links.map((l) => `<li><a class="hover:text-brand" href="category.html?cat=${c.cat}&amp;q=${encodeURIComponent(l)}">${l}</a></li>`).join('')}
                  </ul>
                </div>`).join('')}
            </div>
            <a class="link-red mt-6" href="category.html?cat=${c.cat}">${t('mega.all', { c: t(c.i18n) })} ${icon('arrowRight', 16)}</a>
          </div>
          <a href="category.html?cat=${c.cat}" class="group relative block rounded-card overflow-hidden aspect-[4/3]">
            ${img(c.promo.img, { w: 680, alt: '', cls: 'absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' })}
            <span class="absolute top-3 start-3 badge badge-promo">${t('badge.promo')}</span>
            <span class="absolute inset-x-3 bottom-3 p-3 flex items-end justify-between gap-2" data-glass data-glass-radius="14" data-glass-tint=".7">
              <span><span class="block font-bold text-sm">${escapeHTML(c.promo.title)}</span><span class="text-[12px] font-semibold">${t('hero.from')}</span> ${priceHTML(c.promo.price)}</span>
              <span class="grid place-items-center w-10 h-10 rounded-full bg-brand text-white shrink-0">${icon('arrowRight', 18)}</span>
            </span>
          </a>
        </div>
      </div>
    </li>`).join('')

  list.querySelectorAll('[data-mega-trigger]').forEach((btn) => {
    btn.addEventListener('click', () => (btn.getAttribute('aria-expanded') === 'true' ? megaClose(btn) : megaOpen(btn)))
    btn.parentElement.addEventListener('pointerenter', (e) => {
      if (e.pointerType !== 'mouse') return
      clearTimeout(mega.closeTimer); clearTimeout(mega.openTimer)
      mega.openTimer = setTimeout(() => megaOpen(btn), mega.current ? 0 : 90)
    })
  })
  const nav = list.closest('[data-mega]')
  if (nav._bound) return
  nav._bound = true
  nav.addEventListener('pointerleave', () => { clearTimeout(mega.openTimer); mega.closeTimer = setTimeout(() => megaClose(), 140) })
  nav.addEventListener('pointerenter', () => clearTimeout(mega.closeTimer))
  nav.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mega.current) { const b = mega.current; megaClose(); b.focus() }
  })
  nav.addEventListener('focusout', (e) => { if (!nav.contains(e.relatedTarget)) megaClose() })
}

const mega = { current: null, openTimer: 0, closeTimer: 0 }
function megaOpen(btn) {
  if (mega.current && mega.current !== btn) megaClose(mega.current)
  const panel = document.getElementById(btn.getAttribute('aria-controls'))
  btn.setAttribute('aria-expanded', 'true')
  panel.hidden = false
  enhanceGlass(panel)
  mega.current = btn
}
function megaClose(btn = mega.current) {
  if (!btn || !btn.isConnected) { mega.current = null; return }
  btn.setAttribute('aria-expanded', 'false')
  document.getElementById(btn.getAttribute('aria-controls')).hidden = true
  if (btn === mega.current) mega.current = null
}

/* ---------------- Mobile drawer navigation (accordions) ---------------- */
function renderMobileNav() {
  const host = document.querySelector('[data-mobile-nav]')
  if (!host) return
  host.innerHTML = CATEGORIES.map((c) => `
    <div class="border-b border-line">
      <button class="acc-btn${c.isPromo ? ' text-brand' : ''}" aria-expanded="false" aria-controls="m-${c.cat}">
        <span class="flex items-center gap-3">${img(c.img, { w: 80, ratio: 1, alt: '', cls: 'w-9 h-9 rounded-full object-cover' })}<span>${t(c.i18n)}</span></span>${icon('chevDown', 20)}
      </button>
      <div id="m-${c.cat}" class="pb-3 ps-12" hidden>
        <a class="block py-2 font-bold text-brand" href="category.html?cat=${c.cat}">${t('mega.all', { c: t(c.i18n) })}</a>
        ${c.columns.flatMap((col) => col.links.slice(0, 3)).map((l) => `<a class="block py-2 text-[14px]" href="category.html?cat=${c.cat}&amp;q=${encodeURIComponent(l)}">${l}</a>`).join('')}
      </div>
    </div>`).join('')
  if (host._bound) return
  host._bound = true
  host.addEventListener('click', (e) => {
    const b = e.target.closest('.acc-btn')
    if (!b) return
    const on = b.getAttribute('aria-expanded') !== 'true'
    b.setAttribute('aria-expanded', String(on))
    document.getElementById(b.getAttribute('aria-controls')).hidden = !on
  })
}

/* ---------------- Drawers (nav, filters) ---------------- */
export function initDrawers() {
  const scrim = document.querySelector('[data-scrim]')
  let openDrawer = null, opener = null
  const close = () => {
    if (!openDrawer) return
    openDrawer.classList.remove('is-open')
    openDrawer.setAttribute('aria-hidden', 'true')
    openDrawer.inert = true
    scrim?.classList.remove('is-open')
    document.body.style.overflow = ''
    opener?.setAttribute('aria-expanded', 'false')
    opener?.focus()
    openDrawer = null
  }
  document.addEventListener('click', (e) => {
    const o = e.target.closest('[data-drawer-open]')
    if (o) {
      const d = document.getElementById(o.dataset.drawerOpen)
      opener = o
      openDrawer = d
      d.inert = false
      d.setAttribute('aria-hidden', 'false')
      d.classList.add('is-open')
      scrim?.classList.add('is-open')
      o.setAttribute('aria-expanded', 'true')
      document.body.style.overflow = 'hidden'
      d.querySelector('button, a, input')?.focus()
      return
    }
    if (e.target.closest('[data-drawer-close]') || e.target === scrim) close()
  })
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close() })
}

/* ---------------- Search with live suggestions ---------------- */
function initSearch() {
  document.querySelectorAll('[data-search]').forEach((form) => {
    const input = form.querySelector('input')
    const box = form.querySelector('[role="listbox"]')
    const params = new URLSearchParams(location.search)
    if (params.get('q')) input.value = params.get('q')
    if (!box) return
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase()
      if (q.length < 2) { box.hidden = true; input.setAttribute('aria-expanded', 'false'); return }
      const cats = CATEGORIES.filter((c) => t(c.i18n).toLowerCase().includes(q)).slice(0, 3)
      const prods = PRODUCTS.filter((p) => p.name.toLowerCase().includes(q)).slice(0, 5)
      box.innerHTML = [
        ...cats.map((c) => `<a role="option" class="flex items-center gap-3 px-4 py-2.5 hover:bg-surface font-bold" href="category.html?cat=${c.cat}">${icon('search', 16)}${t(c.i18n)}</a>`),
        ...prods.map((p) => `<a role="option" class="flex items-center gap-3 px-4 py-2 hover:bg-surface" href="product.html?id=${p.id}">
            ${img(p.img, { w: 96, alt: '', cls: 'w-12 h-9 rounded object-cover' })}
            <span class="flex-1 text-sm font-semibold">${escapeHTML(p.name)}</span>${priceHTML(p.price, 'text-base!')}</a>`),
      ].join('') || `<p class="px-4 py-3 text-sm text-muted">${t('search.none')}</p>`
      box.hidden = false
      input.setAttribute('aria-expanded', 'true')
    })
    form.addEventListener('focusout', (e) => { if (!form.contains(e.relatedTarget)) { box.hidden = true; input.setAttribute('aria-expanded', 'false') } })
    input.addEventListener('keydown', (e) => {
      const opts = [...box.querySelectorAll('[role="option"]')]
      if (e.key === 'ArrowDown' && opts.length) { e.preventDefault(); opts[0].focus() }
      if (e.key === 'Escape') box.hidden = true
    })
    box.addEventListener('keydown', (e) => {
      const opts = [...box.querySelectorAll('[role="option"]')]
      const i = opts.indexOf(document.activeElement)
      if (e.key === 'ArrowDown') { e.preventDefault(); opts[Math.min(i + 1, opts.length - 1)].focus() }
      if (e.key === 'ArrowUp') { e.preventDefault(); i <= 0 ? input.focus() : opts[i - 1].focus() }
    })
  })
}

/* ---------------- Utility bar rotating messages ---------------- */
function initUtilityBar() {
  const el = document.querySelector('[data-utility-rotator] span')
  if (!el || reducedMotion) return
  const keys = ['util.1', 'util.2', 'util.3']
  let i = 0
  setInterval(() => {
    i = (i + 1) % keys.length
    el.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(-6px)' }], { duration: 180 }).onfinish = () => {
      el.dataset.i18n = keys[i]
      el.textContent = t(keys[i])
      el.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 220 })
    }
  }, 4200)
}

/* ---------------- Cart & wishlist badges + global actions ---------------- */
function syncBadges(bump = false) {
  const c = cart.count(), w = wishlist.count()
  document.querySelectorAll('[data-cart-count]').forEach((b) => {
    b.textContent = c
    b.hidden = c === 0
    if (bump && !reducedMotion) b.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.5)' }, { transform: 'scale(.9)' }, { transform: 'scale(1)' }], { duration: 450, easing: 'cubic-bezier(.22,1,.36,1)' })
  })
  document.querySelectorAll('[data-wish-count]').forEach((b) => { b.textContent = w; b.hidden = w === 0 })
}

function initGlobalActions() {
  document.addEventListener('click', (e) => {
    const add = e.target.closest('[data-add-to-cart]')
    if (add) {
      const p = byId[add.dataset.addToCart]
      if (!p) return
      cart.add(p.id, { unit: p.price })
      toast(`<span class="block">${t('toast.added')}</span><span class="text-muted font-medium">${escapeHTML(p.name)}</span>`, { action: { href: 'cart.html', label: t('toast.view') } })
      return
    }
    const wish = e.target.closest('[data-wish]')
    if (wish) {
      const on = wishlist.toggle(wish.dataset.wish)
      document.querySelectorAll(`[data-wish="${wish.dataset.wish}"]`).forEach((b) => b.setAttribute('aria-pressed', String(on)))
    }
    const lang = e.target.closest('[data-lang-switch]')
    if (lang && lang.dataset.langSwitch !== getLang()) setLang(lang.dataset.langSwitch)
  })
  document.addEventListener('cart:change', (e) => syncBadges(!!e.detail?.added))
  document.addEventListener('wish:change', () => syncBadges())
  syncBadges()
}

/* ---------------- Newsletter, cookies, footer ---------------- */
function initFooter() {
  document.querySelectorAll('[data-newsletter]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const input = form.querySelector('input')
      const status = form.querySelector('[data-nl-status]')
      if (!input.checkValidity()) { status.textContent = t('nl.invalid'); status.className = 'sm:basis-full text-sm font-semibold text-brand'; input.focus(); return }
      status.textContent = t('nl.ok')
      status.className = 'sm:basis-full text-sm font-semibold text-success'
      form.reset()
    })
  })
  document.querySelectorAll('[data-footer-col] .acc-btn').forEach((b) => b.addEventListener('click', () => {
    const col = b.closest('[data-footer-col]')
    col.classList.toggle('is-open')
    b.setAttribute('aria-expanded', String(col.classList.contains('is-open')))
  }))
  document.querySelectorAll('[data-year]').forEach((y) => { y.textContent = new Date().getFullYear() })

  const banner = document.querySelector('[data-cookie]')
  if (!banner) return
  let consent = null
  try { consent = localStorage.getItem('elarika:cookies') } catch { /* ignore */ }
  if (!consent) setTimeout(() => { banner.hidden = false; enhanceGlass(banner) }, 1200)
  banner.addEventListener('click', (e) => {
    const b = e.target.closest('[data-cookie-accept]')
    if (!b) return
    try { localStorage.setItem('elarika:cookies', b.dataset.cookieAccept) } catch { /* ignore */ }
    banner.hidden = true
  })
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-cookie-open]')) { banner.hidden = false; enhanceGlass(banner); banner.querySelector('button').focus() }
  })
}

/* ---------------- Sticky header state ---------------- */
function initStickyHeader() {
  const h = document.querySelector('.site-header')
  if (!h) return
  const onScroll = () => h.classList.toggle('is-scrolled', scrollY > 40)
  addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}

/**
 * Static <img data-src="photoKey" data-w="1200" data-ratio=".66"> → responsive
 * CDN URLs (AVIF/WebP via auto=format) with a 2x srcset.
 */
export function hydrateImages(root = document) {
  root.querySelectorAll('img[data-src]').forEach((im) => {
    const key = im.dataset.src
    const w = Number(im.dataset.w) || 1400
    const ratio = Number(im.dataset.ratio) || 0.62
    im.src = imgUrl(key, w, Math.round(w * ratio))
    im.srcset = `${imgUrl(key, w, Math.round(w * ratio))} 1x, ${imgUrl(key, w * 2, Math.round(w * 2 * ratio), 60)} 2x`
    im.decoding = 'async'
    if (!im.hasAttribute('loading')) im.loading = 'lazy'
    im.removeAttribute('data-src')
  })
}

/** Call once per page (each page module imports and runs this first). */
export function initApp() {
  hydrateImages()
  renderMegaMenu()
  renderMobileNav()
  initDrawers()
  initSearch()
  initUtilityBar()
  initGlobalActions()
  initFooter()
  initStickyHeader()
  setLang(getLang())
  enhanceGlass()
  mountIslands()
  document.addEventListener('lang:change', () => { renderMegaMenu(); renderMobileNav(); applyI18n() })
}
