'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Welcome() {
  return (
    <section className="bg-brand-cream py-20 md:py-32">
      <div className="container-wide">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-px w-12 bg-accent-gold" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gray">
              Welcome to BDA Built
            </span>
            <div className="h-px w-12 bg-accent-gold" />
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-display text-3xl font-bold text-brand-black md:text-4xl lg:text-5xl"
          >
            Building Tomorrow&apos;s Landmarks Today
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-gray md:text-xl"
          >
            For over two decades, we&apos;ve been transforming architectural
            visions into reality. From commercial complexes to healthcare
            facilities, our commitment to excellence has made us a trusted
            partner in construction across Australia.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-brand-black transition-colors hover:text-accent-gold"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
