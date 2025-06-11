import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VenuesList } from "@/components/venues-list"

export default function VenuesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-gradient-to-r from-vibetix-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Mekanlar</h1>
          <p className="text-xl text-center mt-2">En popüler konser ve etkinlik mekanları</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <VenuesList />
      </div>

      <Footer />
    </div>
  )
}
