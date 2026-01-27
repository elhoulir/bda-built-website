'use client'

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-accent-gold focus:px-6 focus:py-3 focus:text-sm focus:font-medium focus:uppercase focus:tracking-wider focus:text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black focus:ring-offset-2"
    >
      Skip to main content
    </a>
  )
}
