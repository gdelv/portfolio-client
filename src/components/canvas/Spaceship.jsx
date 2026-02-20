import { forwardRef, useRef, useImperativeHandle } from 'react'
import { Trail } from '@react-three/drei'
import useKeyboard from '../../hooks/useKeyboard'
import useSpaceshipControls from '../../hooks/useSpaceshipControls'

const Spaceship = forwardRef(function Spaceship(_, ref) {
  const groupRef = useRef()
  const keys = useKeyboard()
  useSpaceshipControls(groupRef, keys)

  // Expose the inner group ref to parent
  useImperativeHandle(ref, () => groupRef.current)

  return (
    <group ref={groupRef} position={[0, 1, 20]}>
      <Trail
        width={2}
        length={6}
        color="#ff6633"
        attenuation={(t) => t * t}
      >
        <group>
          {/* Fuselage - cone pointing forward (-Z) */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <coneGeometry args={[0.5, 2.5, 8]} />
            <meshStandardMaterial color="#ccccdd" metalness={0.8} roughness={0.2} />
          </mesh>

          {/* Cockpit */}
          <mesh position={[0, 0.25, -0.3]}>
            <sphereGeometry args={[0.35, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#4a9eff" metalness={0.5} roughness={0.1} transparent opacity={0.7} />
          </mesh>

          {/* Left wing */}
          <mesh position={[-1, -0.1, 0.3]} rotation={[0, 0, -0.15]}>
            <boxGeometry args={[1.5, 0.08, 0.8]} />
            <meshStandardMaterial color="#999aab" metalness={0.7} roughness={0.3} />
          </mesh>

          {/* Right wing */}
          <mesh position={[1, -0.1, 0.3]} rotation={[0, 0, 0.15]}>
            <boxGeometry args={[1.5, 0.08, 0.8]} />
            <meshStandardMaterial color="#999aab" metalness={0.7} roughness={0.3} />
          </mesh>

          {/* Engine glow */}
          <mesh position={[0, 0, 1.2]}>
            <sphereGeometry args={[0.25, 16, 16]} />
            <meshBasicMaterial color="#ff4400" />
          </mesh>
          <pointLight position={[0, 0, 1.5]} color="#ff4400" intensity={2} distance={8} />
        </group>
      </Trail>
    </group>
  )
})

export default Spaceship
