import { Metadata } from 'next'
import { ServicesHero } from './ServicesHero'
import { ServicesList } from './ServicesList'
import { CTA } from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore our comprehensive commercial construction services including commercial, industrial, retail, healthcare, and education builds.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <CTA />
    </>
  )
}
