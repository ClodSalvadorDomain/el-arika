/**
 * Demo catalogue. Products are generated deterministically (seeded) so every
 * page shows the same items; replace `PRODUCTS` with your API response — the
 * UI only relies on the fields documented in the Product typedef.
 *
 * @typedef {Object} Product
 * @property {string} id        stable SKU id, used in product.html?id=
 * @property {string} code      display code (EA-xxxxx)
 * @property {string} name
 * @property {string} cat       matches categories.js `cat`
 * @property {string} spec      short spec line
 * @property {number|null} width  cm
 * @property {string} color     key of COLORS
 * @property {string} material
 * @property {string} style
 * @property {number} price     DZD
 * @property {number|null} old  previous price, DZD
 * @property {string[]} badges  'new' | 'promo' | 'delivery' | 'assembly' | 'best'
 * @property {number} rating    0–5
 * @property {number} reviews
 * @property {string} img       PHOTOS key
 * @property {string} img2      PHOTOS key (hover swap)
 * @property {'both'|'online'|'store'|'out'} stock
 */

export const COLORS = {
  white: { label: 'White', hex: '#f4f4f2' },
  oak: { label: 'Oak', hex: '#c49a6c' },
  walnut: { label: 'Walnut', hex: '#6f4a33' },
  grey: { label: 'Grey', hex: '#9a9a9a' },
  anthracite: { label: 'Anthracite', hex: '#3b3d40' },
  beige: { label: 'Beige', hex: '#d9c7a7' },
  green: { label: 'Sage green', hex: '#5f7a5d' },
  blue: { label: 'Petrol blue', hex: '#1f4f63' },
  terracotta: { label: 'Terracotta', hex: '#c0593a' },
}

export const MATERIALS = ['Laminate', 'Solid wood', 'Fabric', 'Velvet', 'Leatherette', 'Metal', 'Ceramic']
export const STYLES = ['Modern', 'Classic', 'Scandinavian', 'Industrial', 'Compact']

const NAMES = ['Aurora', 'Medina', 'Marea', 'Tassili', 'Casbah', 'Hoggar', 'Nour', 'Jasmin', 'Sahel', 'Rimal', 'Corniche', 'Zitouna', 'Atlas', 'Kenza', 'Ksar', 'Bahia', 'Yasmine', 'Lina', 'Sakina', 'Tipaza', 'Djurdjura', 'Fennec', 'Bahr', 'Amel', 'Selma', 'Rania', 'Ilyes', 'Chenoua']

