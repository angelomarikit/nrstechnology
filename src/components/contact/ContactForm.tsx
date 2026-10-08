import { useState } from 'react'
import { company } from '@/data/company'
import { serviceInterestOptions } from '@/data/services'
import { encodeMailto } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

interface FormState {
  fullName: string
  companyName: string
  email: string
  phone: string
  service: string
  message: string
  consent: boolean
}

interface FormErrors {
  fullName?: string
  companyName?: string
  email?: string
  service?: string
  message?: string
  consent?: string
}

const initialState: FormState = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  consent: false,
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.fullName.trim()) errors.fullName = 'Full name is required.'
  if (!values.companyName.trim()) errors.companyName = 'Company name is required.'
  if (!values.email.trim()) {
    errors.email = 'Business email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.service) errors.service = 'Select a service of interest.'
  if (!values.message.trim()) errors.message = 'Please share a brief message.'
  if (!values.consent) errors.consent = 'Consent is required to continue.'
  return errors
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [attempted, setAttempted] = useState(false)

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setAttempted(true)
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const serviceLabel =
      serviceInterestOptions.find((option) => option.value === values.service)?.label ??
      values.service

    const body = [
      `Full Name: ${values.fullName}`,
      `Company: ${values.companyName}`,
      `Business Email: ${values.email}`,
      `Phone: ${values.phone || 'Not provided'}`,
      `Service of Interest: ${serviceLabel}`,
      '',
      'Message:',
      values.message,
    ].join('\n')

    const mailto = encodeMailto(
      company.email,
      `Inquiry from ${values.fullName} — ${serviceLabel}`,
      body,
    )

    window.location.href = mailto
  }

  const fieldClass =
    'mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-corporate focus:ring-2 focus:ring-blue-sky/30'

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[1.75rem] border border-border bg-white p-6 shadow-card sm:p-8"
    >
      <div className="mb-6">
        <h2 className="font-heading text-2xl font-bold text-ink">Send an inquiry</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          This form prepares an email draft addressed to {company.email}. Submitting opens your
          email application — you still need to send the message. A delivery provider can be
          connected later without changing this interface.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="fullName" className="text-sm font-semibold text-ink">
            Full Name <span className="text-blue-corporate">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            className={fieldClass}
            value={values.fullName}
            onChange={(event) => update('fullName', event.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName ? (
            <p id="fullName-error" className="mt-1.5 text-sm text-red-600">
              {errors.fullName}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="companyName" className="text-sm font-semibold text-ink">
            Company Name <span className="text-blue-corporate">*</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            autoComplete="organization"
            className={fieldClass}
            value={values.companyName}
            onChange={(event) => update('companyName', event.target.value)}
            aria-invalid={Boolean(errors.companyName)}
            aria-describedby={errors.companyName ? 'companyName-error' : undefined}
          />
          {errors.companyName ? (
            <p id="companyName-error" className="mt-1.5 text-sm text-red-600">
              {errors.companyName}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-ink">
            Business Email <span className="text-blue-corporate">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            value={values.email}
            onChange={(event) => update('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-sm text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-ink">
            Phone Number <span className="text-muted">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            value={values.phone}
            onChange={(event) => update('phone', event.target.value)}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className="text-sm font-semibold text-ink">
            Service of Interest <span className="text-blue-corporate">*</span>
          </label>
          <select
            id="service"
            name="service"
            className={fieldClass}
            value={values.service}
            onChange={(event) => update('service', event.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? 'service-error' : undefined}
          >
            <option value="">Select a service</option>
            {serviceInterestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p id="service-error" className="mt-1.5 text-sm text-red-600">
              {errors.service}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-ink">
            Message <span className="text-blue-corporate">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={fieldClass}
            value={values.message}
            onChange={(event) => update('message', event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message ? (
            <p id="message-error" className="mt-1.5 text-sm text-red-600">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label className="flex items-start gap-3 text-sm text-ink">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-border text-blue-corporate focus:ring-blue-sky"
            checked={values.consent}
            onChange={(event) => update('consent', event.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
          />
          <span>
            I understand this inquiry will open my email application so I can send the message to
            NRS Technologies. <span className="text-blue-corporate">*</span>
          </span>
        </label>
        {errors.consent ? (
          <p id="consent-error" className="mt-1.5 text-sm text-red-600">
            {errors.consent}
          </p>
        ) : null}
      </div>

      {attempted && Object.keys(errors).length > 0 ? (
        <p className="mt-4 text-sm text-red-600" role="alert">
          Please correct the highlighted fields before continuing.
        </p>
      ) : null}

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        Open Email Draft
      </Button>
    </form>
  )
}
