import type { ReactNode, ComponentPropsWithoutRef } from 'react'
import type { MotionProps } from 'framer-motion'

// Utility types
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

// Section components props with motion support
export interface SectionProps extends ComponentPropsWithoutRef<'section'> {
  children: ReactNode
  variant?: 'light' | 'dark'
  fullHeight?: boolean
}

// Advanced motion component types
export type MotionSectionProps = SectionProps & MotionProps

// Form validation types
export type FormFieldError = string | null
export type FormErrors<T> = {
  [K in keyof T]?: FormFieldError
}

export interface FormState<T> {
  values: T
  errors: FormErrors<T>
  isSubmitting: boolean
  isValid: boolean
}

// Animation configuration with strict typing
export interface StrictAnimationConfig {
  readonly initial: Record<string, number | string>
  readonly animate: Record<string, number | string>
  readonly transition: {
    readonly duration: number
    readonly delay?: number
    readonly type?: 'spring' | 'tween'
    readonly stiffness?: number
    readonly damping?: number
  }
}

// Navigation types with strict section mapping
export type SectionId = 'hero' | 'about' | 'features' | 'contact'

export interface StrictNavItem {
  readonly name: string
  readonly href: SectionId
  readonly isExternal?: boolean
}

// Hook return types
export interface UseScrollReturn {
  readonly isScrolled: boolean
  readonly scrollY: number
  readonly direction: 'up' | 'down' | 'idle'
}

export interface UseActiveSectionReturn {
  readonly activeSection: SectionId
  readonly setActiveSection: (section: SectionId) => void
  readonly progress: Record<SectionId, number>
}

// Component state management types
export type ComponentState<T = Record<string, unknown>> = {
  readonly data: T
  readonly loading: boolean
  readonly error: string | null
}

// Generic API response type
export interface ApiResponse<T> {
  readonly success: boolean
  readonly data?: T
  readonly error?: string
  readonly message?: string
}

// Enum-like constants with const assertions
export const ANIMATION_TYPES = {
  FADE_IN: 'fadeIn',
  SLIDE_UP: 'slideUp',
  SCALE: 'scale',
  ROTATE: 'rotate'
} as const

export type AnimationType = typeof ANIMATION_TYPES[keyof typeof ANIMATION_TYPES]

// Theme configuration type
export interface ThemeConfig {
  readonly colors: {
    readonly primary: string
    readonly secondary: string
    readonly accent: string
    readonly background: string
    readonly text: string
  }
  readonly spacing: Record<string, string>
  readonly breakpoints: Record<string, string>
}