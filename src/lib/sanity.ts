import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Sanity client configuration
// These values should be set in your .env.local file
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// GROQ Queries
export const queries = {
  // Get all projects
  allProjects: `*[_type == "project"] | order(year desc) {
    _id,
    title,
    slug,
    category,
    location,
    year,
    description,
    challenge,
    solution,
    result,
    featured,
    "images": images[] {
      "url": asset->url,
      alt,
      caption
    },
    "specs": specs[] {
      label,
      value
    }
  }`,

  // Get single project by slug
  projectBySlug: `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    location,
    year,
    description,
    challenge,
    solution,
    result,
    featured,
    "images": images[] {
      "url": asset->url,
      alt,
      caption
    },
    "specs": specs[] {
      label,
      value
    }
  }`,

  // Get featured projects
  featuredProjects: `*[_type == "project" && featured == true] | order(year desc) [0...3] {
    _id,
    title,
    slug,
    category,
    location,
    year,
    description,
    "images": images[] {
      "url": asset->url,
      alt,
      caption
    }
  }`,

  // Get all team members
  allTeamMembers: `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    "image": image.asset->url,
    linkedin
  }`,

  // Get all services
  allServices: `*[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    icon,
    features,
    "image": image.asset->url
  }`,

  // Get all testimonials
  allTestimonials: `*[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    quote,
    author,
    role,
    company,
    "image": image.asset->url
  }`,

  // Get site settings
  siteSettings: `*[_type == "siteSettings"][0] {
    title,
    description,
    phone,
    email,
    address,
    socialLinks
  }`,
}

// Fetch helpers
export async function getProjects() {
  return client.fetch(queries.allProjects)
}

export async function getProjectBySlug(slug: string) {
  return client.fetch(queries.projectBySlug, { slug })
}

export async function getFeaturedProjects() {
  return client.fetch(queries.featuredProjects)
}

export async function getTeamMembers() {
  return client.fetch(queries.allTeamMembers)
}

export async function getServices() {
  return client.fetch(queries.allServices)
}

export async function getTestimonials() {
  return client.fetch(queries.allTestimonials)
}
