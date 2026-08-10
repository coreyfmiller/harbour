import { Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    quote:
      'Margaret sold our waterfront home in under three weeks and above asking. Her knowledge of the Saint Andrews market is unmatched.',
    name: 'The Fraser Family',
    detail: 'Sold on Water Street',
  },
  {
    quote:
      'As out-of-province buyers, we relied on Harbour Realty for everything. They made buying our summer cottage effortless and honest.',
    name: 'David & Lise Tremblay',
    detail: 'Purchased in Chamcook',
  },
  {
    quote:
      'Professional, warm, and always available. Ellen understood exactly what we wanted and found it before it ever hit the market.',
    name: 'Susan Whitfield',
    detail: 'Purchased near Indian Point',
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeading
          eyebrow="Client Stories"
          title="Trusted across the bay"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
                {`"${t.quote}"`}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-primary">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
