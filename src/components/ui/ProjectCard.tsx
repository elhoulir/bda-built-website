'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Project } from '@/types'
import { getCategoryLabel, cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  index?: number
  variant?: 'default' | 'featured' | 'minimal'
}

export function ProjectCard({
  project,
  index = 0,
  variant = 'default',
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  // Mouse position for 3D tilt effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), {
    stiffness: 300,
    damping: 30,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || variant === 'featured') return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const imageUrl =
    project.images[0]?.url ||
    `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80`

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: variant === 'default' ? rotateX : 0,
        rotateY: variant === 'default' ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className="group"
      data-cursor="view"
      data-cursor-text="View"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        {/* Image Container */}
        <div
          className={cn(
            'relative overflow-hidden bg-brand-light',
            variant === 'featured' ? 'aspect-[16/10]' : 'aspect-[4/3]'
          )}
        >
          {/* Image with zoom */}
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          >
            <Image
              src={imageUrl}
              alt={project.images[0]?.alt || project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-90" />

          {/* Category tag */}
          <motion.div
            className="absolute left-4 top-4"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="inline-block bg-accent-gold px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-black">
              {getCategoryLabel(project.category)}
            </span>
          </motion.div>

          {/* Hover content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            {/* Title - always visible on hover */}
            <motion.h3
              className="translate-y-4 font-display text-xl font-bold text-brand-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:text-2xl"
              style={{ transform: 'translateZ(20px)' }}
            >
              {project.title}
            </motion.h3>

            {/* Meta info - revealed on hover */}
            <div className="mt-3 flex translate-y-4 items-center justify-between opacity-0 transition-all delay-75 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex items-center gap-3 text-sm text-brand-silver">
                <span>{project.location}</span>
                <span className="h-1 w-1 rounded-full bg-brand-silver" />
                <span>{project.year}</span>
              </div>

              <motion.span
                className="flex items-center gap-2 bg-brand-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-black"
                whileHover={{ scale: 1.05 }}
              >
                View
                <ArrowUpRight className="h-3 w-3" />
              </motion.span>
            </div>
          </div>

          {/* Corner decoration */}
          <div className="absolute right-4 top-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
            <div className="flex h-12 w-12 items-center justify-center border border-white/30 backdrop-blur-sm">
              <ArrowUpRight className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>

        {/* Content below image - minimal version */}
        {variant === 'minimal' && (
          <div className="mt-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-brand-gray">
              <span>{getCategoryLabel(project.category)}</span>
              <span className="h-1 w-1 rounded-full bg-brand-gray" />
              <span>{project.location}</span>
            </div>
            <h3 className="mt-2 font-display text-xl font-semibold text-brand-black transition-colors group-hover:text-brand-charcoal md:text-2xl">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-brand-gray">
              {project.description}
            </p>
          </div>
        )}
      </Link>
    </motion.article>
  )
}

// Featured project card with larger layout
interface FeaturedProjectCardProps {
  project: Project
  index: number
}

export function FeaturedProjectCard({
  project,
  index,
}: FeaturedProjectCardProps) {
  const imageUrl =
    project.images[0]?.url ||
    `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80`

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative"
      data-cursor="view"
      data-cursor-text="Explore"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[21/9] overflow-hidden">
          {/* Image with parallax effect */}
          <motion.div
            className="absolute inset-[-10%] h-[120%] w-[120%]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          >
            <Image
              src={imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
            <div className="max-w-2xl">
              {/* Project number */}
              <div className="mb-4 flex items-center gap-4">
                <span className="font-display text-6xl font-bold text-white/10 lg:text-8xl">
                  0{index + 1}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-accent-gold to-transparent" />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4">
                <span className="bg-accent-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-black">
                  {getCategoryLabel(project.category)}
                </span>
                <span className="text-sm text-brand-silver">
                  {project.location}
                </span>
                <span className="h-1 w-1 rounded-full bg-brand-silver" />
                <span className="text-sm text-brand-silver">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-4 font-display text-3xl font-bold text-brand-white md:text-4xl lg:text-5xl">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 max-w-lg text-brand-silver/90 md:text-lg">
                {project.description}
              </p>

              {/* CTA */}
              <div className="mt-8 flex items-center gap-6">
                <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-brand-white transition-colors group-hover:text-accent-gold">
                  Explore Project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>

          {/* Corner accent */}
          <div className="absolute right-8 top-8 flex h-16 w-16 items-center justify-center border border-white/20 opacity-0 transition-all duration-500 group-hover:opacity-100">
            <ArrowUpRight className="h-6 w-6 text-white" />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
