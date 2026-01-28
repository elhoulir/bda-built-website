'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

// Animated word component for staggered text reveal
function AnimatedWord({
  children,
  delay = 0,
}: {
  children: string
  delay?: number
}) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  )
}

// Animated counter component
function CountUp({
  end,
  duration = 2,
  prefix = '',
  suffix = '',
}: {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      )

      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 25, suffix: '+', label: 'Years Experience' },
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 500, prefix: '$', suffix: 'M+', label: 'Project Value' },
]

export function Welcome() {
  return (
    <section className="relative bg-brand-cream py-20 md:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            <motion.div
              className="h-px bg-accent-gold"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gray">
              Welcome to BDA Built
            </span>
            <motion.div
              className="h-px bg-accent-gold"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          {/* Main heading with staggered word animation */}
          <h2 className="mt-8 font-display text-5xl font-bold leading-tight text-brand-black md:text-6xl lg:text-7xl">
            <span className="block">
              <AnimatedWord delay={0.1}>Building</AnimatedWord>{' '}
              <AnimatedWord delay={0.2}>Tomorrow&apos;s</AnimatedWord>
            </span>
            <span className="block text-accent-gold">
              <AnimatedWord delay={0.35}>Landmarks</AnimatedWord>
            </span>
            <span className="block">
              <AnimatedWord delay={0.5}>Today</AnimatedWord>
            </span>
          </h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-brand-gray md:text-2xl"
          >
            For over two decades, we&apos;ve been transforming architectural
            visions into reality. From commercial complexes to healthcare
            facilities, our commitment to excellence has made us a trusted
            partner in construction across Australia.
          </motion.p>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-12 grid grid-cols-3 gap-4 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="relative"
              >
                {/* Vertical divider (except first) */}
                {index > 0 && (
                  <div className="absolute -left-2 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-brand-gray/20 md:-left-4 md:block" />
                )}
                <div className="font-display text-3xl font-bold text-brand-black md:text-4xl lg:text-5xl">
                  <CountUp
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-brand-gray md:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
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
            transition={{ delay: 1 }}
            className="mt-12 flex flex-col items-center md:mt-16"
          >
            {/* Vertical connecting line */}
            <motion.div
              className="w-px bg-accent-gold"
              initial={{ height: 0 }}
              whileInView={{ height: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.1 }}
            />

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
