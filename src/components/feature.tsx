'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FEATURES } from '@/constants'

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })

  return (
    <section id="features" ref={ref} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our <span className="text-purple-600">Features</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive solutions designed to accelerate your business growth and 
            streamline your operations with modern technology.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {FEATURES.map((feature, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={feature.title}
                initial={{ 
                  opacity: 0, 
                  x: isEven ? -200 : 200,
                  y: 50,
                  scale: 0.8
                }}
                animate={isInView ? { 
                  opacity: 1, 
                  x: 0,
                  y: 0,
                  scale: 1
                } : { 
                  opacity: 0, 
                  x: isEven ? -200 : 200,
                  y: 50,
                  scale: 0.8
                }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 80,
                  damping: 15
                }}
                className="group"
              >
            
              <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl hover:shadow-2xl hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 h-full border border-white/20 group-hover:border-purple-200">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button 
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => import('@/utils/smoothScroll').then(({ smoothScrollToSection }) => smoothScrollToSection('contact'))}
          >
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  )
}