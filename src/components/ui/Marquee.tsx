'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MarqueeProps {
  children: React.ReactNode
  direction?: 'left' | 'right'
  speed?: number
  className?: string
  pauseOnHover?: boolean
}

export function Marquee({
  children,
  direction = 'left',
  speed = 30,
  className,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        'group flex overflow-hidden',
        pauseOnHover && '[&:hover_.marquee-content]:pause',
        className
      )}
    >
      <motion.div
        className="marquee-content flex shrink-0 items-center gap-8"
        animate={{
          x: direction === 'left' ? [0, '-50%'] : ['-50%', 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

// Text marquee for headlines
interface TextMarqueeProps {
  text: string | string[]
  separator?: string
  className?: string
  textClassName?: string
  speed?: number
}

export function TextMarquee({
  text,
  separator = '—',
  className,
  textClassName,
  speed = 20,
}: TextMarqueeProps) {
  const phrases = Array.isArray(text) ? text : [text]

  const content = (
    <>
      {[...Array(3)].map((_, repeatIndex) =>
        phrases.map((phrase, phraseIndex) => (
          <span
            key={`${repeatIndex}-${phraseIndex}`}
            className="flex items-center gap-8"
          >
            <span className={textClassName}>{phrase}</span>
            <span className="text-accent-gold">{separator}</span>
          </span>
        ))
      )}
    </>
  )

  return (
    <Marquee speed={speed} className={className} pauseOnHover={false}>
      {content}
    </Marquee>
  )
}
