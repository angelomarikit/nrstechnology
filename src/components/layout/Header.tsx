import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { contactNav, primaryNav, serviceNav } from '@/data/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { MobileNavigation } from './MobileNavigation'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen
  const servicesRef = useRef<HTMLDivElement>(null)
  const servicesMenuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!servicesOpen) return

    const onPointerDown = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setServicesOpen(false)
    }

    window.addEventListener('mousedown', onPointerDown)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('mousedown', onPointerDown)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [servicesOpen])

  const linkBase =
    'relative inline-flex h-10 items-center rounded-full px-3.5 text-sm font-semibold transition'

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-navy-deep focus:shadow-soft"
      >
        Skip to content
      </a>
      <header
        className={cn(
          'sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300',
          transparent
            ? 'border-transparent bg-transparent'
            : 'border-border/70 bg-white/92 shadow-[0_8px_30px_-20px_rgba(8,41,104,0.28)] backdrop-blur-xl',
        )}
      >
        <div className="container-nrs grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3 lg:h-[4.5rem]">
          <Logo
            compact
            className={cn(
              'justify-self-start transition',
              transparent && 'rounded-xl bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-black/5',
            )}
          />

          <nav
            aria-label="Primary"
            className="hidden justify-self-center lg:block"
          >
            <ul className="flex items-center gap-0.5 rounded-full border border-border/60 bg-white/80 p-1 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
              {primaryNav.map((item) =>
                item.href === '/services' ? (
                  <li key={item.href} className="relative">
                    <div ref={servicesRef}>
                      <button
                        type="button"
                        className={cn(
                          linkBase,
                          'gap-1 text-ink/80 hover:bg-blue-light hover:text-navy-deep',
                          (servicesOpen || location.pathname.startsWith('/services')) &&
                            'bg-blue-light text-navy-deep',
                        )}
                        aria-expanded={servicesOpen}
                        aria-controls={servicesMenuId}
                        onClick={() => setServicesOpen((open) => !open)}
                      >
                        Services
                        <ChevronDown
                          className={cn('h-4 w-4 transition', servicesOpen && 'rotate-180')}
                          aria-hidden
                        />
                      </button>

                      {servicesOpen ? (
                        <div
                          id={servicesMenuId}
                          role="menu"
                          className="absolute left-1/2 top-[calc(100%+0.75rem)] z-50 w-[min(36rem,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl border border-border bg-white p-3 shadow-soft"
                        >
                          <ul className="grid grid-cols-2 gap-1">
                            <li className="col-span-2">
                              <Link
                                to="/services"
                                role="menuitem"
                                className="block rounded-xl bg-gradient-soft px-4 py-3 transition hover:bg-blue-light"
                                onClick={() => setServicesOpen(false)}
                              >
                                <span className="text-sm font-semibold text-navy-deep">
                                  Services Overview
                                </span>
                                <span className="mt-1 block text-xs text-muted">
                                  Explore how our capabilities connect around business outcomes.
                                </span>
                              </Link>
                            </li>
                            {serviceNav.map((service) => (
                              <li key={service.href}>
                                <Link
                                  to={service.href}
                                  role="menuitem"
                                  className="block rounded-xl px-3 py-3 transition hover:bg-blue-light"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  <span className="text-sm font-semibold text-ink">
                                    {service.label}
                                  </span>
                                  <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-muted">
                                    {service.summary}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </li>
                ) : (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      end={item.href === '/'}
                      className={({ isActive }) =>
                        cn(
                          linkBase,
                          'text-ink/80 hover:bg-blue-light hover:text-navy-deep',
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
          </nav>

          <div className="flex items-center justify-self-end gap-2">
            <Button
              to={contactNav.href}
              size="sm"
              className="hidden min-w-[7.5rem] sm:inline-flex"
            >
              {contactNav.label}
            </Button>
            <button
              type="button"
              className={cn(
                'inline-flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden',
                transparent
                  ? 'border-white/35 bg-white/10 text-white hover:bg-white/20'
                  : 'border-border text-navy-deep hover:bg-blue-light',
              )}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