/** Per-category templates: product types, price band, widths, materials, photo pool. */
const TEMPLATES = {
  kitchens: {
    types: [{ t: 'Kitchen', spec: (w, c) => `W ${w} cm · ${c}` }],
    price: [149900, 389900], widths: [180, 210, 240, 255, 300, 330],
    materials: ['Laminate', 'Solid wood'], colors: ['white', 'oak', 'anthracite', 'green', 'grey'],
    imgs: ['kitchenWhite', 'kitchenOak', 'kitchenGrey', 'kitchenIsland', 'kitchenBlue', 'kitchenSink'], count: 18,
  },
  bedrooms: {
    types: [
      { t: 'Bedroom', suffix: ' 4-door', spec: (w, c) => `Wardrobe W ${w} cm · bed 160×200 · ${c}` },
      { t: 'Bed', suffix: ' 160×200', spec: (w, c) => `Storage bed · ${c}` },
      { t: 'Wardrobe', suffix: ' 3-door', spec: (w, c) => `W ${w} cm · H 220 cm · ${c}` },
      { t: 'Mattress', suffix: ' memory foam', spec: () => '160×200 · H 25 cm · medium-firm' },
    ],
    price: [34900, 249900], widths: [150, 180, 200, 240],
    materials: ['Laminate', 'Solid wood', 'Fabric'], colors: ['white', 'oak', 'walnut', 'grey', 'beige'],
    imgs: ['bedroomClassic', 'bedroomHotel', 'bedroomWhite', 'bedPlatform', 'bedroomDark', 'bedroomOrange', 'wardrobe'], count: 16,
  },
  living: {
    types: [
      { t: 'TV wall', spec: (w, c) => `W ${w} cm · LED lighting · ${c}` },
      { t: 'Coffee table', spec: (w, c) => `Ø ${Math.round(w / 3)} cm · ${c}` },
      { t: 'Bookcase', spec: (w, c) => `W ${Math.round(w / 3)} cm · 5 shelves · ${c}` },
      { t: 'Sideboard', spec: (w, c) => `W ${Math.round(w / 1.5)} cm · 3 doors · ${c}` },
    ],
    price: [9900, 89900], widths: [240, 260, 280, 300],
    materials: ['Laminate', 'Solid wood', 'Metal'], colors: ['white', 'oak', 'walnut', 'anthracite'],
    imgs: ['tvWall', 'livingSunny', 'livingModern', 'livingGrey', 'livingCream', 'console', 'livingBeige'], count: 14,
  },
  sofas: {
    types: [
      { t: 'Sofa', suffix: ' 3-seater', spec: (w, c) => `W ${w} cm · ${c} fabric` },
      { t: 'Corner sofa', spec: (w, c) => `W ${w + 60} cm · reversible chaise · ${c}` },
      { t: 'Sofa bed', spec: (w, c) => `W ${w - 20} cm · bed 140×190 · ${c}` },
      { t: 'Armchair', spec: (w, c) => `W ${Math.round(w / 2.6)} cm · ${c}` },
      { t: 'Sofa', suffix: ' 2-seater', spec: (w, c) => `W ${w - 50} cm · ${c}` },
    ],
    price: [29900, 199900], widths: [200, 214, 228, 240],
    materials: ['Fabric', 'Velvet', 'Leatherette'], colors: ['green', 'grey', 'beige', 'blue', 'terracotta', 'anthracite'],
    imgs: ['sofaTufted', 'sectionalBlack', 'sofaOrange', 'livingYellowChair', 'sofaGrey', 'sofaWhite', 'sofaGreen', 'livingNavy', 'livingOrangeChair'], count: 20,
  },
  kids: {
    types: [
      { t: 'Bunk bed', spec: (w, c) => `90×190 · ladder & guard rail · ${c}` },
      { t: "Kids' room", spec: (w, c) => `Bed, wardrobe & desk · ${c}` },
      { t: 'Desk', spec: (w, c) => `W ${Math.round(w / 2)} cm · ${c}` },
    ],
    price: [14900, 119900], widths: [180, 200, 240],
    materials: ['Laminate', 'Solid wood'], colors: ['white', 'oak', 'green', 'blue'],
    imgs: ['bedroomCozy', 'bedroomBoho', 'bedroomWhite', 'officeGreen'], count: 8,
  },
  bath: {
    types: [
      { t: 'Vanity unit', spec: (w, c) => `W ${w} cm · ceramic basin · ${c}` },
      { t: 'Mirror cabinet', spec: (w, c) => `W ${w} cm · LED · ${c}` },
    ],
    price: [9900, 59900], widths: [60, 80, 100],
    materials: ['Laminate', 'Ceramic'], colors: ['white', 'oak', 'anthracite'],
    imgs: ['bathSink', 'bathShower'], count: 8,
  },
  dining: {
    types: [
      { t: 'Dining set', suffix: ' + 4 chairs', spec: (w, c) => `Table ${w}×90 cm · ${c}` },
      { t: 'Extendable table', spec: (w, c) => `${w}–${w + 60}×90 cm · ${c}` },
      { t: 'Chair', suffix: ' (set of 2)', spec: (w, c) => `Upholstered · ${c}` },
    ],
    price: [14900, 99900], widths: [140, 160, 180],
    materials: ['Solid wood', 'Fabric', 'Metal'], colors: ['oak', 'walnut', 'white', 'green'],
    imgs: ['diningGreen', 'diningTable', 'diningGarden', 'livingDining', 'chairGrey', 'deskWood'], count: 12,
  },
  outdoor: {
    types: [
      { t: 'Garden set', suffix: ' 4-seat', spec: (w, c) => `Sofa, 2 armchairs, table · ${c}` },
      { t: 'Lounge chair', spec: (w, c) => `Adjustable back · ${c}` },
    ],
    price: [12900, 89900], widths: [null],
    materials: ['Metal', 'Solid wood'], colors: ['anthracite', 'oak', 'white'],
    imgs: ['chairGarden', 'diningGarden', 'pool'], count: 6,
  },
  appliances: {
    types: [
      { t: 'Built-in oven', spec: () => '71 L · multifunction · A+' },
      { t: 'Fridge-freezer', spec: () => '340 L · no frost · A++' },
      { t: 'Dishwasher', spec: () => '13 place settings · 44 dB' },
    ],
    price: [39900, 129900], widths: [60],
    materials: ['Metal'], colors: ['white', 'anthracite', 'grey'],
    imgs: ['kitchenBlue', 'kitchenIsland', 'kitchenGrey', 'kitchenOak'], count: 9,
  },
  decor: {
    types: [
      { t: 'Rug', suffix: ' 160×230', spec: (w, c) => `Short pile · ${c}` },
      { t: 'Console table', spec: (w, c) => `W ${Math.round(w / 2)} cm · ${c}` },
      { t: 'Stool', spec: (w, c) => `H 65 cm · ${c}` },
    ],
    price: [3900, 24900], widths: [200, 240],
    materials: ['Fabric', 'Solid wood', 'Metal'], colors: ['beige', 'terracotta', 'oak', 'white'],
    imgs: ['console', 'livingBoho', 'stool', 'chairBlack', 'livingYellowChair'], count: 9,
  },
}

