import { initApp } from '../app.js'
import { escapeHTML } from '../core/format.js'
import mark from '../../assets/logo-mark.png'
import factory from '../../assets/logo-factory.png'
import horizontal from '../../assets/logo-horizontal.png'
import seal from '../../assets/logo-seal.png'
import arabic from '../../assets/logo-arabic.png'

const ART = { mark, factory, horizontal, seal, arabic }
const BG = {
  red: 'background: radial-gradient(120% 120% at 15% 10%, #ff5a36 0%, #e30613 45%, #8f0a07 100%)',
  gold: 'background: radial-gradient(120% 120% at 80% 0%, #b3120c 0%, #6e0805 55%, #2a0302 100%)',
  black: 'background: radial-gradient(120% 120% at 50% 0%, #2b2b2b 0%, #121212 70%)',
  white: 'background: linear-gradient(180deg, #ffffff, #f2f2f2)',
}

const OPTIONS = [
  { title: 'Silver chrome — stacked', logo: 'factory', tint: '#ffffff', bg: 'red',
    use: 'Homepage hero, big campaign banners.', why: 'Highest contrast on the brand red; the most readable at any size.' },
  { title: 'Gold — stacked', logo: 'factory', tint: '#ffcf6b', bg: 'gold',
    use: 'Ramadan / Eid campaigns, premium kitchens, "Best price" events.', why: 'Feels festive and premium while keeping the red family.' },
  { title: 'Ruby red metal on black', logo: 'factory', tint: '#ffd0c8', finish: 'ruby', glow: '#ff2a2a', bg: 'black',
    use: 'Black Friday / night sales, social media, store screens.', why: 'Dramatic and on-brand; the red metal glows against black.' },
  { title: 'Horizontal lockup', logo: 'horizontal', tint: '#ffffff', bg: 'red', ratio: 'aspect-[16/7]',
    use: 'Wide banners, email headers, top-of-page strips, store fascia.', why: 'Fits long, short spaces where the stacked version gets too small.' },
  { title: 'Round seal', logo: 'seal', tint: '#ffffff', bg: 'red', scale: 0.86,
    use: '"Made in Algeria" / factory-quality badge, stickers, packaging, social avatars.', why: 'Works as a stamp of quality; reads well in a circle crop.' },
  { title: 'Bilingual — Arabic + Latin', logo: 'arabic', tint: '#ffffff', bg: 'red', current: true,
    use: 'Arabic version of the site, billboards, local TV and print.', why: 'Speaks to the Algerian market first while keeping the Latin name.' },
  { title: 'Dark chrome on white', logo: 'factory', tint: '#5c5c5c', finish: 'noir', bg: 'white', shadow: false,
    use: 'White sections, About page, invoices / PDFs, footer.', why: 'A quieter, corporate version for light backgrounds.' },
  { title: 'Mark only', logo: 'mark', tint: '#ffb3a8', bg: 'red', scale: 0.7,
    use: 'App icon, favicon animation, loading screen, small spaces.', why: 'The original liquid house mark — compact and instantly recognisable.' },
]

document.querySelector('[data-options]').innerHTML = OPTIONS.map((o, i) => {
  const props = { logo: o.logo, tint: o.tint, scale: o.scale ?? 0.9, ...(o.finish && { finish: o.finish }), ...(o.shadow === false && { shadow: false }), ...(o.glow && { glow: o.glow }) }
  const dark = o.bg !== 'white'
  return `
  <figure class="rounded-card overflow-hidden border border-line bg-white shadow-card flex flex-col">
    <div class="relative ${o.ratio ?? 'aspect-[16/10]'}" style="${BG[o.bg]}" role="img" aria-label="${escapeHTML(o.title)}"
         data-island="liquid-logo" data-props='${JSON.stringify(props)}'>
      <img src="${ART[o.logo]}" alt="" class="island-fallback absolute inset-[10%] w-[80%] h-[80%] object-contain ${dark ? 'invert opacity-25' : 'opacity-20'}" />
      <div data-island-root class="absolute inset-[6%]"></div>
      <span class="absolute top-3 start-3 grid place-items-center w-10 h-10 rounded-full font-extrabold ${dark ? 'bg-white text-brand' : 'bg-brand text-white'}">${i + 1}</span>
      ${o.current ? '<span class="absolute top-4 end-4 badge badge-promo">Current hero</span>' : ''}
    </div>
    <figcaption class="p-5 flex-1">
      <h2 class="h3">${i + 1}. ${escapeHTML(o.title)}</h2>
      <p class="mt-2 text-[15px]"><b>Best for:</b> ${escapeHTML(o.use)}</p>
      <p class="mt-1 text-[15px] text-muted-strong">${escapeHTML(o.why)}</p>
    </figcaption>
  </figure>`
}).join('')

initApp()
