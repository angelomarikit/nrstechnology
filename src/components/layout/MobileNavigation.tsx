import { ChevronDown } from 'lucide-react'
import { useEffect, useId, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { contactNav, primaryNav, serviceNav } from '@/data/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

interface MobileNavigationProps {
  open: boolean
  onClose: () => void
}

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const [servicesOpen, setServicesOpen] = useState(false)
  const panelId = useId()

  useEffect(() => {
    if (!open) setServicesOpen(false)
  }, [open])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    if (open) window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <button
        type="button"
        aria-label="Close navigation overlay"
        className="absolute inset-0 bg-navy-midnight/40"
        onClick={onClose}
      />
      <nav
        id="mobile-navigation"
        aria-label="Mobile"
        className="absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col overflow-y-auto bg-white shadow-soft"
      >
        <div className="border-b border-border px-5 py-5">
          <p className="text-sm font-semibold text-navy-deep">Menu</p>
        </div>
        <ul className="flex flex-1 flex-col gap-1 p-3">
          {primaryNav.map((item) =>
            item.href === '/services' ? (
              <li key={item.href}>
                <button
                  type="button"
                  className="flex min-h-12 w-full items-center justify-between rounded-xl px-4 text-left text-base font-semibold text-ink hover:bg-blue-light"
                  aria-expanded={servicesOpen}
                  aria-controls={panelId}
                  onClick={() => setServicesOpen((value) => !value)}
                >
                  Services
                  <ChevronDown
                    className={cn('h-4 w-4 transition', servicesOpen && 'rotate-180')}
                    aria-hidden
                  />
                </button>
                <div
                  id={panelId}
                  className={cn('overflow-hidden transition-all', servicesOpen ? 'mt-1' : 'h-0')}
                  hidden={!servicesOpen}
                >
                  <ul className="space-y-1 rounded-xl bg-surface p-2">
                    <li>
                      <Link
                        to="/services"
                        className="block min-h-11 rounded-lg px-3 py-2 text-sm font-medium text-navy-deep hover:bg-white"
                        onClick={onClose}
                      >
                        Services Overview
                      </Link>
                    </li>
                    {serviceNav.map((service) => (
                      <li key={service.href}>
                        <Link
                          to={service.href}
                          className="block min-h-11 rounded-lg px-3 py-2 text-sm text-ink/90 hover:bg-white"
                          onClick={onClose}
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      'flex min-h-12 items-center rounded-xl px-4 text-base font-semibold text-ink hover:bg-blue-light',
                      isActive && 'bg-blue-light text-navy-deep',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>
        <div className="border-t border-border p-4">
          <Button to={contactNav.href} className="w-full" onClick={onClose}>
            {contactNav.label}
          </Button>
        </div>
      </nav>
    </div>
  )
}
