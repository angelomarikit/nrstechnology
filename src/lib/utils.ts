import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function encodeMailto(
  email: string,
  subject: string,
  body: string,
): string {
  const params = new URLSearchParams({ subject, body })
  return `mailto:${email}?${params.toString().replace(/\+/g, '%20')}`
}
