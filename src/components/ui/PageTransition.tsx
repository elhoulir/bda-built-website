'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile for smoother animations
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Scroll to top on route change - with slight delay to let transition start
  useEffect(() => {
    // Small timeout to ensure we scroll after the new page starts rendering
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, 50)

    return () => clearTimeout(timeout)
  }, [pathname])

  // Smoother, longer durations for mobile
  const overlayDuration = isMobile ? 0.7 : 0.5
  const accentDuration = isMobile ? 1.0 : 0.8
  const contentDuration = isMobile ? 0.6 : 0.4
  const contentDelay = isMobile ? 0.4 : 0.3

  return (
    <div>
      {/* Reveal overlay - covers screen then slides away */}
      <motion.div
        key={`overlay-${pathname}`}
        className="pointer-events-none fixed inset-0 z-[100] bg-brand-black"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{
          duration: overlayDuration,
          ease: [0.22, 1, 0.36, 1], // Smoother ease-out curve
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
          duration: accentDuration,
          ease: [0.22, 1, 0.36, 1],
          times: [0, 0.4, 0.6, 1],
        }}
        style={{ transformOrigin: 'left' }}
      />

      {/* Page content with fade and subtle slide up */}
      <motion.div
        key={`content-${pathname}`}
        initial={{ opacity: 0, y: isMobile ? 20 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: contentDuration,
          delay: contentDelay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
