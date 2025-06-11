import { FeaturedEvents } from "@/components/featured-events"
import { PopularArtists } from "@/components/popular-artists"
import { UpcomingEvents } from "@/components/upcoming-events"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 bg-white">
        <FeaturedEvents />
        <PopularArtists />
        <UpcomingEvents />
      </div>

      <Footer />
    </div>
  )
}
