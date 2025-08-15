import type { SectionId } from '@/types/advanced'

interface ScrollOptions {
  duration?: number
  offset?: number
  easing?: (t: number) => number
}

// Easing functions
export const easingFunctions = {
  linear: (t: number) => t,
  easeInQuad: (t: number) => t * t,
  easeOutQuad: (t: number) => t * (2 - t),
  easeInOutQuad: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeInCubic: (t: number) => t * t * t,
  easeOutCubic: (t: number) => (--t) * t * t + 1,
  easeInOutCubic: (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
} as const

export function smoothScrollToElement(
  element: HTMLElement,
  options: ScrollOptions = {}
): Promise<void> {
  const {
    duration = 1000,
    offset = 0,
    easing = easingFunctions.easeInOutCubic
  } = options

  return new Promise((resolve) => {
    const startPosition = window.pageYOffset
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset
    const distance = targetPosition - startPosition
    let startTime: number

    function animation(currentTime: number) {
      if (startTime === undefined) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      
      const easedProgress = easing(progress)
      window.scrollTo(0, startPosition + distance * easedProgress)
      
      if (progress < 1) {
        requestAnimationFrame(animation)
      } else {
        resolve()
      }
    }
    
    requestAnimationFrame(animation)
  })
}

export function smoothScrollToSection(
  sectionId: SectionId,
  options?: ScrollOptions
): Promise<void> {
  const element = document.getElementById(sectionId)
  if (!element) {
    return Promise.reject(new Error(`Section ${sectionId} not found`))
  }
  
  return smoothScrollToElement(element, options)
}

// Hook for smooth scrolling with performance optimization
export function useSmoothScroll() {
  const scrollToSection = async (
    sectionId: SectionId,
    options?: ScrollOptions
  ) => {
    try {
      // Add active state to body for CSS-based loading states
      document.body.classList.add('scrolling')
      
      await smoothScrollToSection(sectionId, {
        duration: 800,
        offset: 80,
        easing: easingFunctions.easeInOutCubic,
        ...options
      })
      
      // Update URL without triggering navigation
      const url = new URL(window.location.href)
      url.hash = sectionId
      window.history.replaceState(null, '', url.toString())
      
    } catch (error) {
      console.error('Smooth scroll error:', error)
    } finally {
      document.body.classList.remove('scrolling')
    }
  }

  return { scrollToSection }
}