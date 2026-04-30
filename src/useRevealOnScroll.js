import { useEffect } from 'react'

/**
 * Fade-in sections as they enter the viewport. Uses a single IntersectionObserver,
 * unobserves each node after reveal, and respects prefers-reduced-motion.
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
          if (entry.isIntersecting) {
            applyVisible(entry.target)
            sectionObserver.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
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
