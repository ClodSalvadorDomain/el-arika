import { icon } from '../core/icons.js'
import { t } from '../core/i18n.js'

/**
 * Scroll-snap carousel: native swipe on touch, arrows outside the row on
 * desktop, dots below. Markup:
 *   <div class="carousel" data-carousel><div class="carousel__track">…items…</div></div>
 * Arrows + dots are injected; call again after re-rendering items.
 */
export function initCarousel(root) {
  const track = root.querySelector('.carousel__track')
  if (!track) return
  root.querySelectorAll('.carousel__arrow, .carousel__dots').forEach((n) => n.remove())
  const label = root.getAttribute('aria-label') || ''

  const prev = document.createElement('button')
  prev.className = 'carousel__arrow carousel__arrow--prev'
  prev.setAttribute('aria-label', t('carousel.prev'))
  prev.innerHTML = icon('chevLeft', 22)
  const next = document.createElement('button')
  next.className = 'carousel__arrow carousel__arrow--next'
  next.setAttribute('aria-label', t('carousel.next'))
  next.innerHTML = icon('chevRight', 22)
  const dots = document.createElement('div')
  dots.className = 'carousel__dots'
  dots.setAttribute('role', 'group')
  dots.setAttribute('aria-label', `${label} ${t('carousel.pages')}`.trim())
  root.append(prev, next, dots)

  const rtl = () => getComputedStyle(root).direction === 'rtl'
  const pos = () => Math.abs(track.scrollLeft)
  const max = () => track.scrollWidth - track.clientWidth
  const pages = () => Math.max(1, Math.ceil(track.scrollWidth / track.clientWidth - 0.05))
  const go = (dir) => track.scrollBy({ left: dir * track.clientWidth * 0.95 * (rtl() ? -1 : 1) })

  prev.addEventListener('click', () => go(-1))
  next.addEventListener('click', () => go(1))

  let dotCount = 0
  function sync() {
    const n = pages()
    if (n !== dotCount) {
      dotCount = n
      dots.innerHTML = Array.from({ length: n }, (_, i) =>
        `<button class="carousel__dot" aria-label="${t('carousel.page', { n: i + 1, total: n })}" data-i="${i}"></button>`).join('')
      dots.hidden = n < 2
    }
    const current = max() <= 0 ? 0 : Math.round((pos() / max()) * (n - 1))
    dots.querySelectorAll('.carousel__dot').forEach((d, i) => d.setAttribute('aria-current', String(i === current)))
    prev.disabled = pos() <= 2
    next.disabled = pos() >= max() - 2
  }
  dots.addEventListener('click', (e) => {
    const b = e.target.closest('.carousel__dot')
    if (!b) return
    const target = (max() / Math.max(1, pages() - 1)) * Number(b.dataset.i)
    track.scrollTo({ left: rtl() ? -target : target })
  })
  track.addEventListener('scroll', () => requestAnimationFrame(sync), { passive: true })
  new ResizeObserver(sync).observe(track)
  sync()
}

export const initCarousels = (root = document) => root.querySelectorAll('[data-carousel]').forEach(initCarousel)
