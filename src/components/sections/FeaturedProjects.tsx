'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Plus } from 'lucide-react'
import { projects } from '@/lib/data'
import { getCategoryLabel } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

// Large featured project card with parallax - Foster+Partners inspired
function FeaturedCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.15])
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  )

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className="group relative"
      data-cursor="view"
      data-cursor-text="Explore"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-[21/9]">
          {/* Parallax Image with scale effect */}
          <motion.div
            className="absolute inset-[-20%] h-[140%] w-[140%]"
            style={{ y, scale: imageScale }}
          >
            <Image
              src={project.images[0]?.url || ''}
              alt={project.title}
              fill
              className="object-cover transition-all duration-1000 group-hover:scale-105"
              priority={index === 0}
            />
          </motion.div>

          {/* Sophisticated gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/95 via-brand-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/30" />

          {/* Animated line accent on hover */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-accent-gold"
            initial={{ width: '0%' }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Content with scroll-based opacity */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16"
            style={{ opacity: contentOpacity }}
          >
            <div className="max-w-2xl">
              {/* Project number with animated line */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="mb-6 flex items-center gap-6"
              >
                <span className="font-display text-8xl font-bold text-white/[0.08] lg:text-9xl">
                  0{index + 1}
                </span>
                <motion.div
                  className="h-px flex-1 bg-gradient-to-r from-accent-gold via-accent-gold/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.div>

              {/* Meta with stagger */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <span className="bg-accent-gold px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-black">
                  {getCategoryLabel(project.category)}
                </span>
                <span className="text-sm text-brand-silver">
                  {project.location}
                </span>
                <span className="h-1 w-1 rounded-full bg-accent-gold/60" />
                <span className="text-sm text-brand-silver">
                  {project.year}
                </span>
              </motion.div>

              {/* Title with clip-path reveal */}
              <motion.h3
                initial={{
                  opacity: 0,
                  y: 30,
                  clipPath: 'inset(100% 0% 0% 0%)',
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  clipPath: 'inset(0% 0% 0% 0%)',
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="mt-5 font-display text-3xl font-bold text-brand-white md:text-4xl lg:text-5xl xl:text-6xl"
              >
                {project.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-5 max-w-lg leading-relaxed text-brand-silver/90 md:text-lg"
              >
                {project.description}
              </motion.p>

              {/* CTA with animated arrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-10 flex items-center gap-8"
              >
                <span className="flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-brand-white transition-colors duration-300 group-hover:text-accent-gold">
                  <span className="relative">
                    Explore Project
                    <motion.span
                      className="absolute -bottom-1 left-0 h-px bg-accent-gold"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-3" />
                </span>

                {/* Specs preview */}
                {project.specs && (
                  <div className="hidden items-center gap-8 border-l border-white/20 pl-8 md:flex">
                    {project.specs.slice(0, 2).map((spec, i) => (
                      <motion.div
                        key={spec.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="font-display text-2xl font-bold text-brand-white">
                          {spec.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-brand-silver/60">
                          {spec.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* Architectural corner brackets - appear on hover */}
          <div className="absolute right-8 top-8 h-20 w-20 opacity-0 transition-all duration-700 group-hover:opacity-100">
            <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-accent-gold to-transparent" />
            <div className="absolute right-0 top-0 h-px w-full bg-gradient-to-l from-accent-gold to-transparent" />
          </div>
          <div className="absolute bottom-8 left-8 hidden h-20 w-20 opacity-0 transition-all delay-100 duration-700 group-hover:opacity-100 lg:block">
            <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-white/40 to-transparent" />
            <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-white/40 to-transparent" />
          </div>

          {/* Floating corner icon */}
          <motion.div
            className="absolute right-10 top-10 flex h-14 w-14 items-center justify-center border border-white/20 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100"
            whileHover={{ scale: 1.1, borderColor: 'rgba(206, 220, 229, 0.5)' }}
          >
            <Plus className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-90" />
          </motion.div>
        </div>
      </Link>
    </motion.article>
  )
}

// Smaller project card with SOM-inspired hover effects
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
      data-cursor="view"
      data-cursor-text="View"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-light">
          {/* Image with grayscale to color + zoom effect */}
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
            <Image
              src={project.images[0]?.url || ''}
              alt={project.title}
              fill
              className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
            />
          </div>

          {/* Overlay that fades in on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Category tag - slides in from top */}
          <motion.div className="absolute left-4 top-4 -translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="bg-accent-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-black">
              {getCategoryLabel(project.category)}
            </span>
          </motion.div>

          {/* Content overlay - slides up on hover */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-transform duration-500 ease-out group-hover:translate-y-0">
            <h3 className="font-display text-xl font-bold text-brand-white">
              {project.title}
            </h3>
            <div className="mt-2 flex items-center gap-2 text-xs text-brand-silver">
              <span>{project.location}</span>
              <span className="h-1 w-1 rounded-full bg-brand-silver" />
              <span>{project.year}</span>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accent-gold">
              View Project
              <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>

          {/* Corner bracket accent - architectural detail */}
          <div className="absolute right-4 top-4 h-8 w-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
            <div className="absolute right-0 top-0 h-full w-px bg-accent-gold/60" />
            <div className="absolute right-0 top-0 h-px w-full bg-accent-gold/60" />
          </div>
          <div className="absolute bottom-4 left-4 h-8 w-8 opacity-0 transition-all delay-75 duration-500 group-hover:opacity-100">
            <div className="absolute bottom-0 left-0 h-full w-px bg-white/40" />
            <div className="absolute bottom-0 left-0 h-px w-full bg-white/40" />
          </div>
        </div>

        {/* Text below - visible by default for accessibility */}
        <div className="mt-5 transition-opacity duration-300 group-hover:opacity-50">
          <div className="flex items-center gap-2 text-xs text-brand-gray">
            <span>{project.location}</span>
            <span className="h-1 w-1 rounded-full bg-brand-gray" />
            <span>{project.year}</span>
          </div>
          <h3 className="mt-2 font-display text-xl font-semibold text-brand-black">
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.article>
  )
}

export function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured).slice(0, 3)

  return (
    <section className="overflow-hidden bg-brand-white">
      {/* Section Header - Enhanced with architectural styling */}
      <div className="container-wide py-24 lg:py-32">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            {/* Eyebrow with animated line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <motion.div
                className="h-px bg-accent-gold"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gray">
                Our Portfolio
              </span>
            </motion.div>

            {/* Title with split animation */}
            <div className="mt-6 overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="font-display text-display-sm font-bold text-brand-black md:text-display-md lg:text-display-lg"
              >
                Featured Projects
              </motion.h2>
            </div>

            {/* Description with fade */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-relaxed text-brand-gray"
            >
              Each project represents our unwavering commitment to quality,
              innovation, and client satisfaction.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 flex items-center gap-8 border-t border-brand-light pt-8"
            >
              {[
                { value: '150+', label: 'Projects' },
                { value: '$500M+', label: 'Value Delivered' },
                { value: '100%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl font-bold text-brand-black">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-brand-gray">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button href="/projects" variant="primary" showArrow>
              View All Projects
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Featured Projects - Full Width */}
      <div className="space-y-4">
        {featuredProjects.map((project, index) => (
          <FeaturedCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* More Projects Grid */}
      {otherProjects.length > 0 && (
        <div className="container-wide py-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 font-display text-2xl font-semibold text-brand-black"
          >
            More Projects
          </motion.h3>
          <div className="grid gap-8 md:grid-cols-3">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
