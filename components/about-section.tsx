import { Award, Home, Users } from 'lucide-react'

const stats = [
  { value: '20+', label: 'Years serving the Bay of Fundy region' },
  { value: '450+', label: 'Coastal homes sold' },
  { value: '$310M', label: 'In career sales volume' },
]

const points = [
  {
    icon: Home,
    title: 'Deep local roots',
    text: 'We live and work in Saint Andrews. From Water Street to Indian Point, we know every neighbourhood, tide, and view.',
  },
  {
    icon: Users,
    title: 'A boutique approach',
    text: 'You work directly with a dedicated agent — no call centres, no handoffs. Just attentive, personal service.',
  },
  {
    icon: Award,
    title: 'Proven results',
    text: 'Our listings sell faster and closer to asking than the regional average, backed by two decades of experience.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              About Harbour Realty
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-primary md:text-4xl">
              Local expertise. Exceptional results.
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Harbour Realty is a boutique brokerage rooted in the historic seaside
              town of Saint Andrews by-the-Sea. Whether you are searching for a
              waterfront retreat, a heritage home in town, or the right buyer for a
              cherished property, our team pairs genuine local knowledge with
              modern, marketing-driven results.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-accent pl-4">
                  <p className="font-serif text-3xl font-semibold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {points.map((point) => (
              <div
                key={point.title}
                className="flex gap-4 rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <point.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
