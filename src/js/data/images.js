/**
 * Royalty-free room photography (Unsplash License). Swap these IDs for your own
 * product shots; every <img> is built through `img()` so format/size stays consistent.
 */
export const PHOTOS = {
  sofaGreen: '1555041469-a586c61ea9bc',
  livingYellowChair: '1586023492125-27b2c045efd7',
  kitchenCooking: '1556909114-f6e7ad7d3136',
  bedroomClassic: '1505693416388-ac5ce068fe85',
  bedroomDark: '1616594039964-ae9021a400a0',
  kitchenWhite: '1484154218962-a197022b5858',
  livingDining: '1522708323590-d24dbb6b0267',
  sofaTufted: '1493663284031-b7e3aefcae8e',
  bedroomOrange: '1540518614846-7eded433c457',
  sofaOrange: '1567016432779-094069958ea5',
  loftLounge: '1538688525198-9b88f6f53126',
  stool: '1503602642458-232111445657',
  bedroomBoho: '1615874959474-d609969a20ed',
  bedroomHotel: '1631049307264-da0ec9d70304',
  bathSink: '1552321554-5fefe8c9ef14',
  bathShower: '1584622650111-993a426fbf0a',
  diningGreen: '1617806118233-18e1de247200',
  livingSunny: '1600210492486-724fe5c67fb0',
  bedroomWhite: '1595526114035-0d45ed16cfbf',
  livingBoho: '1556228453-efd6c1ff04f6',
  kitchenSink: '1565538810643-b5bdb714032a',
  livingBeige: '1560448204-e02f11c3d0e2',
  livingNavy: '1513694203232-719a280e022f',
  livingOrangeChair: '1618220179428-22790b461013',
  chairBlack: '1592078615290-033ee584e267',
  chairGarden: '1506439773649-6e0eb8cfb237',
  chairGrey: '1598300042247-d088f8ab3a91',
  sectionalBlack: '1550581190-9c1c48d21d6c',
  sofaWhite: '1505691938895-1758d7feb511',
  livingCream: '1616486338812-3dadae4b4ace',
  livingModern: '1600607687939-ce8a6c25118c',
  kitchenGrey: '1600489000022-c2086d79f9d4',
  kitchenIsland: '1507089947368-19c1da9775ae',
  lounge: '1524758631624-e2822e304c36',
  kitchenBlue: '1588854337236-6889d631faa8',
  diningGarden: '1604578762246-41134e37f9cc',
  livingGrey: '1600121848594-d8644e57abab',
  wardrobe: '1595428774223-ef52624120d2',
  deskWood: '1611269154421-4e27233ac5c7',
  sofaGrey: '1583847268964-b28dc8f51f92',
  tvWall: '1594026112284-02bb6f3352fe',
  officeGreen: '1600494603989-9650cf6ddd3d',
  bedroomCozy: '1571508601891-ca5e7a713859',
  console: '1530018607912-eff2daa1bac4',
  pool: '1416331108676-a22ccb276e35',
  kitchenOak: '1600585152220-90363fe7e115',
  bedPlatform: '1617325247661-675ab4b64ae2',
  diningTable: '1577140917170-285929fb55b7',
}

/** Unsplash CDN negotiates AVIF/WebP automatically via auto=format. */
export function imgUrl(key, w = 800, h = Math.round(w * 0.75), q = 70) {
  const id = PHOTOS[key] ?? key
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=${q}`
}

export function srcset(key, w, ratio = 0.75) {
  return [1, 2].map((d) => `${imgUrl(key, w * d, Math.round(w * d * ratio))} ${d}x`).join(', ')
}

/** Returns an <img> string with lazy loading, intrinsic size (no CLS) and 1x/2x srcset. */
export function img(key, { w = 600, ratio = 0.75, alt = '', cls = '', eager = false, sizes } = {}) {
  const h = Math.round(w * ratio)
  return `<img src="${imgUrl(key, w, h)}" srcset="${srcset(key, w, ratio)}"${sizes ? ` sizes="${sizes}"` : ''} width="${w}" height="${h}" alt="${alt}" class="${cls}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>`
}
