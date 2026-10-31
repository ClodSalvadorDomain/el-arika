# EL Arika — value furniture megastore

A responsive storefront for a discount furniture and home retailer. It follows the design brief in the master prompt: bold red, prices first, dense with promotions. Every brand element is original. The site is in English and Arabic (right-to-left), with prices in Algerian dinars.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # static output in dist/
npm run preview   # serve dist/ at http://localhost:4173
npm run standalone  # one self-contained .html per page in standalone/ — opens by double-click, no server
```

The `standalone/` files have the scripts, styles and logo built in. They still need an internet connection for the photos, fonts and store map, and each is about 1.7 MB because three.js is embedded in every page.

## Pages

| Page | File | What it shows |
|---|---|---|
| Home | `index.html` | All 14 sections from the brief, plus a 3D kitchen planner |
| Category | `category.html?cat=sofas` | Filters (price slider, width, colour, material, style, availability), sorting, active-filter chips, "Load more", SEO text. Also handles `?q=` search and `?cat=wishlist` |
| Product | `product.html?id=sofas-0` | Photo gallery with zoom, 360° 3D view, room view, colour and size options that update the price and the 3D model, financing calculator, in-store stock dialog, delivery options, tabs, cross-sell carousels, sticky buy bar on mobile |
| Cart & checkout | `cart.html` | Four steps (cart, delivery, payment, confirmation), promo code `ARIKA10`, sticky order summary |
| Store locator | `stores.html` | City search, "use my location" (sorts by distance), open-now status, OpenStreetMap map, directions links |
| Design system | `components.html` | Tokens and every component state, plus live demos of the four libraries |

## How the four reference libraries are used

| Reference file | Where it's used |
|---|---|
| **LiquidGlass** | `src/js/components/liquid-glass.js` mirrors the library's API: `Container`, `Button`, `type`, `tintOpacity`, `warp`, `addChild`, `updateSizeFromDOM`, `Container.instances`, `glassControls`. It doesn't capture the page with html2canvas, which would be too heavy for a catalogue. Instead, each element gets an SVG edge-refraction map applied as a `backdrop-filter`. Chromium shows real refraction; other browsers get frosted blur with rim light. It's used on the hero controls, the hero CTA, card wishlist buttons, mega-menu promo captions, room-idea hotspots, the 3D-viewer controls, the mobile buy bar, the cookie banner and the toasts. You can opt in from markup with `data-glass`. |
| **LiquidLogo** | `src/islands/LiquidLogo.jsx` renders the EL Arika mark in liquid metal with Paper Shaders (`@paper-design/shaders-react`). The shader needs a raster image, so it uses `src/assets/logo-mark.png`. |
| **React Three Fiber** | `src/islands/Sofa3D.jsx` is the 360° product viewer. Changing colour or size in the buy box updates the model live. `src/islands/Kitchen3D.jsx` is the homepage 3D kitchen planner (width and finish). Both models are built in code, so there are no model files to download. |
| **ShaderGradient** | `src/islands/HeroGradient.jsx` has three on-brand variants: the red hero background, the yellow financing tile and the dark store-locator banner. |

The WebGL pieces are React "islands" inside a static site (`src/islands/mount.js`):
- They download only when they come near the viewport.
- Above-the-fold islands wait until the browser is idle.
- Each one shows a static fallback until it loads.
- Data-saver or low-memory devices, and browsers without WebGL, keep the fallback.

## Project layout

```
partials/            shared head, header (utility bar, search, mega-menu), footer (newsletter, links, cookies)
src/styles/main.css  design tokens (@theme) and component classes
src/js/data/         catalogue, categories/mega-menu, stores, photos, EN/AR strings — swap these for your API
src/js/core/         i18n, cart & wishlist state (localStorage), formatting, icons
src/js/components/   product card, carousel, liquid glass, countdown/tabs/toast/accordion
src/js/pages/        one module per page
src/islands/         React + WebGL islands
```

Shared header and footer markup lives in `partials/`. A small Vite plugin (in `vite.config.js`) inlines each `<!-- @include name -->` at build time, so every page ships real HTML.

## Notes

- **three.js is pinned to 0.186.1.** three 0.187 removed a shader chunk (`cube_uv_reflection_fragment`) that ShaderGradient 2.4 still uses. Check ShaderGradient's release notes before upgrading.
- **Photos** come from Unsplash (free licence) through its CDN. Product names, prices, store addresses, company registration numbers and reviews are placeholders. The footer says so.
- **Languages:** the EN/عربي switch translates the interface and sets `dir="rtl"`. Catalogue data (product and sub-category names) stays as entered. Numbers are wrapped in Unicode direction isolates, so values like "129 900" keep their digit order in Arabic.
- **Checkout is a demo.** It doesn't process payments, and card details are never sent anywhere.
