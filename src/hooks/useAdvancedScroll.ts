import { useState, useEffect, useCallback, useRef } from 'react'
import type { SectionId, UseScrollReturn, UseActiveSectionReturn } from '@/types/advanced'

export function useAdvancedScroll(threshold = 50): UseScrollReturn {
  const [state, setState] = useState<{
    isScrolled: boolean,
    scrollY: number,
    direction: 'idle' | 'down' | 'up'
  }>({
    isScrolled: false,
    scrollY: 0,
    direction: 'idle'
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
  
  // Use refs to avoid dependency changes
  const sectionsRef = useRef(sections)
  const offsetRef = useRef(offset)
  
  // Update refs when props change
  useEffect(() => {
    sectionsRef.current = sections
    offsetRef.current = offset
  }, [sections, offset])

  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + offsetRef.current
    const newProgress = {} as Record<SectionId, number>
    let newActiveSection: SectionId | null = null

    // Find the active section based on scroll position
    for (let i = sectionsRef.current.length - 1; i >= 0; i--) {
      const sectionId = sectionsRef.current[i]
      const element = document.getElementById(sectionId)
      if (element) {
        const { top, height } = element.getBoundingClientRect()
        const absoluteTop = top + window.scrollY
        
        // Check if section is in view
        if (scrollPosition >= absoluteTop) {
          newActiveSection = sectionId
          break
        }
        
        // Calculate scroll progress for sections
        if (scrollPosition >= absoluteTop && scrollPosition <= absoluteTop + height) {
          const sectionProgress = Math.min(
            Math.max((scrollPosition - absoluteTop) / height, 0),
            1
          )
          newProgress[sectionId] = sectionProgress
        }
      }
    }
    
    // Use first section as fallback
    if (!newActiveSection) {
      newActiveSection = sectionsRef.current[0]
    }
    
    setProgress(prev => {
      // Only update if progress actually changed
      const hasChanged = Object.keys(newProgress).some(key => 
        prev[key as SectionId] !== newProgress[key as SectionId]
      ) || Object.keys(prev).length !== Object.keys(newProgress).length
      return hasChanged ? newProgress : prev
    })
    
    setActiveSection(prev => prev !== newActiveSection ? newActiveSection : prev)
  }, []) // Remove dependencies to prevent infinite loops

  useEffect(() => {
    const handleScroll = () => updateActiveSection()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    updateActiveSection() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
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