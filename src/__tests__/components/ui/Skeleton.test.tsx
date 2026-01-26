import { describe, it, expect } from 'vitest'
import { render } from '../../utils/test-utils'
import { Skeleton, ProjectCardSkeleton } from '@/components/ui/Skeleton'

describe('Skeleton component', () => {
  it('renders with default classes', () => {
    const { container } = render(<Skeleton />)
    const skeleton = container.firstChild as HTMLElement
    expect(skeleton).toBeInTheDocument()
    expect(skeleton.className).toContain('animate-pulse')
    expect(skeleton.className).toContain('bg-brand-light')
  })

  it('applies custom className', () => {
    const { container } = render(<Skeleton className="h-10 w-full" />)
    const skeleton = container.firstChild as HTMLElement
    expect(skeleton.className).toContain('h-10')
    expect(skeleton.className).toContain('w-full')
  })

  it('merges classes correctly', () => {
    const { container } = render(<Skeleton className="h-20" />)
    const skeleton = container.firstChild as HTMLElement
    expect(skeleton.className).toContain('animate-pulse')
    expect(skeleton.className).toContain('h-20')
  })
})

describe('ProjectCardSkeleton component', () => {
  it('renders image skeleton', () => {
    render(<ProjectCardSkeleton />)
    const skeletons = document.querySelectorAll('.animate-pulse')
    expect(skeletons.length).toBeGreaterThan(0)
  })

  it('renders multiple skeleton elements for card structure', () => {
    render(<ProjectCardSkeleton />)
    const skeletons = document.querySelectorAll('.animate-pulse')
    // Image + 3 category/year + title + location = at least 6 skeletons
    expect(skeletons.length).toBeGreaterThanOrEqual(5)
  })

  it('has correct container structure', () => {
    const { container } = render(<ProjectCardSkeleton />)
    expect(container.querySelector('.group')).toBeInTheDocument()
  })
})
