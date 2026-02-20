import { useEffect, useState } from 'react'
import useStore from '../../store/useStore'

export default function LoadingScreen() {
  const setLoaded = useStore((s) => s.setLoaded)
  const [fadeOut, setFadeOut] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let p = 0
    let cancelled = false
    const interval = setInterval(() => {
      if (cancelled) return
      p += Math.random() * 25 + 10
      if (p >= 100) {
        p = 100
        setProgress(100)
        clearInterval(interval)
        setTimeout(() => {
          if (!cancelled) setFadeOut(true)
        }, 300)
        setTimeout(() => {
          if (!cancelled) {
            setHidden(true)
            setLoaded()
          }
        }, 1000)
        return
      }
      setProgress(p)
    }, 200)
    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [setLoaded])

  if (hidden) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a1a] transition-opacity duration-700 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1
        className="text-4xl font-bold mb-2 text-white"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        Giusseppe
      </h1>
      <p className="text-gray-400 text-sm tracking-widest uppercase mb-8">
        Software Engineer
      </p>
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-gray-500 text-xs mt-3">
        {Math.round(progress)}%
      </p>
    </div>
  )
}
