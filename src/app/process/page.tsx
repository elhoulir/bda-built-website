import { Metadata } from 'next'
import { ProcessHero } from './ProcessHero'
import { ProcessTimeline } from './ProcessTimeline'
import { ProcessCTA } from './ProcessCTA'

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'Discover how BDA Built delivers exceptional commercial construction through our proven 5-stage process from consultation to completion.',
}

export default function ProcessPage() {
  return (
    <>
      <ProcessHero />
      <ProcessTimeline />
      <ProcessCTA />
    </>
  )
}
