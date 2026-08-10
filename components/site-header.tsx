'use client'

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Listings', href: '#listings' },
  { label: 'About', href: '#about' },
  { label: 'Our Team', href: '#team' },
  { label: 'Saint Andrews', href: '#town' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#top" aria-label="Harbour Realty home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+15065550142"
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
          >
            <Phone className="h-4 w-4" />
            {'(506) 555-0142'}
          </a>
          <Button
            nativeButton={false}
            render={<a href="#contact" />}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Book a Consultation
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-border/60 bg-background lg:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-0',
        )}
        style={{ transition: 'max-height 0.3s ease' }}
      >
        <nav className="flex flex-col px-4 py-2" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/40 py-3 text-sm font-medium text-foreground/80"
            >
              {link.label}
            </a>
          ))}
          <Button
            nativeButton={false}
            render={<a href="#contact" onClick={() => setOpen(false)} />}
            className="my-4 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Book a Consultation
          </Button>
        </nav>
      </div>
    </header>
  )
}
