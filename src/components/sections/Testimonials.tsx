'use client'

import { testimonials } from '@/lib/data'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function Testimonials() {
  return (
    <section className="bg-brand-white py-24 md:py-32">
      <div className="container-wide">
        <SectionHeader
          label="Testimonials"
          title="What Our Clients Say"
          description="We measure our success by the satisfaction of our clients and the lasting relationships we build."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
