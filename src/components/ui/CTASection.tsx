import { ArrowUpRight } from 'lucide-react'
import { Button } from './Button'
import { AnimatedSection } from './AnimatedSection'

interface CTASectionProps {
  title: string
  description: string
  buttonLabel: string
  buttonTo?: string
}

export function CTASection({
  title,
  description,
  buttonLabel,
  buttonTo = '/contact',
}: CTASectionProps) {
  return (
    <section className="section-pad">
      <div className="container-nrs">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-cta px-8 py-12 text-white shadow-soft sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-sky/20 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl"
              aria-hidden
            />
            <div className="relative max-w-2xl">
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">{title}</h2>
              <p className="mt-4 text-base text-white/85 sm:text-lg">{description}</p>
              <Button to={buttonTo} variant="white" size="lg" className="mt-8">
                {buttonLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
