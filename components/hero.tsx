import Image from "next/image"
import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative w-full">
        <Image
          src="/images/hero.png"
          alt="Harbour Realty , a coastal shingle-style home overlooking the harbour in Saint Andrews, New Brunswick at sunset"
          className="h-auto w-full object-cover"
          width={1728}
          height={912}
          priority
        />
      </div>

      <div className="border-b border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-sm font-medium tracking-wide text-accent">
              <MapPin className="h-4 w-4" />
              Saint Andrews by-the-Sea, New Brunswick
            </p>
            <h1 className="mt-2 text-balance font-serif text-3xl font-semibold leading-tight md:text-4xl">
              Coastal homes, sold with local expertise.
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<a href="#listings" />}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Browse Listings
            </Button>
            <Button
              nativeButton={false}
              render={<a href="#contact" />}
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              Sell Your Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
