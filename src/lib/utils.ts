import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-AU', {
    year: 'numeric',
    month: 'long',
  }).format(new Date(date))
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    commercial: 'Commercial',
    industrial: 'Industrial',
    retail: 'Retail',
    hospitality: 'Hospitality',
    healthcare: 'Healthcare',
    education: 'Education',
  }
  return labels[category] || category
}
