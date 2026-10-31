import { initApp } from '../app.js'
import { escapeHTML } from '../core/format.js'

/* `fallback` is the static CSS shown before (or instead of) the WebGL canvas. */
const OPTIONS = [
  { variant: 'hero', title: 'Red waves', current: 'Homepage hero', dark: true, fallback: 'linear-gradient(120deg,#b0120a,#e30613 55%,#ff8a4c)',
    sample: ['Spring Home Event', 'Our strength is the price.'], use: 'Homepage hero, main campaigns.' },
  { variant: 'sunset', title: 'Sunset flare', dark: true, fallback: 'radial-gradient(80% 100% at 80% 20%,#ffd57b,#ff8a3c 45%,#e30613)',
    sample: ['Flash sale · 48 h', 'Up to -50% this weekend'], use: 'Flash sales, countdown banners, "Best offers of the week" header.' },
  { variant: 'orb', title: 'Liquid orb', dark: true, bg: '#1a0605', fallback: 'radial-gradient(circle at 60% 50%,#ffb36b,#e30613 40%,#1a0605 70%)',
    sample: ['New collection', 'Sofa Medina, now in velvet'], use: 'Product launches, "New" spotlight, product page header.' },
  { variant: 'night', title: 'Night sale', dark: true, fallback: 'linear-gradient(135deg,#e30613,#1e3e93 55%,#0b0b12)',
    sample: ['Black Friday', 'Prices drop at midnight'], use: 'Black Friday, late-night online sales, social media.' },
  { variant: 'gold', title: 'Gold luxe', dark: true, fallback: 'radial-gradient(100% 120% at 30% 20%,#ffd57b,#c8902e 45%,#4a2006)',
    sample: ['Ramadan Kareem', 'Premium kitchens, gold prices'], use: 'Ramadan / Eid campaigns, premium kitchen range, gift cards.' },
  { variant: 'sahara', title: 'Sahara sand', dark: true, fallback: 'linear-gradient(135deg,#ecd2a6,#c0593a 55%,#7a3b1d)',
    sample: ['Living room ideas', 'Warm tones for your salon'], use: 'Living-room and décor campaigns, Inspiration section, About page.' },
  { variant: 'soft', title: 'Soft white', dark: false, fallback: 'linear-gradient(135deg,#ffffff,#ffe1dc 50%,#eeeeee)',
    sample: ['Get exclusive offers', '5 000 DA welcome voucher'], use: 'Newsletter band, category page headers, behind product photos.' },
  { variant: 'trust', title: 'Trust blue', dark: true, fallback: 'linear-gradient(135deg,#e7ecf8,#7f9be6 55%,#1e3e93)',
    sample: ['0% financing', 'Pay in 12 instalments'], use: 'Financing page, services, checkout reassurance banner.' },
  { variant: 'finance', title: 'Promo yellow', current: 'Financing tile', dark: false, fallback: 'linear-gradient(135deg,#fff1cf,#ffd57b 50%,#ffb84d)',
    sample: ['Trade-in bonus', '20 000 DA for your old sofa'], use: 'Financing tile, "Best price" callouts, store-locator teaser.' },
  { variant: 'dark', title: 'Ember dark', current: 'Store locator banner', dark: true, fallback: 'linear-gradient(135deg,#e30613,#5c0a0a 50%,#161616)',
    sample: ['14 megastores', 'Find your nearest store'], use: 'Store locator, footer band, app download banner.' },
]

document.querySelector('[data-options]').innerHTML = OPTIONS.map((o, i) => {
  const ink = o.dark ? 'text-white' : 'text-ink'
  return `
  <figure class="rounded-card overflow-hidden border border-line bg-white shadow-card flex flex-col">
    <div class="relative aspect-[16/10] overflow-hidden" style="background:${o.fallback}" role="img" aria-label="${escapeHTML(o.title)} gradient"
         data-island="shader-gradient" data-props='${JSON.stringify({ variant: o.variant })}'>
      <div data-island-root class="absolute inset-0"></div>
      <span class="absolute top-3 start-3 grid place-items-center w-10 h-10 rounded-full font-extrabold ${o.dark ? 'bg-white text-brand' : 'bg-brand text-white'}">${i + 1}</span>
      ${o.current ? `<span class="absolute top-4 end-4 badge badge-promo">In use: ${escapeHTML(o.current)}</span>` : ''}
      <div class="absolute inset-x-6 bottom-6 ${ink}">
        <p class="text-[12px] font-bold uppercase tracking-wider">${escapeHTML(o.sample[0])}</p>
        <p class="text-2xl font-extrabold leading-tight mt-1 ${o.dark ? '[text-shadow:0_2px_16px_rgb(0_0_0/.35)]' : ''}">${escapeHTML(o.sample[1])}</p>
        <span class="btn btn-sm mt-3 ${o.dark ? 'btn-white' : 'btn-primary'}">Shop now</span>
      </div>
    </div>
    <figcaption class="p-5 flex-1">
      <h2 class="h3">${i + 1}. ${escapeHTML(o.title)}</h2>
      <p class="mt-2 text-[15px]"><b>Best for:</b> ${escapeHTML(o.use)}</p>
    </figcaption>
  </figure>`
}).join('')

initApp()
