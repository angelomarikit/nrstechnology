import { AnimatedSection } from '@/components/ui/AnimatedSection'

const intersections = [
  { label: 'Strategy', detail: 'Clear priorities and investment direction' },
  { label: 'Governance', detail: 'Accountability, risk, and decision rights' },
  { label: 'Security', detail: 'Controls designed into delivery' },
  { label: 'Execution', detail: 'Disciplined implementation oversight' },
  { label: 'People & Capability', detail: 'Teams prepared to sustain progress' },
]

/**
 * Editorial continuum — how the five domains connect.
 * Avoids stacked glass cards in favor of a readable linked sequence.
 */
export function WholePicture() {
  return (
    <section className="bg-surface">
      <div className="container-nrs section-pad">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-corporate">
              The whole picture
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Technology challenges rarely exist in isolation
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              A security gap is often connected to a governance gap. A delayed project may reveal a
              strategy that was never translated into an executable roadmap. A new technology
              investment may fail without the processes and people needed to sustain it.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              NRS works across these intersections to help organizations address underlying business
              challenges rather than isolated symptoms.
            </p>
          </div>
        </AnimatedSection>

        {/* Connected continuum */}
        <AnimatedSection className="mt-14" delay={0.06}>
          <div className="relative">
            {/* Desktop connector line */}
            <div
              className="pointer-events-none absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-transparent via-blue-corporate/35 to-transparent lg:block"
              aria-hidden
            />

            <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {intersections.map((item, index) => (
                <li key={item.label} className="relative text-center lg:text-left">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-blue-light bg-white font-heading text-sm font-bold text-blue-corporate shadow-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-bold text-ink">{item.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
                  </div>

                  {/* Mobile/tablet connector between items */}
                  {index < intersections.length - 1 ? (
                    <div
                      className="mx-auto mt-8 h-8 w-px bg-border sm:hidden"
                      aria-hidden
                    />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>

        {/* Closing statement bar */}
        <AnimatedSection className="mt-14" delay={0.1}>
          <div className="rounded-2xl bg-navy-deep px-8 py-8 text-center sm:px-12">
            <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-white/90 sm:text-lg">
              Strategy, governance, security, execution, and capability reinforce each other — that
              is where lasting technology value is created.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
