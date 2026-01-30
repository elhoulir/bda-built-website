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
import { StatementSection } from '@/components/sections/MediaShowcase'

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBanner />
      <Welcome />
      <ScrollStory />

      {/* Window reveal image */}
      <div className="relative h-[40vh] overflow-hidden md:h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1920&fit=crop&q=80')`,
          }}
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-brand-black/30" />
      </div>

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
