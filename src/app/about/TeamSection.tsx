'use client'

import { teamMembers } from '@/lib/data'
import { TeamCard } from '@/components/ui/TeamCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function TeamSection() {
  return (
    <section className="bg-brand-cream py-24 md:py-32">
      <div className="container-wide">
        <SectionHeader
          label="Our Team"
          title="Meet the People Behind BDA Built"
          description="Our experienced team brings together decades of expertise in commercial construction, project management, and design coordination."
          align="center"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
