'use client'

import { motion } from 'framer-motion'
import { Hammer, Shield, Award, Handshake } from 'lucide-react'
import { values } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionHeader'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  hammer: Hammer,
  shield: Shield,
  award: Award,
  handshake: Handshake,
}

export function Values() {
  return (
    <section className="bg-brand-white py-24 md:py-32">
      <div className="container-wide">
        <SectionHeader
          label="Our Values"
          title="Built on Principles That Matter"
          description="Every project we undertake is guided by the same core values that have defined our approach from day one."
          align="center"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = iconMap[value.icon] || Award
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center bg-brand-cream transition-colors duration-300 group-hover:bg-brand-black">
                  <Icon className="h-7 w-7 text-brand-black transition-colors duration-300 group-hover:text-brand-white" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-brand-black">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
