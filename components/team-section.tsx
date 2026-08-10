import { Mail, Phone } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const agents = [
  {
    name: 'Margaret Doyle',
    role: 'Broker / Owner',
    image: '/images/agent-1.png',
    phone: '(506) 555-0142',
    email: 'margaret@harbourrealty.ca',
  },
  {
    name: 'William Carr',
    role: 'Senior Sales Associate',
    image: '/images/agent-2.png',
    phone: '(506) 555-0188',
    email: 'william@harbourrealty.ca',
  },
  {
    name: 'Ellen Vance',
    role: 'Waterfront Specialist',
    image: '/images/agent-3.png',
    phone: '(506) 555-0119',
    email: 'ellen@harbourrealty.ca',
  },
]

export function TeamSection() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <SectionHeading
        eyebrow="Our Team"
        title="Agents who know these shores"
        description="Meet the people behind Harbour Realty — dedicated professionals who call Saint Andrews home."
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className="overflow-hidden rounded-lg border border-border bg-card shadow-sm"
          >
            <img
              src={agent.image || '/placeholder.svg'}
              alt={`Portrait of ${agent.name}`}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-serif text-xl font-semibold text-primary">
                {agent.name}
              </h3>
              <p className="text-sm font-medium tracking-wide text-accent">
                {agent.role}
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                <a
                  href={`tel:${agent.phone.replace(/[^\d+]/g, '')}`}
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4" />
                  {agent.phone}
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4" />
                  {agent.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
