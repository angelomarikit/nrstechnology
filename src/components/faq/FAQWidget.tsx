import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Mail, MessageCircle, Phone, Send, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { company } from '@/data/company'
import {
  faqFallback,
  faqIntro,
  faqSuggestions,
  getRelatedFaq,
  matchFaq,
} from '@/data/faq'
import { cn } from '@/lib/utils'
import { FAQMessage } from './FAQMessage'
import { FAQSuggestions } from './FAQSuggestions'

interface ChatItem {
  id: string
  role: 'assistant' | 'user'
  content: React.ReactNode
}

export function FAQWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatItem[]>([
    { id: 'intro', role: 'assistant', content: faqIntro },
  ])
  const listRef = useRef<HTMLDivElement>(null)
  const latestMessageRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const titleId = useId()
  const reduceMotion = useReducedMotion()
  const showStarterSuggestions = messages.length <= 1

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    if (open) window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    if (!open || !listRef.current || !latestMessageRef.current) return
    const list = listRef.current
    const latest = latestMessageRef.current
    // Scroll the transcript pane so the newest message (answer) starts near the top
    list.scrollTo({
      top: Math.max(0, latest.offsetTop - 12),
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }, [messages, open, reduceMotion])

  const respond = (question: string) => {
    const trimmed = question.trim()
    if (!trimmed) return

    const match = matchFaq(trimmed)
    const related = match ? getRelatedFaq(match) : []

    setMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, role: 'user', content: trimmed },
      {
        id: `a-${Date.now()}`,
        role: 'assistant',
        content: match ? (
          <div className="space-y-3">
            <p>{match.answer}</p>
            {related.length > 0 ? (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                  Related
                </p>
                <FAQSuggestions
                  suggestions={related.map((item) => item.question)}
                  onSelect={respond}
                />
              </div>
            ) : null}
          </div>
        ) : (
          <div className="space-y-3">
            <p>{faqFallback}</p>
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-navy-deep px-3 py-1.5 text-xs font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Contact Our Team
            </Link>
          </div>
        ),
      },
    ])
    setInput('')
  }

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    respond(input)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open ? (
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className={cn(
              'mb-3 flex w-[min(100vw-2rem,24rem)] flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-soft',
              'h-[min(36rem,calc(100vh-6.5rem))]',
            )}
          >
            <div className="bg-gradient-cta px-4 py-4 text-white">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 id={titleId} className="font-heading text-base font-bold">
                    NRS Support
                  </h2>
                  <p className="text-sm text-white/80">How can we help you?</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-white/15 p-2 transition hover:bg-white/25"
                  aria-label="Close support widget"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-3 flex gap-2">
                <a
                  href={`tel:${company.phoneTel}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium hover:bg-white/25"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden />
                  Call
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium hover:bg-white/25"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden />
                  Email
                </a>
              </div>
            </div>

            <div ref={listRef} className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  ref={index === messages.length - 1 ? latestMessageRef : undefined}
                >
                  <FAQMessage role={message.role}>{message.content}</FAQMessage>
                </div>
              ))}
              {showStarterSuggestions ? (
                <FAQSuggestions suggestions={faqSuggestions} onSelect={respond} />
              ) : null}
            </div>

            <form onSubmit={onSubmit} className="border-t border-border p-3">
              <label htmlFor="faq-input" className="sr-only">
                Ask a question
              </label>
              <div className="flex gap-2">
                <input
                  id="faq-input"
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Type a question..."
                  className="h-11 flex-1 rounded-full border border-border bg-surface px-4 text-sm outline-none transition focus:border-blue-corporate focus:bg-white"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-corporate text-white transition hover:bg-navy-deep"
                  aria-label="Send question"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-[11px] text-muted">
                Rule-based FAQ assistant — not live chat or AI support.
              </p>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="flex items-end gap-2.5">
        {!open ? (
          <p className="mb-1.5 max-w-[9.5rem] rounded-2xl rounded-br-md border border-border bg-white px-3 py-2 text-left text-[11px] font-medium leading-snug text-navy-deep shadow-card sm:max-w-[11rem] sm:text-xs">
            Have a question? Read our answers here!
          </p>
        ) : null}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy-deep via-blue-corporate to-blue-electric text-white shadow-soft transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-sky focus-visible:ring-offset-2"
          aria-expanded={open}
          aria-label={open ? 'Close NRS support' : 'Open NRS support — Have a question? Read our answers here!'}
        >
          {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        </button>
      </div>
    </div>
  )
}
