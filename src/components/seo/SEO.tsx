import { useEffect } from 'react'
import { SITE_URL, company } from '@/data/company'

interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
}

function upsertMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`${selector}`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

export function SEO({
  title,
  description,
  path = '/',
  image = `${SITE_URL}${company.logo.src}`,
  type = 'website',
}: SEOProps) {
  const fullTitle = title.includes('NRS') ? title : `${title} | NRS Technologies`
  const url = `${SITE_URL}${path === '/' ? '/' : path}`

  useEffect(() => {
    document.title = fullTitle
    upsertMeta('meta[name="description"]', 'name', 'description', description)
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description)
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', url)
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', type)
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', image)
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle)
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    upsertLink('canonical', url)
  }, [description, fullTitle, image, type, url])

  return null
}
