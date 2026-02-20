import { useEffect, useState } from 'react'
import useStore from '../../store/useStore'

export default function NavigationHints() {
  const isLoaded = useStore((s) => s.isLoaded)
  const showHints = useStore((s) => s.showHints)
  const hideHints = useStore((s) => s.hideHints)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isLoaded) {
      const t = setTimeout(() => setVisible(true), 500)
      return () => clearTimeout(t)
    }
  }, [isLoaded])

  useEffect(() => {
    if (visible) {
      const t = setTimeout(hideHints, 8000)
      return () => clearTimeout(t)
    }
  }, [visible, hideHints])

  if (!showHints || !visible) return null

  const isMobile = 'ontouchstart' in window

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 text-center pointer-events-none">
      <div className="inline-block px-6 py-3 rounded-xl bg-black/50 border border-white/10 backdrop-blur-sm">
        {isMobile ? (
          <p className="text-gray-300 text-sm">Tap a planet to explore</p>
        ) : (
          <div className="flex flex-col items-center gap-1">
            <p className="text-gray-300 text-sm">
              <kbd className="px-2 py-0.5 rounded bg-white/10 text-xs font-mono">W</kbd>
              <kbd className="px-2 py-0.5 rounded bg-white/10 text-xs font-mono ml-1">A</kbd>
              <kbd className="px-2 py-0.5 rounded bg-white/10 text-xs font-mono ml-1">S</kbd>
              <kbd className="px-2 py-0.5 rounded bg-white/10 text-xs font-mono ml-1">D</kbd>
              <span className="ml-2">to fly</span>
            </p>
            <p className="text-gray-500 text-xs">or click a planet to auto-fly</p>
          </div>
        )}
      </div>
    </div>
  )
}
