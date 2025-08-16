'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { NAV_ITEMS } from '@/constants'
import { useAdvancedScroll, useAdvancedActiveSection } from '@/hooks/useAdvancedScroll'
import { smoothScrollToSection } from '@/utils/smoothScroll'
import type { SectionId } from '@/types/advanced'
import { useMemo } from 'react'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isScrolled } = useAdvancedScroll(50)
  
  // Memoize sections array to prevent recreation on every render
  const sections = useMemo<readonly SectionId[]>(() => ['hero', 'about', 'features', 'contact'], [])
  const { activeSection } = useAdvancedActiveSection(sections, 100)

  const scrollToSection = async (sectionId: SectionId) => {
    try {
      await smoothScrollToSection(sectionId, { duration: 800, offset: 80 })
      setIsMobileMenuOpen(false)
    } catch (error) {
      console.error('Scroll error:', error)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-white/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <div 
            className={`text-xl sm:text-2xl font-bold cursor-pointer ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => scrollToSection('hero')}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Maxius
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-5">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href as SectionId)}
                className={`font-medium transition-all duration-300 hover:text-purple-400 hover:scale-105 relative px-3 py-2 rounded-lg group ${
                  activeSection === item.href 
                    ? 'text-purple-400' 
                    : isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.span 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="absolute inset-0 rounded-lg group-hover:from-purple-400/10 group-hover:to-blue-500/10 transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-current h-0.5 w-6 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`} />
              <span className={`bg-current h-0.5 w-6 my-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`bg-current h-0.5 w-6 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white rounded-lg shadow-lg py-4 mb-4"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href as SectionId)}
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-300 ${
                  activeSection === item.href ? 'text-purple-600 bg-purple-50' : 'text-gray-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}