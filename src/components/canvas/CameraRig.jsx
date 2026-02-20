import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const OFFSET = new THREE.Vector3(0, 8, 16)
const LOOK_AHEAD = new THREE.Vector3(0, 2, -10)
const _camPos = new THREE.Vector3()
const _lookAt = new THREE.Vector3()

export default function CameraRig({ shipRef }) {
  const smoothPos = useRef(new THREE.Vector3(0, 9, 36))
  const smoothLook = useRef(new THREE.Vector3(0, 2, 10))

  useFrame((state, delta) => {
    if (!shipRef.current) return
    const dt = Math.min(delta, 0.05)

    const ship = shipRef.current
    const heading = ship.rotation.y

    // Calculate desired camera position (behind + above ship)
    const sinH = Math.sin(heading)
    const cosH = Math.cos(heading)
    _camPos.set(
      ship.position.x + sinH * OFFSET.z,
      ship.position.y + OFFSET.y,
      ship.position.z + cosH * OFFSET.z
    )

    // Calculate look-at target (ahead of ship)
    _lookAt.set(
      ship.position.x - sinH * (-LOOK_AHEAD.z),
      ship.position.y + LOOK_AHEAD.y,
      ship.position.z - cosH * (-LOOK_AHEAD.z)
    )

    // Smooth follow
    smoothPos.current.lerp(_camPos, dt * 3)
    smoothLook.current.lerp(_lookAt, dt * 4)

    state.camera.position.copy(smoothPos.current)
    state.camera.lookAt(smoothLook.current)
  })

  return null
}
