'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react'
import { navigation, services } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const scrollThreshold = 100
    setIsScrolled(latest > scrollThreshold)
  })

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setExpandedSection(null)
    }
  }, [isMobileMenuOpen])

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50">
        {/* Full-width dark background bar - visible when not scrolled */}
        <motion.div
          className="absolute inset-0 bg-brand-black/90 backdrop-blur-md border-b border-white/10"
          initial={false}
          animate={{
            opacity: isScrolled ? 0 : 1,
          }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        />

        <div className="container-wide relative">
          <nav className="flex h-20 items-center justify-between md:h-24">
            {/* Logo - smoothly transitions to pill shape when scrolled */}
            <Link
              href="/"
              className={cn(
                "relative z-10 flex items-center transition-all duration-500 ease-out",
                isScrolled
                  ? "bg-brand-black/80 backdrop-blur-md shadow-lg rounded-full px-4 py-2 border border-white/10"
                  : "bg-transparent px-0 py-0"
              )}
            >
              <Image
                src="/images/bda built logo.svg"
                alt="BDA Built"
                width={140}
                height={40}
                className={cn(
                  "w-auto transition-all duration-500 ease-out",
                  isScrolled ? "h-7" : "h-10"
                )}
                priority
              />
            </Link>

            {/* Desktop Navigation Links - fade out when scrolled */}
            <div
              className={cn(
                "hidden items-center gap-8 lg:flex transition-all duration-500 ease-out",
                isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn(
                    "relative text-sm font-medium uppercase tracking-wider transition-colors",
                    isActive(item.href)
                      ? "text-brand-white"
                      : "text-brand-silver hover:text-brand-white"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-accent-gold transition-all duration-300",
                      isActive(item.href) ? "w-full" : "w-0"
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              {/* Enquire button - matches logo styling */}
              <Link
                href="/contact"
                className="hidden sm:flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-brand-white bg-brand-black/80 backdrop-blur-md shadow-lg rounded-full px-5 py-3 border border-white/10 hover:bg-brand-black/90 transition-colors"
              >
                <span>Enquire</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              {/* Menu button - transforms to pill shape when scrolled */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={cn(
                  "flex h-12 w-12 items-center justify-center transition-all duration-500 ease-out text-brand-white",
                  isScrolled
                    ? "bg-brand-black/80 backdrop-blur-md rounded-full shadow-lg border border-white/10 hover:bg-brand-black/90"
                    : "bg-transparent hover:bg-white/10 rounded-full lg:hidden"
                )}
                aria-label="Open menu"
              >
                <Menu className={cn(
                  "transition-all duration-500",
                  isScrolled ? "h-5 w-5" : "h-6 w-6"
                )} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Side Panel Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-brand-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Side Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-brand-black/95 backdrop-blur-xl shadow-2xl overflow-y-auto border-l border-white/10"
            >
              {/* Close Button */}
              <div className="sticky top-0 flex justify-end p-6 bg-brand-black/80 backdrop-blur-sm">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-brand-white hover:bg-white/20 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Content */}
              <div className="px-8 pb-12">
                <nav className="space-y-1">
                  {/* Services Section with Dropdown */}
                  <div>
                    <button
                      onClick={() => toggleSection('services')}
                      className="flex w-full items-center justify-between py-4 text-left"
                    >
                      <span className={cn(
                        "text-xl font-medium transition-colors",
                        pathname.startsWith('/services') ? "text-accent-gold" : "text-brand-white hover:text-brand-silver"
                      )}>
                        Services
                      </span>
                      <motion.div
                        animate={{ rotate: expandedSection === 'services' ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-5 w-5 text-brand-silver" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {expandedSection === 'services' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 pl-4 space-y-3">
                            {services.map((service, index) => (
                              <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={`/services#${service.slug}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block text-brand-silver hover:text-brand-white transition-colors py-1"
                                >
                                  {service.title}
                                </Link>
                              </motion.div>
                            ))}
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: services.length * 0.05 }}
                            >
                              <Link
                                href="/services"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="inline-flex items-center gap-1 text-accent-gold hover:text-accent-copper transition-colors py-1 text-sm font-medium"
                              >
                                View All Services
                                <ArrowUpRight className="h-3 w-3" />
                              </Link>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Projects Section with Dropdown */}
                  <div>
                    <button
                      onClick={() => toggleSection('projects')}
                      className="flex w-full items-center justify-between py-4 text-left"
                    >
                      <span className={cn(
                        "text-xl font-medium transition-colors",
                        pathname.startsWith('/projects') ? "text-accent-gold" : "text-brand-white hover:text-brand-silver"
                      )}>
                        Projects
                      </span>
                      <motion.div
                        animate={{ rotate: expandedSection === 'projects' ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-5 w-5 text-brand-silver" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {expandedSection === 'projects' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 pl-4 space-y-3">
                            <Link
                              href="/projects?category=commercial"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-brand-silver hover:text-brand-white transition-colors py-1"
                            >
                              Commercial
                            </Link>
                            <Link
                              href="/projects?category=industrial"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-brand-silver hover:text-brand-white transition-colors py-1"
                            >
                              Industrial
                            </Link>
                            <Link
                              href="/projects?category=retail"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-brand-silver hover:text-brand-white transition-colors py-1"
                            >
                              Retail & Hospitality
                            </Link>
                            <Link
                              href="/projects?category=healthcare"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-brand-silver hover:text-brand-white transition-colors py-1"
                            >
                              Healthcare & Education
                            </Link>
                            <Link
                              href="/projects"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="inline-flex items-center gap-1 text-accent-gold hover:text-accent-copper transition-colors py-1 text-sm font-medium"
                            >
                              View All Projects
                              <ArrowUpRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Simple Links */}
                  <Link
                    href="/process"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block py-4 text-xl font-medium transition-colors",
                      isActive('/process') ? "text-accent-gold" : "text-brand-white hover:text-brand-silver"
                    )}
                  >
                    Our Process
                  </Link>

                  <Link
                    href="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block py-4 text-xl font-medium transition-colors",
                      isActive('/about') ? "text-accent-gold" : "text-brand-white hover:text-brand-silver"
                    )}
                  >
                    About Us
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block py-4 text-xl font-medium transition-colors",
                      isActive('/contact') ? "text-accent-gold" : "text-brand-white hover:text-brand-silver"
                    )}
                  >
                    Contact
                  </Link>
                </nav>

                {/* CTA Section */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-sm text-brand-silver mb-4">Ready to start your project?</p>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex items-center gap-2 bg-accent-gold text-brand-black px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-accent-gold/90 transition-colors"
                  >
                    Get in Touch
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="mt-12 space-y-4 text-sm">
                  <div>
                    <p className="text-brand-gray">Phone</p>
                    <a href="tel:+61420777755" className="text-brand-white hover:text-accent-gold transition-colors">
                      0420 777 755
                    </a>
                  </div>
                  <div>
                    <p className="text-brand-gray">Email</p>
                    <a href="mailto:info@bdabuilt.com.au" className="text-brand-white hover:text-accent-gold transition-colors">
                      info@bdabuilt.com.au
                    </a>
                  </div>
                  <div>
                    <p className="text-brand-gray">Location</p>
                    <p className="text-brand-white">Newport, Victoria</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
