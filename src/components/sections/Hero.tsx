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
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

// Architectural grid overlay - blueprint style with more visible elements
function ArchitecturalGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* More visible grid pattern */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]">
        <defs>
          <pattern
            id="grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
          <pattern
            id="grid-small"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="white"
              strokeWidth="0.25"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect
          width="100%"
          height="100%"
          fill="url(#grid-small)"
          opacity="0.3"
        />
      </svg>

      {/* Prominent vertical measurement lines with markers */}
      <motion.div
        className="absolute bottom-0 left-[8%] top-0 w-px"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'top' }}
      >
        <div className="h-full w-full bg-gradient-to-b from-accent-gold/60 via-accent-gold/20 to-transparent" />
        {/* Measurement markers */}
        {[20, 40, 60, 80].map((pos) => (
          <motion.div
            key={pos}
            className="absolute left-0 h-px w-3 bg-accent-gold/40"
            style={{ top: `${pos}%` }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3, delay: 0.8 + pos * 0.01 }}
          />
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-[12%] top-0 hidden w-px lg:block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'bottom' }}
      >
        <div className="h-full w-full bg-gradient-to-t from-white/30 via-white/10 to-transparent" />
      </motion.div>

      {/* Bold horizontal architectural lines */}
      <motion.div
        className="absolute left-0 right-0 top-[25%] h-px"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'left' }}
      >
        <div className="h-full w-full bg-gradient-to-r from-accent-gold/40 via-white/15 to-transparent" />
      </motion.div>

      <motion.div
        className="absolute left-0 right-0 top-[75%] h-px"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'right' }}
      >
        <div className="h-full w-full bg-gradient-to-l from-accent-gold/30 via-white/10 to-transparent" />
      </motion.div>

      {/* Diagonal accent line */}
      <motion.div
        className="absolute right-0 top-0 hidden h-[50vh] w-px origin-top-right md:block"
        style={{ transform: 'rotate(25deg)', transformOrigin: 'top right' }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="h-full w-full bg-gradient-to-b from-accent-gold/30 to-transparent" />
      </motion.div>
    </div>
  )
}

// Animated corner brackets - architectural framing (more prominent)
function CornerBrackets() {
  const bracketVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 },
  }

  return (
    <div className="pointer-events-none absolute inset-6 md:inset-10 lg:inset-14">
      {/* Top Left - larger and more visible */}
      <svg
        className="absolute left-0 top-0 h-24 w-24 md:h-36 md:w-36 lg:h-44 lg:w-44"
        viewBox="0 0 100 100"
      >
        <motion.path
          d="M 0 50 L 0 0 L 50 0"
          fill="none"
          stroke="#CEDCE5"
          strokeWidth="1.5"
          variants={bracketVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Inner bracket detail */}
        <motion.path
          d="M 8 30 L 8 8 L 30 8"
          fill="none"
          stroke="#CEDCE5"
          strokeWidth="0.5"
          strokeOpacity="0.5"
          variants={bracketVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>

      {/* Top Right */}
      <svg
        className="absolute right-0 top-0 h-24 w-24 md:h-36 md:w-36 lg:h-44 lg:w-44"
        viewBox="0 0 100 100"
      >
        <motion.path
          d="M 50 0 L 100 0 L 100 50"
          fill="none"
          stroke="#CEDCE5"
          strokeWidth="1.5"
          variants={bracketVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M 70 8 L 92 8 L 92 30"
          fill="none"
          stroke="#CEDCE5"
          strokeWidth="0.5"
          strokeOpacity="0.5"
          variants={bracketVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>

      {/* Bottom Left */}
      <svg
        className="absolute bottom-0 left-0 h-24 w-24 md:h-36 md:w-36 lg:h-44 lg:w-44"
        viewBox="0 0 100 100"
      >
        <motion.path
          d="M 0 50 L 0 100 L 50 100"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
          variants={bracketVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M 8 70 L 8 92 L 30 92"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.5"
          variants={bracketVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>

      {/* Bottom Right */}
      <svg
        className="absolute bottom-0 right-0 h-24 w-24 md:h-36 md:w-36 lg:h-44 lg:w-44"
        viewBox="0 0 100 100"
      >
        <motion.path
          d="M 100 50 L 100 100 L 50 100"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
          variants={bracketVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M 92 70 L 92 92 L 70 92"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.5"
          variants={bracketVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </div>
  )
}

// Floating architectural elements - much more visible
function FloatingElements() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large building silhouette - right side */}
      <motion.div
        className="absolute right-0 top-[10%] h-[80%] w-[400px] opacity-[0.08] md:w-[500px] lg:w-[600px]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.08, x: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg viewBox="0 0 400 600" fill="none" className="h-full w-full">
          {/* Tall tower */}
          <motion.rect
            x="80"
            y="50"
            width="100"
            height="550"
            stroke="white"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          {/* Tower windows */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((row) => (
            <motion.rect
              key={`tw-${row}`}
              x="100"
              y={100 + row * 60}
              width="60"
              height="40"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.3, delay: 1.5 + row * 0.1 }}
            />
          ))}

          {/* Medium building */}
          <motion.rect
            x="200"
            y="150"
            width="120"
            height="450"
            stroke="white"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
          />
          {/* Medium building windows */}
          {[0, 1, 2, 3, 4, 5].map((row) => (
            <motion.rect
              key={`mw-${row}`}
              x="220"
              y={200 + row * 65}
              width="80"
              height="45"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.3, delay: 1.8 + row * 0.1 }}
            />
          ))}

          {/* Small building */}
          <motion.rect
            x="340"
            y="280"
            width="80"
            height="320"
            stroke="white"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.9 }}
          />
        </svg>
      </motion.div>

      {/* Ambient glow - larger and more visible */}
      <motion.div
        className="bg-accent-gold/8 absolute -left-32 top-1/4 h-[600px] w-[600px] rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary glow on right */}
      <motion.div
        className="absolute -right-20 bottom-1/4 h-[400px] w-[400px] rounded-full bg-white/5 blur-[80px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Floating particles - subtle architectural dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute h-1 w-1 rounded-full bg-accent-gold/40"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}

