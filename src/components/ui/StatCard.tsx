'use client'

import { motion } from 'framer-motion'
import { Stat } from '@/types'

interface StatCardProps {
  stat: Stat
  index?: number
  dark?: boolean
}

export function StatCard({ stat, index = 0, dark = false }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div
        className={`font-display text-5xl font-bold md:text-6xl ${
          dark ? 'text-brand-white' : 'text-brand-black'
        }`}
      >
        {stat.value}
        {stat.suffix && (
          <span className="text-accent-gold">{stat.suffix}</span>
        )}
      </div>
      <p
        className={`mt-2 text-sm uppercase tracking-wider ${
          dark ? 'text-brand-silver' : 'text-brand-gray'
        }`}
      >
        {stat.label}
      </p>
    </motion.div>
  )
}
