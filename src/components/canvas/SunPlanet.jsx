import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { sun } from '../../data/planets'

export default function SunPlanet() {
  const meshRef = useRef()
  const glowRef = useRef()

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.08
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(Date.now() * 0.001) * 0.05)
    }
  })

  return (
    <group position={sun.position}>
      {/* Core sun sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[sun.radius, 64, 64]} />
        <meshStandardMaterial
          color={sun.color}
          emissive={sun.emissive}
          emissiveIntensity={2}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>

      {/* Outer glow shell */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[sun.radius * 1.2, 32, 32]} />
        <meshBasicMaterial
          color={sun.color}
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Sun light */}
      <pointLight color={sun.color} intensity={5} distance={150} />
      <pointLight color="#ffffff" intensity={1} distance={200} />

      {/* Name + tagline overlay */}
      <Html
        position={[0, sun.radius + 4, 0]}
        center
        distanceFactor={50}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        <div className="text-center whitespace-nowrap"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          <div className="text-3xl font-bold text-white"
            style={{ textShadow: '0 0 20px rgba(255,170,51,0.8)' }}
          >
            {sun.label}
          </div>
          <div className="text-sm text-orange-200 mt-1 tracking-widest uppercase">
            {sun.tagline}
          </div>
        </div>
      </Html>
    </group>
  )
}
