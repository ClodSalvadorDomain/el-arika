import { useEffect, useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, RoundedBox, ContactShadows, Environment, Lightformer } from '@react-three/drei'

/**
 * Free 3D kitchen planner teaser (React Three Fiber).
 * Listens to `kitchen:update` CustomEvents: { width: 180|240|300, finish: key }.
 */
export const FINISHES = {
  white: { front: '#f3f2ee', top: '#d9d4cc' },
  oak: { front: '#c49a6c', top: '#efece6' },
  anthracite: { front: '#3b3d40', top: '#e9e6e0' },
  green: { front: '#5f7a5d', top: '#efece6' },
}

const BASE_H = 0.86, BASE_D = 0.6, WALL_Y = 1.45, WALL_H = 0.7, WALL_D = 0.34, COL_W = 0.6, COL_H = 2.15

function Handle({ position, vertical }) {
  return (
    <mesh position={position}>
      <boxGeometry args={vertical ? [0.015, 0.22, 0.02] : [0.22, 0.015, 0.02]} />
      <meshStandardMaterial color="#9a9a9a" metalness={0.9} roughness={0.25} />
    </mesh>
  )
}

function Kitchen({ width, finish }) {
  const f = FINISHES[finish] ?? FINISHES.white
  const W = width / 100
  const run = W - COL_W
  const modules = useMemo(() => {
    const n = Math.max(2, Math.round(run / 0.6))
    const w = run / n
    return Array.from({ length: n }, (_, i) => ({ x: -W / 2 + COL_W + w / 2 + i * w, w }))
  }, [W, run])
  const ovenIdx = Math.floor(modules.length / 2) - (modules.length > 3 ? 1 : 0)
  const sinkIdx = modules.length - 1
  const front = <meshStandardMaterial color={f.front} roughness={0.45} />

  return (
    <group>
      {/* tall fridge column */}
      <RoundedBox args={[COL_W - 0.01, COL_H, BASE_D]} radius={0.01} position={[-W / 2 + COL_W / 2, COL_H / 2, 0]} castShadow>{front}</RoundedBox>
      <Handle position={[-W / 2 + COL_W - 0.06, 1.0, BASE_D / 2 + 0.01]} vertical />
      <Handle position={[-W / 2 + COL_W - 0.06, 1.5, BASE_D / 2 + 0.01]} vertical />

      {modules.map((m, i) => (
        <group key={i}>
          <RoundedBox args={[m.w - 0.008, BASE_H - 0.1, BASE_D]} radius={0.008} position={[m.x, 0.1 + (BASE_H - 0.1) / 2, 0]} castShadow>{front}</RoundedBox>
          {i === ovenIdx ? (
            <mesh position={[m.x, 0.52, BASE_D / 2 + 0.005]}>
              <boxGeometry args={[m.w - 0.06, 0.5, 0.01]} />
              <meshStandardMaterial color="#141414" metalness={0.6} roughness={0.15} />
            </mesh>
          ) : (
            <Handle position={[m.x, BASE_H - 0.08, BASE_D / 2 + 0.01]} />
          )}
          {/* wall units (skip above the hob for the hood) */}
          {i !== ovenIdx && (
            <group>
              <RoundedBox args={[m.w - 0.008, WALL_H, WALL_D]} radius={0.008} position={[m.x, WALL_Y + WALL_H / 2, -BASE_D / 2 + WALL_D / 2]} castShadow>{front}</RoundedBox>
              <Handle position={[m.x, WALL_Y + 0.06, -BASE_D / 2 + WALL_D + 0.01]} />
            </group>
          )}
        </group>
      ))}

      {/* plinth */}
      <mesh position={[COL_W / 2, 0.05, BASE_D / 2 - 0.05]}>
        <boxGeometry args={[run, 0.1, 0.02]} />
        <meshStandardMaterial color="#2b2b2b" />
      </mesh>
      {/* worktop */}
      <RoundedBox args={[run + 0.01, 0.04, BASE_D + 0.03]} radius={0.006} position={[COL_W / 2, BASE_H + 0.02, 0.015]} castShadow receiveShadow>
        <meshStandardMaterial color={f.top} roughness={0.3} />
      </RoundedBox>
      {/* hob + hood */}
      <mesh position={[modules[ovenIdx].x, BASE_H + 0.045, 0.02]}>
        <boxGeometry args={[0.56, 0.01, 0.48]} />
        <meshStandardMaterial color="#0d0d0d" metalness={0.3} roughness={0.1} />
      </mesh>
      <mesh position={[modules[ovenIdx].x, 1.75, -BASE_D / 2 + 0.2]} castShadow>
        <boxGeometry args={[0.58, 0.5, 0.4]} />
        <meshStandardMaterial color="#bfc2c5" metalness={0.85} roughness={0.25} />
      </mesh>
      {/* sink + tap */}
      <mesh position={[modules[sinkIdx].x, BASE_H + 0.042, 0.03]}>
        <boxGeometry args={[Math.min(0.5, modules[sinkIdx].w - 0.1), 0.006, 0.4]} />
        <meshStandardMaterial color="#8d9196" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[modules[sinkIdx].x, BASE_H + 0.18, -0.22]}>
        <cylinderGeometry args={[0.015, 0.02, 0.28, 16]} />
        <meshStandardMaterial color="#c7cacd" metalness={1} roughness={0.15} />
      </mesh>

      {/* room shell */}
      <mesh position={[0, 1.3, -BASE_D / 2 - 0.01]} receiveShadow>
        <planeGeometry args={[W + 1.6, 2.6]} />
        <meshStandardMaterial color="#f6f4f0" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0.6]} receiveShadow>
        <planeGeometry args={[W + 1.6, 2.6]} />
        <meshStandardMaterial color="#e9e3da" />
      </mesh>
    </group>
  )
}

export default function Kitchen3D({ width: w0 = 240, finish: f0 = 'white' }) {
  const [width, setWidth] = useState(w0)
  const [finish, setFinish] = useState(f0)
  useEffect(() => {
    const on = (e) => { if (e.detail.width) setWidth(e.detail.width); if (e.detail.finish) setFinish(e.detail.finish) }
    window.addEventListener('kitchen:update', on)
    return () => window.removeEventListener('kitchen:update', on)
  }, [])
  const dist = 2.2 + width / 100

  return (
    <Canvas shadows="percentage" dpr={[1, 2]} camera={{ position: [dist * 0.55, 1.7, dist], fov: 38 }} gl={{ antialias: true }}
      role="img" aria-label={`3D preview of a ${width} cm fitted kitchen. Drag to rotate.`}>
      <color attach="background" args={['#f2f2f2']} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 4, 4]} intensity={1.4} castShadow shadow-mapSize={[1024, 1024]} />
      <Environment resolution={128}>
        <Lightformer intensity={2} position={[0, 3, 4]} scale={[8, 2, 1]} />
        <Lightformer intensity={0.6} color="#ffd57b" position={[-5, 2, 0]} rotation-y={Math.PI / 2} scale={[4, 3, 1]} />
      </Environment>
      <Kitchen width={width} finish={finish} />
      <ContactShadows position={[0, 0.001, 0]} opacity={0.35} scale={8} blur={2} far={2.5} />
      <OrbitControls makeDefault enablePan={false} minDistance={2.2} maxDistance={7} minAzimuthAngle={-1} maxAzimuthAngle={1}
        minPolarAngle={0.6} maxPolarAngle={Math.PI / 2.1} target={[0, 1, 0]} />
    </Canvas>
  )
}
