import { initApp } from '../app.js'
import { byId, PRODUCTS } from '../data/products.js'
import { CATEGORIES } from '../data/categories.js'
import { img } from '../data/images.js'
import { t } from '../core/i18n.js'
import { productCard, cardSkeleton, badgeHTML } from '../components/product-card.js'
import { initCarousel } from '../components/carousel.js'
import { initCountdowns, toast } from '../components/widgets.js'
import { Container, Button, enhanceGlass } from '../components/liquid-glass.js'

initApp()

/* Colour tokens read straight from the CSS variables, so this page never drifts. */
const TOKENS = ['brand', 'brand-dark', 'accent', 'accent-2', 'promo', 'trust', 'ink', 'muted', 'line', 'surface']
const css = getComputedStyle(document.documentElement)
document.querySelector('[data-swatches]').innerHTML = TOKENS.map((k) => {
  const v = css.getPropertyValue(`--color-${k}`).trim()
  return `<li class="rounded-card border border-line overflow-hidden"><div class="h-20" style="background:var(--color-${k})"></div>
    <div class="p-3 text-[13px]"><b class="block">--color-${k}</b><span class="text-muted uppercase">${v}</span></div></li>`
}).join('')

/* Button state matrix — states are forced with modifier classes for documentation. */
const variants = [['Primary', 'btn-primary', ''], ['Secondary', 'btn-secondary', ''], ['Ghost', 'btn-ghost', ''], ['White on red', 'btn-white', 'bg-brand on-red']]
document.querySelector('[data-button-matrix]').innerHTML = variants.map(([label, cls, cell]) => `
  <tr class="border-t border-line">
    <th class="text-start py-4 font-bold">${label}</th>
    ${['', 'is-hover', 'is-focus', 'is-active', 'is-disabled'].map((st) => `<td class="text-center p-3 ${cell}"><button class="btn btn-sm ${cls} ${st}" ${st === 'is-disabled' ? 'disabled' : ''}>Add to cart</button></td>`).join('')}
  </tr>`).join('')

document.querySelector('[data-badges]').innerHTML = [
  '<span class="badge badge-red">-40%</span>', badgeHTML('new'), badgeHTML('promo'), badgeHTML('best'), badgeHTML('delivery'), badgeHTML('assembly'), '<span class="badge badge-outline">Last pieces</span>',
].join('')

/* Product card states */
const base = byId['sofas-0']
const oos = PRODUCTS.find((p) => p.stock === 'out')
document.querySelector('[data-card-states]').innerHTML = [
  ['Default', productCard(base)],
  ['Hover (lift, image swap, CTA)', productCard(byId['kitchens-3'], { cta: 'cart' }).replace('class="p-card', 'class="p-card is-hover')],
  ['Out of stock', productCard(oos)],
  ['Skeleton (loading)', cardSkeleton()],
].map(([label, html]) => `<figure><figcaption class="text-[13px] font-bold mb-2">${label}</figcaption>${html}</figure>`).join('')

document.querySelector('[data-tiles]').innerHTML = CATEGORIES.slice(0, 4).map((c, i) => `
  <li><a class="cat-tile${i === 1 ? ' is-hover' : ''}" href="category.html?cat=${c.cat}">
    <span class="cat-tile__img">${img(c.img, { w: 160, ratio: 1, alt: '' })}</span><span>${t(c.i18n)}${i === 1 ? ' (hover)' : ''}</span></a></li>`).join('')

/* Static copy of the kitchens mega-menu panel */
const mega = document.getElementById('mega-kitchens')
if (mega) {
  const clone = mega.cloneNode(true)
  clone.removeAttribute('id')
  clone.hidden = false
  clone.classList.remove('mega-panel')
  const preview = document.querySelector('[data-mega-preview]')
  preview.classList.add('overflow-x-auto')
  clone.firstElementChild.classList.add('min-w-[1000px]')
  preview.appendChild(clone)
  enhanceGlass(preview)
}

document.querySelector('[data-carousel-demo]').innerHTML = PRODUCTS.filter((p) => p.cat === 'dining').slice(0, 8).map((p) => productCard(p)).join('')
initCarousel(document.querySelector('#carousel [data-carousel]'))
initCountdowns()

/* Liquid glass — built with the JS API (mirrors the liquid-glass-js README examples). */
const host = document.querySelector('[data-glass-demo]')
const nav = new Container({ type: 'rounded', borderRadius: 20, tintOpacity: 0.12 })
nav.element.classList.add('flex', 'gap-2', 'p-2')
;['Home', 'Offers', 'Stores'].forEach((text) => {
  nav.addChild(new Button({ text, size: 16, type: 'pill', onClick: (txt) => toast(`Glass button “${txt}” clicked`) }))
})
const panel = new Container({ type: 'pill', tintOpacity: 0.3 })
panel.element.classList.add('flex', 'items-center', 'gap-3', 'p-2', 'pe-6')
panel.addChild(new Button({ text: '▶', size: 22, type: 'circle', warp: true }))
const label = document.createElement('span')
label.className = 'font-bold text-ink'
label.textContent = 'Container + circle Button (warp)'
panel.addChild(label)
const big = new Button({ text: 'Shop the offers', size: 26, type: 'rounded', tintOpacity: 0.25, warp: true, onClick: () => { location.href = 'category.html?cat=promotions' } })
host.append(nav.element, panel.element, big.element)
