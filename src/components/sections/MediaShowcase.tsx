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
    <section ref={containerRef} className={`relative ${height} overflow-hidden`}>
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
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
        <div className="relative z-10 h-full flex items-center justify-center">
          {children}
        </div>
      )}
    </section>
  )
}

// Video background section
export function VideoSection({
  src,
  poster,
  height = 'h-[80vh]',
  children,
}: {
  src: string
  poster?: string
  height?: string
  children?: React.ReactNode
}) {
  return (
    <section className={`relative ${height} overflow-hidden bg-brand-black`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-brand-black/40" />

      {children && (
        <div className="relative z-10 h-full flex items-center justify-center">
          {children}
        </div>
      )}
    </section>
  )
}

// Split media section - image and content side by side
export function SplitMedia({
  imageSrc,
  imageAlt,
  imagePosition = 'left',
  children,
}: {
  imageSrc: string
  imageAlt: string
  imagePosition?: 'left' | 'right'
  children: React.ReactNode
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])

  return (
    <section ref={containerRef} className="relative bg-brand-cream overflow-hidden">
      <div className={`grid lg:grid-cols-2 min-h-[80vh] ${imagePosition === 'right' ? 'lg:grid-flow-dense' : ''}`}>
        {/* Image side */}
        <div className={`relative h-[50vh] lg:h-auto overflow-hidden ${imagePosition === 'right' ? 'lg:col-start-2' : ''}`}>
          <motion.div
            className="absolute inset-0 w-full h-[110%] -top-[5%]"
            style={{ y: imageY }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Architectural corner accents */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-accent-gold/50" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/30" />
        </div>

        {/* Content side */}
        <div className="flex items-center p-8 lg:p-16 xl:p-24">
          {children}
        </div>
      </div>
    </section>
  )
}

// Staggered image grid with parallax
export function ImageMosaic() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '-5%'])

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&fit=crop&q=80',
      alt: 'Modern luxury residence',
      className: 'col-span-2 row-span-2',
      y: y1,
    },
    {
      src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&fit=crop&q=80',
      alt: 'Contemporary home exterior',
      className: 'col-span-1 row-span-1',
      y: y2,
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&fit=crop&q=80',
      alt: 'Modern interior design',
      className: 'col-span-1 row-span-1',
      y: y3,
    },
    {
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&fit=crop&q=80',
      alt: 'Architectural detail',
      className: 'col-span-1 row-span-2',
      y: y2,
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&fit=crop&q=80',
      alt: 'Luxury property exterior',
      className: 'col-span-1 row-span-1',
      y: y1,
    },
  ]

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-brand-black overflow-hidden">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className="h-px bg-accent-gold"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-silver">
              Our Work in Action
            </span>
          </div>
          <h2 className="font-display text-display-sm font-bold text-brand-white md:text-display-md">
            Building Tomorrow&apos;s Landmarks
          </h2>
        </motion.div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden group ${image.className}`}
              style={{ y: image.y }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/40 transition-colors duration-500" />

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
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
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95])

  return (
    <section ref={containerRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
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
        className="relative z-10 max-w-4xl mx-auto px-8 text-center"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Decorative quote marks */}
          <span className="block font-display text-8xl text-accent-gold/20 leading-none mb-4">
            &ldquo;
          </span>

          <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-brand-white leading-relaxed">
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
      <div className="absolute top-12 left-12 w-20 h-20 border-l border-t border-accent-gold/30" />
      <div className="absolute bottom-12 right-12 w-20 h-20 border-r border-b border-white/20" />
    </section>
  )
}

// Horizontal scrolling gallery
export function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])

  const galleryImages = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&fit=crop&q=80',
  ]

  return (
    <section ref={containerRef} className="py-24 overflow-hidden bg-brand-white">
      <motion.div
        className="flex gap-6 pl-8"
        style={{ x }}
      >
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-[400px] md:w-[500px] aspect-[4/3] overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={src}
              alt={`Project gallery image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="500px"
            />
            <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/30 transition-colors duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
