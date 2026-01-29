'use client'

import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Play, Pause } from 'lucide-react'

// Corner brackets - architectural framing
function CornerBrackets() {
  return (
    <div className="pointer-events-none absolute inset-8 md:inset-12 lg:inset-16">
      {/* Top Left */}
      <motion.div
        className="absolute left-0 top-0 h-16 w-16 md:h-24 md:w-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-white/40 to-transparent" />
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-white/40 to-transparent" />
      </motion.div>

      {/* Top Right */}
      <motion.div
        className="absolute right-0 top-0 h-16 w-16 md:h-24 md:w-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-white/40 to-transparent" />
        <div className="absolute right-0 top-0 h-px w-full bg-gradient-to-l from-white/40 to-transparent" />
      </motion.div>

      {/* Bottom Left */}
      <motion.div
        className="absolute bottom-0 left-0 h-16 w-16 md:h-24 md:w-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-white/30 to-transparent" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-white/30 to-transparent" />
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        className="absolute bottom-0 right-0 h-16 w-16 md:h-24 md:w-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-white/30 to-transparent" />
        <div className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-white/30 to-transparent" />
      </motion.div>
    </div>
  )
}

// Diagonal accent line
function DiagonalAccent() {
  return (
    <motion.div
      className="pointer-events-none absolute right-0 top-0 hidden h-[60vh] w-px origin-top-right md:block"
      style={{ transform: 'rotate(30deg)', transformOrigin: 'top right' }}
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="h-full w-full bg-gradient-to-b from-accent-gold/50 via-accent-gold/20 to-transparent" />
    </motion.div>
  )
}

// Animated text with character reveal
function AnimatedHeadline({
  children,
  className,
  delay = 0,
}: {
  children: string
  className?: string
  delay?: number
}) {
  return (
    <span className={`inline-block overflow-hidden pb-[0.15em] ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: '110%', rotateX: -80 }}
        animate={{ y: 0, rotateX: 0 }}
        transition={{
          duration: 1,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  )
}

// Rotating words component
function RotatingWords() {
  const words = ['Commercial', 'Industrial', 'Retail', 'Healthcare']
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className="relative inline-block h-[1.2em] overflow-hidden align-bottom"
      style={{ minWidth: '11ch' }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentIndex]}
          className="absolute left-0 whitespace-nowrap text-accent-gold"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

// Video source for the hero section (hosted on Cloudflare R2)
const heroVideo =
  'https://pub-1bc164ef4a7b4c6aba8a561fe5ca0a54.r2.dev/video%20two.mp4'

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const smoothY = useSpring(y, { stiffness: 50, damping: 20 })
  const smoothOpacity = useSpring(opacity, { stiffness: 50, damping: 20 })
  const smoothScale = useSpring(scale, { stiffness: 50, damping: 20 })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.play().catch(() => {})
      } else {
        videoRef.current.pause()
      }
    }
  }, [isVideoPlaying])

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[800px] overflow-hidden bg-brand-black"
    >
      {/* Video Background with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: smoothY, scale: smoothScale }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/70 via-brand-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-brand-black/30" />
      </motion.div>

      {/* Decorative elements */}
      <CornerBrackets />
      <DiagonalAccent />

      {/* Main Content */}
      <motion.div
        className="container-wide relative z-10 flex h-full flex-col justify-center pt-24"
        style={{ opacity: smoothOpacity }}
      >
        <AnimatePresence>
          {isLoaded && (
            <div className="max-w-5xl">
              {/* Eyebrow with animated line */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center gap-4"
              >
                <motion.div
                  className="h-px bg-accent-gold"
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent-gold/90 md:text-sm">
                  Building Excellence Since 2015
                </span>
              </motion.div>

              {/* Main Headline with rotating word */}
              <h1 className="mt-8 md:mt-10">
                <span className="block font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[1] tracking-tight text-brand-white">
                  <AnimatedHeadline delay={0.5}>Crafting</AnimatedHeadline>
                </span>
                <span className="mt-1 block font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[1] tracking-tight">
                  <RotatingWords />
                </span>
                <span className="mt-1 block font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[1] tracking-tight text-brand-white/80">
                  <AnimatedHeadline delay={0.7}>Spaces</AnimatedHeadline>
                </span>
              </h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 max-w-xl text-base leading-relaxed text-brand-silver md:text-lg"
              >
                Where architectural vision meets construction excellence.
                <span className="mt-2 block">
                  Delivering landmark projects across Australia with precision
                  and purpose.
                </span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
              >
                <Button href="/projects" variant="primary" size="lg" showArrow>
                  View Our Portfolio
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-brand-white backdrop-blur-sm transition-all hover:border-accent-gold hover:bg-accent-gold hover:text-brand-black"
                >
                  Start Your Project
                </Button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 z-20"
      >
        <div className="bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent">
          <div className="container-wide py-6 md:py-8">
            <div className="flex items-end justify-between">
              {/* Stats */}
              <div className="hidden items-end gap-12 lg:flex">
                {[
                  { value: '150+', label: 'Projects Completed' },
                  { value: '25+', label: 'Years of Excellence' },
                  { value: '$500M+', label: 'Project Value' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2 + index * 0.15 }}
                  >
                    <div className="font-display text-3xl font-bold text-brand-white md:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-wider text-brand-silver/60 md:text-xs">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right side controls */}
              <div className="ml-auto flex items-center gap-6">
                {/* Video Controls */}
                <button
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-brand-silver backdrop-blur-sm transition-all hover:border-accent-gold hover:text-accent-gold"
                  aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
                >
                  {isVideoPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </button>

                {/* Scroll indicator */}
                <motion.div
                  className="flex items-center gap-3 text-brand-silver"
                  animate={{ y: [0, 4, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <span className="hidden text-[10px] uppercase tracking-[0.2em] text-brand-silver/60 sm:inline">
                    Scroll
                  </span>
                  <div className="flex h-14 w-7 items-start justify-center rounded-full border border-white/20 p-2 backdrop-blur-sm">
                    <motion.div
                      className="h-2 w-1 rounded-full bg-accent-gold"
                      animate={{ y: [0, 16, 0] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
