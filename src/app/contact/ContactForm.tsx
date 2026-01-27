'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import { useToast } from '@/components/ui/Toast'
import { cn } from '@/lib/utils'

const projectTypes = [
  'Commercial Office',
  'Industrial / Warehouse',
  'Retail / Hospitality',
  'Healthcare',
  'Education',
  'Refurbishment / Fitout',
  'Other',
]

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validatePhone(phone: string): boolean {
  if (!phone) return true // Optional field
  const phoneRegex = /^[\d\s\-+()]{8,}$/
  return phoneRegex.test(phone)
}

export function ContactForm() {
  const { addToast } = useToast()
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>(
    'idle'
  )
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateField = useCallback(
    (name: string, value: string): string | undefined => {
      switch (name) {
        case 'name':
          if (!value.trim()) return 'Full name is required'
          if (value.trim().length < 2)
            return 'Name must be at least 2 characters'
          return undefined
        case 'email':
          if (!value.trim()) return 'Email address is required'
          if (!validateEmail(value)) return 'Please enter a valid email address'
          return undefined
        case 'phone':
          if (value && !validatePhone(value))
            return 'Please enter a valid phone number'
          return undefined
        case 'message':
          if (!value.trim()) return 'Message is required'
          if (value.trim().length < 10)
            return 'Message must be at least 10 characters'
          return undefined
        default:
          return undefined
      }
    },
    []
  )

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const newErrors: FormErrors = {}
    ;(['name', 'email', 'phone', 'message'] as const).forEach((field) => {
      const error = validateField(field, formData[field])
      if (error) newErrors[field] = error
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setTouched({ name: true, email: true, phone: true, message: true })
      addToast('Please fix the errors in the form', 'error')
      return
    }

    setFormState('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setFormState('success')
      addToast('Your message has been sent successfully!', 'success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: '',
      })
      setErrors({})
      setTouched({})
    } catch {
      setFormState('idle')
      addToast('Something went wrong. Please try again.', 'error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing (if field was touched)
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const inputBaseClasses =
    'mt-2 w-full border rounded-none bg-white px-4 py-3 text-brand-black transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1'
  const inputNormalClasses =
    'border-brand-light focus:border-brand-black focus:ring-brand-black'
  const inputErrorClasses = 'border-red-500 focus:ring-red-500'

  if (formState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center bg-brand-cream p-12 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center bg-brand-black">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold text-brand-black">
          Message Sent
        </h3>
        <p className="mt-4 text-brand-gray">
          Thank you for reaching out. Our team will get back to you within 24
          hours.
        </p>
        <Button
          onClick={() => setFormState('idle')}
          variant="primary"
          className="mt-8"
        >
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-display text-2xl font-semibold text-brand-black">
        Send Us a Message
      </h2>
      <p className="mt-4 text-brand-gray">
        Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
        {/* Name & Email Row */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-brand-charcoal"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={cn(
                inputBaseClasses,
                errors.name && touched.name
                  ? inputErrorClasses
                  : inputNormalClasses
              )}
              placeholder="John Smith"
            />
            {errors.name && touched.name && (
              <p
                id="name-error"
                className="mt-1 text-sm text-red-500"
                role="alert"
              >
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-brand-charcoal"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={cn(
                inputBaseClasses,
                errors.email && touched.email
                  ? inputErrorClasses
                  : inputNormalClasses
              )}
              placeholder="john@company.com"
            />
            {errors.email && touched.email && (
              <p
                id="email-error"
                className="mt-1 text-sm text-red-500"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Phone & Company Row */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-brand-charcoal"
            >
              Phone Number{' '}
              <span className="font-normal text-brand-gray">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={cn(
                inputBaseClasses,
                errors.phone && touched.phone
                  ? inputErrorClasses
                  : inputNormalClasses
              )}
              placeholder="0400 000 000"
            />
            {errors.phone && touched.phone && (
              <p
                id="phone-error"
                className="mt-1 text-sm text-red-500"
                role="alert"
              >
                {errors.phone}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-brand-charcoal"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={cn(inputBaseClasses, inputNormalClasses)}
              placeholder="Company Pty Ltd"
            />
          </div>
        </div>

        {/* Project Type */}
        <div>
          <label
            htmlFor="projectType"
            className="block text-sm font-medium text-brand-charcoal"
          >
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={cn(inputBaseClasses, inputNormalClasses)}
          >
            <option value="">Select a project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-brand-charcoal"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={cn(
              inputBaseClasses,
              'resize-none',
              errors.message && touched.message
                ? inputErrorClasses
                : inputNormalClasses
            )}
            placeholder="Tell us about your project..."
          />
          {errors.message && touched.message && (
            <p
              id="message-error"
              className="mt-1 text-sm text-red-500"
              role="alert"
            >
              {errors.message}
            </p>
          )}
          <p className="mt-1 text-xs text-brand-gray">
            {formData.message.length}/500 characters
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={formState === 'submitting'}
          className="w-full md:w-auto"
        >
          {formState === 'submitting' ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  )
}
