import { useState, useCallback } from 'react'
import type { FormState, FormErrors } from '@/types/advanced'

type ValidationRule<T> = (value: T) => string | null
type ValidationRules<T> = Partial<Record<keyof T, ValidationRule<T[keyof T]>>>

export function useFormState<T extends Record<string, any>>(
  initialValues: T,
  validationRules?: ValidationRules<T>
) {
  const [state, setState] = useState<FormState<T>>({
    values: initialValues,
    errors: {},
    isSubmitting: false,
    isValid: true
  })

  const validateField = useCallback(
    <K extends keyof T>(name: K, value: T[K]): string | null => {
      const rule = validationRules?.[name]
      return rule ? rule(value) : null
    },
    [validationRules]
  )

  const validateForm = useCallback((): boolean => {
    if (!validationRules) return true

    const errors: FormErrors<T> = {}
    let isValid = true

    for (const [key, value] of Object.entries(state.values)) {
      const error = validateField(key as keyof T, value)
      if (error) {
        errors[key as keyof T] = error
        isValid = false
      }
    }

    setState(prev => ({ ...prev, errors, isValid }))
    return isValid
  }, [state.values, validateField, validationRules])

  const setValue = useCallback(
    <K extends keyof T>(name: K, value: T[K]) => {
      setState(prev => ({
        ...prev,
        values: { ...prev.values, [name]: value },
        errors: { ...prev.errors, [name]: validateField(name, value) }
      }))
    },
    [validateField]
  )

  const setFieldError = useCallback(
    <K extends keyof T>(name: K, error: string | null) => {
      setState(prev => ({
        ...prev,
        errors: { ...prev.errors, [name]: error }
      }))
    },
    []
  )

  const reset = useCallback(() => {
    setState({
      values: initialValues,
      errors: {},
      isSubmitting: false,
      isValid: true
    })
  }, [initialValues])

  const setSubmitting = useCallback((isSubmitting: boolean) => {
    setState(prev => ({ ...prev, isSubmitting }))
  }, [])

  return {
    ...state,
    setValue,
    setFieldError,
    validateForm,
    reset,
    setSubmitting
  }
}