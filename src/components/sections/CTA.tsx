'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function CTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-black"
    >
      {/* Background Image with Parallax - City skyline at night */}
      <motion.div
        className="absolute inset-0 -top-[10%] h-[120%] w-full"
        style={{ y, scale }}
      >
        <Image
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&fit=crop&q=80"
          alt="City skyline at dusk"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/40" />
      <div className="absolute inset-0 bg-brand-black/30" />

      {/* Content */}
      <div className="container-wide relative py-16 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-widest text-accent-gold"
          >
            Start Your Project
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 font-display text-display-sm font-bold text-brand-white md:text-display-md"
          >
            Ready to Build Something Exceptional?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-relaxed text-brand-silver"
          >
            Let&apos;s discuss your vision. Our team is ready to bring your
            commercial project to life with the quality and care it deserves.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Get in Touch
            </Button>
            <Button
              href="tel:+61420777755"
              variant="outline"
              size="lg"
              className="border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black"
            >
              Call 0420 777 755
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
