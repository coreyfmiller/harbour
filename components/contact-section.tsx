'use client'

import { useState } from 'react'
import { Clock, Mail, MapPin, Phone, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const details = [
  { icon: MapPin, label: '123 Water Street, Saint Andrews, NB E5B 1A6' },
  { icon: Phone, label: '(506) 555-0142' },
  { icon: Mail, label: 'hello@harbourrealty.ca' },
  { icon: Clock, label: 'Mon–Sat, 9:00am – 6:00pm AST' },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Get in Touch
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-primary md:text-4xl">
            Let&apos;s find your place on the coast
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Thinking of buying or selling in Saint Andrews? Reach out for a no-obligation
            conversation about your goals — we&apos;d love to help.
          </p>

          <ul className="mt-8 space-y-4">
            {details.map((d) => (
              <li key={d.label} className="flex items-center gap-3 text-foreground/90">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <d.icon className="h-5 w-5" />
                </span>
                {d.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm md:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Check className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-primary">
                Message sent
              </h3>
              <p className="mt-2 text-muted-foreground">
                Thank you for reaching out. A member of our team will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First name" name="firstName" />
                <Field label="Last name" name="lastName" />
              </div>
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" required={false} />
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
                  placeholder="Tell us about the property you're looking for or selling..."
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required = true,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  )
}
