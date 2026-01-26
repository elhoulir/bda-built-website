'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  dark?: boolean
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {label && (
        <span
          className={cn(
            'text-xs font-medium uppercase tracking-widest',
            dark ? 'text-brand-silver' : 'text-brand-gray'
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          'heading-display mt-4 text-display-sm md:text-display-md',
          dark ? 'text-brand-white' : 'text-brand-black'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-6 text-lg leading-relaxed',
            dark ? 'text-brand-silver' : 'text-brand-gray'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
