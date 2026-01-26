'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Building2, Warehouse, Store, Heart, RefreshCw, Home } from 'lucide-react'
import { Service } from '@/types'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  building: Building2,
  warehouse: Warehouse,
  store: Store,
  heart: Heart,
  refresh: RefreshCw,
  home: Home,
}

interface ServiceCardProps {
  service: Service
  index?: number
  variant?: 'default' | 'featured'
}

export function ServiceCard({ service, index = 0, variant = 'default' }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Building2

  if (variant === 'featured') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative"
        data-cursor="view"
        data-cursor-text="Explore"
      >
        <Link href={`/services#${service.slug}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden">
            {/* Background image with zoom */}
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Gradient overlay - intensifies on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/20 transition-all duration-500 group-hover:from-brand-black group-hover:via-brand-black/80" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              {/* Top - Icon and number */}
              <div className="flex justify-between items-start">
                <motion.div
                  className="flex h-14 w-14 items-center justify-center border border-white/20 bg-white/5 backdrop-blur-sm text-white transition-all duration-500 group-hover:border-accent-gold/50 group-hover:bg-accent-gold/10"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <span className="text-xs font-medium uppercase tracking-wider text-brand-silver">
                  0{index + 1}
                </span>
              </div>

              {/* Bottom - Text content */}
              <div>
                <h3 className="font-display text-2xl font-bold text-brand-white md:text-3xl">
                  {service.title}
                </h3>

                {/* Description - reveals on hover */}
                <motion.p
                  className="mt-3 text-sm text-brand-silver/80 opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-24"
                >
                  {service.description}
                </motion.p>

                {/* Features - reveal on hover */}
                <ul className="mt-4 space-y-2 opacity-0 max-h-0 overflow-hidden transition-all duration-500 delay-75 group-hover:opacity-100 group-hover:max-h-32">
                  {service.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-brand-silver/70"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA - reveals on hover */}
                <motion.div
                  className="mt-6 opacity-0 translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent-gold">
                    Learn More
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    )
  }

  // Default variant
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
      data-cursor="view"
      data-cursor-text="View"
    >
      <Link href={`/services#${service.slug}`} className="block">
        {/* Image with hover effects */}
        <div className="relative aspect-[16/10] overflow-hidden bg-brand-light">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

          {/* Icon */}
          <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center bg-brand-white transition-all duration-500 group-hover:bg-accent-gold">
            <Icon className="h-5 w-5 text-brand-black" />
          </div>

          {/* Hover overlay content */}
          <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 bg-brand-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-black">
              Explore
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6">
          <h3 className="font-display text-xl font-semibold text-brand-black transition-colors group-hover:text-accent-gold md:text-2xl">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-brand-gray">
            {service.description}
          </p>
          {/* Features */}
          <ul className="mt-4 space-y-2">
            {service.features.slice(0, 3).map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-brand-slate"
              >
                <span className="h-1 w-1 rounded-full bg-accent-gold" />
                {feature}
              </li>
            ))}
          </ul>
          {/* Link */}
          <div className="mt-6 flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-brand-black">
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
