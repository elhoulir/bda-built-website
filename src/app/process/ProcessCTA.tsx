'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export function ProcessCTA() {
  return (
    <section className="bg-brand-black py-24 md:py-32">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-accent-gold">
              Ready to Start?
            </span>
            <h2 className="mt-6 font-display text-display-sm font-bold text-brand-white md:text-display-md">
              Let&apos;s Build Something
              <br />
              Exceptional Together
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brand-silver">
              Every great project starts with a conversation. Get in touch with
              our team to discuss your vision and learn how we can bring it to
              life.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" variant="secondary" size="lg" showArrow>
                Start Your Project
              </Button>
              <Button
                href="/projects"
                variant="outline"
                size="lg"
                className="border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black"
              >
                View Our Work
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-brand-charcoal p-6">
              <div className="font-display text-4xl font-bold text-brand-white">
                98<span className="text-accent-gold">%</span>
              </div>
              <p className="mt-2 text-sm text-brand-silver">
                Client Satisfaction Rate
              </p>
            </div>
            <div className="bg-brand-charcoal p-6">
              <div className="font-display text-4xl font-bold text-brand-white">
                150<span className="text-accent-gold">+</span>
              </div>
              <p className="mt-2 text-sm text-brand-silver">
                Projects Completed
              </p>
            </div>
            <div className="bg-brand-charcoal p-6">
              <div className="font-display text-4xl font-bold text-brand-white">
                0
              </div>
              <p className="mt-2 text-sm text-brand-silver">
                Lost Time Injuries
              </p>
            </div>
            <div className="bg-brand-charcoal p-6">
              <div className="font-display text-4xl font-bold text-brand-white">
                25<span className="text-accent-gold">+</span>
              </div>
              <p className="mt-2 text-sm text-brand-silver">
                Years Experience
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
