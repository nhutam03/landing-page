import { useState, useEffect, useCallback, useRef } from 'react'
import type { SectionId, UseScrollReturn, UseActiveSectionReturn } from '@/types/advanced'

export function useAdvancedScroll(threshold = 50): UseScrollReturn {
  const [state, setState] = useState({
    isScrolled: false,
    scrollY: 0,
    direction: 'idle' as const
  })
  
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY.current ? 'down' : 
                       currentScrollY < lastScrollY.current ? 'up' : 'idle'
      
      setState({
        isScrolled: currentScrollY > threshold,
        scrollY: currentScrollY,
        direction
      })
      
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return state
}

export function useAdvancedActiveSection(
  sections: readonly SectionId[],
  offset = 100
): UseActiveSectionReturn {
  const [activeSection, setActiveSection] = useState<SectionId>(sections[0])
  const [progress, setProgress] = useState<Record<SectionId, number>>({} as Record<SectionId, number>)

  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + offset
    const windowHeight = window.innerHeight
    const newProgress = {} as Record<SectionId, number>

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId)
      if (element) {
        const { top, height } = element.getBoundingClientRect()
        const absoluteTop = top + window.scrollY
        
        // Calculate scroll progress for each section
        if (scrollPosition >= absoluteTop && scrollPosition <= absoluteTop + height) {
          const sectionProgress = Math.min(
            Math.max((scrollPosition - absoluteTop) / height, 0),
            1
          )
          newProgress[sectionId] = sectionProgress
          setActiveSection(sectionId)
        }
      }
    }
    
    setProgress(newProgress)
  }, [sections, offset])

  useEffect(() => {
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    updateActiveSection() // Initial call
    
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [updateActiveSection])

  const setActiveSectionManually = useCallback((section: SectionId) => {
    setActiveSection(section)
  }, [])

  return {
    activeSection,
    setActiveSection: setActiveSectionManually,
    progress
  }
}