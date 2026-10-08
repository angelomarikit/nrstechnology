import { ArrowRight, ArrowUpRight, Link2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/seo/SEO'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/ui/CTASection'
import { services } from '@/data/services'
import { getServiceIcon } from '@/lib/icons'
import { cn } from '@/lib/utils'
import type { ServiceDetail } from '@/types'

function FocusChips({ areas, limit = 4 }: { areas: string[]; limit?: number }) {
  const shown = areas.slice(0, limit)
  const remaining = areas.length - shown.length

  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {shown.map((area) => (
        <li
          key={area}
          className="rounded-full border border-blue-corporate/15 bg-blue-light px-3 py-1 text-xs font-medium text-navy-deep"
        >
          {area}
        </li>
      ))}
      {remaining > 0 ? (
        <li className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted">
          +{remaining} more
        </li>
      ) : null}
    </ul>
  )
}

function FeaturedService({ service }: { service: ServiceDetail }) {
  const Icon = getServiceIcon(service.icon)

  return (
    <AnimatedSection>
      <article className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-card">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[18rem] overflow-hidden bg-navy-deep lg:min-h-full">
            <img
              src={service.image}
              alt={service.imageAlt}
              className="absolute inset-0 h-full w-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/80 via-navy-deep/30 to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-sky">
                Featured capability
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <h3 className="font-heading text-3xl font-bold text-ink sm:text-4xl">{service.name}</h3>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{service.overview}</p>
            <p className="mt-3 text-base leading-relaxed text-muted">{service.description}</p>
            <FocusChips areas={service.focusAreas} limit={5} />
            <Button to={service.href} className="mt-8 w-fit" size="lg">
              Explore {service.shortName}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>
      </article>
    </AnimatedSection>
  )
}

function AlternatingService({
  service,
  reverse,
}: {
  service: ServiceDetail
  reverse: boolean
}) {
  const Icon = getServiceIcon(service.icon)

  return (
    <AnimatedSection>
      <article
        className={cn(
          'grid items-center gap-8 lg:grid-cols-12 lg:gap-10',
          reverse && 'lg:[&>*:first-child]:order-2',
        )}
      >
        <div className="relative overflow-hidden rounded-[1.75rem] bg-surface lg:col-span-5">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-corporate shadow-card">
            <Icon className="h-5 w-5" aria-hidden />
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-corporate">
            Service
          </p>
          <h3 className="mt-2 font-heading text-2xl font-bold text-ink sm:text-3xl">
            {service.name}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted">{service.overview}</p>
          <p className="mt-3 text-base leading-relaxed text-muted">{service.summary}</p>
          <FocusChips areas={service.focusAreas} />
          <Link
            to={service.href}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-corporate transition hover:text-navy-deep"
          >
            View {service.shortName} details
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </article>
    </AnimatedSection>
  )
}

function CompactServiceRow({ service }: { service: ServiceDetail }) {
  const Icon = getServiceIcon(service.icon)

  return (
    <AnimatedSection>
      <article className="flex flex-col gap-6 rounded-[1.75rem] border border-border bg-gradient-soft p-6 sm:flex-row sm:items-center sm:p-8">
        <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-2xl sm:h-36 sm:w-52">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-light text-blue-corporate">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="font-heading text-xl font-bold text-ink sm:text-2xl">{service.name}</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{service.description}</p>
          <FocusChips areas={service.focusAreas} limit={3} />
        </div>
        <Button to={service.href} variant="outline" className="shrink-0 self-start sm:self-center">
          Learn more
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Button>
      </article>
    </AnimatedSection>
  )
}

export function ServicesPage() {
  const [featured, ...rest] = services
  const mid = Math.ceil(rest.length / 2)
  const alternating = rest.slice(0, mid)
  const compact = rest.slice(mid)

  return (
    <>
      <SEO
        title="Services"
        description="Explore NRS Technologies services spanning cybersecurity, managed services, project management training, AI consulting, strategic planning, business automation, and digital transformation advisory."
        path="/services"
      />

      <section className="relative overflow-hidden bg-gradient-soft radial-glow">
        <div className="container-nrs section-pad">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-corporate">
              Our Services
            </p>
            <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-[3.25rem]">
              Technology services built around business outcomes
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Cybersecurity, operations, AI, automation, training, strategy, and transformation —
              connected capabilities designed to help your organization move with clarity and
              control.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-nrs space-y-16 lg:space-y-20">
          {featured ? <FeaturedService service={featured} /> : null}

          <div className="space-y-16 lg:space-y-20">
            {alternating.map((service, index) => (
              <AlternatingService
                key={service.slug}
                service={service}
                reverse={index % 2 === 1}
              />
            ))}
          </div>

          {compact.length > 0 ? (
            <div className="space-y-5">
              {compact.map((service) => (
                <CompactServiceRow key={service.slug} service={service} />
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="section-pad bg-navy-deep text-white">
        <div className="container-nrs">
          <AnimatedSection>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-sky">
                  Connected delivery
                </p>
                <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
                  One partner. Connected capabilities.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                  Cybersecurity, managed operations, AI, automation, governance, project delivery,
                  and strategic planning often intersect. NRS helps organizations address connected
                  challenges rather than isolated symptoms — so strategy, security, and execution
                  reinforce each other.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/15 bg-white/5 p-6 backdrop-blur sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-sky/20 text-blue-sky">
                  <Link2 className="h-6 w-6" aria-hidden />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/85 sm:text-base">
                  When readiness, risk, delivery discipline, and adoption are considered together,
                  technology investments are more likely to produce lasting business performance.
                </p>
                <Button to="/why-nrs" variant="white" className="mt-6">
                  Why organizations choose NRS
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Ready to discuss the outcome you need?"
        description="Tell us what you are trying to solve. We will help you clarify priorities and the practical path forward."
        buttonLabel="Request a consultation"
      />
    </>
  )
}
