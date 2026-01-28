'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'

const storySegments = [
  {
    title: 'Vision',
    subtitle: 'Where it all begins',
    description:
      'Every great building starts with a vision. We listen, we understand, and we transform your aspirations into architectural reality.',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&h=1200&fit=crop&q=80',
    stat: { value: '20+', label: 'Years Experience' },
  },
  {
    title: 'Craft',
    subtitle: 'Precision in every detail',
    description:
      'Our master craftsmen bring decades of experience to every project. No shortcut, no compromise—just excellence in execution.',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=1200&fit=crop&q=80',
    stat: { value: '500+', label: 'Projects Delivered' },
  },
  {
    title: 'Legacy',
    subtitle: 'Built to endure',
    description:
      "We don't just build structures; we create landmarks that stand the test of time, shaping skylines for generations.",
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=1200&fit=crop&q=80',
    stat: { value: '$2B+', label: 'Project Value' },
  },
]

function StorySegment({
  segment,
  index,
  progress,
}: {
  segment: (typeof storySegments)[0]
  index: number
  progress: MotionValue<number>
}) {
  const segmentStart = index / storySegments.length
  const segmentEnd = (index + 1) / storySegments.length
  const segmentMid = (segmentStart + segmentEnd) / 2

  // Smoother opacity with longer crossfade
  const opacity = useTransform(
    progress,
    [
      segmentStart - 0.05,
      segmentStart + 0.08,
      segmentMid,
      segmentEnd - 0.08,
      segmentEnd + 0.05,
    ],
    [0, 1, 1, 1, 0]
  )

  // More gradual scale transition
  const scale = useTransform(
    progress,
    [segmentStart, segmentMid, segmentEnd],
    [0.95, 1, 1.02]
  )

  // Smoother vertical movement
  const y = useTransform(progress, [segmentStart, segmentEnd], ['5%', '-5%'])

  // Staggered text animations with smoother easing
  const textY = useTransform(
    progress,
    [segmentStart, segmentStart + 0.12],
    [40, 0]
  )
  const textOpacity = useTransform(
    progress,
    [segmentStart + 0.02, segmentStart + 0.1],
    [0, 1]
  )

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity }}
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src={segment.image}
          alt={segment.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/70" />
      </motion.div>

      {/* Content */}
      <motion.div className="container-wide relative z-10" style={{ y }}>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
            <motion.span
              className="text-8xl font-bold text-white/10 lg:text-[12rem]"
              style={{ opacity }}
            >
              0{index + 1}
            </motion.span>
            <div className="-mt-16 lg:-mt-24">
              <motion.span
                className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-accent-gold"
                style={{ y: textY, opacity: textOpacity }}
              >
                {segment.subtitle}
              </motion.span>
              <motion.h2
                className="mt-4 font-display text-5xl font-bold text-white md:text-6xl lg:text-7xl"
                style={{
                  y: useTransform(
                    progress,
                    [segmentStart + 0.01, segmentStart + 0.12],
                    [50, 0]
                  ),
                  opacity: useTransform(
                    progress,
                    [segmentStart + 0.03, segmentStart + 0.11],
                    [0, 1]
                  ),
                }}
              >
                {segment.title}
              </motion.h2>
              <motion.p
                className="mt-6 max-w-md text-lg leading-relaxed text-brand-silver"
                style={{
                  y: useTransform(
                    progress,
                    [segmentStart + 0.02, segmentStart + 0.13],
                    [40, 0]
                  ),
                  opacity: useTransform(
                    progress,
                    [segmentStart + 0.05, segmentStart + 0.12],
                    [0, 1]
                  ),
                }}
              >
                {segment.description}
              </motion.p>

              {/* Stat highlight */}
              <motion.div
                className="mt-8 inline-flex items-baseline gap-3 border-l-2 border-accent-gold pl-4"
                style={{
                  y: useTransform(
                    progress,
                    [segmentStart + 0.04, segmentStart + 0.14],
                    [30, 0]
                  ),
                  opacity: useTransform(
                    progress,
                    [segmentStart + 0.06, segmentStart + 0.13],
                    [0, 1]
                  ),
                }}
              >
                <span className="font-display text-4xl font-bold text-accent-gold md:text-5xl">
                  {segment.stat.value}
                </span>
                <span className="text-sm uppercase tracking-wider text-brand-silver">
                  {segment.stat.label}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Decorative element */}
          <div
            className={`hidden lg:block ${index % 2 === 1 ? 'lg:order-1' : ''}`}
          >
            <motion.div
              className="aspect-square w-full max-w-md"
              style={{ opacity }}
            >
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <motion.circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="rgba(184, 151, 126, 0.3)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />
                <motion.rect
                  x="40"
                  y="40"
                  width="120"
                  height="120"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Separate component to fix hooks rules violation
function ProgressIndicator({
  index,
  scrollYProgress,
}: {
  index: number
  scrollYProgress: MotionValue<number>
}) {
  const segmentStart = index / storySegments.length
  const segmentEnd = (index + 1) / storySegments.length
  const isActive = useTransform(
    scrollYProgress,
    [segmentStart, segmentEnd],
    [0, 1]
  )
  const background = useTransform(
    isActive,
    [0, 1],
    ['rgba(255,255,255,0.35)', 'rgba(184,151,126,1)']
  )
  const boxShadow = useTransform(
    isActive,
    [0, 0.5, 1],
    [
      '0 0 0 rgba(184,151,126,0)',
      '0 0 8px rgba(184,151,126,0.5)',
      '0 0 12px rgba(184,151,126,0.6)',
    ]
  )

  return (
    <motion.div
      className="h-20 w-1 rounded-full"
      style={{ background, boxShadow }}
    />
  )
}

// Separate component for scroll hint
function ScrollHint({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>
}) {
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      style={{ opacity }}
    >
      <span className="text-xs uppercase tracking-[0.2em] text-brand-silver/50">
        Scroll to explore our story
      </span>
    </motion.div>
  )
}

export function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: '260vh' }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden bg-brand-black">
        {/* Progress indicator */}
        <div className="absolute left-8 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
          {storySegments.map((_, index) => (
            <ProgressIndicator
              key={index}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Story segments */}
        {storySegments.map((segment, index) => (
          <StorySegment
            key={index}
            segment={segment}
            index={index}
            progress={scrollYProgress}
          />
        ))}

        {/* Scroll hint */}
        <ScrollHint scrollYProgress={scrollYProgress} />
      </div>
    </section>
  )
}
