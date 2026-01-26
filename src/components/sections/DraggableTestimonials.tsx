'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, PanInfo } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'

export function DraggableTestimonials() {
  const constraintsRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const x = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })

  const cardWidth = 400
  const gap = 32
  const totalWidth = (cardWidth + gap) * testimonials.length

  const handleDragEnd = (_: any, info: PanInfo) => {
    const offset = info.offset.x
    const velocity = info.velocity.x

    if (Math.abs(velocity) > 500 || Math.abs(offset) > cardWidth / 2) {
      const direction = offset > 0 || velocity > 500 ? -1 : 1
      const newIndex = Math.max(
        0,
        Math.min(testimonials.length - 1, activeIndex + direction)
      )
      setActiveIndex(newIndex)
      x.set(-newIndex * (cardWidth + gap))
    } else {
      x.set(-activeIndex * (cardWidth + gap))
    }
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
    x.set(-index * (cardWidth + gap))
  }

  return (
    <section className="overflow-hidden bg-brand-black py-24 md:py-32">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-12 bg-accent-gold" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent-gold">
                Testimonials
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 font-display text-4xl font-bold text-brand-white md:text-5xl"
            >
              What Our Clients Say
            </motion.h2>
          </div>

          {/* Dots - larger tap targets for mobile accessibility */}
          <div className="flex gap-1">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group flex h-11 w-11 items-center justify-center"
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              >
                <span
                  className={`block h-2 w-8 transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-accent-gold'
                      : 'bg-brand-silver/30 group-hover:bg-brand-silver/50'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Draggable area */}
        <div ref={constraintsRef} className="overflow-visible">
          <motion.div
            drag="x"
            dragConstraints={{
              left: -totalWidth + cardWidth + gap,
              right: 0,
            }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            style={{ x: springX }}
            className="flex cursor-grab gap-8 active:cursor-grabbing"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="w-[400px] flex-shrink-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative bg-brand-charcoal p-8 md:p-10">
                  {/* Quote icon */}
                  <Quote className="absolute right-8 top-8 h-12 w-12 text-brand-slate/20" />

                  {/* Quote */}
                  <p className="relative z-10 text-lg leading-relaxed text-brand-silver md:text-xl">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="mt-8 border-t border-brand-slate/20 pt-6">
                    <p className="font-display font-semibold text-brand-white">
                      {testimonial.author}
                    </p>
                    <p className="mt-1 text-sm text-brand-silver">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>

                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-16 bg-accent-gold" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Drag hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-brand-silver/50"
        >
          Drag to explore more testimonials
        </motion.p>
      </div>
    </section>
  )
}
