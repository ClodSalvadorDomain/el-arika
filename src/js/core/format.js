import { t } from './i18n.js'

const nf = new Intl.NumberFormat('fr-FR')

/**
 * 129900 → "129 900" (non-breaking spaces, Algerian/French grouping), wrapped in
 * Unicode isolates (LRI…PDI) so the digit groups keep their order inside RTL text.
 */
export const fmt = (n) => `⁦${nf.format(n).replace(/\s/g, ' ')}⁩`

/** Plain text price: "129 900 DA" / "129 900 دج" */
export const da = (n) => `${fmt(n)} ${t('cur')}`

/** Styled price markup used on cards, PDP and cart. */
export const priceHTML = (n, extra = '') =>
  `<span class="price ${extra}">${fmt(n)}<span class="cur">${t('cur')}</span></span>`

/** Monthly instalment, rounded up to the next 10 DA. */
export const monthly = (n, months = 12) => Math.ceil(n / months / 10) * 10

export const escapeHTML = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])
