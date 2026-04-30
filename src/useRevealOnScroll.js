import { useEffect } from 'react'

/**
 * Fade sections and headers as they enter and leave the viewport.
 * Uses IntersectionObserver and respects prefers-reduced-motion.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    const headerNodes = document.querySelectorAll('[data-header-reveal]')
    if (!nodes.length && !headerNodes.length) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const applyVisible = (el) => {
      el.classList.add('reveal-visible')
    }

    if (reduceMotion) {
      nodes.forEach(applyVisible)
      headerNodes.forEach((node) => node.classList.add('header-reveal-visible'))
      return
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('reveal-visible', entry.isIntersecting)
        })
      },
      { root: null, rootMargin: '-12% 0px -18% 0px', threshold: 0.18 }
    )

    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('header-reveal-visible', entry.isIntersecting)
        })
      },
      { root: null, rootMargin: '-18% 0px -34% 0px', threshold: 0.25 }
    )

    nodes.forEach((node) => sectionObserver.observe(node))
    headerNodes.forEach((node) => headerObserver.observe(node))

    return () => {
      sectionObserver.disconnect()
      headerObserver.disconnect()
    }
  }, [])
}
