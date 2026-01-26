'use client'

import { createContext, useContext, useEffect, useState, useMemo } from 'react'

interface ReducedMotionContextType {
  prefersReducedMotion: boolean
  mounted: boolean
}

const ReducedMotionContext = createContext<ReducedMotionContextType>({
  prefersReducedMotion: false,
  mounted: false,
})

export function ReducedMotionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  // Default to false for SSR consistency - CSS media query handles initial state
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({ prefersReducedMotion, mounted }),
    [prefersReducedMotion, mounted]
  )

  return (
    <ReducedMotionContext.Provider value={value}>
      {children}
    </ReducedMotionContext.Provider>
  )
}

export function useReducedMotion() {
  return useContext(ReducedMotionContext)
}

// CSS for reduced motion
export const reducedMotionStyles = `
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`