/** mulberry32 — tiny seeded PRNG so the catalogue is stable across reloads. */
function rng(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
const pick = (r, arr) => arr[Math.floor(r() * arr.length)]
const roundPrice = (n) => Math.round(n / 1000) * 1000 - 100 // 129 900 style

function build() {
  const out = []
  let seed = 7
  for (const [cat, tpl] of Object.entries(TEMPLATES)) {
    const r = rng(seed++ * 977)
    for (let i = 0; i < tpl.count; i++) {
      const type = tpl.types[i % tpl.types.length]
      const name = NAMES[(i * 7 + seed * 3) % NAMES.length]
      const width = tpl.widths[i % tpl.widths.length]
      const color = tpl.colors[(i + Math.floor(i / tpl.colors.length)) % tpl.colors.length]
      const cLabel = COLORS[color].label.toLowerCase()
      const price = roundPrice(tpl.price[0] + r() * (tpl.price[1] - tpl.price[0]))
      const discount = r() < 0.72 ? pick(r, [0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.5]) : 0
      const old = discount ? roundPrice(price / (1 - discount)) : null
      const badges = []
      if (i % 5 === 1) badges.push('new')
      if (discount >= 0.35) badges.push('best')
      else if (discount) badges.push('promo')
      if (price >= 99900) badges.push('delivery')
      if (cat === 'kitchens' || (cat === 'bedrooms' && i % 4 === 0)) badges.push('assembly')
      const img = tpl.imgs[i % tpl.imgs.length]
      const img2 = tpl.imgs[(i + 1) % tpl.imgs.length]
      out.push({
        id: `${cat}-${i}`,
        code: `EA-${String(10000 + Math.floor(r() * 89999))}`,
        name: `${type.t} ${name}${type.suffix ?? (cat === 'kitchens' ? ` ${width} cm` : '')}`,
        cat,
        spec: type.spec(width, cLabel),
        width,
        color,
        material: tpl.materials[i % tpl.materials.length],
        style: STYLES[(i + seed) % STYLES.length],
        price,
        old,
        badges,
        rating: Math.round((3.9 + r() * 1.1) * 10) / 10,
        reviews: 6 + Math.floor(r() * 420),
        img,
        img2: img2 === img ? tpl.imgs[0] : img2,
        stock: i % 11 === 10 ? 'out' : pick(r, ['both', 'both', 'online', 'store']),
      })
    }
  }
  // Hero products with fixed names from the brief.
  Object.assign(out.find((p) => p.id === 'kitchens-3'), { name: 'Kitchen Aurora 255 cm', width: 255, spec: 'W 255 cm · white/oak', price: 279900, old: 389900, color: 'white', style: 'Modern', img: 'kitchenOak', img2: 'kitchenWhite', badges: ['best', 'assembly'] })
  Object.assign(out.find((p) => p.id === 'bedrooms-0'), { name: 'Bedroom Marea 4-door', spec: 'Wardrobe W 200 cm · bed 160×200 · oak', price: 189900, old: 259900, color: 'oak', img: 'bedroomHotel', img2: 'bedroomClassic', badges: ['promo', 'delivery', 'assembly'] })
  Object.assign(out.find((p) => p.id === 'sofas-0'), { name: 'Sofa Medina 3-seater', width: 228, spec: 'W 228 cm · sage green fabric', price: 89900, old: 129900, color: 'green', material: 'Fabric', style: 'Modern', img: 'sofaGreen', img2: 'sofaTufted', badges: ['best', 'delivery'], rating: 4.7, reviews: 386, stock: 'both' })
  return out
}

export const PRODUCTS = build()
export const byId = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]))
export const byCat = (cat) => (cat === 'promotions' ? PRODUCTS.filter((p) => p.old) : PRODUCTS.filter((p) => p.cat === cat))
export const discountPct = (p) => (p.old ? Math.round((1 - p.price / p.old) * 100) : 0)

/** Hand-picked homepage modules. */
export const BEST_OFFERS = ['sofas-0', 'kitchens-3', 'bedrooms-0', 'dining-0', 'living-0', 'sofas-6', 'bedrooms-5', 'outdoor-0', 'bath-1', 'kids-0']
  .map((id) => byId[id]).filter(Boolean)
