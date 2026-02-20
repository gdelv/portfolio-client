import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Html } from '@react-three/drei'
import useStore from '../../store/useStore'

export default function Planet({ id, label, position, radius, color, emissive, type }) {
  const meshRef = useRef()
  const setFlyTarget = useStore((s) => s.setFlyTarget)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15
    }
  })

  const handleClick = (e) => {
    e.stopPropagation()
    setFlyTarget({ position, id })
  }

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group position={position}>
        <mesh ref={meshRef} onClick={handleClick}>
          <sphereGeometry args={[radius, 32, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={emissive}
            emissiveIntensity={0.4}
            roughness={0.7}
            metalness={0.3}
          />
        </mesh>

        {type === 'ring' && (
          <mesh rotation={[Math.PI / 3, 0, 0]}>
            <torusGeometry args={[radius * 1.6, 0.3, 16, 64]} />
            <meshStandardMaterial
              color={color}
              emissive={emissive}
              emissiveIntensity={0.3}
              transparent
              opacity={0.6}
            />
          </mesh>
        )}

        <pointLight color={color} intensity={2} distance={radius * 8} />

        <Html
          position={[0, radius + 2, 0]}
          center
          distanceFactor={40}
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          <div className="text-white text-lg font-semibold whitespace-nowrap opacity-80"
            style={{ fontFamily: 'Space Grotesk, sans-serif', textShadow: '0 0 10px rgba(255,255,255,0.5)' }}
          >
            {label}
          </div>
        </Html>
      </group>
    </Float>
  )
}
