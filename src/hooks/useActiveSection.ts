import { useState, useEffect } from 'react'

export function useActiveSection(sections: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState(sections[0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections, offset])

  return activeSection
}