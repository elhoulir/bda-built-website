import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import dynamic from 'next/dynamic'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { SmoothScrollProvider } from '@/components/providers/SmoothScroll'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { ReducedMotionProvider } from '@/components/providers/ReducedMotion'
import { Preloader } from '@/components/ui/Preloader'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { BackToTop } from '@/components/ui/BackToTop'
import { ToastProvider } from '@/components/ui/Toast'
import { SkipToContent } from '@/components/ui/SkipToContent'

// Dynamic import CustomCursor with no SSR to prevent hydration mismatch on touch devices
const CustomCursor = dynamic(
  () => import('@/components/ui/CustomCursor').then((mod) => mod.CustomCursor),
  { ssr: false }
)

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'BDA Built | Commercial Construction Excellence',
    template: '%s | BDA Built',
  },
  description:
    'BDA Built delivers exceptional commercial construction with craftsmanship, integrity, and a commitment to excellence. Trusted builders for commercial, industrial, retail, and healthcare projects across Australia.',
  keywords: [
    'commercial construction',
    'commercial builders',
    'construction company Australia',
    'office fitout',
    'industrial construction',
    'retail construction',
    'healthcare construction',
  ],
  authors: [{ name: 'BDA Built' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://bdabuilt.com.au',
    siteName: 'BDA Built',
    title: 'BDA Built | Commercial Construction Excellence',
    description:
      'Delivering exceptional commercial construction with craftsmanship, integrity, and excellence.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline script to set theme before hydration to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-brand-white font-sans text-brand-black transition-colors duration-300 dark:bg-brand-black dark:text-brand-white">
        <ThemeProvider>
          <ReducedMotionProvider>
            <ToastProvider>
              <SkipToContent />
              <Preloader />
              <ScrollProgress />
              <SmoothScrollProvider>
                <CustomCursor />
                <Navigation />
                <main id="main-content">{children}</main>
                <Footer />
                <BackToTop />
              </SmoothScrollProvider>
            </ToastProvider>
          </ReducedMotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
