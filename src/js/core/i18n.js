import { STRINGS } from '../data/strings.js'

/**
 * Lightweight i18n: English (default) + Arabic (RTL).
 * Static markup is authored in English; elements opt in with
 *   data-i18n="key"              → textContent
 *   data-i18n-placeholder="key"  → placeholder
 *   data-i18n-aria="key"         → aria-label
 * Dynamic renderers call t() and re-render on the `lang:change` event.
 */
const KEY = 'elarika:lang'
let lang = (() => { try { return localStorage.getItem(KEY) } catch { return null } })() || 'en'
if (!STRINGS[lang]) lang = 'en'

export const getLang = () => lang

export function t(key, vars) {
  let s = STRINGS[lang]?.[key] ?? STRINGS.en[key] ?? key
  // "150 000" inside Arabic text would render as "000 150" without an LTR isolate
  if (lang === 'ar') s = s.replace(/\d[\d  ]*\d/g, (m) => (/[\s ]/.test(m) ? `⁦${m}⁩` : m))
  if (vars) s = s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '')
  return s
}

export function applyI18n(root = document) {
  root.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n) })
  root.querySelectorAll('[data-i18n-placeholder]').forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder) })
  root.querySelectorAll('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)) })
}

export function setLang(next) {
  lang = STRINGS[next] ? next : 'en'
  try { localStorage.setItem(KEY, lang) } catch { /* ignore */ }
  const html = document.documentElement
  html.lang = lang
  html.dir = lang === 'ar' ? 'rtl' : 'ltr'
  applyI18n()
  document.querySelectorAll('[data-lang-switch]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.langSwitch === lang)))
  document.dispatchEvent(new CustomEvent('lang:change', { detail: { lang } }))
}
