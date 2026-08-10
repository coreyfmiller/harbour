import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { FeaturedListings } from '@/components/featured-listings'
import { AboutSection } from '@/components/about-section'
import { TownSection } from '@/components/town-section'
import { TeamSection } from '@/components/team-section'
import { Testimonials } from '@/components/testimonials'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { ChatWidget } from './components/chat-widget'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FeaturedListings />
        <AboutSection />
        <TownSection />
        <TeamSection />
        <Testimonials />
        <ContactSection />
      </main>
      <ChatWidget />
      <SiteFooter />
    </>
  )
}
