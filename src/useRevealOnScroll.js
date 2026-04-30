import { useEffect } from 'react'

/**
 * Fade-in sections as they enter the viewport. Uses a single IntersectionObserver,
 * unobserves each node after reveal, and respects prefers-reduced-motion.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    if (!nodes.length) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const applyVisible = (el) => {
      el.classList.add('reveal-visible')
    }

    if (reduceMotion) {
      nodes.forEach(applyVisible)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            applyVisible(entry.target)
            io.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    )

    nodes.forEach((node) => io.observe(node))
    return () => io.disconnect()
  }, [])
}
