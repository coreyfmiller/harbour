import { listings } from '@/lib/listings'
import { ListingCard } from '@/components/listing-card'
import { SectionHeading } from '@/components/section-heading'

export function FeaturedListings() {
  return (
    <section id="listings" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <SectionHeading
        eyebrow="Featured Properties"
        title="Homes on the harbour"
        description="A curated selection of coastal properties currently available in and around Saint Andrews."
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  )
}
