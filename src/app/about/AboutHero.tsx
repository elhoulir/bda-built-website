'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-brand-black pt-32 md:pt-40">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920"
          alt="City skyline architecture"
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
            About BDA Built
          </span>
          <h1 className="mt-6 font-display text-display-md font-bold text-brand-white md:text-display-lg">
            Building Excellence
            <br />
            <span className="text-brand-silver">Since 2015</span>
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-brand-silver md:text-xl">
            We are a team of dedicated professionals passionate about delivering
            exceptional commercial construction. Our commitment to
            craftsmanship, integrity, and excellence has made us a trusted
            partner for businesses across Australia.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
