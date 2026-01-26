'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-brand-black pt-32 md:pt-40">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920"
          alt="Construction site"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/50 to-brand-black" />
      </div>

      <div className="container-wide relative pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-accent-gold">
            What We Do
          </span>
          <h1 className="mt-6 font-display text-display-md font-bold text-brand-white md:text-display-lg">
            Comprehensive
            <br />
            <span className="text-brand-silver">Construction Services</span>
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-brand-silver md:text-xl">
            From initial concept to final handover, we offer a full spectrum of
            commercial construction services tailored to your unique requirements.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
