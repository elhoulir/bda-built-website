import { Metadata } from 'next'
import { AboutHero } from './AboutHero'
import { Story } from './Story'
import { TeamSection } from './TeamSection'
import { Stats } from '@/components/sections/Stats'
import { CTA } from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about BDA Built - our story, values, and the team behind our commitment to commercial construction excellence.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <Stats dark />
      <TeamSection />
      <CTA />
    </>
  )
}
