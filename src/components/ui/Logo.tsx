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
      className={cn(
        'inline-flex shrink-0 items-center overflow-visible focus-visible:outline-none',
        className,
      )}
      aria-label={`${company.brandName} home`}
    >
      <img
        src={company.logo.src}
        alt={company.logo.alt}
        width={company.logo.width}
        height={company.logo.height}
        className={cn(
          'block h-auto w-auto max-w-full bg-transparent object-contain object-left',
          compact
            ? 'w-[14rem] sm:w-[16.5rem] lg:w-[18rem]'
            : 'w-[15rem] sm:w-[17rem]',
        )}
        decoding="async"
      />
    </Link>
  )
}
