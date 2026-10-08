import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { SEO } from '@/components/seo/SEO'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/ui/CTASection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SITE_URL } from '@/data/company'
import { getRelatedServices, getServiceBySlug } from '@/data/services'
import { getServiceIcon } from '@/lib/icons'
import { cn } from '@/lib/utils'
import type { ServiceDetail } from '@/types'

function ServiceHero({ service }: { service: ServiceDetail }) {
  const Icon = getServiceIcon(service.icon)
  const { heroVariant } = service

  if (heroVariant === 'centered') {
    return (
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-midnight/90 via-navy-deep/85 to-navy-deep" />
        <div className="container-nrs relative section-pad text-center">
          <AnimatedSection>
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-sky backdrop-blur">
              <Icon className="h-7 w-7" aria-hidden />
            </span>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-blue-sky">
              {service.shortName}
            </p>
            <h1 className="mx-auto mt-3 max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl">
              {service.headline}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
              {service.description}
            </p>
            <Button to="/contact" variant="white" size="lg" className="mt-8">
              Discuss this service
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    )
  }

  if (heroVariant === 'editorial') {
    return (
      <section className="bg-surface">
        <div className="container-nrs section-pad">
          <AnimatedSection>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-corporate">
                  {service.name}
                </p>
                <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">
                  {service.headline}
                </h1>
                <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                  {service.overview}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button to="/contact" size="lg">
                    Request consultation
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Button>
                  <Button to="/services" variant="outline" size="lg">
                    All services
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-blue-sky/20 blur-2xl" aria-hidden />
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="aspect-[16/11] w-full rounded-[2rem] object-cover shadow-soft"
                />
                <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-card">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-light text-blue-corporate">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-sm font-semibold text-ink">{service.shortName}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    )
  }

  if (heroVariant === 'panel') {
    return (
      <section className="section-pad">
        <div className="container-nrs">
          <AnimatedSection>
            <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-card lg:grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="bg-gradient-brand p-8 text-white sm:p-10 lg:p-14">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-blue-sky">
                  {service.name}
                </p>
                <h1 className="mt-3 font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  {service.headline}
                </h1>
                <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
                  {service.description}
                </p>
                <Button to="/contact" variant="white" size="lg" className="mt-8">
                  Talk with our team
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>
              <div className="relative min-h-[16rem]">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    )
  }

  // split (default)
  return (
    <section className="overflow-hidden bg-gradient-soft">
      <div className="container-nrs section-pad">
        <AnimatedSection>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-light text-blue-corporate">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-corporate">
                  {service.name}
                </p>
              </div>
              <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">
                {service.headline}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                {service.description}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">{service.overview}</p>
              <Button to="/contact" size="lg" className="mt-8">
                Start a conversation
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-blue-corporate/20 via-blue-sky/10 to-transparent"
                aria-hidden
              />
              <img
                src={service.image}
                alt={service.imageAlt}
                className="relative aspect-[5/4] w-full rounded-[2rem] object-cover shadow-soft"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <Navigate to="/404" replace />
  }

  const related = getRelatedServices(service.relatedSlugs)

  return (
    <>
      <SEO
        title={service.name}
        description={service.summary}
        path={service.href}
        image={`${SITE_URL}${service.image}`}
      />

      <ServiceHero service={service} />

      <section className="section-pad">
        <div className="container-nrs">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Challenges we help address"
              title="Where organizations typically struggle"
              description="These are the patterns we hear most often before an engagement begins."
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {service.challenges.map((challenge, index) => (
                <li
                  key={challenge}
                  className="rounded-2xl border border-border bg-white p-5 shadow-card sm:p-6"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-corporate">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-3 text-base font-medium leading-relaxed text-ink">{challenge}</p>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-nrs">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Focus areas"
              title={`How we approach ${service.shortName.toLowerCase()}`}
              description="Engagement scope is shaped around your priorities — these are the areas we commonly support."
            />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-white px-4 py-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-corporate" aria-hidden />
                  <span className="text-sm font-medium text-ink">{area}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-nrs">
          <AnimatedSection>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionHeading
                eyebrow="Outcomes"
                title="What stronger looks like"
                description="We measure success by whether your organization is clearer, more capable, and better prepared after the work."
              />
              <ul className="space-y-4">
                {service.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="border-l-4 border-blue-corporate bg-blue-light/60 px-5 py-4 text-base font-medium leading-relaxed text-ink"
                  >
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-pad bg-gradient-soft">
        <div className="container-nrs">
          <AnimatedSection>
            <SectionHeading
              eyebrow="How we work"
              title="A practical process"
              description="Every engagement is tailored, but the path usually follows a clear sequence."
              align="center"
              className="mb-12"
            />
            <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {service.process.map((step, index) => (
                <li
                  key={step.step}
                  className={cn(
                    'relative rounded-[1.5rem] border border-border bg-white p-6 shadow-card',
                    index === 0 && 'xl:mt-0',
                  )}
                >
                  <span className="font-heading text-3xl font-bold text-blue-sky/80">{step.step}</span>
                  <h3 className="mt-3 font-heading text-xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </li>
              ))}
            </ol>
          </AnimatedSection>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section-pad">
          <div className="container-nrs">
            <AnimatedSection>
              <SectionHeading
                eyebrow="Related services"
                title="Capabilities that often connect"
                description={`${service.shortName} rarely stands alone. These related services frequently strengthen the same outcomes.`}
              />
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {related.map((item) => {
                  const RelatedIcon = getServiceIcon(item.icon)
                  return (
                    <Link
                      key={item.slug}
                      to={item.href}
                      className="group overflow-hidden rounded-[1.5rem] border border-border bg-white shadow-card transition hover:border-blue-corporate/30 hover:shadow-soft"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-blue-corporate">
                          <RelatedIcon className="h-4 w-4" aria-hidden />
                          <span className="text-xs font-semibold uppercase tracking-[0.12em]">
                            Related
                          </span>
                        </div>
                        <h3 className="mt-2 font-heading text-lg font-bold text-ink">{item.name}</h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                          {item.summary}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-corporate">
                          View service
                          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>
      ) : null}

      <CTASection
        title={`Ready to discuss ${service.shortName.toLowerCase()}?`}
        description="Share your priorities and constraints. We will help you clarify the next practical step."
        buttonLabel="Request a consultation"
      />
    </>
  )
}
