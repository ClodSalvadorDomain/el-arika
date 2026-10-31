/**
 * Client-side cart & wishlist persisted in localStorage.
 * Replace the read/write calls with your commerce API; the UI only listens
 * to the `cart:change` and `wish:change` events.
 */
const KEY_CART = 'elarika:cart'
const KEY_WISH = 'elarika:wish'

const read = (k, fallback) => {
  try { return JSON.parse(localStorage.getItem(k)) ?? fallback } catch { return fallback }
}
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch { /* private mode */ } }
const emit = (name, detail) => document.dispatchEvent(new CustomEvent(name, { detail }))

/** @typedef {{ key: string, id: string, qty: number, color?: string, size?: string, unit?: number }} CartLine */
export const cart = {
  /** @returns {CartLine[]} */
  lines: () => read(KEY_CART, []),
  count() { return this.lines().reduce((n, l) => n + l.qty, 0) },
  add(id, { qty = 1, color = '', size = '', unit } = {}) {
    const lines = this.lines()
    const key = [id, color, size].join('|')
    const line = lines.find((l) => l.key === key)
    if (line) line.qty = Math.min(99, line.qty + qty)
    else lines.push({ key, id, qty, color, size, unit })
    write(KEY_CART, lines)
    emit('cart:change', { added: { id, qty } })
  },
  setQty(key, qty) {
    const lines = this.lines().map((l) => (l.key === key ? { ...l, qty: Math.max(1, Math.min(99, qty)) } : l))
    write(KEY_CART, lines)
    emit('cart:change', {})
  },
  remove(key) {
    write(KEY_CART, this.lines().filter((l) => l.key !== key))
    emit('cart:change', {})
  },
  clear() { write(KEY_CART, []); emit('cart:change', {}) },
}

export const wishlist = {
  ids: () => new Set(read(KEY_WISH, [])),
  has(id) { return this.ids().has(id) },
  count() { return this.ids().size },
  toggle(id) {
    const s = this.ids()
    s.has(id) ? s.delete(id) : s.add(id)
    write(KEY_WISH, [...s])
    emit('wish:change', { id, on: s.has(id) })
    return s.has(id)
  },
}
