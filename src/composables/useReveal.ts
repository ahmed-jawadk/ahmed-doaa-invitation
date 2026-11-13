import type { Directive } from 'vue'

/**
 * v-reveal            → fades/rises the element in once it enters the viewport.
 * v-reveal="120"      → same, with a 120 ms delay (use for staggering siblings).
 * Content stays visible if JS or IntersectionObserver is unavailable.
 */
let observer: IntersectionObserver | null = null

function getObserver() {
  if (observer || typeof IntersectionObserver === 'undefined') return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.15 },
  )
  return observer
}

export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    const io = getObserver()
    if (!io) return
    el.style.setProperty('--reveal-delay', `${binding.value ?? 0}ms`)
    el.classList.add('reveal-armed')
    io.observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
