'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const pillars = [
  {
    number: '01',
    title: 'Vision',
    description: 'Transforming architectural dreams into buildable blueprints',
  },
  {
    number: '02',
    title: 'Craft',
    description: 'Precision engineering with decades of expertise',
  },
  {
    number: '03',
    title: 'Legacy',
    description: 'Creating landmarks that stand the test of time',
  },
]

export function Welcome() {
  return (
    <section className="bg-brand-cream py-24 md:py-40">
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

        {/* Pillars - bridges to ScrollStory */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-20 grid max-w-5xl gap-8 md:mt-24 md:grid-cols-3"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="group text-center"
            >
              <span className="font-display text-5xl font-bold text-brand-black/10 transition-colors group-hover:text-accent-gold/30">
                {pillar.number}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-brand-black">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex justify-center md:mt-20"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-gray/60">
              Explore Our Story
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="h-8 w-px bg-gradient-to-b from-accent-gold to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
