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

  // Faster spring config for snappy cursor
  const springConfig = { damping: 40, stiffness: 800, mass: 0.2 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  // Slower ring for trailing effect
  const ringConfig = { damping: 30, stiffness: 300, mass: 0.5 }
  const ringX = useSpring(mouseX, ringConfig)
  const ringY = useSpring(mouseY, ringConfig)

  const updateCursor = useCallback(
    (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
        if (!isVisible) setIsVisible(true)
      })
    },
    [mouseX, mouseY, isVisible]
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
        if (cursorAttr.dataset.cursorText) {
          setCursorText(cursorAttr.dataset.cursorText)
        }
        return
      }

      // Check for interactive elements
      const isLink = target.tagName === 'A' || target.closest('a')
      const isButton = target.tagName === 'BUTTON' || target.closest('button')
      const isInput =
        target.tagName === 'INPUT' || target.tagName === 'TEXTAREA'
      const isImage = target.closest('[data-image]')

      if (isInput) {
        setVariant('text')
      } else if (isImage) {
        setVariant('view')
        setCursorText('View')
      } else if (isLink || isButton) {
        setVariant('hover')
      } else {
        setVariant('default')
        setCursorText('')
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const relatedTarget = e.relatedTarget as HTMLElement
      if (!relatedTarget || relatedTarget === document.documentElement) {
        setVariant('default')
        setCursorText('')
      }
    }

    const handleMouseDown = () => setIsPressed(true)
    const handleMouseUp = () => setIsPressed(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.documentElement.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.documentElement.removeEventListener(
        'mouseleave',
        handleMouseLeave
      )
      document.documentElement.removeEventListener(
        'mouseenter',
        handleMouseEnter
      )
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
      case 'text':
        return 4
      case 'drag':
        return 64
      case 'hidden':
        return 0
      default:
        return 10
    }
  }

  const cursorSize = getCursorSize()

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x: cursorX, y: cursorY }}
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
            ) : variant === 'text' ? (
              <motion.div
                key="text-input"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                className="h-5 w-[2px] bg-brand-black dark:bg-brand-white"
              />
            ) : variant === 'hover' ? (
              <motion.div
                key="hover"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="h-full w-full rounded-full border-2 border-accent-gold bg-accent-gold/10 backdrop-blur-sm"
              />
            ) : (
              <motion.div
                key="dot"
                className="h-full w-full rounded-full bg-brand-black dark:bg-brand-white"
                style={{ mixBlendMode: 'difference' }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Trailing ring - subtle follow effect */}
      <AnimatePresence>
        {variant === 'default' && isVisible && (
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9998]"
            style={{ x: ringX, y: ringY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded-full border border-brand-black/20 dark:border-brand-white/20"
              style={{
                width: 36,
                height: 36,
                marginLeft: -18,
                marginTop: -18,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hide default cursor globally */}
      <style jsx global>{`
        @media (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  )
}
