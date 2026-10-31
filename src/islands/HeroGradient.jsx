import { useEffect, useState } from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

/**
 * Animated 3D brand gradient (ShaderGradient v2 on React Three Fiber).
 * Variants are adapted from the library's presets (Halo, Mandarin, Mint, Universe,
 * Sunset, Cotton Candy)
 * and recoloured with the EL Arika palette so each placement stays on-brand.
 */
const VARIANTS = {
  hero: {
    type: 'waterPlane', uSpeed: 0.2, uStrength: 3, uDensity: 1.6, uFrequency: 5.5, uAmplitude: 0,
    color1: '#e30613', color2: '#b0120a', color3: '#ff8a4c',
    positionX: 0, positionY: -1.2, rotationZ: 225, cAzimuthAngle: 180, cPolarAngle: 95, cDistance: 2.6, brightness: 0.95,
  },
  finance: {
    type: 'waterPlane', uSpeed: 0.18, uStrength: 2.4, uDensity: 1.2, uFrequency: 5.5, uAmplitude: 0,
    color1: '#ffd57b', color2: '#fff1cf', color3: '#ffb84d',
    positionX: 0, positionY: 0.9, rotationX: 45, rotationZ: 0, cAzimuthAngle: 170, cPolarAngle: 70, cDistance: 4.4, brightness: 1.2,
  },
  dark: {
    type: 'waterPlane', uSpeed: 0.15, uStrength: 2.6, uDensity: 1.4, uFrequency: 5.5, uAmplitude: 0,
    color1: '#e30613', color2: '#5c0a0a', color3: '#161616',
    positionX: -0.5, positionY: 0.1, rotationZ: 235, cAzimuthAngle: 180, cPolarAngle: 115, cDistance: 3.9, brightness: 1.1,
  },
  /* Flash-sale energy: the "Halo" plane, red → orange → promo yellow. */
  sunset: {
    type: 'plane', uSpeed: 0.3, uStrength: 4, uDensity: 1.3, uFrequency: 5.5, uAmplitude: 1,
    color1: '#e30613', color2: '#ff8a3c', color3: '#ffd57b',
    positionX: -1.4, rotationY: 10, rotationZ: 50, cAzimuthAngle: 180, cPolarAngle: 90, cDistance: 3.6, brightness: 1.2,
  },
  /* A glowing liquid orb ("Sunset" sphere preset) for product spotlights. */
  orb: {
    type: 'sphere', uSpeed: 0.12, uStrength: 0.4, uDensity: 1.1, uFrequency: 5.5, uAmplitude: 1.4,
    color1: '#ff3d2e', color2: '#ffb36b', color3: '#e30613',
    positionX: 1.5, positionY: 0.1, cAzimuthAngle: 60, cPolarAngle: 90, cDistance: 7.1, cameraZoom: 3.2, brightness: 1.4,
  },
  /* Black Friday / night sale: brand red into navy and black. */
  night: {
    type: 'waterPlane', uSpeed: 0.15, uStrength: 2.4, uDensity: 1.1, uFrequency: 5.5, uAmplitude: 0,
    color1: '#e30613', color2: '#1e3e93', color3: '#0b0b12',
    positionX: -0.5, positionY: 0.1, rotationZ: 235, cAzimuthAngle: 180, cPolarAngle: 115, cDistance: 3.9, brightness: 1.1,
  },
  /* Ramadan / premium: warm gold and bronze. */
  gold: {
    type: 'waterPlane', uSpeed: 0.18, uStrength: 3, uDensity: 1.8, uFrequency: 5.5, uAmplitude: 0,
    color1: '#c8902e', color2: '#ffd57b', color3: '#4a2006',
    positionY: -2.1, rotationZ: 225, cAzimuthAngle: 180, cPolarAngle: 95, cDistance: 2.4, brightness: 1.1,
  },
  /* Sahara sand & terracotta: living-room and décor campaigns. */
  sahara: {
    type: 'waterPlane', uSpeed: 0.12, uStrength: 2.4, uDensity: 1.1, uFrequency: 5.5, uAmplitude: 0,
    color1: '#c0593a', color2: '#ecd2a6', color3: '#7a3b1d',
    positionX: -0.5, positionY: 0.1, rotationZ: 235, cAzimuthAngle: 180, cPolarAngle: 115, cDistance: 3.9, brightness: 1.15,
  },
  /* Barely-there white/blush ("Cotton Candy") for light sections behind products. */
  soft: {
    type: 'waterPlane', uSpeed: 0.25, uStrength: 3, uDensity: 1, uFrequency: 5.5, uAmplitude: 0,
    color1: '#ffffff', color2: '#fdeeec', color3: '#ececec',
    positionY: 1.8, rotationZ: -90, cAzimuthAngle: 180, cPolarAngle: 120, cDistance: 2.9, brightness: 1.2,
  },
  /* Trust blue ("Mint" preset) for financing and services pages. */
  trust: {
    type: 'waterPlane', uSpeed: 0.2, uStrength: 3.4, uDensity: 1.2, uFrequency: 0, uAmplitude: 0,
    color1: '#1e3e93', color2: '#4a6fd6', color3: '#a9bdf0',
    positionY: 0.9, positionZ: -0.3, rotationX: 45, cAzimuthAngle: 170, cPolarAngle: 70, cDistance: 4.4, brightness: 1.2,
  },
}

/** Only keep a WebGL context alive while the placement is on screen. */
function useInView(el) {
  const [inView, setInView] = useState(true)
  useEffect(() => {
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: '200px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [el])
  return inView
}

export default function HeroGradient({ variant = 'hero', reducedMotion, host }) {
  const v = VARIANTS[variant] ?? VARIANTS.hero
  const inView = useInView(host)
  if (!inView) return null
  return (
    <ShaderGradientCanvas style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} pixelDensity={1} fov={45} pointerEvents="none" lazyLoad={false}>
      <ShaderGradient
        {...v}
        animate={reducedMotion ? 'off' : 'on'}
        lightType="3d"
        grain="off"
        reflection={0.1}
        shader="defaults"
      />
    </ShaderGradientCanvas>
  )
}
