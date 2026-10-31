/**
 * Navigation + mega-menu model. Column titles/links are plain strings so a CMS
 * can feed them directly; `cat` keys match product.cat in products.js.
 */
export const CATEGORIES = [
  {
    cat: 'kitchens', i18n: 'nav.kitchens', img: 'kitchenWhite',
    columns: [
      { title: 'Fitted kitchens by width', links: ['180 cm', '210 cm', '240 cm', '255 cm', '300 cm', '330 cm corner'] },
      { title: 'By style', links: ['Modern', 'Classic', 'Scandinavian', 'Compact', 'Kitchens with island'] },
      { title: 'Sinks & taps', links: ['Built-in sinks', 'Mixer taps', 'Worktops', 'Kitchen accessories'] },
      { title: 'Appliances', links: ['Built-in ovens', 'Hobs', 'Extractor hoods', 'Dishwashers'] },
    ],
    promo: { img: 'kitchenOak', title: 'Kitchen Aurora 255 cm', price: 279900, cta: 'Discover the offer' },
  },
  {
    cat: 'bedrooms', i18n: 'nav.bedrooms', img: 'bedroomClassic',
    columns: [
      { title: 'Complete bedrooms', links: ['Modern bedrooms', 'Classic bedrooms', 'Bedroom sets 4-door', 'Bedroom sets 6-door'] },
      { title: 'Beds', links: ['Double beds', 'Storage beds', 'Upholstered beds', 'Single beds'] },
      { title: 'Wardrobes', links: ['2-door', '3-door', 'Sliding door', 'Walk-in'] },
      { title: 'Sleep', links: ['Mattresses', 'Pillows', 'Bed bases', 'Bedside tables'] },
    ],
    promo: { img: 'bedroomHotel', title: 'Bedroom Marea 4-door', price: 189900, cta: 'Discover the offer' },
  },
  {
    cat: 'living', i18n: 'nav.living', img: 'livingSunny',
    columns: [
      { title: 'Living room furniture', links: ['TV walls', 'TV stands', 'Sideboards', 'Display cabinets'] },
      { title: 'Tables', links: ['Coffee tables', 'Side tables', 'Console tables'] },
      { title: 'Storage', links: ['Bookcases', 'Wall shelves', 'Shoe cabinets'] },
    ],
    promo: { img: 'tvWall', title: 'TV wall Atlas 280 cm', price: 64900, cta: 'Discover the offer' },
  },
  {
    cat: 'sofas', i18n: 'nav.sofas', img: 'sofaGreen',
    columns: [
      { title: 'Sofas', links: ['2-seater sofas', '3-seater sofas', 'Corner sofas', 'Sofa beds', 'Recliner sofas'] },
      { title: 'Armchairs', links: ['Armchairs', 'Recliners', 'Poufs & footstools'] },
      { title: 'By material', links: ['Fabric', 'Velvet', 'Leatherette'] },
    ],
    promo: { img: 'sofaTufted', title: 'Sofa Medina 3-seater', price: 89900, cta: 'Discover the offer' },
  },
  {
    cat: 'kids', i18n: 'nav.kids', img: 'bedroomCozy',
    columns: [
      { title: "Kids' rooms", links: ['Complete rooms', 'Bunk beds', 'Single beds', 'Desks'] },
      { title: 'Storage', links: ['Toy storage', 'Wardrobes', 'Bookcases'] },
    ],
    promo: { img: 'bedroomBoho', title: 'Bunk bed Fennec', price: 54900, cta: 'Discover the offer' },
  },
  {
    cat: 'bath', i18n: 'nav.bath', img: 'bathSink',
    columns: [
      { title: 'Bathroom furniture', links: ['Vanity units 60 cm', 'Vanity units 80 cm', 'Vanity units 100 cm', 'Columns'] },
      { title: 'Accessories', links: ['Mirrors', 'Mirror cabinets', 'Lighting'] },
    ],
    promo: { img: 'bathShower', title: 'Vanity unit Ain 80 cm', price: 32900, cta: 'Discover the offer' },
  },
  {
    cat: 'dining', i18n: 'nav.dining', img: 'diningGreen',
    columns: [
      { title: 'Dining', links: ['Extendable tables', 'Fixed tables', 'Chairs', 'Dining sets'] },
      { title: 'Storage', links: ['Sideboards', 'Display cabinets', 'Bar cabinets'] },
    ],
    promo: { img: 'diningTable', title: 'Dining set Bahia + 4 chairs', price: 59900, cta: 'Discover the offer' },
  },
  {
    cat: 'outdoor', i18n: 'nav.outdoor', img: 'diningGarden',
    columns: [
      { title: 'Garden', links: ['Garden sets', 'Lounge chairs', 'Parasols', 'Garden tables'] },
      { title: 'Terrace', links: ['Balcony sets', 'Planters', 'Outdoor lighting'] },
    ],
    promo: { img: 'chairGarden', title: 'Garden set Bahr 4-seat', price: 44900, cta: 'Discover the offer' },
  },
  {
    cat: 'appliances', i18n: 'nav.appliances', img: 'kitchenBlue',
    columns: [
      { title: 'Large appliances', links: ['Fridges', 'Ovens', 'Hobs', 'Dishwashers', 'Washing machines'] },
      { title: 'Small appliances', links: ['Microwaves', 'Coffee machines', 'Air fryers'] },
    ],
    promo: { img: 'kitchenIsland', title: 'Built-in oven pack', price: 69900, cta: 'Discover the offer' },
  },
  {
    cat: 'decor', i18n: 'nav.decor', img: 'console',
    columns: [
      { title: 'Home décor', links: ['Rugs', 'Lighting', 'Mirrors', 'Cushions', 'Curtains'] },
      { title: 'Small furniture', links: ['Console tables', 'Stools', 'Shelves'] },
    ],
    promo: { img: 'livingBoho', title: 'Rug Tassili 160×230', price: 12900, cta: 'Discover the offer' },
  },
  {
    cat: 'promotions', i18n: 'nav.promotions', img: 'sofaOrange', isPromo: true,
    columns: [
      { title: 'This week', links: ['Best offers of the week', 'Up to -50%', 'Last pieces', 'Outlet'] },
      { title: 'Financing', links: ['0% in 12 instalments', 'Trade-in bonus'] },
    ],
    promo: { img: 'sofaOrange', title: 'Spring Home Event', price: 29900, cta: 'See all promotions' },
  },
]

export const catByKey = Object.fromEntries(CATEGORIES.map((c) => [c.cat, c]))
