'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
  index?: number
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative bg-brand-cream p-8 md:p-10"
    >
      <Quote className="absolute right-8 top-8 h-12 w-12 text-brand-light" />
      <p className="relative z-10 text-lg leading-relaxed text-brand-charcoal md:text-xl">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="mt-6">
        <cite className="not-italic">
          <span className="block font-display font-semibold text-brand-black">
            {testimonial.author}
          </span>
          <span className="mt-1 block text-sm text-brand-gray">
            {testimonial.role}, {testimonial.company}
          </span>
        </cite>
      </footer>
    </motion.blockquote>
  )
}
