'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Modern commercial building SVG that draws itself
function CommercialBuildingAnimation() {
  return (
    <svg
      viewBox="0 0 280 180"
      className="w-72 h-48 md:w-96 md:h-64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ground line */}
      <motion.line
        x1="10"
        y1="170"
        x2="270"
        y2="170"
        stroke="#CEDCE5"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Main tower - tall commercial building */}
      <motion.path
        d="M60 170 L60 35 L140 35 L140 170"
        stroke="#CEDCE5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
      />

      {/* Main tower roof detail */}
      <motion.path
        d="M60 35 L100 15 L140 35"
        stroke="#CEDCE5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
      />

      {/* Antenna/spire */}
      <motion.line
        x1="100"
        y1="15"
        x2="100"
        y2="5"
        stroke="#CEDCE5"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 1.9, ease: "easeInOut" }}
      />

      {/* Secondary building - right side */}
      <motion.path
        d="M140 170 L140 70 L220 70 L220 170"
        stroke="#CEDCE5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 2.1, ease: "easeInOut" }}
      />

      {/* Secondary building roof */}
      <motion.line
        x1="140"
        y1="70"
        x2="220"
        y2="70"
        stroke="#CEDCE5"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 2.8, ease: "easeInOut" }}
      />

      {/* Main tower windows - Column 1 */}
      {[0, 1, 2, 3, 4].map((row) => (
        <motion.rect
          key={`win-1-${row}`}
          x="70"
          y={50 + row * 24}
          width="12"
          height="18"
          stroke="#CEDCE5"
          strokeWidth="1"
          fill="none"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.2, delay: 2.2 + row * 0.08, ease: "easeOut" }}
        />
      ))}

      {/* Main tower windows - Column 2 */}
      {[0, 1, 2, 3, 4].map((row) => (
        <motion.rect
          key={`win-2-${row}`}
          x="94"
          y={50 + row * 24}
          width="12"
          height="18"
          stroke="#CEDCE5"
          strokeWidth="1"
          fill="none"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.2, delay: 2.3 + row * 0.08, ease: "easeOut" }}
        />
      ))}

      {/* Main tower windows - Column 3 */}
      {[0, 1, 2, 3, 4].map((row) => (
        <motion.rect
          key={`win-3-${row}`}
          x="118"
          y={50 + row * 24}
          width="12"
          height="18"
          stroke="#CEDCE5"
          strokeWidth="1"
          fill="none"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.2, delay: 2.4 + row * 0.08, ease: "easeOut" }}
        />
      ))}

      {/* Secondary building windows - Row 1 */}
      {[0, 1, 2].map((col) => (
        <motion.rect
          key={`win-sec-1-${col}`}
          x={152 + col * 22}
          y="85"
          width="14"
          height="20"
          stroke="#CEDCE5"
          strokeWidth="1"
          fill="none"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.2, delay: 3.0 + col * 0.1, ease: "easeOut" }}
        />
      ))}

      {/* Secondary building windows - Row 2 */}
      {[0, 1, 2].map((col) => (
        <motion.rect
          key={`win-sec-2-${col}`}
          x={152 + col * 22}
          y="115"
          width="14"
          height="20"
          stroke="#CEDCE5"
          strokeWidth="1"
          fill="none"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.2, delay: 3.2 + col * 0.1, ease: "easeOut" }}
        />
      ))}

      {/* Main entrance */}
      <motion.rect
        x="85"
        y="145"
        width="30"
        height="25"
        stroke="#CEDCE5"
        strokeWidth="2"
        fill="none"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 0.4, delay: 3.4, ease: "easeOut" }}
      />

      {/* Secondary entrance */}
      <motion.rect
        x="165"
        y="150"
        width="25"
        height="20"
        stroke="#CEDCE5"
        strokeWidth="1.5"
        fill="none"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 0.3, delay: 3.6, ease: "easeOut" }}
      />

      {/* Small detail building on left */}
      <motion.path
        d="M25 170 L25 130 L55 130 L55 170"
        stroke="#CEDCE5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 3.7, ease: "easeInOut" }}
      />

      {/* Small building windows */}
      <motion.rect
        x="32"
        y="140"
        width="8"
        height="12"
        stroke="#CEDCE5"
        strokeWidth="1"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 4.0 }}
      />
      <motion.rect
        x="43"
        y="140"
        width="8"
        height="12"
        stroke="#CEDCE5"
        strokeWidth="1"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 4.1 }}
      />

      {/* Extension on far right */}
      <motion.path
        d="M220 170 L220 110 L255 110 L255 170"
        stroke="#CEDCE5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 3.8, ease: "easeInOut" }}
      />

      {/* Extension windows */}
      <motion.rect
        x="228"
        y="125"
        width="10"
        height="14"
        stroke="#CEDCE5"
        strokeWidth="1"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 4.2 }}
      />
      <motion.rect
        x="242"
        y="125"
        width="10"
        height="14"
        stroke="#CEDCE5"
        strokeWidth="1"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 4.3 }}
      />
    </svg>
  )
}

// Animated logo with smooth reveal
function LogoReveal() {
  return (
    <div className="relative overflow-hidden">
      {/* Gold line that reveals the logo */}
      <motion.div
        className="absolute inset-0 bg-accent-gold z-10"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 1.2,
          delay: 4.5,
          ease: [0.22, 1, 0.36, 1]
        }}
      />

      {/* Logo that fades in as line passes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 4.8,
          ease: "easeOut"
        }}
      >
        <Image
          src="/images/bda built logo.svg"
          alt="BDA Built"
          width={200}
          height={60}
          className="h-14 w-auto md:h-16"
          priority
        />
      </motion.div>
    </div>
  )
}

// Welcome text component
function WelcomeText() {
  const words = ['Welcome', 'to']

  return (
    <div className="flex items-center gap-3 overflow-hidden">
      {words.map((word, index) => (
        <motion.span
          key={word}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 4.3 + index * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-display text-lg md:text-xl font-light text-brand-silver/70 tracking-wide"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Progress synced with longer animation (~7s total)
    const duration = 7000
    const startTime = Date.now()

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / duration) * 100, 100)
      setProgress(newProgress)

      if (newProgress >= 100) {
        clearInterval(interval)
        // Longer delay before fade out for smoother transition
        setTimeout(() => setIsLoading(false), 800)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-brand-black"
          exit={{
            opacity: 0,
          }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Building animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <CommercialBuildingAnimation />
          </motion.div>

          {/* Welcome text above logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 4.2 }}
            className="mb-3"
          >
            <WelcomeText />
          </motion.div>

          {/* Logo with reveal animation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.3 }}
            className="mb-8"
          >
            <LogoReveal />
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative h-px w-48 bg-white/20 md:w-64"
          >
            <motion.div
              className="absolute left-0 top-0 h-full bg-accent-gold"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.05 }}
            />
          </motion.div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-xs uppercase tracking-[0.3em] text-brand-silver/50"
          >
            Building Excellence
          </motion.p>

          {/* Corner decorations */}
          <motion.div
            className="absolute left-8 top-8 h-16 w-16 border-l border-t border-white/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 h-16 w-16 border-b border-r border-white/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
