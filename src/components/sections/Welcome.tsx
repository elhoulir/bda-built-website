'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '150+', label: 'Projects Completed' },
  { value: '$500M+', label: 'Project Value' },
]

export function Welcome() {
  return (
    <section className="bg-brand-cream py-20 md:py-28">
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-8 font-display text-5xl font-bold leading-tight text-brand-black md:text-6xl lg:text-7xl"
          >
            Building Tomorrow&apos;s
            <br />
            <span className="text-accent-gold">Landmarks</span>
            <br />
            Today
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-brand-gray md:text-2xl"
          >
            For over two decades, we&apos;ve been transforming architectural
            visions into reality. From commercial complexes to healthcare
            facilities, our commitment to excellence has made us a trusted
            partner in construction across Australia.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 grid grid-cols-3 gap-4 md:gap-8"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="relative">
                {index > 0 && (
                  <div className="absolute -left-2 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-brand-gray/20 md:-left-4 md:block" />
                )}
                <div className="font-display text-3xl font-bold text-brand-black md:text-4xl lg:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-brand-gray md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-base font-semibold uppercase tracking-wider text-brand-black transition-all"
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-accent-gold after:transition-transform after:duration-300 group-hover:after:scale-x-110">
                Learn More About Us
              </span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Connecting line and story transition */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-col items-center md:mt-16"
          >
            <div className="h-12 w-px bg-accent-gold md:h-16" />

            <div className="mt-6 text-center">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-brand-gray">
                Explore Our Story
              </span>
            </div>

            <span className="mt-4 text-xs uppercase tracking-[0.2em] text-brand-gray">
              Keep Scrolling
            </span>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mt-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent-gold bg-accent-gold/10">
                <ChevronDown className="h-6 w-6 text-accent-gold" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
