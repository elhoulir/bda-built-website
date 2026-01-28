'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

export function Welcome() {
  return (
    <section className="relative overflow-hidden bg-brand-cream py-20 md:py-28">
      {/* Floating 3D shapes that move across the entire section */}
      {/* Large 3D cube - wide sweeping path */}
      <motion.div
        className="pointer-events-none absolute hidden lg:block"
        initial={{ x: '5vw', y: '5%' }}
        animate={{
          x: ['5vw', '85vw', '45vw', '15vw', '75vw', '5vw'],
          y: ['5%', '40%', '85%', '25%', '70%', '5%'],
          rotateY: [0, 180, 360, 540, 720, 900],
          rotateX: [10, 30, 20, 40, 15, 10],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ perspective: 800 }}
      >
        <div
          className="relative h-32 w-32"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            className="absolute inset-0 rounded-sm border border-brand-gray/50 bg-white/40 backdrop-blur-sm"
            style={{ transform: 'translateZ(64px)' }}
          />
          <div
            className="absolute inset-0 rounded-sm border border-brand-gray/30 bg-white/20"
            style={{ transform: 'translateZ(-64px)' }}
          />
          <div
            className="absolute inset-0 rounded-sm border border-brand-gray/40 bg-white/30"
            style={{ transform: 'rotateY(90deg) translateZ(64px)' }}
          />
          <div
            className="absolute inset-0 rounded-sm border border-brand-gray/30 bg-white/20"
            style={{ transform: 'rotateY(-90deg) translateZ(64px)' }}
          />
          <div
            className="absolute inset-0 rounded-sm border border-brand-gray/40 bg-white/50"
            style={{ transform: 'rotateX(90deg) translateZ(64px)' }}
          />
          <div
            className="absolute inset-0 rounded-sm border border-brand-gray/20 bg-white/10"
            style={{ transform: 'rotateX(-90deg) translateZ(64px)' }}
          />
        </div>
      </motion.div>

      {/* Large sphere - covers opposite corners */}
      <motion.div
        className="pointer-events-none absolute hidden lg:block"
        initial={{ x: '90vw', y: '90%' }}
        animate={{
          x: ['90vw', '10vw', '50vw', '80vw', '20vw', '90vw'],
          y: ['90%', '10%', '50%', '5%', '75%', '90%'],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="relative h-40 w-40">
          <div className="absolute inset-0 rounded-full border border-brand-gray/40 bg-gradient-to-br from-white/60 via-white/30 to-white/10 shadow-lg" />
          <div className="absolute left-4 top-4 h-10 w-10 rounded-full bg-white/50 blur-sm" />
        </div>
      </motion.div>

      {/* Small cube - zigzag across center */}
      <motion.div
        className="pointer-events-none absolute hidden lg:block"
        initial={{ x: '50vw', y: '50%' }}
        animate={{
          x: ['50vw', '5vw', '95vw', '30vw', '70vw', '50vw'],
          y: ['50%', '15%', '60%', '90%', '20%', '50%'],
          rotateX: [0, 180, 360, 540, 720, 900],
          rotateY: [0, 270, 540, 810, 1080, 1350],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ perspective: 600 }}
      >
        <div
          className="relative h-20 w-20"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            className="absolute inset-0 rounded-sm border border-brand-gray/50 bg-white/40"
            style={{ transform: 'translateZ(40px)' }}
          />
          <div
            className="absolute inset-0 rounded-sm border border-brand-gray/30 bg-white/20"
            style={{ transform: 'translateZ(-40px)' }}
          />
          <div
            className="absolute inset-0 rounded-sm border border-brand-gray/40 bg-white/30"
            style={{ transform: 'rotateY(90deg) translateZ(40px)' }}
          />
          <div
            className="absolute inset-0 rounded-sm border border-brand-gray/30 bg-white/20"
            style={{ transform: 'rotateY(-90deg) translateZ(40px)' }}
          />
        </div>
      </motion.div>

      {/* Medium sphere - horizontal sweep */}
      <motion.div
        className="pointer-events-none absolute hidden lg:block"
        initial={{ x: '0vw', y: '30%' }}
        animate={{
          x: ['0vw', '95vw', '0vw', '95vw', '0vw'],
          y: ['30%', '70%', '10%', '85%', '30%'],
          scale: [1, 1.15, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="relative h-28 w-28">
          <div className="absolute inset-0 rounded-full border border-brand-gray/30 bg-gradient-to-br from-white/50 via-white/25 to-transparent" />
          <div className="absolute inset-3 rounded-full border border-brand-gray/20 bg-white/20" />
          <div className="absolute left-3 top-3 h-6 w-6 rounded-full bg-white/40 blur-md" />
        </div>
      </motion.div>

      {/* Small sphere - fast diagonal coverage */}
      <motion.div
        className="pointer-events-none absolute hidden lg:block"
        initial={{ x: '25vw', y: '0%' }}
        animate={{
          x: ['25vw', '90vw', '10vw', '75vw', '40vw', '25vw'],
          y: ['0%', '50%', '95%', '30%', '65%', '0%'],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border border-brand-gray/40 bg-gradient-to-br from-white/60 to-white/20" />
          <div className="absolute left-1.5 top-1.5 h-3 w-3 rounded-full bg-white/60 blur-sm" />
        </div>
      </motion.div>

      {/* Extra small sphere - covers edges */}
      <motion.div
        className="pointer-events-none absolute hidden lg:block"
        initial={{ x: '75vw', y: '95%' }}
        animate={{
          x: ['75vw', '5vw', '60vw', '95vw', '35vw', '75vw'],
          y: ['95%', '5%', '45%', '80%', '15%', '95%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border border-brand-gray/35 bg-gradient-to-br from-white/55 to-white/15" />
          <div className="absolute left-1 top-1 h-2 w-2 rounded-full bg-white/50 blur-sm" />
        </div>
      </motion.div>

      <div className="container-wide relative">
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

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
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
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-col items-center md:mt-16"
          >
            {/* Vertical connecting line */}
            <div className="h-12 w-px bg-accent-gold md:h-16" />

            {/* Story label */}
            <div className="mt-6 text-center">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-brand-gray">
                Explore Our Story
              </span>
            </div>

            {/* Scroll down text */}
            <span className="mt-4 text-xs uppercase tracking-[0.2em] text-brand-gray">
              Keep Scrolling
            </span>

            {/* Bouncing arrow */}
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