// Scroll progress indicator - Foster+Partners inspired
function ScrollProgressLine() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className="fixed right-6 top-1/2 z-50 hidden h-32 w-px -translate-y-1/2 bg-white/10 lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <motion.div
        className="absolute left-0 top-0 w-full origin-top bg-accent-gold"
        style={{ height: '100%', scaleY }}
      />
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
    <span className={`inline-block overflow-hidden ${className}`}>
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

// Side vertical text - more prominent
function VerticalText() {
  return (
    <motion.div
      className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 md:left-8 lg:flex"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <motion.div
        className="h-24 w-px bg-gradient-to-b from-transparent via-accent-gold to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
      />
      <span className="writing-vertical text-[11px] font-medium uppercase tracking-[0.25em] text-accent-gold/70">
        Est. 2015
      </span>
      <motion.div
        className="h-20 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
      />
      <span className="writing-vertical text-[10px] uppercase tracking-[0.2em] text-brand-silver/40">
        Melbourne
      </span>
      <motion.div
        className="h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 2.1 }}
      />
    </motion.div>
  )
}

// Video sources for the hero section (hosted on Cloudflare R2)
const heroVideos = [
  'https://pub-1bc164ef4a7b4c6aba8a561fe5ca0a54.r2.dev/video%20one.mp4',
  'https://pub-1bc164ef4a7b4c6aba8a561fe5ca0a54.r2.dev/video%20two.mp4',
]

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
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
      videoRef.current.muted = isMuted
      if (isVideoPlaying) {
        videoRef.current.play().catch(() => {})
      } else {
        videoRef.current.pause()
      }
    }
  }, [isVideoPlaying, isMuted])

  // Handle video end - switch to next video in sequence
  const handleVideoEnded = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length)
  }

  // When video index changes, load and play the new video
  useEffect(() => {
    if (videoRef.current && videoLoaded) {
      videoRef.current.load()
      if (isVideoPlaying) {
        videoRef.current.play().catch(() => {})
      }
    }
  }, [currentVideoIndex])

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
        {/* Fallback image while video loads - dramatic architectural perspective */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1920&q=80')`,
            opacity: videoLoaded ? 0 : 1,
          }}
        />

        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          onEnded={handleVideoEnded}
          className="absolute inset-0 h-full w-full object-contain md:object-cover"
          poster="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1920&q=80"
        >
          <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
        </video>

        {/* Much brighter overlays - let the video shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 via-brand-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-brand-black/20" />
      </motion.div>

      {/* Architectural visual elements */}
      <ArchitecturalGrid />
      <CornerBrackets />
      <FloatingElements />
      <VerticalText />
      <ScrollProgressLine />

      {/* Subtle grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content */}
      <motion.div
        className="container-wide relative z-10 flex h-full flex-col justify-center pt-24"
        style={{ opacity: smoothOpacity }}
      >
        <AnimatePresence>
          {isLoaded && (
            <div className="max-w-5xl pl-0 lg:pl-16">
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

              {/* Subtitle with stagger */}
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
              {/* Stats with architectural styling */}
              <div className="hidden items-end gap-12 lg:flex">
                {[
                  { value: '150', suffix: '+', label: 'Projects Completed' },
                  { value: '25', suffix: '+', label: 'Years of Excellence' },
                  { value: '$500', suffix: 'M+', label: 'Project Value' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2 + index * 0.15 }}
                    className="group relative"
                  >
                    {/* Vertical line accent */}
                    <motion.div
                      className="absolute -left-4 bottom-0 top-0 w-px bg-accent-gold/30"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: 2.2 + index * 0.15 }}
                      style={{ transformOrigin: 'bottom' }}
                    />
                    <div className="font-display text-3xl font-bold text-brand-white transition-colors duration-300 group-hover:text-accent-gold md:text-4xl">
                      {stat.value}
                      <span className="text-accent-gold">{stat.suffix}</span>
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
                <div className="flex items-center gap-2">
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
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-brand-silver backdrop-blur-sm transition-all hover:border-accent-gold hover:text-accent-gold"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </button>
                </div>

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
