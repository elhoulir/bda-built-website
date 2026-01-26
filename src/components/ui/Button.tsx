'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showArrow?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  magnetic?: boolean
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  showArrow = false,
  onClick,
  type = 'button',
  disabled = false,
  magnetic = true,
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magnetic || !ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const baseStyles =
    'relative inline-flex items-center justify-center font-medium uppercase tracking-wider transition-all duration-300 group overflow-hidden'

  const variants = {
    primary: 'bg-brand-black text-brand-white',
    secondary: 'bg-brand-white text-brand-black',
    outline: 'border border-brand-black text-brand-black',
    ghost: 'text-brand-black',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-sm',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className, {
    'opacity-50 cursor-not-allowed': disabled,
  })

  const content = (
    <>
      {/* Background hover effect */}
      {variant === 'primary' && (
        <span className="absolute inset-0 -translate-x-full bg-accent-gold transition-transform duration-500 group-hover:translate-x-0" />
      )}
      {variant === 'outline' && (
        <span className="absolute inset-0 -translate-y-full bg-brand-black transition-transform duration-500 group-hover:translate-y-0" />
      )}

      {/* Content */}
      <span className={cn(
        "relative z-10 flex items-center transition-colors duration-300",
        variant === 'primary' && "group-hover:text-brand-black"
      )}>
        {children}
        {showArrow && (
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>

      {/* Border animation for outline */}
      {variant === 'outline' && (
        <span className="relative z-10 text-brand-black transition-colors duration-300 group-hover:text-brand-white" />
      )}
    </>
  )

  const motionProps = magnetic
    ? {
        ref,
        onMouseMove: handleMouse,
        onMouseLeave: reset,
        animate: { x: position.x, y: position.y },
        transition: { type: 'spring', stiffness: 350, damping: 15, mass: 0.5 },
      }
    : {}

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link
          href={href}
          className={cn(
            classes,
            variant === 'outline' && 'hover:text-brand-white'
          )}
        >
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div {...motionProps} className="inline-block">
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          classes,
          variant === 'outline' && 'hover:text-brand-white'
        )}
      >
        {content}
      </button>
    </motion.div>
  )
}
