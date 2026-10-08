import { ArrowUpRight } from 'lucide-react'
import { ContactDetails } from '@/components/contact/ContactDetails'
import { ContactForm } from '@/components/contact/ContactForm'
import { SEO } from '@/components/seo/SEO'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { company } from '@/data/company'

export function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us"
        description={`Contact ${company.brandName} at ${company.phoneDisplay} or ${company.email}. Office hours ${company.businessHoursShort}. Located in Filinvest City, Alabang, Muntinlupa City.`}
        path="/contact"
      />

      <section className="relative overflow-hidden border-b border-border bg-white">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-soft lg:block" aria-hidden />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-blue-corporate via-blue-electric to-blue-sky lg:w-1.5" aria-hidden />

        <div className="container-nrs section-pad">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-corporate">
                Contact Us
              </p>
              <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">
                Let&apos;s talk about what you&apos;re trying to solve
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Whether you have a defined requirement or an unresolved problem, a conversation can
                help clarify your next move.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`tel:${company.phoneTel}`} size="lg">
                  Call {company.phoneDisplay}
                </Button>
                <Button href={`mailto:${company.email}`} variant="outline" size="lg">
                  Email us
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.06}>
              <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-soft">
                <img
                  src="/images/corporate/contact.jpg"
                  alt="Modern corporate building representing NRS Technologies office location"
                  className="aspect-[5/4] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-sky">
                    Office
                  </p>
                  <p className="mt-1 text-sm font-medium leading-relaxed">
                    {company.addressShort}
                  </p>
                </div>
                <div className="absolute left-0 top-0 h-full w-1.5 bg-blue-corporate" aria-hidden />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-nrs">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">
            <AnimatedSection>
              <ContactDetails />
            </AnimatedSection>
            <AnimatedSection delay={0.05}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
