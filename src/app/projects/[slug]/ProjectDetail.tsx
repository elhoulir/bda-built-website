'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Project } from '@/types'
import { projects } from '@/lib/data'
import { getCategoryLabel } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { CTA } from '@/components/sections/CTA'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const currentIndex = projects.findIndex((p) => p.id === project.id)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-32 md:pt-40">
        <div className="container-wide pb-16 md:pb-24">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Breadcrumbs
              items={[
                { label: 'Projects', href: '/projects' },
                { label: project.title },
              ]}
              className="[&_a:hover]:text-brand-white [&_a]:text-brand-silver [&_span[aria-current]]:text-brand-white [&_svg]:text-brand-gray/50"
            />
          </motion.div>

          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 text-sm uppercase tracking-wider text-accent-gold">
                <span>{getCategoryLabel(project.category)}</span>
                <span className="h-1 w-1 rounded-full bg-accent-gold" />
                <span>{project.year}</span>
              </div>
              <h1 className="mt-6 font-display text-display-md font-bold text-brand-white md:text-display-lg">
                {project.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-brand-silver">
                {project.description}
              </p>
            </motion.div>

            {/* Project Specs */}
            {project.specs && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-3 gap-6"
              >
                {project.specs.map((spec) => (
                  <div key={spec.label}>
                    <div className="font-display text-3xl font-bold text-brand-white">
                      {spec.value}
                    </div>
                    <div className="mt-1 text-sm uppercase tracking-wider text-brand-silver">
                      {spec.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="bg-brand-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative aspect-[21/9] w-full overflow-hidden"
        >
          <Image
            src={project.images[0]?.url || ''}
            alt={project.images[0]?.alt || project.title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* Project Content */}
      <section className="bg-brand-white py-24 md:py-32">
        <div className="container-narrow">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="sticky top-32 space-y-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gray">
                    Location
                  </h3>
                  <p className="mt-2 text-brand-black">{project.location}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gray">
                    Category
                  </h3>
                  <p className="mt-2 text-brand-black">
                    {getCategoryLabel(project.category)}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gray">
                    Year
                  </h3>
                  <p className="mt-2 text-brand-black">{project.year}</p>
                </div>
                <Button
                  href="/contact"
                  variant="primary"
                  showArrow
                  className="mt-8"
                >
                  Start Your Project
                </Button>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="space-y-16 lg:col-span-2">
              {project.challenge && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-2xl font-semibold text-brand-black">
                    The Challenge
                  </h2>
                  <p className="mt-4 leading-relaxed text-brand-slate">
                    {project.challenge}
                  </p>
                </motion.div>
              )}

              {project.solution && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-2xl font-semibold text-brand-black">
                    Our Solution
                  </h2>
                  <p className="mt-4 leading-relaxed text-brand-slate">
                    {project.solution}
                  </p>
                </motion.div>
              )}

              {project.result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-2xl font-semibold text-brand-black">
                    The Result
                  </h2>
                  <p className="mt-4 leading-relaxed text-brand-slate">
                    {project.result}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery - Elegant staggered layout */}
      {project.images.length > 1 && (
        <section className="overflow-hidden bg-brand-cream py-24 md:py-32">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 flex items-center gap-4"
            >
              <div className="h-px w-12 bg-brand-slate" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gray">
                Project Gallery
              </span>
            </motion.div>

            {/* Staggered gallery layout */}
            <div className="space-y-8">
              {project.images.slice(1).map((image, index) => {
                // Alternate between full-width and side-by-side layouts
                const isFullWidth = index % 3 === 0
                const isLeft = index % 3 === 1

                if (isFullWidth) {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="group relative aspect-[21/9] overflow-hidden"
                    >
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </motion.div>
                  )
                }

                // Check if there's a next image for side-by-side
                const nextImage = project.images.slice(1)[index + 1]
                if (isLeft && nextImage) {
                  return (
                    <div key={index} className="grid gap-8 md:grid-cols-2">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="group relative aspect-[4/3] overflow-hidden"
                      >
                        <Image
                          src={image.url}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="group relative aspect-[4/3] overflow-hidden md:mt-16"
                      >
                        <Image
                          src={nextImage.url}
                          alt={nextImage.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </motion.div>
                    </div>
                  )
                }

                // Skip if this image was already rendered as part of side-by-side
                if (!isFullWidth && !isLeft) {
                  return null
                }

                // Single image fallback
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`group relative aspect-[4/3] overflow-hidden ${isLeft ? 'md:w-2/3' : 'md:ml-auto md:w-2/3'}`}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Project Navigation */}
      <section className="border-t border-brand-light bg-brand-white py-16">
        <div className="container-wide">
          <div className="flex items-center justify-between">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-4"
              >
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-brand-gray">
                    Previous
                  </span>
                  <p className="mt-1 font-display font-semibold text-brand-black">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-4 text-right"
              >
                <div>
                  <span className="text-xs uppercase tracking-wider text-brand-gray">
                    Next
                  </span>
                  <p className="mt-1 font-display font-semibold text-brand-black">
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
