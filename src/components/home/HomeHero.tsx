import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Button } from '@/components/ui/Button'

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  // Drive parallax from actual page scroll so it is obvious from the first pixels
  const { scrollY } = useScroll()

  /**
   * Classic parallax on the hero:
   * - Text/buttons stay in normal document flow (full scroll speed)
   * - Far background moves ~40% of scroll distance → clear lag
   * - Mid accent layer moves ~65% → second visible speed difference
   */
  const farY = useTransform(scrollY, [0, 700], reduceMotion ? [0, 0] : [0, 280])
  const midY = useTransform(scrollY, [0, 700], reduceMotion ? [0, 0] : [0, 160])
  const farScale = useTransform(scrollY, [0, 700], reduceMotion ? [1.15, 1.15] : [1.18, 1.05])

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[min(100vh,62rem)] overflow-hidden bg-navy-midnight text-white"
    >
      {/* FAR BACKGROUND — slowest layer */}
      <motion.div
        className="absolute inset-x-0 -top-[20%] -z-30 h-[150%] w-full will-change-transform"
        style={{ y: farY, scale: farScale }}
      >
        <img
          src="/images/home/tech-cyber.jpg"
          alt="Cybersecurity and technology systems visual"
          className="h-full w-full object-cover object-center"
          width={2000}
          height={1400}
          fetchPriority="high"
        />
      </motion.div>

      {/* MID LAYER — architecture fades in as a second parallax plane */}
      <motion.div
        className="absolute inset-x-0 -top-[10%] -z-20 h-[130%] w-full will-change-transform opacity-55 mix-blend-luminosity"
        style={{ y: midY }}
        aria-hidden
      >
        <img
          src="/images/home/hero-architecture.jpg"
          alt=""
          className="h-full w-full object-cover object-[75%_center]"
          loading="eager"
        />
      </motion.div>

      {/* Lighter veil so image movement stays readable */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(6,27,69,0.88)_0%,rgba(6,27,69,0.55)_42%,rgba(8,41,104,0.22)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-midnight/80 via-transparent to-navy-midnight/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-8%] top-[8%] h-[34rem] w-[34rem] rounded-full bg-blue-sky/30 blur-[100px]"
        aria-hidden
      />
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-20" aria-hidden />

      {/* FOREGROUND — normal scroll speed (this is what makes the lag obvious) */}
      <div className="container-nrs relative flex min-h-[min(100vh,62rem)] items-center pb-16 pt-28 sm:pb-20 lg:pb-24 lg:pt-24">
        <div className="relative z-10 w-full max-w-2xl lg:max-w-[40rem] xl:max-w-3xl">
          <motion.div
            className="mb-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-blue-sky to-blue-electric"
            initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
            aria-hidden
          />

          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-sky sm:text-[0.8rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            NRS Technologies & Business Solutions Corporation
          </motion.p>

          <motion.h1
            className="mt-5 font-heading text-[2.6rem] font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[4.35rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
          >
            Powering Your{' '}
            <span className="bg-gradient-to-r from-[#7ec8f5] via-[#b8e4ff] to-white bg-clip-text text-transparent">
              Next Move
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-white/92 sm:text-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease: 'easeOut' }}
          >
            Secure your operations. Modernize your technology. Turn your strategy into measurable
            business performance.
          </motion.p>

          <motion.p
            className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.14, ease: 'easeOut' }}
          >
            NRS Technologies helps organizations connect strategy, governance, security, and
            execution through practical technology and business solutions.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2, ease: 'easeOut' }}
          >
            <Button to="/services" size="lg" variant="white" className="shadow-soft">
              Explore Our Services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              to="/contact"
              size="lg"
              className="border border-white/40 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md hover:bg-white/20"
            >
              Talk to Our Team
            </Button>
          </motion.div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent"
        aria-hidden
      />
    </section>
  )
}
