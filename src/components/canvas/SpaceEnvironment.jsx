import { Stars } from '@react-three/drei'

export default function SpaceEnvironment() {
  return (
    <>
      <color attach="background" args={['#0a0a1a']} />
      <ambientLight intensity={0.15} />
      <Stars radius={200} depth={80} count={3000} factor={4} fade speed={0.5} />
      <Stars radius={300} depth={100} count={1500} factor={6} fade speed={0.3} />
    </>
  )
}
