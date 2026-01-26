'use client'

import { createContext, useContext, useEffect, useState, useMemo } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
  mounted: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize with 'light' as fallback - the inline script in layout.tsx
  // will set the correct class on the html element before hydration
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Read the actual theme from the DOM (set by inline script) or localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const currentClass = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light'
    setThemeState(savedTheme || currentClass)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({ theme, toggleTheme, setTheme, mounted }),
    [theme, mounted]
  )

  // Always render children with context - the inline script handles initial theme
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  // Return default values for SSR/static generation
  if (context === undefined) {
    return {
      theme: 'light' as const,
      toggleTheme: () => {},
      setTheme: () => {},
      mounted: false,
    }
  }
  return context
}
