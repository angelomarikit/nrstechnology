import { ArrowUpRight, Home, Mail } from 'lucide-react'
import { SEO } from '@/components/seo/SEO'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { company } from '@/data/company'

export function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description={`The page you requested could not be found. Return to ${company.brandName} or contact our team for assistance.`}
        path="/404"
      />

      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-gradient-soft radial-glow">
        <div className="container-nrs py-20">
          <AnimatedSection>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-corporate">
                {company.brandName}
              </p>
              <p className="mt-6 font-heading text-7xl font-bold text-gradient-brand sm:text-8xl">
                404
              </p>
              <h1 className="mt-4 font-heading text-3xl font-bold text-ink sm:text-4xl">
                This page could not be found
              </h1>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                The link may be outdated, or the page may have moved. Head back to the homepage or
                contact our team — we are ready to help with your next move.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button to="/" size="lg">
                  <Home className="h-4 w-4" aria-hidden />
                  Back to home
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  <Mail className="h-4 w-4" aria-hidden />
                  Contact us
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>
              <p className="mt-10 text-sm font-semibold uppercase tracking-[0.16em] text-blue-corporate">
                {company.tagline}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
