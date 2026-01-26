'use client'

import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-brand-light dark:bg-brand-charcoal',
        className
      )}
    />
  )
}

export function ProjectCardSkeleton() {
  return (
    <div className="group relative">
      {/* Image skeleton */}
      <Skeleton className="aspect-[4/3] w-full" />

      {/* Content */}
      <div className="mt-4 space-y-3">
        {/* Category & Year */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-1 w-1 rounded-full" />
          <Skeleton className="h-4 w-12" />
        </div>

        {/* Title */}
        <Skeleton className="h-6 w-3/4" />

        {/* Location */}
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  )
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            'h-4',
            i === lines - 1 ? 'w-2/3' : 'w-full'
          )}
        />
      ))}
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="p-6 border border-brand-light dark:border-brand-charcoal">
      <Skeleton className="h-12 w-12 mb-4" />
      <Skeleton className="h-6 w-1/2 mb-3" />
      <TextSkeleton lines={2} />
    </div>
  )
}
