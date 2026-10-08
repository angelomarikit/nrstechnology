import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react'
import { HomeHero } from '@/components/home/HomeHero'
import { HomeServices } from '@/components/home/HomeServices'
import { WholePicture } from '@/components/home/WholePicture'
import { SEO } from '@/components/seo/SEO'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/ui/CTASection'
import { ParallaxImage } from '@/components/ui/ParallaxImage'
import { SectionHeading } from '@/components/ui/SectionHeading'

const pillars = [
  {
    title: 'Assess & Plan',
    description:
      'Understand organizational goals, operational challenges, technology readiness, and risk.',
  },
  {
    title: 'Secure & Implement',
    description:
      'Translate priorities into practical solutions with security, governance, and accountability considered from the beginning.',
  },
  {
    title: 'Enable & Sustain',
    description:
      'Strengthen internal capabilities so improvements can continue delivering value beyond the initial engagement.',
  },
]

const reasons = [
  {
    title: 'Practitioner-Led Expertise',
    description:
      'Engagements are guided by experienced professionals with practical enterprise delivery knowledge.',
    icon: Users,
  },
  {
    title: 'Strategy and Execution Under One Roof',
    description:
      'Advisory recommendations are informed by what can realistically be implemented.',
    icon: Target,
  },
  {
    title: 'Governance Built In',
    description: 'Risk, accountability, and security are considered throughout the work.',
    icon: ShieldCheck,
  },
  {
    title: 'Right-Sized Solutions',
    description:
      'Enterprise-grade thinking tailored to the needs and operating realities of growing organizations.',
    icon: Layers3,
  },
]

const stages = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand goals, challenges, and current capabilities.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Define practical solutions, risks, priorities, and success criteria.',
  },
  {
    step: '03',
    title: 'Deliver',
    description: 'Support implementation with appropriate oversight.',
  },
  {
    step: '04',
    title: 'Enable',
    description: 'Transfer knowledge and strengthen long-term internal capabilities.',
  },
]

export function HomePage() {
  return (
    <>
      <SEO
        title="NRS Technologies | Powering Your Next Move"
        description="Philippine-based technology consultancy for cybersecurity, managed services, AI consulting, strategic planning, and digital transformation."
        path="/"
      />

      <HomeHero />

      {/* Approach */}
      <section className="section-pad bg-white">
        <div className="container-nrs">
          <AnimatedSection>
            <SectionHeading
              eyebrow="The NRS Approach"
              title="From strategy to secure execution"
              description="Technology investments create lasting value when strategy, governance, security, and delivery work together."
            />
          </AnimatedSection>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} delay={index * 0.05}>
                <article className="h-full rounded-3xl border border-border bg-surface p-7">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-light text-sm font-bold text-blue-corporate">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {pillar.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <HomeServices />

      <WholePicture />

      {/* Why NRS */}
      <section className="section-pad bg-gradient-soft">
        <div className="container-nrs">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <AnimatedSection>
              <ParallaxImage
                src="/images/home/why-expertise.jpg"
                alt="Professional team collaborating on technology and business initiatives"
                className="aspect-[4/5] rounded-[1.75rem] shadow-soft"
                intensity={200}
              />
            </AnimatedSection>
            <div>
              <AnimatedSection>
                <SectionHeading
                  eyebrow="Why organizations choose NRS"
                  title="Practical expertise. Accountable execution."
                />
              </AnimatedSection>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {reasons.map((reason, index) => {
                  const Icon = reason.icon
                  return (
                    <AnimatedSection key={reason.title} delay={index * 0.04}>
                      <article className="h-full rounded-2xl border border-border bg-white p-5">
                        <Icon className="h-5 w-5 text-blue-corporate" aria-hidden />
                        <h3 className="mt-3 text-base font-bold text-ink">{reason.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {reason.description}
                        </p>
                      </article>
                    </AnimatedSection>
                  )
                })}
              </div>
              <AnimatedSection className="mt-6">
                <Button to="/why-nrs" variant="outline">
                  Why choose NRS
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section-pad bg-white">
        <div className="container-nrs">
          <AnimatedSection>
            <SectionHeading
              title="A disciplined path from challenge to outcome"
              description="A representative approach — not a fixed process for every engagement."
            />
          </AnimatedSection>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stages.map((stage, index) => (
              <AnimatedSection key={stage.title} delay={index * 0.05}>
                <article className="relative h-full rounded-3xl border border-border p-6">
                  <p className="text-sm font-bold text-blue-sky">{stage.step}</p>
                  <h3 className="mt-3 text-xl font-bold text-ink">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{stage.description}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission with subtle parallax backdrop */}
      <section className="relative isolate overflow-hidden section-pad">
        <ParallaxImage
          src="/images/home/hero-office.jpg"
          alt=""
          className="absolute inset-0 -z-20 opacity-35"
          intensity={160}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-soft" aria-hidden />
        <div className="container-nrs">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-navy-midnight/95 px-8 py-14 text-center text-white shadow-soft sm:px-12">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(84,185,245,0.25),transparent_45%)]"
                aria-hidden
              />
              <div className="relative mx-auto max-w-3xl">
                <CheckCircle2 className="mx-auto h-8 w-8 text-blue-sky" aria-hidden />
                <h2 className="mt-5 font-heading text-3xl font-bold sm:text-4xl">
                  Our success is measured by your progress
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                  We help organizations convert technology investment into business performance. We
                  measure our success by whether our clients are stronger after we leave than they
                  were before we arrived.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Let's talk about what you're trying to solve"
        description="Whether you're strengthening cybersecurity, exploring AI, improving IT operations, or planning your next strategic initiative, start with a conversation."
        buttonLabel="Contact NRS Technologies"
      />
    </>
  )
}
