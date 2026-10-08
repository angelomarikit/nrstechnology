export type ServiceSlug =
  | 'cybersecurity'
  | 'managed-services'
  | 'project-management-training'
  | 'ai-consulting'
  | 'strategic-planning'
  | 'business-automation'
  | 'digital-transformation'

export interface ServiceFocusArea {
  title: string
  description?: string
}

export interface ServiceDetail {
  slug: ServiceSlug
  name: string
  shortName: string
  navLabel: string
  href: string
  icon: string
  summary: string
  overview: string
  headline: string
  description: string
  challenges: string[]
  focusAreas: string[]
  outcomes: string[]
  process: { step: string; title: string; description: string }[]
  relatedSlugs: ServiceSlug[]
  image: string
  imageAlt: string
  heroVariant: 'split' | 'centered' | 'editorial' | 'panel'
}

export interface NavItem {
  label: string
  href: string
}

export interface FAQEntry {
  id: string
  question: string
  answer: string
  keywords: string[]
  relatedIds?: string[]
  category:
    | 'general'
    | 'services'
    | 'cybersecurity'
    | 'managed-services'
    | 'training'
    | 'ai'
    | 'strategy'
    | 'automation'
    | 'transformation'
    | 'contact'
}
