import { Slot } from '@radix-ui/react-slot'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'white'
type Size = 'sm' | 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-navy-deep via-blue-corporate to-blue-electric text-white shadow-soft hover:brightness-110',
  secondary:
    'bg-navy-deep text-white hover:bg-blue-corporate',
  ghost:
    'bg-transparent text-navy-deep hover:bg-blue-light',
  outline:
    'border border-blue-corporate/30 bg-white text-navy-deep hover:border-blue-corporate hover:bg-blue-light',
  white:
    'bg-white text-navy-deep hover:bg-blue-light',
}

const sizeClasses: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-5 text-sm sm:text-[15px]',
  lg: 'h-12 px-6 text-base',
}

interface ButtonBaseProps {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
  asChild?: boolean
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined }

type ButtonAsLink = ButtonBaseProps &
  Omit<LinkProps, 'className' | 'children'> & { href?: undefined }

type ButtonAsAnchor = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { to?: undefined; href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    className,
    children,
    asChild = false,
    ...rest
  } = props

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-electric focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if (asChild) {
    return (
      <Slot className={classes} {...(rest as React.HTMLAttributes<HTMLElement>)}>
        {children}
      </Slot>
    )
  }

  if ('to' in props && props.to) {
    const { to, ...linkRest } = rest as Omit<ButtonAsLink, keyof ButtonBaseProps>
    return (
      <Link to={to} className={classes} {...linkRest}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    const { href, ...anchorRest } = rest as Omit<ButtonAsAnchor, keyof ButtonBaseProps>
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
