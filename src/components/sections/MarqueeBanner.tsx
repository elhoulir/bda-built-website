'use client'

import { TextMarquee } from '@/components/ui/Marquee'

const bannerPhrases = [
  'Building Excellence',
  'Crafting Landmarks',
  'Precision Construction',
  'Trusted Partnerships',
  'Quality Delivered',
]

export function MarqueeBanner() {
  return (
    <section className="overflow-hidden border-y border-brand-black/10 bg-brand-black py-6">
      <TextMarquee
        text={bannerPhrases}
        separator="✦"
        speed={35}
        textClassName="font-display text-2xl md:text-3xl font-bold text-white uppercase tracking-wider"
      />
    </section>
  )
}

export function MarqueeBannerLight() {
  return (
    <section className="overflow-hidden border-y border-brand-light bg-brand-cream py-4">
      <TextMarquee
        text="Craftsmanship • Integrity • Excellence • Partnership"
        separator=""
        speed={35}
        textClassName="text-sm md:text-base text-brand-gray uppercase tracking-[0.3em]"
      />
    </section>
  )
}
