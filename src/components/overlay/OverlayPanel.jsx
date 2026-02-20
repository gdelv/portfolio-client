import { useEffect, useState } from 'react'
import useStore from '../../store/useStore'
import CloseButton from './CloseButton'

export default function OverlayPanel({ children }) {
  const activePanel = useStore((s) => s.activePanel)
  const closePanel = useStore((s) => s.closePanel)
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (activePanel) {
      setMounted(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true))
      })
    } else {
      setVisible(false)
      const timer = setTimeout(() => setMounted(false), 300)
      return () => clearTimeout(timer)
    }
  }, [activePanel])

  if (!mounted) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={closePanel} />

      {/* Panel */}
      <div
        className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto overlay-scroll rounded-2xl border border-white/10 p-8 transition-transform duration-300 ${
          visible ? 'scale-100' : 'scale-95'
        }`}
        style={{
          background: 'rgba(15, 15, 35, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <CloseButton />
        {children}
      </div>
    </div>
  )
}
