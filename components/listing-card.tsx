import { Bath, BedDouble, Maximize } from 'lucide-react'
import type { Listing } from '@/lib/listings'
import { cn } from '@/lib/utils'

const statusStyles: Record<Listing['status'], string> = {
  New: 'bg-accent text-accent-foreground',
  'For Sale': 'bg-primary text-primary-foreground',
  Pending: 'bg-muted text-muted-foreground',
}

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="relative overflow-hidden">
        <img
          src={listing.image || '/placeholder.svg'}
          alt={`${listing.title} at ${listing.address}`}
          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={cn(
            'absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold tracking-wide',
            statusStyles[listing.status],
          )}
        >
          {listing.status}
        </span>
      </div>

      <div className="p-5">
        <p className="font-serif text-2xl font-semibold text-primary">{listing.price}</p>
        <h3 className="mt-1 text-lg font-semibold text-foreground">{listing.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{listing.address}</p>

        <div className="mt-4 flex items-center gap-5 border-t border-border pt-4 text-sm text-foreground/80">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-accent" />
            {listing.beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-accent" />
            {listing.baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="h-4 w-4 text-accent" />
            {listing.sqft} sqft
          </span>
        </div>
      </div>
    </article>
  )
}
