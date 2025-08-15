import { NavItem, Feature } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: 'hero' },
  { name: 'About', href: 'about' },
  { name: 'Features', href: 'features' },
  { name: 'Contact', href: 'contact' },
]

export const FEATURES: Feature[] = [
  {
    icon: "🚀",
    title: "Rapid Development",
    description: "Accelerate your development cycle with our proven methodologies and cutting-edge tools.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: "⚡",
    title: "High Performance",
    description: "Optimize your applications for maximum speed and efficiency with our performance-first approach.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description: "Protect your data and users with industry-leading security practices and compliance standards.",
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: "📈",
    title: "Scalable Architecture",
    description: "Build systems that grow with your business, from startup to enterprise scale.",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: "🎯",
    title: "Strategic Consulting",
    description: "Get expert guidance on technology decisions that align with your business objectives.",
    gradient: "from-red-500 to-red-600"
  },
  {
    icon: "🛠️",
    title: "24/7 Support",
    description: "Round-the-clock technical support to ensure your systems run smoothly at all times.",
    gradient: "from-indigo-500 to-indigo-600"
  }
]

export const ANIMATION_CONFIG = {
  SPRING: { type: "spring" as const, stiffness: 100, damping: 15 },
  DURATION: { short: 0.3, medium: 0.8, long: 1.2 },
  DELAYS: { stagger: 0.1, section: 0.2 }
}

export const CONTACT_INFO = {
  email: 'hello@maxius.com',
  phone: '+1 (234) 567-8900',
  responseTime: '24 hours'
}