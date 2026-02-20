import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { planets } from '../data/planets'
import useStore from '../store/useStore'

const OPEN_DISTANCE = 20
const CLOSE_DISTANCE = 28
const _planetPos = new THREE.Vector3()

export default function usePlanetProximity(shipRef) {
  useFrame(() => {
    if (!shipRef.current) return
    const shipPos = shipRef.current.position
    const { activePanel, panelDismissed, openPanel, closePanel, clearDismissed } = useStore.getState()

    let closestId = null
    let closestDist = Infinity

    for (const p of planets) {
      _planetPos.set(p.position[0], p.position[1], p.position[2])
      const dist = shipPos.distanceTo(_planetPos)
      if (dist < closestDist) {
        closestDist = dist
        closestId = p.id
      }
    }

    if (closestDist > CLOSE_DISTANCE) {
      // Ship is far from all planets — reset dismissed flag so next approach works
      if (panelDismissed) clearDismissed()
      if (activePanel) closePanel()
    } else if (closestDist < OPEN_DISTANCE && !activePanel && !panelDismissed) {
      openPanel(closestId)
    }
  })
}
