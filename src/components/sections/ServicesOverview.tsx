'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/data'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { Button } from '@/components/ui/Button'

export function ServicesOverview() {
  return (
    <section className="relative bg-brand-cream py-24 md:py-32 overflow-hidden">
      {/* Subtle architectural background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-brand-slate/10 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          style={{ right: '15%' }}
        />
        <motion.div
          className="absolute left-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-brand-slate/10 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ bottom: '20%' }}
        />
      </div>

      <div className="container-wide relative">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            {/* Eyebrow with animated line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <motion.div
                className="h-px bg-brand-slate"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gray">
                What We Do
              </span>
            </motion.div>

            {/* Title */}
            <div className="mt-6 overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="font-display text-display-sm font-bold text-brand-black md:text-display-md"
              >
                Our Services
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 text-lg text-brand-gray leading-relaxed"
            >
              From ground-up construction to complete refurbishments, we deliver
              across all commercial sectors with precision and purpose.
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button href="/services" variant="primary" showArrow>
              All Services
            </Button>
          </motion.div>
        </div>

        {/* Service Cards Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
