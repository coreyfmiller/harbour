import { Logo } from '@/components/logo'

const columns = [
  {
    title: 'Explore',
    links: [
      { label: 'Listings', href: '#listings' },
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#team' },
      { label: 'Saint Andrews', href: '#town' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Buying', href: '#contact' },
      { label: 'Selling', href: '#contact' },
      { label: 'Home Valuation', href: '#contact' },
      { label: 'Consultation', href: '#contact' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Local expertise. Exceptional results. Harbour Realty is a boutique brokerage
              serving Saint Andrews and the Bay of Fundy region.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} Harbour Realty. All rights reserved.</p>
          <p>123 Water Street, Saint Andrews, NB · (506) 555-0142</p>
        </div>
      </div>
    </footer>
  )
}
