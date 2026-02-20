import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import useStore from '../store/useStore'

const SPEED = 18
const TURN_SPEED = 2.5
const DRAG = 0.92
const BANK_AMOUNT = 0.4
const AUTO_FLY_SPEED = 22
const ARRIVAL_DISTANCE = 18

const _tmpVec = new THREE.Vector3()

export default function useSpaceshipControls(meshRef, keys) {
  const velocity = useRef(0)
  const heading = useRef(0)
  const bank = useRef(0)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    const dt = Math.min(delta, 0.05) // cap delta

    const flyTarget = useStore.getState().flyTarget
    const clearFlyTarget = useStore.getState().clearFlyTarget

    const k = keys.current
    const forward = k.KeyW || k.ArrowUp
    const backward = k.KeyS || k.ArrowDown
    const left = k.KeyA || k.ArrowLeft
    const right = k.KeyD || k.ArrowRight

    const hasManualInput = forward || backward || left || right

    // Manual input cancels auto-fly
    if (hasManualInput && flyTarget) {
      clearFlyTarget()
    }

    if (flyTarget && !hasManualInput) {
      // Auto-fly mode
      const targetPos = _tmpVec.set(
        flyTarget.position[0],
        flyTarget.position[1],
        flyTarget.position[2]
      )
      const shipPos = meshRef.current.position
      const direction = _tmpVec.clone().sub(shipPos)
      const distance = direction.length()

      if (distance < ARRIVAL_DISTANCE) {
        velocity.current *= 0.9
        if (velocity.current < 0.5) {
          velocity.current = 0
          clearFlyTarget()
        }
      } else {
        // Steer toward target
        const targetAngle = Math.atan2(-direction.x, -direction.z)
        let angleDiff = targetAngle - heading.current
        // Normalize angle
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2
        heading.current += angleDiff * dt * 3
        velocity.current = THREE.MathUtils.lerp(velocity.current, AUTO_FLY_SPEED, dt * 2)

        // Banking during auto-fly turns
        bank.current = THREE.MathUtils.lerp(bank.current, -angleDiff * 0.5, dt * 4)
      }

      // Move toward Y of target
      const yDiff = targetPos.y - shipPos.y
      shipPos.y += yDiff * dt * 2
    } else {
      // Manual flight
      if (left) heading.current += TURN_SPEED * dt
      if (right) heading.current -= TURN_SPEED * dt

      if (forward) velocity.current = THREE.MathUtils.lerp(velocity.current, SPEED, dt * 3)
      else if (backward) velocity.current = THREE.MathUtils.lerp(velocity.current, -SPEED * 0.5, dt * 3)
      else velocity.current *= DRAG

      // Banking on turns
      const turnInput = (left ? 1 : 0) - (right ? 1 : 0)
      bank.current = THREE.MathUtils.lerp(bank.current, turnInput * BANK_AMOUNT, dt * 5)
    }

    // Apply movement
    const mesh = meshRef.current
    mesh.position.x -= Math.sin(heading.current) * velocity.current * dt
    mesh.position.z -= Math.cos(heading.current) * velocity.current * dt

    // Apply rotation
    mesh.rotation.y = heading.current
    mesh.rotation.z = bank.current

    // Gentle hover bob
    mesh.position.y += Math.sin(Date.now() * 0.002) * 0.003
  })

  return { velocity, heading }
}
