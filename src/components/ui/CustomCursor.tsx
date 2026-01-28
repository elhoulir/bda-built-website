'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from 'framer-motion'

type CursorVariant = 'default' | 'hover' | 'text' | 'view' | 'drag' | 'hidden'

export function CustomCursor() {
  const [variant, setVariant] = useState<CursorVariant>('default')
  const [cursorText, setCursorText] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const rafRef = useRef<number>()

  // Use raw motion values for immediate response
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Fast spring for responsive cursor
  const springConfig = { damping: 30, stiffness: 400, mass: 0.2 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  const updateCursor = useCallback(
    (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
      })
    },
    [mouseX, mouseY]
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => updateCursor(e)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Check for data attributes first (highest priority)
      const cursorAttr = target.closest('[data-cursor]') as HTMLElement
      if (cursorAttr) {
        const type = cursorAttr.dataset.cursor as CursorVariant
        setVariant(type)
        setIsVisible(true)
        if (cursorAttr.dataset.cursorText) {
          setCursorText(cursorAttr.dataset.cursorText)
        }
        return
      }

      // Check for interactive elements - only show custom cursor on these
      const isLink = target.tagName === 'A' || target.closest('a')
      const isButton = target.tagName === 'BUTTON' || target.closest('button')
      const isImage = target.closest('[data-image]')

      if (isImage) {
        setVariant('view')
        setCursorText('View')
        setIsVisible(true)
      } else if (isLink || isButton) {
        setVariant('hover')
        setIsVisible(true)
      } else {
        // Hide custom cursor for non-interactive elements
        setVariant('default')
        setCursorText('')
        setIsVisible(false)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const relatedTarget = e.relatedTarget as HTMLElement
      if (!relatedTarget || relatedTarget === document.documentElement) {
        setVariant('default')
        setCursorText('')
        setIsVisible(false)
      }
    }

    const handleMouseDown = () => setIsPressed(true)
    const handleMouseUp = () => setIsPressed(false)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [updateCursor])

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null
  }

  const getCursorSize = () => {
    switch (variant) {
      case 'hover':
        return 56
      case 'view':
        return 80
      case 'drag':
        return 64
      default:
        return 0
    }
  }

  const cursorSize = getCursorSize()

  // Only render when hovering over interactive elements
  if (!isVisible || variant === 'default') {
    return null
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ x: cursorX, y: cursorY }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full"
        animate={{
          width: cursorSize,
          height: cursorSize,
          scale: isPressed ? 0.85 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{
          marginLeft: -cursorSize / 2,
          marginTop: -cursorSize / 2,
        }}
      >
        <AnimatePresence mode="wait">
          {variant === 'view' || cursorText ? (
            <motion.div
              key="text-cursor"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex h-full w-full items-center justify-center rounded-full bg-accent-gold shadow-lg"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-black">
                {cursorText || 'View'}
              </span>
            </motion.div>
          ) : variant === 'hover' ? (
            <motion.div
              key="hover"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="h-full w-full rounded-full border-2 border-accent-gold bg-accent-gold/10 backdrop-blur-sm"
            />
          ) : null}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
