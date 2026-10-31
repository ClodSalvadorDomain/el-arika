import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, RoundedBox, ContactShadows, Environment, Lightformer } from '@react-three/drei'

/**
 * 360° product viewer (React Three Fiber). The sofa is procedural so it loads
 * instantly; swap <Sofa> for useGLTF('/models/sku.glb') when real models exist.
 * Listens to `viewer:update` CustomEvents: { color: '#hex', size: '2'|'3'|'corner' }.
 */
const SEAT = 0.62
const ARM = 0.17
const DEPTH = 0.92

function Fabric({ color }) {
  return <meshStandardMaterial color={color} roughness={0.92} metalness={0} />
}

function Sofa({ color, size }) {
  const seats = size === '2' ? 2 : 3
  const corner = size === 'corner'
  const W = seats * SEAT + ARM * 2
  const group = useRef()
  const target = useRef(0)

  // Gentle "settle" animation whenever the configuration changes.
  useEffect(() => { target.current = 1 }, [size, color])
  useFrame((_, dt) => {
    if (!group.current) return
    target.current = Math.max(0, target.current - dt * 2.5)
    group.current.position.y = Math.sin(target.current * Math.PI) * 0.04
  })

  const seatXs = useMemo(() => Array.from({ length: seats }, (_, i) => -W / 2 + ARM + SEAT / 2 + i * SEAT), [seats, W])
  const legs = [[-W / 2 + 0.08, -DEPTH / 2 + 0.08], [W / 2 - 0.08, -DEPTH / 2 + 0.08], [-W / 2 + 0.08, DEPTH / 2 - 0.08], [W / 2 - 0.08, DEPTH / 2 - 0.08]]
  if (corner) legs.push([W / 2 - ARM - 0.08, DEPTH / 2 + 0.62])

  return (
    <group ref={group} position={[corner ? -0.25 : 0, 0, corner ? -0.2 : 0]}>
      {legs.map(([x, z], i) => (
        <mesh key={i} position={[x, 0.06, z]} castShadow>
          <cylinderGeometry args={[0.022, 0.016, 0.12, 12]} />
          <meshStandardMaterial color="#7a5232" roughness={0.5} />
        </mesh>
      ))}
      {/* base */}
      <RoundedBox args={[W, 0.2, DEPTH]} radius={0.04} smoothness={4} position={[0, 0.22, 0]} castShadow receiveShadow>
        <Fabric color={color} />
      </RoundedBox>
      {/* back frame */}
      <RoundedBox args={[W, 0.56, 0.18]} radius={0.05} smoothness={4} position={[0, 0.58, -DEPTH / 2 + 0.09]} castShadow>
        <Fabric color={color} />
      </RoundedBox>
      {/* arms */}
      {[-1, 1].map((s) => (corner && s === 1 ? null : (
        <RoundedBox key={s} args={[ARM, 0.4, DEPTH]} radius={0.06} smoothness={4} position={[s * (W / 2 - ARM / 2), 0.46, 0]} castShadow>
          <Fabric color={color} />
        </RoundedBox>
      )))}
      {/* seat + back cushions */}
      {seatXs.map((x, i) => (
        <group key={i}>
          <RoundedBox args={[SEAT - 0.02, 0.16, DEPTH - 0.24]} radius={0.06} smoothness={5} position={[x, 0.4, 0.08]} castShadow>
            <Fabric color={color} />
          </RoundedBox>
          <RoundedBox args={[SEAT - 0.03, 0.44, 0.2]} radius={0.08} smoothness={5} position={[x, 0.68, -DEPTH / 2 + 0.26]} rotation={[-0.14, 0, 0]} castShadow>
            <Fabric color={color} />
          </RoundedBox>
        </group>
      ))}
      {/* chaise longue for the corner configuration */}
      {corner && (
        <group>
          <RoundedBox args={[SEAT + ARM, 0.2, 0.74]} radius={0.04} smoothness={4} position={[W / 2 - (SEAT + ARM) / 2, 0.22, DEPTH / 2 + 0.33]} castShadow>
            <Fabric color={color} />
          </RoundedBox>
          <RoundedBox args={[SEAT - 0.02, 0.16, 0.72]} radius={0.06} smoothness={5} position={[seatXs[seats - 1], 0.4, DEPTH / 2 + 0.3]} castShadow>
            <Fabric color={color} />
          </RoundedBox>
          <RoundedBox args={[ARM, 0.4, DEPTH + 0.74]} radius={0.06} smoothness={4} position={[W / 2 - ARM / 2, 0.46, 0.37]} castShadow>
            <Fabric color={color} />
          </RoundedBox>
        </group>
      )}
      {/* accent cushions */}
      {[seatXs[0], seatXs[seats - 1]].map((x, i) => (
        <RoundedBox key={i} args={[0.4, 0.38, 0.12]} radius={0.06} smoothness={4} position={[x + (i ? -0.08 : 0.08), 0.66, -0.12]} rotation={[-0.25, i ? -0.3 : 0.3, i ? -0.06 : 0.06]} castShadow>
          <meshStandardMaterial color={i ? '#ffd57b' : '#f4f1ea'} roughness={0.95} />
        </RoundedBox>
      ))}
    </group>
  )
}

export default function Sofa3D({ color: initialColor = '#5f7a5d', size: initialSize = '3', reducedMotion }) {
  const [color, setColor] = useState(initialColor)
  const [size, setSize] = useState(initialSize)
  const [autoRotate, setAutoRotate] = useState(!reducedMotion)
  const controls = useRef()

  useEffect(() => {
    const onUpdate = (e) => {
      if (e.detail.color) setColor(e.detail.color)
      if (e.detail.size) setSize(e.detail.size)
      if ('autoRotate' in e.detail) setAutoRotate(e.detail.autoRotate)
      if (e.detail.reset) controls.current?.reset()
    }
    window.addEventListener('viewer:update', onUpdate)
    return () => window.removeEventListener('viewer:update', onUpdate)
  }, [])

  return (
    <Canvas shadows="percentage" dpr={[1, 2]} camera={{ position: [2.4, 1.45, 2.9], fov: 34 }} gl={{ antialias: true, alpha: true }}
      aria-label="Interactive 3D view of the sofa. Drag to rotate, scroll to zoom." role="img">
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 5, 3]} intensity={1.6} castShadow shadow-mapSize={[1024, 1024]} />
      <Environment resolution={128}>
        <Lightformer intensity={2} position={[0, 4, 3]} scale={[6, 2, 1]} />
        <Lightformer intensity={1} position={[-4, 1, -2]} rotation-y={Math.PI / 2} scale={[4, 2, 1]} />
        <Lightformer intensity={0.8} color="#ffd57b" position={[4, 1, 0]} rotation-y={-Math.PI / 2} scale={[3, 2, 1]} />
      </Environment>
      <Sofa color={color} size={size} />
      <ContactShadows position={[0, 0, 0]} opacity={0.45} scale={8} blur={2.4} far={2} />
      <OrbitControls ref={controls} makeDefault enablePan={false} minDistance={2.2} maxDistance={6} minPolarAngle={0.35} maxPolarAngle={Math.PI / 2.05}
        autoRotate={autoRotate} autoRotateSpeed={0.8} target={[0, 0.45, 0]} />
    </Canvas>
  )
}
