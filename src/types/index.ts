export interface NavItem {
  name: string
  href: string
}

export interface Feature {
  icon: string
  title: string
  description: string
  gradient: string
}

export interface ContactFormData {
  name: string
  email: string
  company: string
  message: string
}

export interface AnimationConfig {
  duration: number
  delay?: number
  type?: "spring" | "tween"
  stiffness?: number
  damping?: number
}