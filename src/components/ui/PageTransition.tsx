'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  // Scroll to top on route change - with slight delay to let transition start
  useEffect(() => {
    // Small timeout to ensure we scroll after the new page starts rendering
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, 50)

    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <div>
      {/* Reveal overlay - covers screen then slides away */}
      <motion.div
        key={`overlay-${pathname}`}
        className="pointer-events-none fixed inset-0 z-[100] bg-brand-black"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{ transformOrigin: 'top' }}
      />

      {/* Gold accent line that sweeps across */}
      <motion.div
        key={`accent-${pathname}`}
        className="pointer-events-none fixed left-0 right-0 top-0 z-[101] h-1 bg-accent-gold"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 1, 0] }}
        transition={{
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
          times: [0, 0.4, 0.6, 1],
        }}
        style={{ transformOrigin: 'left' }}
      />

      {/* Page content with fade in */}
      <motion.div
        key={`content-${pathname}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.3,
          ease: 'easeOut',
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
