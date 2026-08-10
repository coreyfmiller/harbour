export function TownSection() {
  return (
    <section id="town" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Saint Andrews by-the-Sea
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold md:text-4xl">
            One of Canada&apos;s most beautiful seaside towns
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-primary-foreground/80">
            Perched on the Passamaquoddy Bay in the Bay of Fundy, Saint Andrews is a
            National Historic District known for its heritage architecture, whale-watching
            harbour, championship golf, and the world-famous Kingsbrae Garden. It is a
            place where the tides shape the day and neighbours still wave from the porch.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-4 text-sm">
            {[
              'Historic waterfront district',
              'Bay of Fundy whale watching',
              'Kingsbrae Garden',
              'Algonquin Resort & golf',
              'Vibrant Water Street shops',
              'Under 1 hour to the U.S. border',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-primary-foreground/90">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src="/images/town.png"
            alt="Aerial view of the Saint Andrews waterfront and harbour"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
