'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import { TeamMember } from '@/types'

interface TeamCardProps {
  member: TeamMember
  index?: number
}

export function TeamCard({ member, index = 0 }: TeamCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-light">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay with LinkedIn */}
        <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-brand-black/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center bg-brand-white text-brand-black transition-colors hover:bg-brand-cream"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="font-display text-xl font-semibold text-brand-black">
          {member.name}
        </h3>
        <p className="mt-1 text-sm uppercase tracking-wider text-brand-gray">
          {member.role}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-brand-slate">
          {member.bio}
        </p>
      </div>
    </motion.article>
  )
}
