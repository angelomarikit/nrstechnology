import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'mb-3 text-xs font-semibold uppercase tracking-[0.18em]',
            light ? 'text-blue-sky' : 'text-blue-corporate',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]',
          light ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            light ? 'text-white/80' : 'text-muted',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
