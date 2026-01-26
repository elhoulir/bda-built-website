'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

interface RevealImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function RevealImage({
  src,
  alt,
  className = '',
  priority = false,
  direction = 'up',
}: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const clipPaths = {
    up: {
      hidden: 'inset(100% 0 0 0)',
      visible: 'inset(0 0 0 0)',
    },
    down: {
      hidden: 'inset(0 0 100% 0)',
      visible: 'inset(0 0 0 0)',
    },
    left: {
      hidden: 'inset(0 100% 0 0)',
      visible: 'inset(0 0 0 0)',
    },
    right: {
      hidden: 'inset(0 0 0 100%)',
      visible: 'inset(0 0 0 0)',
    },
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Reveal overlay */}
      <motion.div
        className="absolute inset-0 z-10 bg-accent-gold"
        initial={{ scaleY: 1 }}
        animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        style={{ originY: direction === 'up' ? 0 : 1 }}
      />

      {/* Image with clip path reveal */}
      <motion.div
        className="relative h-full w-full"
        initial={{ clipPath: clipPaths[direction].hidden }}
        animate={isInView ? { clipPath: clipPaths[direction].visible } : {}}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div
          initial={{ scale: 1.3 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="h-full w-full"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
