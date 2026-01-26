'use client'

import { motion } from 'framer-motion'

export function ProcessHero() {
  return (
    <section className="bg-brand-black pt-32 md:pt-40">
      <div className="container-wide pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-accent-gold">
            How We Work
          </span>
          <h1 className="mt-6 font-display text-display-md font-bold text-brand-white md:text-display-lg">
            A Proven Process
            <br />
            <span className="text-brand-silver">For Exceptional Results</span>
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-brand-silver md:text-xl">
            Our systematic approach ensures every project is delivered with
            precision, transparency, and the highest standards of quality.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
