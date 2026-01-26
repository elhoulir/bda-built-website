import '@testing-library/jest-dom'
import { vi, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Cleanup after each test
afterEach(() => {
  cleanup()
})

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
  useParams: () => ({}),
}))

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} {...props} />
  },
}))

// Mock next/link
vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode
    href: string
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({
      children,
      ...props
    }: {
      children?: React.ReactNode
      [key: string]: unknown
    }) => <div {...props}>{children}</div>,
    section: ({
      children,
      ...props
    }: {
      children?: React.ReactNode
      [key: string]: unknown
    }) => <section {...props}>{children}</section>,
    span: ({
      children,
      ...props
    }: {
      children?: React.ReactNode
      [key: string]: unknown
    }) => <span {...props}>{children}</span>,
    p: ({
      children,
      ...props
    }: {
      children?: React.ReactNode
      [key: string]: unknown
    }) => <p {...props}>{children}</p>,
    h1: ({
      children,
      ...props
    }: {
      children?: React.ReactNode
      [key: string]: unknown
    }) => <h1 {...props}>{children}</h1>,
    h2: ({
      children,
      ...props
    }: {
      children?: React.ReactNode
      [key: string]: unknown
    }) => <h2 {...props}>{children}</h2>,
    h3: ({
      children,
      ...props
    }: {
      children?: React.ReactNode
      [key: string]: unknown
    }) => <h3 {...props}>{children}</h3>,
    button: ({
      children,
      ...props
    }: {
      children?: React.ReactNode
      [key: string]: unknown
    }) => <button {...props}>{children}</button>,
    a: ({
      children,
      ...props
    }: {
      children?: React.ReactNode
      [key: string]: unknown
    }) => <a {...props}>{children}</a>,
    nav: ({
      children,
      ...props
    }: {
      children?: React.ReactNode
      [key: string]: unknown
    }) => <nav {...props}>{children}</nav>,
    ul: ({
      children,
      ...props
    }: {
      children?: React.ReactNode
      [key: string]: unknown
    }) => <ul {...props}>{children}</ul>,
    li: ({
      children,
      ...props
    }: {
      children?: React.ReactNode
      [key: string]: unknown
    }) => <li {...props}>{children}</li>,
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    img: (props: { [key: string]: unknown }) => <img {...props} />,
    video: ({
      children,
      ...props
    }: {
      children?: React.ReactNode
      [key: string]: unknown
    }) => <video {...props}>{children}</video>,
    path: (props: { [key: string]: unknown }) => <path {...props} />,
    svg: ({
      children,
      ...props
    }: {
      children?: React.ReactNode
      [key: string]: unknown
    }) => <svg {...props}>{children}</svg>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  useScroll: () => ({
    scrollY: { get: () => 0 },
    scrollYProgress: { get: () => 0 },
  }),
  useTransform: () => 0,
  useSpring: (value: unknown) => value,
  useMotionValue: () => ({ get: () => 0, set: vi.fn() }),
  useAnimation: () => ({
    start: vi.fn(),
    stop: vi.fn(),
    set: vi.fn(),
  }),
  useInView: () => true,
}))

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
})

// Mock ResizeObserver
class MockResizeObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: MockResizeObserver,
})

// Mock scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn(),
})

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})
