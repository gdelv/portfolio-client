import { useEffect, useRef } from 'react'

export default function useKeyboard() {
  const keys = useRef({})

  useEffect(() => {
    const onDown = (e) => {
      keys.current[e.code] = true
    }
    const onUp = (e) => {
      keys.current[e.code] = false
    }
    window.addEventListener('keydown', onDown)
    window.addEventListener('keyup', onUp)
    return () => {
      window.removeEventListener('keydown', onDown)
      window.removeEventListener('keyup', onUp)
    }
  }, [])

  return keys
}
