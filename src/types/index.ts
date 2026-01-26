// Project types
export interface Project {
  id: string
  title: string
  slug: string
  category: ProjectCategory
  location: string
  year: string
  description: string
  challenge?: string
  solution?: string
  result?: string
  images: ProjectImage[]
  featured: boolean
  specs?: ProjectSpec[]
}

export interface ProjectImage {
  url: string
  alt: string
  caption?: string
}

export interface ProjectSpec {
  label: string
  value: string
}

export type ProjectCategory =
  | 'commercial'
  | 'industrial'
  | 'retail'
  | 'hospitality'
  | 'healthcare'
  | 'education'

// Team types
export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  email?: string
  linkedin?: string
}

// Service types
export interface Service {
  id: string
  title: string
  slug: string
  description: string
  icon: string
  features: string[]
  image: string
}

// Testimonial types
export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  image?: string
}

// Contact form types
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  projectType?: string
  message: string
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

// Stats/metrics types
export interface Stat {
  value: string
  label: string
  suffix?: string
}
