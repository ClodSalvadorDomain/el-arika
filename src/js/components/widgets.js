import { t } from '../core/i18n.js'
import { icon } from '../core/icons.js'

/* ---------------------------------------------------------------------------
   Countdown — <div data-countdown="weekly"> or data-countdown="2026-12-31T23:59"
   "weekly" = next Sunday 23:59 local time, so the weekly offer always runs.
--------------------------------------------------------------------------- */
function deadlineFrom(value) {
  if (value && value !== 'weekly') return new Date(value)
  const d = new Date()
  d.setDate(d.getDate() + ((7 - d.getDay()) % 7 || 7))
  d.setHours(23, 59, 59, 0)
  return d
}

export function initCountdowns(root = document) {
  root.querySelectorAll('[data-countdown]').forEach((el) => {
    const end = deadlineFrom(el.dataset.countdown)
    const unit = (v, k) => `<span class="countdown__unit"><b>${String(v).padStart(2, '0')}</b><small>${t(k)}</small></span>`
    el.classList.add('countdown')
    el.setAttribute('role', 'timer')
    const tick = () => {
      const s = Math.max(0, Math.floor((end - Date.now()) / 1000))
      const d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60
      el.innerHTML = `${unit(d, 'time.d')}<span aria-hidden="true">:</span>${unit(h, 'time.h')}<span aria-hidden="true">:</span>${unit(m, 'time.m')}<span aria-hidden="true">:</span>${unit(sec, 'time.s')}`
      el.setAttribute('aria-label', t('time.left', { d, h, m }))
    }
    tick()
    clearInterval(el._timer)
    el._timer = setInterval(tick, 1000)
  })
}

/* ---------------------------------------------------------------------------
   Tabs — WAI-ARIA tabs with arrow-key navigation.
   <div role="tablist"><button role="tab" aria-controls="p1">…</button></div>
   Panels optional: pass onChange to filter content instead.
--------------------------------------------------------------------------- */
export function initTabs(tablist, onChange) {
  const tabs = [...tablist.querySelectorAll('[role="tab"]')]
  const select = (tab, focus = false) => {
    tabs.forEach((tb) => {
      const on = tb === tab
      tb.setAttribute('aria-selected', String(on))
      tb.tabIndex = on ? 0 : -1
      const panel = tb.getAttribute('aria-controls') && document.getElementById(tb.getAttribute('aria-controls'))
      if (panel) panel.hidden = !on
    })
    if (focus) tab.focus()
    onChange?.(tab)
  }
  tabs.forEach((tb) => tb.addEventListener('click', () => select(tb)))
  tablist.addEventListener('keydown', (e) => {
    const i = tabs.indexOf(document.activeElement)
    if (i < 0) return
    const rtl = getComputedStyle(tablist).direction === 'rtl'
    const fwd = rtl ? 'ArrowLeft' : 'ArrowRight', back = rtl ? 'ArrowRight' : 'ArrowLeft'
    let n = null
    if (e.key === fwd) n = tabs[(i + 1) % tabs.length]
    if (e.key === back) n = tabs[(i - 1 + tabs.length) % tabs.length]
    if (e.key === 'Home') n = tabs[0]
    if (e.key === 'End') n = tabs[tabs.length - 1]
    if (n) { e.preventDefault(); select(n, true) }
  })
  select(tabs.find((tb) => tb.getAttribute('aria-selected') === 'true') ?? tabs[0])
}

/* ---------------------------------------------------------------------------
   Toast — glass notification, e.g. after "Add to cart".
--------------------------------------------------------------------------- */
let toastEl, toastTimer
export function toast(html, { action } = {}) {
  if (!toastEl) {
    toastEl = document.createElement('div')
    toastEl.className = 'toast glass-container glass-white'
    toastEl.setAttribute('role', 'status')
    toastEl.setAttribute('aria-live', 'polite')
    document.body.appendChild(toastEl)
  }
  toastEl.innerHTML = `<span class="grid place-items-center w-9 h-9 rounded-full bg-brand text-white shrink-0">${icon('check', 18)}</span>
    <div class="text-sm font-semibold flex-1">${html}</div>
    ${action ? `<a class="btn btn-primary btn-sm" href="${action.href}">${action.label}</a>` : ''}
    <button class="icon-btn shrink-0" aria-label="${t('close')}">${icon('close', 18)}</button>`
  toastEl.querySelector('.icon-btn').onclick = () => toastEl.classList.remove('is-open')
  requestAnimationFrame(() => toastEl.classList.add('is-open'))
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => toastEl.classList.remove('is-open'), 4200)
}

/* ---------------------------------------------------------------------------
   Accordion — <button class="acc-btn" aria-expanded="false" aria-controls="x">
--------------------------------------------------------------------------- */
export function initAccordions(root = document) {
  root.querySelectorAll('.acc-btn[aria-controls]').forEach((btn) => {
    if (btn._acc) return
    btn._acc = true
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') !== 'true'
      btn.setAttribute('aria-expanded', String(open))
      document.getElementById(btn.getAttribute('aria-controls')).hidden = !open
    })
  })
}

/* ---------------------------------------------------------------------------
   Reveal skeletons → content after the (simulated) fetch resolves.
--------------------------------------------------------------------------- */
export const wait = (ms) => new Promise((r) => setTimeout(r, ms))
