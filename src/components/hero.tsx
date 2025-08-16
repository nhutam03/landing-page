'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from './ui/button'
import { smoothScrollToSection } from '@/utils/smoothScroll'

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })
  return (
    <section 
      id="hero" 
      ref={ref}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 z-10 flex flex-col items-center justify-center text-center relative">
        <motion.h1 
          initial={{ opacity: 0, y: -100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 100, damping: 15 }}
          className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 leading-tight"
        >
          Build the Future
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, x: -150 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }}
          transition={{ duration: 1.0, delay: 0.3, type: "spring", stiffness: 80 }}
          className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 lg:mb-10 text-gray-300 max-w-2xl lg:max-w-3xl xl:max-w-4xl leading-relaxed px-4 sm:px-0"
        >
          Innovative solutions for the modern startup ecosystem. 
          Scale your business with cutting-edge technology and expert guidance.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, x: 150 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }}
          transition={{ duration: 1.0, delay: 0.6, type: "spring", stiffness: 80 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <Button
            className="cursor-pointer"
            onClick={() => smoothScrollToSection('contact')}
          >
            Get Started
          </Button>
          <Button
            variant="secondary"
            className="cursor-pointer"
            onClick={() => smoothScrollToSection('about')}
          >
            Learn more
          </Button>
        </motion.div>
      </div>
    </section>
  )
}