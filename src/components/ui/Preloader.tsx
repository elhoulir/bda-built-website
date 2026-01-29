'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Only run on client to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })

    // Simple progress animation
    const duration = 2000
    const startTime = Date.now()

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / duration) * 100, 100)
      setProgress(newProgress)

      if (newProgress >= 100) {
        clearInterval(interval)
        setTimeout(() => setIsLoading(false), 300)
      }
    }, 16)

    return () => clearInterval(interval)
  }, [mounted])

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-brand-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <Image
              src="/images/bda built logo.svg"
              alt="BDA Built"
              width={200}
              height={60}
              className="h-16 w-auto md:h-20"
              priority
            />
          </motion.div>

          {/* Progress bar */}
          <div className="w-32 md:w-40">
            <div className="h-px w-full bg-white/10">
              <motion.div
                className="h-full bg-accent-gold"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-6 text-[10px] uppercase tracking-[0.3em] text-brand-silver/50"
          >
            Building Excellence
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
