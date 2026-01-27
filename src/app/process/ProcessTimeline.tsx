'use client'

import { motion } from 'framer-motion'
import { processSteps } from '@/lib/data'
import { Check } from 'lucide-react'

export function ProcessTimeline() {
  return (
    <section className="bg-brand-white py-24 md:py-32">
      <div className="container-wide">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-brand-light md:left-1/2 md:block md:-translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Number Badge - Desktop */}
                  <div className="absolute left-1/2 top-0 z-10 hidden -translate-x-1/2 md:block">
                    <div className="flex h-16 w-16 items-center justify-center bg-brand-black font-display text-2xl font-bold text-brand-white">
                      {step.number}
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 md:gap-20">
                    {/* Left Side */}
                    <div
                      className={`${
                        isEven
                          ? 'md:pr-20 md:text-right'
                          : 'md:order-2 md:pl-20'
                      }`}
                    >
                      {/* Mobile Number Badge */}
                      <div className="mb-6 flex h-12 w-12 items-center justify-center bg-brand-black font-display text-lg font-bold text-brand-white md:hidden">
                        {step.number}
                      </div>

                      <h3 className="font-display text-2xl font-bold text-brand-black md:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-4 leading-relaxed text-brand-slate">
                        {step.description}
                      </p>
                    </div>

                    {/* Right Side - Details */}
                    <div
                      className={`mt-6 md:mt-0 ${
                        isEven ? 'md:order-2 md:pl-20' : 'md:pr-20'
                      }`}
                    >
                      <div className="bg-brand-cream p-6 md:p-8">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gray">
                          Key Activities
                        </h4>
                        <ul className="mt-4 space-y-3">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-3">
                              <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center bg-brand-black">
                                <Check className="h-3 w-3 text-brand-white" />
                              </div>
                              <span className="text-brand-charcoal">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
