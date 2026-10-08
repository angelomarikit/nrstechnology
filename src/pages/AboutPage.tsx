import {
  ArrowUpRight,
  HeartHandshake,
  MessageSquareQuote,
  Scale,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SEO } from '@/components/seo/SEO'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/ui/CTASection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { company } from '@/data/company'
import { cn } from '@/lib/utils'

const coreValues: {
  title: string
  description: string
  icon: LucideIcon
}[] = [
  {
    title: 'Straight Talk',
    description:
      'We communicate openly and provide practical guidance, even when the most responsible recommendation is not the easiest one.',
    icon: MessageSquareQuote,
  },
  {
    title: 'Outcomes Over Activity',
    description:
      'We define success through meaningful business results, not simply the volume of tasks completed.',
    icon: Target,
  },
  {
    title: 'Malasakit — Genuine Care',
    description:
      'We approach client challenges with ownership, responsibility, and respect for the people affected by our work.',
    icon: HeartHandshake,
  },
  {
    title: 'Mastery & Certified Expertise',
    description:
      'We value professional discipline, continuous development, and practical knowledge grounded in real-world delivery.',
    icon: Scale,
  },
  {
    title: 'Security by Default',
    description:
      'Security, risk, privacy, and accountability should be considered early, not added after implementation.',
    icon: ShieldCheck,
  },
  {
    title: 'Capability, Not Dependency',
    description:
      'Our objective is to help clients become stronger and more capable, rather than permanently dependent on external advisers.',
    icon: Users,
  },
]

const visionPillars = [
  {
    title: 'Operate Securely',
    description:
      'Build the resilience and controls needed for technology to support the business with confidence.',
  },
  {
    title: 'Decide Intelligently',
    description:
      'Connect priorities, information, and responsible technology so leaders can make clearer decisions.',
  },
  {
    title: 'Grow with Confidence',
    description:
      'Strengthen internal capability so progress continues after the engagement ends.',
  },
]

export function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description={`${company.legalName} is a Philippine-based technology and business services firm helping organizations connect strategy, governance, security, and execution.`}
        path="/about"
      />

      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="container-nrs section-pad grid items-center gap-10 lg:grid-cols-2">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-corporate">
              About Us
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Built to connect strategy, technology, and execution
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {company.legalName} is a Philippine-based technology and business services firm serving
              organizations across the country.
            </p>
            <Button to="/contact" size="lg" className="mt-8">
              Talk to our team
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Button>
          </AnimatedSection>
          <AnimatedSection delay={0.06}>
            <div className="overflow-hidden rounded-[1.75rem] shadow-soft">
              <img
                src="/images/corporate/about.jpg"
                alt="Modern professional workplace representing NRS Technologies"
                className="aspect-[5/4] w-full object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-nrs">
          <AnimatedSection>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <SectionHeading eyebrow="Who We Are" title="A different approach to technology work" />
              <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
                <p>
                  Most organizations do not struggle with technology simply because they selected the
                  wrong product. Challenges often emerge when strategy, governance, security, and
                  implementation are treated as separate responsibilities.
                </p>
                <p>NRS was established around a different approach.</p>
                <p>
                  We work across those boundaries to help leadership teams identify priorities,
                  design responsible governance, strengthen security, implement practical solutions,
                  and build the internal capability needed to sustain results.
                </p>
                <p>
                  Our focus is not technology for its own sake. It is technology that delivers
                  meaningful business outcomes.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-nrs">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Our Core Values"
              title="Principles that guide every engagement"
            />
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {coreValues.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={value.title}
                    className={cn(
                      'rounded-[1.5rem] border border-border bg-white p-6 shadow-card sm:p-7',
                      index === 0 && 'md:col-span-2 md:bg-gradient-soft',
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-light text-blue-corporate">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-ink">{value.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-nrs">
          <div className="grid gap-8 lg:grid-cols-2">
            <AnimatedSection>
              <article className="h-full rounded-[2rem] border border-border bg-white p-8 shadow-card sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-corporate">
                  Our Mission
                </p>
                <h2 className="mt-3 font-heading text-2xl font-bold text-ink sm:text-3xl">
                  We help organizations convert technology investment into business performance.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                  We measure our success by whether our clients are stronger after we leave than they
                  were before we arrived.
                </p>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <article className="h-full overflow-hidden rounded-[2rem] bg-navy-deep p-8 text-white sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-sky">
                  Our Vision
                </p>
                <h2 className="mt-3 font-heading text-2xl font-bold sm:text-3xl">
                  {company.vision}
                </h2>
                <ul className="mt-8 space-y-5">
                  {visionPillars.map((pillar, index) => (
                    <li key={pillar.title} className="border-t border-white/15 pt-5">
                      <div className="flex items-baseline gap-3">
                        <span className="text-sm font-semibold text-blue-sky">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-heading text-xl font-bold">{pillar.title}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-white/75">
                        {pillar.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-pad bg-gradient-soft">
        <div className="container-nrs">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                eyebrow="Our Commitment"
                title="Technology as a driver of competitiveness"
                description="We envision a future where Philippine and Asia-Pacific organizations treat technology not merely as a cost to manage but as a driver of resilience, productivity, and competitiveness."
                align="center"
              />
              <Button to="/services" variant="outline" size="lg" className="mt-8">
                Explore our services
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Let's talk about what you're trying to solve"
        description="Share the outcome you need. We will help you clarify priorities and the practical path forward."
        buttonLabel="Contact Us"
      />
    </>
  )
}
