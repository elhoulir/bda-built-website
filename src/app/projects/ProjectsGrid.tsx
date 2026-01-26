'use client'

import { useState, useMemo, useTransition } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { projects } from '@/lib/data'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { ProjectCardSkeleton } from '@/components/ui/Skeleton'
import { ProjectCategory } from '@/types'
import { cn } from '@/lib/utils'

const categories: { value: ProjectCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'retail', label: 'Retail' },
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'education', label: 'Education' },
]

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isPending, startTransition] = useTransition()

  const filteredProjects = useMemo(() => {
    let filtered = projects

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [activeCategory, searchQuery])

  const handleCategoryChange = (category: ProjectCategory | 'all') => {
    startTransition(() => {
      setActiveCategory(category)
    })
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearchQuery(e.target.value)
    })
  }

  const clearSearch = () => {
    startTransition(() => {
      setSearchQuery('')
    })
  }

  return (
    <section className="bg-brand-white dark:bg-brand-black py-16 md:py-24">
      <div className="container-wide">
        {/* Search and Filter Bar */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-brand-light dark:border-brand-charcoal pb-6">
          {/* Search Input */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-gray" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full border border-brand-light dark:border-brand-gray bg-brand-white dark:bg-brand-slate pl-11 pr-10 py-2.5 text-sm text-brand-black dark:text-brand-white placeholder-brand-gray focus:border-brand-black dark:focus:border-brand-white focus:outline-none focus:ring-2 focus:ring-brand-black/10 dark:focus:ring-brand-white/10 transition-colors"
              aria-label="Search projects"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-gray hover:text-brand-black dark:hover:text-brand-white transition-colors"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => handleCategoryChange(category.value)}
                role="tab"
                aria-selected={activeCategory === category.value}
                aria-controls="projects-grid"
                className={cn(
                  'px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-brand-black dark:focus:ring-brand-white focus:ring-offset-2',
                  activeCategory === category.value
                    ? 'bg-brand-black dark:bg-brand-white text-brand-white dark:text-brand-black'
                    : 'text-brand-gray hover:text-brand-black dark:hover:text-brand-white hover:bg-brand-light/50 dark:hover:bg-brand-charcoal/50'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-brand-gray dark:text-brand-silver">
            {isPending ? (
              'Filtering...'
            ) : (
              <>
                Showing {filteredProjects.length} project
                {filteredProjects.length !== 1 ? 's' : ''}
                {searchQuery && (
                  <span>
                    {' '}for &quot;{searchQuery}&quot;
                  </span>
                )}
              </>
            )}
          </p>
          {(activeCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                startTransition(() => {
                  setActiveCategory('all')
                  setSearchQuery('')
                })
              }}
              className="text-sm text-accent-gold hover:text-accent-copper transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div
          id="projects-grid"
          role="tabpanel"
          aria-busy={isPending}
        >
          {isPending ? (
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <motion.div layout className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard project={project} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Empty State */}
        {!isPending && filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-24 text-center"
          >
            <div className="mx-auto max-w-md">
              <Search className="mx-auto h-12 w-12 text-brand-light dark:text-brand-charcoal" />
              <h3 className="mt-4 font-display text-xl font-semibold text-brand-black dark:text-brand-white">
                No projects found
              </h3>
              <p className="mt-2 text-brand-gray dark:text-brand-silver">
                {searchQuery
                  ? `No projects match "${searchQuery}". Try a different search term.`
                  : 'No projects found in this category.'}
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all')
                  setSearchQuery('')
                }}
                className="mt-6 inline-flex items-center gap-2 bg-brand-black dark:bg-brand-white text-brand-white dark:text-brand-black px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-brand-charcoal dark:hover:bg-brand-light transition-colors"
              >
                View All Projects
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
