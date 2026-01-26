'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Animated welcome text with letter-by-letter reveal
function WelcomeText() {
  const text = 'Welcome to'

  return (
    <div className="flex items-center justify-center overflow-hidden">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.5 + index * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-display text-sm font-light tracking-[0.2em] text-brand-silver/50 md:text-base"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  )
}

// Animated tagline with line sweep effect
function TaglineReveal() {
  return (
    <div className="relative overflow-hidden">
      {/* Sweep line */}
      <motion.div
        className="absolute inset-0 z-10 bg-accent-gold/80"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 0.8,
          delay: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Text revealed after sweep */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 1.9,
          ease: 'easeOut',
        }}
        className="text-[11px] uppercase tracking-[0.3em] text-brand-silver/60"
      >
        Building Excellence
      </motion.p>
    </div>
  )
}

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Scroll to top on page load/refresh - use requestAnimationFrame
    // to ensure it happens after hydration and before paint
    if (typeof window !== 'undefined') {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      })
    }

    // Timing adjusted for all animations (~3s total)
    const duration = 2800
    const startTime = Date.now()

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / duration) * 100, 100)
      setProgress(newProgress)

      if (newProgress >= 100) {
        clearInterval(interval)
        // Brief pause before exit transition
        setTimeout(() => setIsLoading(false), 500)
      }
    }, 16) // ~60fps for smooth progress

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-brand-black"
          exit={{ y: '-100%' }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          {/* Welcome text - appears first */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mb-4"
          >
            <WelcomeText />
          </motion.div>

          {/* Logo - much larger, bold statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-10"
          >
            <Image
              src="/images/bda built logo.svg"
              alt="BDA Built"
              width={280}
              height={84}
              className="h-[72px] w-auto md:h-24"
              priority
            />
          </motion.div>

          {/* Progress bar with percentage counter */}
          <div className="flex items-center gap-4">
            {/* Progress line */}
            <div className="relative w-40 md:w-48">
              {/* Track */}
              <motion.div
                className="h-[1px] w-full bg-white/10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              />

              {/* Progress fill */}
              <motion.div
                className="absolute left-0 top-0 h-[1px] bg-accent-gold"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage counter */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="w-8 text-xs font-light tabular-nums text-brand-silver/40"
            >
              {Math.round(progress)}%
            </motion.span>
          </div>

          {/* Tagline with sweep reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.4 }}
            className="mt-8"
          >
            <TaglineReveal />
          </motion.div>

          {/* Subtle corner accents */}
          <motion.div
            className="absolute left-6 top-6 h-12 w-12 border-l border-t border-white/[0.08]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          />
          <motion.div
            className="absolute bottom-6 right-6 h-12 w-12 border-b border-r border-white/[0.08]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
