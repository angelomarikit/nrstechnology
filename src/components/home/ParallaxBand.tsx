import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'

interface ParallaxBandProps {
  image: string
  imageAlt: string
  children: ReactNode
}

/**
 * Full-bleed band: foreground copy stays in normal document flow;
 * background image scrolls slower (true parallax lag).
 */
export function ParallaxBand({ image, imageAlt, children }: ParallaxBandProps) {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // ~220px of background travel while the section crosses the viewport
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-110, 110],
  )

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-navy-midnight text-white">
      <motion.div
        className="absolute inset-x-0 -top-[18%] -z-20 h-[136%] w-full will-change-transform"
        style={{ y: backgroundY }}
      >
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-midnight/90 via-navy-deep/72 to-navy-midnight/45"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_40%,rgba(84,185,245,0.2),transparent_45%)]"
        aria-hidden
      />

      {/* Foreground — no transform, scrolls at normal page speed */}
      <div className="container-nrs relative section-pad">{children}</div>
    </section>
  )
}
