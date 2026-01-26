'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

// Full-bleed parallax image section
export function ParallaxImage({
  src,
  alt,
  height = 'h-[70vh]',
  overlay = true,
  children,
}: {
  src: string
  alt: string
  height?: string
  overlay?: boolean
  children?: React.ReactNode
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <section
      ref={containerRef}
      className={`relative ${height} overflow-hidden`}
    >
      <motion.div
        className="absolute inset-0 -top-[10%] h-[120%] w-full"
        style={{ y: smoothY, scale }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 via-transparent to-brand-black/50" />
      )}

      {children && (
        <div className="relative z-10 flex h-full items-center justify-center">
          {children}
        </div>
      )}
    </section>
  )
}

// Quote/statement with background image
export function StatementSection({
  quote,
  author,
  backgroundImage,
}: {
  quote: string
  author?: string
  backgroundImage: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.95, 1, 1, 0.95]
  )

  return (
    <section
      ref={containerRef}
      className="relative flex h-[80vh] items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/70" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-8 text-center"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Decorative quote marks */}
          <span className="mb-4 block font-display text-8xl leading-none text-accent-gold/20">
            &ldquo;
          </span>

          <p className="font-display text-2xl font-light leading-relaxed text-brand-white md:text-3xl lg:text-4xl">
            {quote}
          </p>

          {author && (
            <p className="mt-8 text-sm uppercase tracking-[0.2em] text-accent-gold">
              {author}
            </p>
          )}
        </motion.div>
      </motion.div>

      {/* Corner accents */}
      <div className="absolute left-12 top-12 h-20 w-20 border-l border-t border-accent-gold/30" />
      <div className="absolute bottom-12 right-12 h-20 w-20 border-b border-r border-white/20" />
    </section>
  )
}
