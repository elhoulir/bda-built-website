import { Hero } from '@/components/sections/Hero'
import { Welcome } from '@/components/sections/Welcome'
import { ScrollStory } from '@/components/sections/ScrollStory'
import { HorizontalScroll } from '@/components/sections/HorizontalScroll'
import { Stats } from '@/components/sections/Stats'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { DraggableTestimonials } from '@/components/sections/DraggableTestimonials'
import { ClientLogos } from '@/components/sections/ClientLogos'
import {
  MarqueeBanner,
  MarqueeBannerLight,
} from '@/components/sections/MarqueeBanner'
import { CTA } from '@/components/sections/CTA'
import {
  ParallaxImage,
  StatementSection,
} from '@/components/sections/MediaShowcase'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <MarqueeBanner />
      <ScrollStory />

      {/* Architectural transition image */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1448630360428-65456885c650?w=1920&fit=crop&q=80"
        alt="Modern high-rise building looking up"
        height="h-[60vh]"
      />

      <HorizontalScroll />
      <Stats />

      {/* Statement quote section */}
      <StatementSection
        quote="We don't just construct buildings—we create spaces that inspire, environments that endure, and landmarks that define communities."
        author="David Anderson, Managing Director"
        backgroundImage="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=1920&fit=crop&q=80"
      />

      <MarqueeBannerLight />
      <ServicesOverview />

      <ClientLogos />
      <DraggableTestimonials />

      <CTA />
    </>
  )
}
