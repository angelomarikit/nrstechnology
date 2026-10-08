import { services } from './services'
import type { NavItem } from '@/types'

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Why NRS', href: '/why-nrs' },
]

export const contactNav: NavItem = {
  label: 'Contact Us',
  href: '/contact',
}

export const serviceNav = services.map((service) => ({
  label: service.navLabel,
  href: service.href,
  summary: service.summary,
}))

export const footerQuickLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Why NRS', href: '/why-nrs' },
  { label: 'Contact Us', href: '/contact' },
]
