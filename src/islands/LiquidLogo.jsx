import { LiquidMetal } from '@paper-design/shaders-react'
import logoMark from '../assets/logo-mark.png'
import logoFactory from '../assets/logo-factory.png'
import logoHorizontal from '../assets/logo-horizontal.png'
import logoSeal from '../assets/logo-seal.png'
import logoArabic from '../assets/logo-arabic.png'

/**
 * EL Arika logos rendered in liquid metal (Paper Shaders — liquid.paper.design).
 * The shader reads a black-on-transparent silhouette (raster only: its image
 * pre-processing step cannot decode SVG) and runs chrome-like reflections through
 * it; `tint` colours the metal.
 *   logo     mark | factory | horizontal | seal | arabic
 *   finish   bright (default for lettering) | classic (default for the mark) | noir | ruby
 */
const LOGOS = { mark: logoMark, factory: logoFactory, horizontal: logoHorizontal, seal: logoSeal, arabic: logoArabic }

/* Thin lettering needs wider, softer reflection bands than the solid mark to stay legible. */
const FINISHES = {
  classic: { repetition: 2, softness: 0.12, shiftRed: 0.3, shiftBlue: 0.3, distortion: 0.08, contour: 0.45 },
  bright: { repetition: 1.4, softness: 0.3, shiftRed: 0.12, shiftBlue: 0.12, distortion: 0.05, contour: 0.25 },
  noir: { repetition: 1.5, softness: 0.45, shiftRed: 0, shiftBlue: 0, distortion: 0.05, contour: 0.3 },
  ruby: { repetition: 1.2, softness: 0.4, shiftRed: 0.65, shiftBlue: 0, distortion: 0.05, contour: 0.2 },
}

/* `glow` keeps letter edges readable on near-black backgrounds, where the shader's dark bands disappear. */
const glowFilter = (c) => `drop-shadow(0 0 1px ${c}) drop-shadow(0 0 1px ${c}) drop-shadow(0 0 18px ${c}88)`

export default function LiquidLogo({ logo = 'mark', finish, tint = '#ff2a2a', back = '#00000000', scale = 0.82, shadow = true, glow, reducedMotion }) {
  const params = FINISHES[finish] ?? (logo === 'mark' ? FINISHES.classic : FINISHES.bright)
  const filter = glow ? glowFilter(glow) : shadow && logo !== 'mark' ? 'drop-shadow(0 12px 28px rgb(40 0 0 / .4))' : undefined
  return (
    <LiquidMetal
      image={LOGOS[logo] ?? logoMark}
      colorBack={back}
      colorTint={tint}
      {...params}
      angle={70}
      speed={reducedMotion ? 0 : 0.8}
      scale={scale}
      fit="contain"
      style={{ width: '100%', height: '100%', filter }}
    />
  )
}
