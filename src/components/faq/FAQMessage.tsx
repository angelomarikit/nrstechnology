import { cn } from '@/lib/utils'

interface FAQMessageProps {
  role: 'assistant' | 'user'
  children: React.ReactNode
}

export function FAQMessage({ role, children }: FAQMessageProps) {
  return (
    <div
      className={cn('flex', role === 'user' ? 'justify-end' : 'justify-start')}
    >
      <div
        className={cn(
          'max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed',
          role === 'user'
            ? 'rounded-br-md bg-blue-corporate text-white'
            : 'rounded-bl-md bg-surface text-ink',
        )}
      >
        {children}
      </div>
    </div>
  )
}
