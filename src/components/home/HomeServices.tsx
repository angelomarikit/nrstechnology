import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { ParallaxImage } from '@/components/ui/ParallaxImage'
import { services } from '@/data/services'
import { getServiceIcon } from '@/lib/icons'

const serviceVisuals: Record<string, string> = {
  cybersecurity: '/images/home/tech-cyber.jpg',
  'managed-services': '/images/services/managed-services.jpg',
  'project-management-training': '/images/services/project-management.jpg',
  'ai-consulting': '/images/services/ai-consulting.jpg',
  'strategic-planning': '/images/services/strategic-planning.jpg',
  'business-automation': '/images/services/business-automation.jpg',
  'digital-transformation': '/images/services/digital-transformation.jpg',
}

export function HomeServices() {
  const [featured, ...capabilityList] = services

  return (
    <section className="bg-white">
      <div className="container-nrs section-pad">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-corporate">
              Services
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-[2.85rem]">
              Technology solutions designed around your business
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              From enterprise security to AI implementation, NRS combines strategic direction with
              practical delivery expertise.
            </p>
          </div>
        </AnimatedSection>

        {/* Featured lead */}
        <AnimatedSection className="mt-12" delay={0.04}>
          <Link
            to={featured.href}
            className="group relative block min-h-[24rem] overflow-hidden rounded-2xl sm:min-h-[28rem]"
          >
            <ParallaxImage
              src={serviceVisuals[featured.slug] ?? featured.image}
              alt={featured.imageAlt}
              className="absolute inset-0"
              intensity={160}
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(100deg,rgba(6,27,69,0.92)_0%,rgba(6,27,69,0.72)_45%,rgba(6,27,69,0.28)_100%)]"
              aria-hidden
            />
            <div className="relative flex h-full min-h-[24rem] flex-col justify-between p-8 text-white sm:min-h-[28rem] sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-sky">
                Featured · 01 / {String(services.length).padStart(2, '0')}
              </p>
              <div className="max-w-lg">
                <h3 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  {featured.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                  {featured.summary}
                </p>
                <span className="mt-8 inline-flex items-center gap-3 text-sm font-semibold">
                  Explore this capability
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy-deep transition group-hover:bg-blue-sky group-hover:text-navy-deep">
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </span>
              </div>
            </div>
          </Link>
        </AnimatedSection>

        {/* Capability directory — professional index, not zigzag */}
        <div className="mt-16">
          <AnimatedSection>
            <div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-corporate">
                  Capability directory
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-ink sm:text-3xl">
                  Explore related services
                </h3>
              </div>
              <Button to="/services" variant="outline" size="sm">
                Full services overview
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </AnimatedSection>

          <ul className="divide-y divide-border border-y border-border">
            {capabilityList.map((service, index) => {
              const Icon = getServiceIcon(service.icon)
              const number = String(index + 2).padStart(2, '0')

              return (
                <li key={service.slug}>
                  <AnimatedSection>
                    <Link
                      to={service.href}
                      className="group grid grid-cols-1 items-center gap-5 py-6 transition hover:bg-blue-light/40 sm:grid-cols-[4.5rem_minmax(0,1fr)_auto] sm:gap-8 sm:py-7 lg:grid-cols-[5rem_12rem_minmax(0,1fr)_auto] lg:gap-10"
                    >
                      <span className="font-heading text-sm font-semibold tabular-nums text-blue-corporate">
                        {number}
                      </span>

                      <div className="hidden overflow-hidden rounded-xl lg:block">
                        <img
                          src={serviceVisuals[service.slug] ?? service.image}
                          alt=""
                          className="aspect-[4/3] h-24 w-full object-cover transition duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-light text-blue-corporate transition group-hover:bg-white">
                            <Icon className="h-4 w-4" aria-hidden />
                          </span>
                          <h4 className="font-heading text-lg font-bold text-ink sm:text-xl">
                            {service.name}
                          </h4>
                        </div>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                          {service.summary}
                        </p>
                      </div>

                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-navy-deep transition group-hover:border-blue-corporate group-hover:bg-navy-deep group-hover:text-white sm:justify-self-end">
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                        <span className="sr-only">View {service.name}</span>
                      </span>
                    </Link>
                  </AnimatedSection>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
