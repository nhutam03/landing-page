'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              About <span className="text-purple-600">Maxius</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We&apos;re a team of passionate innovators dedicated to helping startups and businesses 
              navigate the complexities of modern technology and scale their operations efficiently.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                To democratize access to cutting-edge technology solutions and empower entrepreneurs 
                to build the next generation of groundbreaking companies.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over a decade of combined experience in tech startups, our team understands 
                the unique challenges faced by growing businesses in today&apos;s competitive landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 sm:gap-6"
            >
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}