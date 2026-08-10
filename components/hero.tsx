import Image from "next/image"
import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative w-full">
        <Image
          src="/images/hero.png"
          alt="Harbour Realty, a coastal shingle-style home overlooking the harbour in Saint Andrews, New Brunswick at sunset"
          className="h-auto w-full object-cover"
          width={1728}
          height={912}
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a2332]/80 via-transparent to-transparent" />

        {/* Overlay CTA at bottom of hero */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 pb-8 md:flex-row md:items-end md:justify-between md:px-6 md:pb-12">
            <div className="max-w-xl">
              <p className="flex items-center gap-2 text-sm font-medium tracking-wide text-amber-300">
                <MapPin className="h-4 w-4" />
                Saint Andrews by-the-Sea, New Brunswick
              </p>
              <h1 className="mt-2 text-balance font-serif text-2xl font-semibold leading-tight text-white md:text-4xl">
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
                className="border-white/40 bg-black/20 text-white backdrop-blur-sm hover:bg-white/10"
              >
                Sell Your Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
