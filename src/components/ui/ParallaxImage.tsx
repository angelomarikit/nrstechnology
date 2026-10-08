import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  /** Total vertical travel in px across the section (background moves this far while the frame scrolls normally). */
  intensity?: number
  priority?: boolean
}

/**
 * Classic parallax: the image layer moves slower than the surrounding page,
 * so background and foreground travel at different speeds while scrolling.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  intensity = 160,
  priority = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Background drifts opposite to scroll direction relative to the frame → lag effect
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-(intensity / 2), intensity / 2],
  )

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <motion.div className="absolute inset-0 will-change-transform" style={{ y }}>
        <img
          src={src}
          alt={alt}
          className={cn(
            'absolute left-0 top-[-20%] h-[140%] w-full max-w-none object-cover',
            imgClassName,
          )}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : undefined}
        />
      </motion.div>
    </div>
  )
}
