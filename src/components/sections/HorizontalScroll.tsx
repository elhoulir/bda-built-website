'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { projects } from '@/lib/data'
import { getCategoryLabel } from '@/lib/utils'

// Shared project card component
function ProjectCard({
  project,
  index,
  showSpecs = true,
}: {
  project: (typeof projects)[0]
  index: number
  showSpecs?: boolean
}) {
  return (
    <motion.article
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        href={`/projects/${project.slug}`}
        data-cursor="view"
        data-cursor-text="View"
      >
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.images[0]?.url || ''}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent" />

          {/* Project number */}
          <div className="absolute right-6 top-6 font-display text-6xl font-bold text-white/10 md:text-8xl">
            0{index + 1}
          </div>

          {/* Content overlay */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <span className="inline-block bg-accent-gold px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-black">
              {getCategoryLabel(project.category)}
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-white md:text-4xl">
              {project.title}
            </h3>
            <div className="mt-2 flex items-center gap-4 text-sm text-brand-silver">
              <span>{project.location}</span>
              <span className="h-1 w-1 rounded-full bg-brand-silver" />
              <span>{project.year}</span>
            </div>

            {/* Hover CTA - visible by default on mobile */}
            <div className="mt-4 flex items-center gap-2 text-white opacity-100 transition-opacity duration-300 md:mt-6 md:opacity-0 md:group-hover:opacity-100">
              <span className="text-sm font-medium uppercase tracking-wider">
                View Project
              </span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Specs bar */}
        {showSpecs && project.specs && (
          <div className="mt-4 flex gap-6 border-t border-brand-black/10 pt-4 md:gap-8">
            {project.specs.slice(0, 3).map((spec) => (
              <div key={spec.label}>
                <div className="font-display text-lg font-bold text-brand-black md:text-xl">
                  {spec.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-brand-gray">
                  {spec.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </Link>
    </motion.article>
  )
}

// Progress dot component to fix hooks rules violation
function ProgressDot({
  index,
  scrollYProgress,
}: {
  index: number
  scrollYProgress: MotionValue<number>
}) {
  const background = useTransform(
    scrollYProgress,
    [index * 0.25, (index + 1) * 0.25],
    ['rgba(0,0,0,0.1)', 'rgba(184,151,126,1)']
  )

  return (
    <motion.div className="h-1 w-8 bg-brand-black/10" style={{ background }} />
  )
}

// Mobile layout - vertical stacked cards
function MobileLayout() {
  const mobileProjects = projects.slice(0, 2) // Show only 2 on mobile

  return (
    <section className="bg-brand-cream py-16 lg:hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-12 bg-accent-gold" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent-gold">
              Selected Works
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-3xl font-bold text-brand-black md:text-4xl"
          >
            Project Showcase
          </motion.h2>
        </div>

        {/* Stacked cards */}
        <div className="space-y-8">
          {mobileProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 border border-brand-black/20 px-8 py-4 text-sm font-medium uppercase tracking-wider text-brand-black transition-all hover:border-accent-gold hover:bg-accent-gold hover:text-brand-black"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// Desktop layout - horizontal scroll
function DesktopLayout() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%'])
  const featuredProjects = projects.slice(0, 4)

  return (
    <section
      ref={targetRef}
      className="relative hidden h-[400vh] bg-brand-cream lg:block"
    >
      {/* Section header - fixed at top */}
      <div className="sticky top-0 z-10 bg-brand-cream pb-8 pt-24">
        <div className="container-wide">
          <div className="flex items-end justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="h-px w-12 bg-accent-gold" />
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent-gold">
                  Selected Works
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 font-display text-4xl font-bold text-brand-black md:text-5xl"
              >
                Project Showcase
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-right"
            >
              <div className="flex items-center justify-end gap-2 text-xs uppercase tracking-wider text-brand-gray">
                <span>Scroll to explore</span>
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <ArrowDown className="h-3 w-3" />
                </motion.div>
              </div>
              <div className="mt-2 flex justify-end gap-1">
                {[...Array(4)].map((_, i) => (
                  <ProgressDot
                    key={i}
                    index={i}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Horizontal scrolling content */}
      <div className="sticky top-32 flex h-[calc(100vh-8rem)] items-center overflow-hidden">
        <motion.div className="flex gap-8 pl-16" style={{ x }}>
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group relative w-[45vw] flex-shrink-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/projects/${project.slug}`}
                data-cursor="view"
                data-cursor-text="View"
              >
                {/* Image container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.images[0]?.url || ''}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent" />

                  {/* Project number */}
                  <div className="absolute right-6 top-6 font-display text-8xl font-bold text-white/10">
                    0{index + 1}
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <span className="inline-block bg-accent-gold px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-black">
                      {getCategoryLabel(project.category)}
                    </span>
                    <h3 className="mt-4 font-display text-4xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-4 text-sm text-brand-silver">
                      <span>{project.location}</span>
                      <span className="h-1 w-1 rounded-full bg-brand-silver" />
                      <span>{project.year}</span>
                    </div>

                    {/* Hover CTA */}
                    <motion.div
                      className="mt-6 flex items-center gap-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      initial={false}
                    >
                      <span className="text-sm font-medium uppercase tracking-wider">
                        View Project
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Specs bar */}
                {project.specs && (
                  <div className="mt-4 flex gap-8 border-t border-brand-black/10 pt-4">
                    {project.specs.slice(0, 3).map((spec) => (
                      <div key={spec.label}>
                        <div className="font-display text-xl font-bold text-brand-black">
                          {spec.value}
                        </div>
                        <div className="text-xs uppercase tracking-wider text-brand-gray">
                          {spec.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Link>
            </motion.article>
          ))}

          {/* View all card */}
          <div className="flex w-[30vw] flex-shrink-0 items-center justify-center">
            <Link
              href="/projects"
              className="group flex flex-col items-center text-center"
              data-cursor="hover"
              data-cursor-text="View All"
            >
              <div className="flex h-32 w-32 items-center justify-center rounded-full border border-brand-black/20 transition-all duration-500 group-hover:scale-110 group-hover:border-accent-gold">
                <ArrowRight className="h-8 w-8 text-brand-black transition-transform duration-300 group-hover:translate-x-2" />
              </div>
              <span className="mt-6 text-sm font-medium uppercase tracking-wider text-brand-black">
                View All Projects
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function HorizontalScroll() {
  return (
    <>
      <MobileLayout />
      <DesktopLayout />
    </>
  )
}
