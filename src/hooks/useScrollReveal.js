import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    const root = document.getElementById('root')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { root, threshold: 0.15 }
    )

    const elements = document.querySelectorAll(selectors)
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
