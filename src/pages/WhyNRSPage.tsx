import {
  Compass,
  GitBranch,
  Layers,
  Shield,
  Target,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SEO } from '@/components/seo/SEO'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CTASection } from '@/components/ui/CTASection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { company } from '@/data/company'
import { cn } from '@/lib/utils'

const reasons: {
  title: string
  description: string
  icon: LucideIcon
}[] = [
  {
    title: 'Practitioner-Led Expertise',
    description:
      'Clients work with professionals who understand the complexities of delivering technology and business initiatives in enterprise environments.',
    icon: Users,
  },
  {
    title: 'Strategy & Execution Under One Roof',
    description:
      'NRS connects advisory work to practical implementation, ensuring recommendations consider operational realities.',
    icon: GitBranch,
  },
  {
    title: 'Governance Built In',
    description:
      'Security, risk, responsibility, and accountability form part of the delivery approach.',
    icon: Shield,
  },
  {
    title: 'Right-Sized for the Market',
    description:
      'Enterprise thinking and disciplined standards adapted to the scale and needs of growing organizations.',
    icon: Layers,
  },
  {
    title: 'Outcomes Over Activity',
    description:
      'Engagements are guided by agreed objectives and meaningful business improvements.',
    icon: Target,
  },
  {
    title: 'Capability Transfer',
    description:
      'Internal teams are supported in developing the knowledge and ownership needed for sustainable progress.',
    icon: Compass,
  },
]

const connections = [
  'A cybersecurity issue can reveal governance weaknesses.',
  'A failed project can indicate unrealistic strategic planning.',
  'An automation initiative can expose inefficient processes.',
  'An AI implementation can struggle without reliable data, oversight, and organizational readiness.',
]

const valuePillars = [
  {
    title: 'Measurable Business Outcomes',
    description:
      'Engagements are shaped around agreed objectives and meaningful improvements, not activity for its own sake.',
  },
  {
    title: 'Security Built In by Default',
    description:
      'Risk, privacy, and accountability are considered throughout delivery rather than added at the end.',
  },
  {
    title: 'Capability Transfer to Your Team',
    description:
      'Knowledge and ownership stay with your organization so progress can continue after we leave.',
  },
]

const journey = [
  {
    step: '01',
    title: 'Consult',
    description: 'Clarify goals, constraints, and the outcomes that matter most.',
  },
  {
    step: '02',
    title: 'Assess',
    description: 'Understand current capabilities, risks, and connected challenges.',
  },
  {
    step: '03',
    title: 'Plan',
    description: 'Define priorities, sequencing, governance, and success criteria.',
  },
  {
    step: '04',
    title: 'Implement',
    description: 'Support disciplined execution with clear ownership.',
  },
  {
    step: '05',
    title: 'Enable',
    description: 'Transfer capability so internal teams can sustain progress.',
  },
]

export function WhyNRSPage() {
  return (
    <>
      <SEO
        title="Why NRS"
        description="Trusted technology decisions require practical expertise, clear governance, and disciplined implementation. Learn why organizations choose NRS Technologies."
        path="/why-nrs"
      />

      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="container-nrs section-pad grid items-center gap-10 lg:grid-cols-2">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-corporate">
              Why Choose NRS
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Technology that moves organizations forward
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Trusted technology decisions require more than recommendations. They require practical
              expertise, clear governance, and disciplined implementation.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.06}>
            <div className="overflow-hidden rounded-[1.75rem] shadow-soft">
              <img
                src="/images/corporate/why-nrs-hero.jpg"
                alt="Business professionals collaborating on technology strategy"
                className="aspect-[5/4] w-full object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-nrs">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Why organizations choose NRS"
              title="Practical expertise. Accountable execution."
            />
          </AnimatedSection>

          <div className="mt-12 space-y-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              const reverse = index % 2 === 1
              return (
                <AnimatedSection key={reason.title} delay={index * 0.03}>
                  <article
                    className={cn(
                      'grid overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-card lg:grid-cols-[0.35fr_1fr]',
                      reverse && 'lg:grid-cols-[1fr_0.35fr] lg:[&>*:first-child]:order-2',
                    )}
                  >
                    <div className="flex flex-col justify-between bg-navy-deep p-6 text-white sm:p-8">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-blue-sky">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="mt-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-sky">
                          Reason {String(index + 1).padStart(2, '0')}
                        </p>
                        <h3 className="mt-2 font-heading text-2xl font-bold">{reason.title}</h3>
                      </div>
                    </div>
                    <div className="flex items-center p-6 sm:p-8 lg:p-10">
                      <p className="text-base leading-relaxed text-muted sm:text-lg">
                        {reason.description}
                      </p>
                    </div>
                  </article>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy-deep text-white">
        <div className="container-nrs">
          <AnimatedSection>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-sky">
                  Connected challenges
                </p>
                <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
                  Addressing the Whole Picture
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/80">
                  NRS helps organizations consider these connected challenges as a whole.
                </p>
              </div>
              <ul className="space-y-4">
                {connections.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-base leading-relaxed text-white/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-nrs">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Business Value Pillars"
              title="What lasting performance looks like"
              align="center"
              className="mb-12"
            />
            <div className="grid gap-5 md:grid-cols-3">
              {valuePillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className="relative overflow-hidden rounded-[1.5rem] border border-border bg-white p-7 shadow-card"
                >
                  <span className="font-heading text-4xl font-bold text-blue-light">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold text-ink">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-nrs">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Engagement Journey"
              title="A representative path from conversation to capability"
              description="The exact path depends on your requirements."
              align="center"
              className="mb-12"
            />

            <div className="relative hidden lg:block">
              <div
                className="absolute left-[10%] right-[10%] top-8 h-px bg-gradient-to-r from-blue-corporate via-blue-electric to-blue-sky"
                aria-hidden
              />
              <ol className="relative grid grid-cols-5 gap-4">
                {journey.map((item) => (
                  <li key={item.title} className="relative px-2 text-center">
                    <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-blue-corporate font-heading text-sm font-bold text-white shadow-soft">
                      {item.step}
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="relative lg:hidden">
              <div
                className="absolute bottom-4 left-[1.35rem] top-4 w-px bg-gradient-to-b from-blue-corporate via-blue-electric to-blue-sky"
                aria-hidden
              />
              <ol className="relative space-y-0">
                {journey.map((item) => (
                  <li key={item.title} className="relative flex gap-5 pb-8 last:pb-0">
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-corporate font-heading text-xs font-bold text-white shadow-card">
                      {item.step}
                    </div>
                    <div className="pt-1">
                      <h3 className="font-heading text-lg font-bold text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Your next move deserves a clear strategy."
        description={`${company.tagline}. Tell us what you are trying to solve and we will help you shape a practical starting point.`}
        buttonLabel="Start a Conversation"
      />
    </>
  )
}
