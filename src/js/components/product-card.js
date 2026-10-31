import { icon } from '../core/icons.js'
import { t } from '../core/i18n.js'
import { priceHTML, monthly, fmt, escapeHTML } from '../core/format.js'
import { img } from '../data/images.js'
import { discountPct } from '../data/products.js'
import { wishlist } from '../core/state.js'

const BADGE = {
  new: ['badge-new', 'badge.new'],
  promo: ['badge-promo', 'badge.promo'],
  best: ['badge-promo', 'badge.best'],
  delivery: ['badge-trust', 'badge.delivery'],
  assembly: ['badge-success', 'badge.assembly'],
}

export const badgeHTML = (b) => `<span class="badge ${BADGE[b][0]}">${t(BADGE[b][1])}</span>`

/**
 * Product card.
 * @param {import('../data/products.js').Product} p
 * @param {{ cta?: 'cart'|'discover', eager?: boolean }} [opts]
 */
export function productCard(p, { cta = 'cart', eager = false } = {}) {
  const pct = discountPct(p)
  const oos = p.stock === 'out'
  const href = `product.html?id=${encodeURIComponent(p.id)}`
  const wished = wishlist.has(p.id)
  const badges = oos
    ? `<span class="badge badge-new">${t('card.oosBadge')}</span>`
    : [pct ? `<span class="badge badge-red">-${pct}%</span>` : '', ...p.badges.slice(0, 2).map(badgeHTML)].join('')
  const name = escapeHTML(p.name)
  return `
  <article class="p-card${oos ? ' is-oos' : ''}" data-product="${p.id}">
    <div class="p-card__media">
      ${img(p.img, { w: 480, alt: name, eager })}
      ${img(p.img2, { w: 480, alt: '', cls: 'img-alt' })}
      <div class="p-card__badges">${badges}</div>
      <div class="p-card__wish">
        <button class="wish-btn glass-button glass-button-circle glass-white" data-wish="${p.id}" aria-pressed="${wished}" aria-label="${t('card.wish')}: ${name}">${icon('heart', 20)}</button>
      </div>
    </div>
    <div class="p-card__body">
      <h3 class="p-card__name"><a href="${href}">${name}</a></h3>
      <p class="p-card__spec">${escapeHTML(p.spec)}</p>
      <div class="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
        ${priceHTML(p.price)}
        ${p.old ? `<span class="price-old"><span class="sr-only">${t('card.was')} </span>${fmt(p.old)} ${t('cur')}</span>` : ''}
        ${pct ? `<span class="discount-pill">-${pct}%</span>` : ''}
      </div>
      <p class="finance-line">${t('card.finance', { n: fmt(monthly(p.price)) })}</p>
      <div class="flex items-center gap-1 text-[13px] text-muted">
        <span class="stars" style="--pct:${(p.rating / 5) * 100}%" aria-hidden="true">★★★★★</span>
        <span><span class="sr-only">${t('card.rating', { r: p.rating })} </span>(${p.reviews})</span>
      </div>
      <div class="p-card__cta">
        ${oos
          ? `<a class="btn btn-ghost btn-block btn-sm" href="${href}">${t('card.oos')}</a>`
          : cta === 'cart'
            ? `<button class="btn btn-primary btn-block btn-sm" data-add-to-cart="${p.id}">${icon('cart', 18)}<span>${t('card.add')}</span></button>`
            : `<a class="btn btn-secondary btn-block btn-sm" href="${href}">${t('card.discover')}</a>`}
      </div>
    </div>
  </article>`
}

/** Skeleton placeholder with the same footprint as a product card. */
export function cardSkeleton() {
  return `
  <div class="p-card" aria-hidden="true">
    <div class="p-card__media skeleton" style="border-radius:0"></div>
    <div class="p-card__body">
      <div class="skeleton h-4 w-4/5"></div>
      <div class="skeleton h-4 w-2/5"></div>
      <div class="skeleton h-3 w-3/5 mt-1"></div>
      <div class="skeleton h-7 w-1/2 mt-2"></div>
      <div class="skeleton h-3 w-2/3"></div>
    </div>
  </div>`
}
