import usePlanetProximity from '../../hooks/usePlanetProximity'

export default function ProximityCheck({ shipRef }) {
  usePlanetProximity(shipRef)
  return null
}
