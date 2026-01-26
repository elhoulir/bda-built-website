'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { stats } from '@/lib/data'

// Animated counter component
function AnimatedCounter({
  value,
  suffix = '',
  dark: _dark = false,
}: {
  value: number
  suffix?: string
  dark?: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
  })

  const display = useTransform(spring, (current) => Math.floor(current))

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const unsubscribe = display.on('change', (v) => {
      setDisplayValue(v)
    })
    return () => unsubscribe()
  }, [display])

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix && <span className="text-accent-gold">{suffix}</span>}
    </span>
  )
}

interface StatsProps {
  dark?: boolean
}

export function Stats({ dark = false }: StatsProps) {
  return (
    <section
      className={`relative overflow-hidden py-24 md:py-32 ${
        dark ? 'bg-brand-black' : 'bg-brand-cream'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large number watermark */}
        <div
          className={`absolute -right-20 top-1/2 -translate-y-1/2 font-display text-[20rem] font-bold leading-none ${
            dark ? 'text-white/[0.02]' : 'text-brand-black/[0.02]'
          }`}
        >
          BDA
        </div>

        {/* Animated lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute h-px ${
              dark ? 'bg-white/5' : 'bg-brand-black/5'
            }`}
            style={{
              width: '100%',
              top: `${30 + i * 20}%`,
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          />
        ))}
      </div>

      <div className="container-wide relative">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span
            className={`text-xs font-medium uppercase tracking-[0.2em] ${
              dark ? 'text-accent-gold' : 'text-brand-gray'
            }`}
          >
            Our Track Record
          </span>
          <h2
            className={`mt-4 font-display text-2xl font-semibold md:text-3xl ${
              dark ? 'text-brand-white' : 'text-brand-black'
            }`}
          >
            Numbers That Speak for Themselves
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Vertical divider */}
              {index > 0 && (
                <div
                  className={`absolute -left-4 top-1/2 hidden h-16 w-px -translate-y-1/2 md:block ${
                    dark ? 'bg-white/10' : 'bg-brand-black/10'
                  }`}
                />
              )}

              <div className="text-center">
                {/* Number */}
                <div
                  className={`font-display text-5xl font-bold md:text-6xl lg:text-7xl ${
                    dark ? 'text-brand-white' : 'text-brand-black'
                  }`}
                >
                  <AnimatedCounter
                    value={parseInt(stat.value)}
                    suffix={stat.suffix}
                    dark={dark}
                  />
                </div>

                {/* Label */}
                <p
                  className={`mt-3 text-sm uppercase tracking-wider ${
                    dark ? 'text-brand-silver' : 'text-brand-gray'
                  }`}
                >
                  {stat.label}
                </p>

                {/* Hover accent line */}
                <motion.div className="mx-auto mt-4 h-0.5 w-0 bg-accent-gold transition-all duration-500 group-hover:w-12" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
