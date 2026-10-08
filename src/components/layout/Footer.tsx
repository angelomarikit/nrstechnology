import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '@/data/company'
import { footerQuickLinks, serviceNav } from '@/data/navigation'
import { Logo } from '@/components/ui/Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-navy-midnight to-navy-deep text-white">
      <div className="container-nrs py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-block rounded-xl bg-white/95 p-2">
              <Logo />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">
              {company.legalName} helps organizations connect strategy, governance, security, and
              execution through practical technology and business solutions.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-blue-sky">
              {company.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-sky">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerQuickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/80 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-sky">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceNav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/80 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-sky">
              Contact
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-white/80">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-sky" aria-hidden />
                <a href={`tel:${company.phoneTel}`} className="hover:text-white">
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-sky" aria-hidden />
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-sky" aria-hidden />
                <span>{company.address}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-sky" aria-hidden />
                <span>{company.businessHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-sm text-white/60">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
