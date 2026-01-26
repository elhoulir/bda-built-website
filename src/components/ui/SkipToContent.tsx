'use client'

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-6 focus:py-3 focus:bg-accent-gold focus:text-brand-black focus:font-medium focus:text-sm focus:uppercase focus:tracking-wider focus:outline-none focus:ring-2 focus:ring-brand-black focus:ring-offset-2"
    >
      Skip to main content
    </a>
  )
}
