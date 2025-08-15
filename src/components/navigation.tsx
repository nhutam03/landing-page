'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { NAV_ITEMS } from '@/constants'
import { useScrolled } from '@/hooks/useScrolled'
import { useActiveSection } from '@/hooks/useActiveSection'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isScrolled = useScrolled(50)
  const activeSection = useActiveSection(['hero', 'about', 'features', 'contact'], 100)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
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
                onClick={() => scrollToSection(item.href)}
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
                onClick={() => scrollToSection(item.href)}
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