import { useRef } from 'react'
import SpaceEnvironment from './SpaceEnvironment'
import SunPlanet from './SunPlanet'
import Planet from './Planet'
import Spaceship from './Spaceship'
import CameraRig from './CameraRig'
import Effects from './Effects'
import ProximityCheck from './ProximityCheck'
import { planets } from '../../data/planets'

export default function Scene() {
  const shipRef = useRef()

  return (
    <>
      <SpaceEnvironment />
      <SunPlanet />
      {planets.map((p) => (
        <Planet key={p.id} {...p} />
      ))}
      <Spaceship ref={shipRef} />
      <CameraRig shipRef={shipRef} />
      <ProximityCheck shipRef={shipRef} />
      <Effects />
    </>
  )
}
