import { Link } from 'react-router-dom'
import { company } from '@/data/company'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  compact?: boolean
}

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn('inline-flex items-center gap-3 rounded-md focus-visible:outline-none', className)}
      aria-label={`${company.brandName} home`}
    >
      <img
        src={company.logo.src}
        alt={company.logo.alt}
        width={compact ? 140 : company.logo.width}
        height={compact ? 56 : company.logo.height}
        className={cn(
          'h-auto object-contain',
          compact ? 'w-[7.5rem] sm:w-[8.5rem]' : 'w-[9rem] sm:w-[10.5rem]',
        )}
        decoding="async"
      />
    </Link>
  )
}
