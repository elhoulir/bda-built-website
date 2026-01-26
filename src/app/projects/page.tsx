import { Metadata } from 'next'
import { ProjectsHero } from './ProjectsHero'
import { ProjectsGrid } from './ProjectsGrid'
import { CTA } from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore our portfolio of commercial construction projects across commercial, industrial, retail, healthcare, and education sectors.',
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <CTA />
    </>
  )
}
