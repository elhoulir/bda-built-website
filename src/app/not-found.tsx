'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-black">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute h-px w-full bg-white"
              style={{ top: `${i * 10}%` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute h-full w-px bg-white"
              style={{ left: `${i * 10}%` }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </div>

        {/* Floating shapes */}
        <motion.div
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full border border-accent-gold/20"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
            rotate: 360,
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            x: { duration: 0.5 },
            y: { duration: 0.5 },
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-48 w-48 border border-white/10"
          animate={{
            x: mousePosition.x * -1.5,
            y: mousePosition.y * -1.5,
            rotate: -360,
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
            x: { duration: 0.5 },
            y: { duration: 0.5 },
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="relative"
        >
          <span className="font-display text-[12rem] font-bold leading-none text-white/5 md:text-[20rem]">
            404
          </span>
          <motion.span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-6xl font-bold text-white md:text-8xl"
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{ duration: 0.3 }}
          >
            404
          </motion.span>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="mt-8 font-display text-3xl font-bold text-white md:text-4xl">
            Page Not Found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-brand-silver">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/" variant="primary" size="lg">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <Button
            href="/projects"
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white hover:text-brand-black"
          >
            <Search className="mr-2 h-4 w-4" />
            View Projects
          </Button>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <p className="mb-4 text-sm uppercase tracking-wider text-brand-silver/50">
            Quick Links
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'About', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2 text-sm text-brand-silver transition-colors hover:text-white"
              >
                <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute left-8 top-8 h-16 w-16 border-l border-t border-white/10" />
      <div className="absolute bottom-8 right-8 h-16 w-16 border-b border-r border-white/10" />
    </div>
  )
}
