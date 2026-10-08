import { Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { company } from '@/data/company'

const items = [
  {
    icon: Phone,
    label: 'Phone',
    value: company.phoneDisplay,
    href: `tel:${company.phoneTel}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: MapPin,
    label: 'Office Address',
    value: company.address,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: company.businessHours,
  },
] as const

export function ContactDetails() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-corporate">
          Official Contact Information
        </p>
        <h2 className="mt-2 font-heading text-2xl font-bold text-ink sm:text-3xl">
          {company.legalName}
        </h2>
      </div>

      <ul className="space-y-4">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <li
              key={item.label}
              className="flex gap-4 rounded-2xl border border-border bg-white p-4 shadow-card"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-light text-blue-corporate">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {item.label}
                </p>
                {'href' in item && item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 block text-sm font-medium text-ink hover:text-blue-corporate sm:text-base"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-medium text-ink sm:text-base">{item.value}</p>
                )}
              </div>
            </li>
          )
        })}
      </ul>

      <a
        href={company.mapsDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-corporate hover:text-navy-deep"
      >
        Get directions on Google Maps
        <ExternalLink className="h-4 w-4" aria-hidden />
      </a>
    </div>
  )
}
