'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { CONTACT_INFO } from '@/constants'
import type { ContactFormData } from '@/types'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Let&apos;s Build <span className="text-purple-400">Together</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to turn your vision into reality? We&apos;re here to help you build innovative solutions 
            that drive growth and exceed expectations. Let&apos;s start the conversation.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Why Choose Maxius?</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  🚀
                </div>
                <div>
                  <div className="font-semibold mb-2">Rapid Development</div>
                  <div className="text-gray-300 text-sm leading-relaxed">We deliver high-quality solutions quickly without compromising on excellence.</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  🎯
                </div>
                <div>
                  <div className="font-semibold mb-2">Strategic Partnership</div>
                  <div className="text-gray-300 text-sm leading-relaxed">We become your technology partner, not just a service provider.</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  💡
                </div>
                <div>
                  <div className="font-semibold mb-2">Innovation First</div>
                  <div className="text-gray-300 text-sm leading-relaxed">We leverage cutting-edge technologies to keep you ahead of the competition.</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <h4 className="font-semibold mb-4 text-purple-400">Ready to Get Started?</h4>
              <p className="text-gray-300 text-sm mb-4">
                Contact us today for a free consultation and discover how we can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                  {CONTACT_INFO.email}
                </a>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl font-semibold mb-6">Start Your Project</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Work Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400 transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-300">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Inc."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400 resize-none transition-colors"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Get Free Consultation
                </button>
                
                <p className="text-xs text-gray-400 text-center">
                  We&apos;ll respond within {CONTACT_INFO.responseTime} • No spam, ever
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}