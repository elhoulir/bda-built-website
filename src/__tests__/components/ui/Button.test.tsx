import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '../../utils/test-utils'
import { Button } from '@/components/ui/Button'

describe('Button component', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders as a link when href is provided', () => {
    render(<Button href="/about">About</Button>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/about')
  })

  it('renders as a button when href is not provided', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies disabled state correctly', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn()
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    )
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('applies size classes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>)
    expect(screen.getByRole('button').className).toContain('px-4')

    rerender(<Button size="lg">Large</Button>)
    expect(screen.getByRole('button').className).toContain('px-8')
  })

  it('applies variant classes', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>)
    expect(screen.getByRole('button').className).toContain('bg-brand-black')

    rerender(<Button variant="outline">Outline</Button>)
    expect(screen.getByRole('button').className).toContain('border')
  })

  it('shows arrow when showArrow is true', () => {
    render(<Button showArrow>With Arrow</Button>)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    expect(screen.getByRole('button').className).toContain('custom-class')
  })

  it('sets button type correctly', () => {
    const { rerender } = render(<Button type="submit">Submit</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')

    rerender(<Button type="button">Button</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })
})
