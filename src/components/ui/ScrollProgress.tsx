'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      {/* Top horizontal progress bar */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-[100] h-1 origin-left bg-accent-gold shadow-[0_2px_8px_rgba(0,0,0,0.3),0_0_10px_rgba(184,151,126,0.6)]"
        style={{ scaleX }}
      />
      {/* Right vertical progress bar */}
      <motion.div className="fixed bottom-0 right-3 top-0 z-[100] hidden w-1.5 rounded-full bg-brand-black/20 lg:block">
        <motion.div
          className="absolute bottom-0 left-0 right-0 origin-bottom rounded-full bg-accent-gold shadow-[-2px_0_8px_rgba(0,0,0,0.3),0_0_10px_rgba(184,151,126,0.6)]"
          style={{ scaleY, height: '100%' }}
        />
      </motion.div>
    </>
  )
}
