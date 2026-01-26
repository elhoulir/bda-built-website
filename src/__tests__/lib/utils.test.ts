import { describe, it, expect } from 'vitest'
import { cn, formatDate, slugify, getCategoryLabel } from '@/lib/utils'

describe('cn utility', () => {
  it('combines class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('handles conditional classes', () => {
    expect(cn('base', true && 'active', false && 'hidden')).toBe('base active')
  })

  it('handles undefined values', () => {
    expect(cn('base', undefined, 'end')).toBe('base end')
  })

  it('handles empty strings', () => {
    expect(cn('base', '', 'end')).toBe('base end')
  })

  it('handles object syntax', () => {
    expect(cn('base', { active: true, hidden: false })).toBe('base active')
  })
})

describe('formatDate utility', () => {
  it('formats a date string correctly', () => {
    const result = formatDate('2024-03-15')
    expect(result).toBe('March 2024')
  })

  it('formats a Date object correctly', () => {
    const result = formatDate(new Date('2024-06-20'))
    expect(result).toBe('June 2024')
  })

  it('handles different date formats', () => {
    const result = formatDate('2023-12-25T00:00:00Z')
    expect(result).toBe('December 2023')
  })
})

describe('slugify utility', () => {
  it('converts string to lowercase slug', () => {
    expect(slugify('Hello World')).toBe('hello-world')
  })

  it('removes special characters', () => {
    expect(slugify("What's Up!")).toBe('whats-up')
  })

  it('replaces multiple spaces with single dash', () => {
    expect(slugify('Too   Many   Spaces')).toBe('too-many-spaces')
  })

  it('handles underscores', () => {
    expect(slugify('hello_world_test')).toBe('hello-world-test')
  })

  it('removes leading and trailing dashes', () => {
    expect(slugify('--hello--')).toBe('hello')
  })

  it('handles mixed case with numbers', () => {
    expect(slugify('Project 2024 Release')).toBe('project-2024-release')
  })
})

describe('getCategoryLabel utility', () => {
  it('returns correct label for known categories', () => {
    expect(getCategoryLabel('commercial')).toBe('Commercial')
    expect(getCategoryLabel('industrial')).toBe('Industrial')
    expect(getCategoryLabel('retail')).toBe('Retail')
    expect(getCategoryLabel('hospitality')).toBe('Hospitality')
    expect(getCategoryLabel('healthcare')).toBe('Healthcare')
    expect(getCategoryLabel('education')).toBe('Education')
  })

  it('returns input for unknown categories', () => {
    expect(getCategoryLabel('custom-category')).toBe('custom-category')
    expect(getCategoryLabel('unknown')).toBe('unknown')
  })

  it('handles empty string', () => {
    expect(getCategoryLabel('')).toBe('')
  })
})
