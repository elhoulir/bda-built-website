'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Building2,
  Warehouse,
  Store,
  Heart,
  RefreshCw,
  Home,
  Check,
} from 'lucide-react'
import { services } from '@/lib/data'
import { Button } from '@/components/ui/Button'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  building: Building2,
  warehouse: Warehouse,
  store: Store,
  heart: Heart,
  refresh: RefreshCw,
  home: Home,
}

export function ServicesList() {
  return (
    <section className="bg-brand-white py-24 md:py-32">
      <div className="container-wide">
        <div className="space-y-32">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Building2
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={service.id}
                id={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image */}
                <div
                  className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Floating Icon */}
                  <div className="absolute -bottom-6 -right-6 flex h-20 w-20 items-center justify-center bg-brand-black md:-bottom-8 md:-right-8 md:h-24 md:w-24">
                    <Icon className="h-8 w-8 text-brand-white md:h-10 md:w-10" />
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <h2 className="font-display text-display-sm font-bold text-brand-black">
                    {service.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-brand-slate">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="mt-8 space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center bg-accent-gold/10">
                          <Check className="h-3 w-3 text-accent-gold" />
                        </div>
                        <span className="text-brand-charcoal">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/contact"
                    variant="primary"
                    showArrow
                    className="mt-10"
                  >
                    Discuss Your Project
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
