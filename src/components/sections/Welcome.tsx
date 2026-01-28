'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '150+', label: 'Projects Completed' },
  { value: '$500M+', label: 'Project Value' },
]

// Animated architectural building SVG
function ArchitecturalDrawing() {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, delay, ease: 'easeInOut' },
        opacity: { duration: 0.3, delay },
      },
    }),
  }

  return (
    <motion.svg
      viewBox="0 0 400 500"
      fill="none"
      className="absolute bottom-0 right-0 h-[70%] w-auto opacity-[0.08] lg:opacity-[0.12]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Main tall tower */}
      <motion.path
        d="M 200 480 L 200 80 L 280 80 L 280 480"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-brand-gray"
        variants={pathVariants}
        custom={0}
      />
      {/* Tower top detail */}
      <motion.path
        d="M 200 80 L 240 40 L 280 80"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-brand-gray"
        variants={pathVariants}
        custom={0.3}
      />
      {/* Tower antenna */}
      <motion.path
        d="M 240 40 L 240 10"
        stroke="currentColor"
        strokeWidth="1"
        className="text-accent-gold"
        variants={pathVariants}
        custom={0.5}
      />

      {/* Medium building left */}
      <motion.path
        d="M 120 480 L 120 180 L 190 180 L 190 480"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-brand-gray"
        variants={pathVariants}
        custom={0.4}
      />
      {/* Medium building roof */}
      <motion.path
        d="M 120 180 L 155 150 L 190 180"
        stroke="currentColor"
        strokeWidth="1"
        className="text-brand-gray"
        variants={pathVariants}
        custom={0.6}
      />

      {/* Small building right */}
      <motion.path
        d="M 290 480 L 290 280 L 360 280 L 360 480"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-brand-gray"
        variants={pathVariants}
        custom={0.5}
      />

      {/* Smallest building far left */}
      <motion.path
        d="M 40 480 L 40 320 L 110 320 L 110 480"
        stroke="currentColor"
        strokeWidth="1"
        className="text-brand-gray"
        variants={pathVariants}
        custom={0.6}
      />

      {/* Tower windows - row 1 */}
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={`tw1-${i}`}
          x={210 + i * 20}
          y={100}
          width="12"
          height="20"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-brand-gray"
          variants={pathVariants}
          custom={0.8 + i * 0.05}
        />
      ))}
      {/* Tower windows - row 2 */}
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={`tw2-${i}`}
          x={210 + i * 20}
          y={140}
          width="12"
          height="20"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-brand-gray"
          variants={pathVariants}
          custom={0.9 + i * 0.05}
        />
      ))}
      {/* Tower windows - row 3 */}
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={`tw3-${i}`}
          x={210 + i * 20}
          y={180}
          width="12"
          height="20"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-brand-gray"
          variants={pathVariants}
          custom={1.0 + i * 0.05}
        />
      ))}
      {/* Tower windows - row 4-7 */}
      {[220, 260, 300, 340, 380, 420].map((y, rowIndex) =>
        [0, 1, 2].map((i) => (
          <motion.rect
            key={`tw-${y}-${i}`}
            x={210 + i * 20}
            y={y}
            width="12"
            height="20"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-brand-gray"
            variants={pathVariants}
            custom={1.1 + rowIndex * 0.1 + i * 0.02}
          />
        ))
      )}

      {/* Medium building windows */}
      {[200, 240, 280, 320, 360, 400, 440].map((y, rowIndex) =>
        [0, 1].map((i) => (
          <motion.rect
            key={`mw-${y}-${i}`}
            x={130 + i * 30}
            y={y}
            width="18"
            height="25"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-brand-gray"
            variants={pathVariants}
            custom={1.2 + rowIndex * 0.08 + i * 0.02}
          />
        ))
      )}

      {/* Small building windows */}
      {[300, 340, 380, 420].map((y, rowIndex) => (
        <motion.rect
          key={`sw-${y}`}
          x={305}
          y={y}
          width="40"
          height="25"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-brand-gray"
          variants={pathVariants}
          custom={1.3 + rowIndex * 0.1}
        />
      ))}

      {/* Ground line */}
      <motion.path
        d="M 20 480 L 380 480"
        stroke="currentColor"
        strokeWidth="1"
        className="text-accent-gold"
        variants={pathVariants}
        custom={1.8}
      />

      {/* Crane on tower */}
      <motion.path
        d="M 260 90 L 260 60 L 320 60"
        stroke="currentColor"
        strokeWidth="0.75"
        className="text-accent-gold"
        variants={pathVariants}
        custom={2}
      />
      <motion.path
        d="M 320 60 L 320 75"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-accent-gold"
        variants={pathVariants}
        custom={2.2}
      />
    </motion.svg>
  )
}

export function Welcome() {
  return (
    <section className="relative overflow-hidden bg-brand-cream py-20 md:py-28">
      {/* Architectural drawing background */}
      <ArchitecturalDrawing />

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
