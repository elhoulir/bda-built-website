'use client'

import { motion } from 'framer-motion'
import { Marquee } from '@/components/ui/Marquee'

// Placeholder client names - replace with actual logos
const clients = [
  { name: 'Meridian Group', abbr: 'MG' },
  { name: 'Harbour View Medical', abbr: 'HVM' },
  { name: 'Eastgate Properties', abbr: 'EP' },
  { name: 'Phoenix Logistics', abbr: 'PL' },
  { name: 'Grand Hotels', abbr: 'GH' },
  { name: 'Sunrise Education', abbr: 'SE' },
  { name: 'Metro Developments', abbr: 'MD' },
  { name: 'Coastal Retail', abbr: 'CR' },
]

function ClientLogo({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div
      className="group flex h-20 w-40 items-center justify-center border border-brand-light/10 bg-transparent px-6 transition-all duration-300 hover:border-accent-gold/30 hover:bg-brand-cream/5"
      title={name}
    >
      <span className="font-display text-2xl font-bold text-brand-gray/40 transition-colors duration-300 group-hover:text-brand-black/60">
        {abbr}
      </span>
    </div>
  )
}

export function ClientLogos() {
  return (
    <section className="border-y border-brand-light/10 bg-brand-white py-10 md:py-16">
      <div className="container-wide mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm uppercase tracking-[0.2em] text-brand-gray"
        >
          Trusted by Industry Leaders
        </motion.p>
      </div>

      <Marquee speed={40} pauseOnHover>
        {clients.map((client) => (
          <ClientLogo key={client.name} {...client} />
        ))}
      </Marquee>
    </section>
  )
}

// Alternative: Static grid version
export function ClientLogosGrid() {
  return (
    <section className="bg-brand-cream py-20">
      <div className="container-wide">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-sm uppercase tracking-[0.2em] text-brand-gray"
        >
          Trusted by Industry Leaders
        </motion.p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <ClientLogo {...client} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
