'use client'

import { motion } from 'framer-motion'

export function ContactHero() {
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
            Get in Touch
          </span>
          <h1 className="mt-6 font-display text-display-md font-bold text-brand-white md:text-display-lg">
            Let&apos;s Start
            <br />
            <span className="text-brand-silver">Building Together</span>
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-brand-silver md:text-xl">
            Whether you have a project in mind or just want to learn more about
            what we do, we&apos;d love to hear from you.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
