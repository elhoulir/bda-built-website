'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { values } from '@/lib/data'
import { Hammer, Shield, Award, Handshake } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  hammer: Hammer,
  shield: Shield,
  award: Award,
  handshake: Handshake,
}

export function Story() {
  return (
    <section className="bg-brand-white py-24 md:py-32">
      <div className="container-wide">
        {/* Story Section */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-brand-gray">
              Our Story
            </span>
            <h2 className="mt-4 font-display text-display-sm font-bold text-brand-black md:text-display-md">
              From Humble Beginnings to Industry Leaders
            </h2>
            <div className="mt-8 space-y-6 text-brand-slate">
              <p className="leading-relaxed">
                BDA Built was founded with a simple vision: to deliver commercial
                construction that exceeds expectations. What started as a small team
                with big ambitions has grown into a respected name in the Australian
                construction industry.
              </p>
              <p className="leading-relaxed">
                Our founder, David Anderson, brought over two decades of industry
                experience and a belief that quality should never be compromised. This
                principle continues to guide every project we undertake.
              </p>
              <p className="leading-relaxed">
                Today, we&apos;re proud to have completed over 150 projects across
                commercial, industrial, retail, healthcare, and education sectors.
                Each project represents our commitment to craftsmanship and our
                clients&apos; trust in our capabilities.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
                alt="BDA Built team on site"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent Box */}
            <div className="absolute -bottom-8 -left-8 bg-brand-black p-8 text-brand-white md:-bottom-12 md:-left-12 md:p-10">
              <div className="font-display text-4xl font-bold md:text-5xl">
                150<span className="text-accent-gold">+</span>
              </div>
              <p className="mt-2 text-sm uppercase tracking-wider text-brand-silver">
                Projects Completed
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-brand-gray">
              Our Values
            </span>
            <h2 className="mt-4 font-display text-display-sm font-bold text-brand-black md:text-display-md">
              What We Stand For
            </h2>
          </motion.div>

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
                  className="border border-brand-light p-8"
                >
                  <Icon className="h-8 w-8 text-accent-gold" />
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
      </div>
    </section>
  )
}
