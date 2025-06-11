import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { getArtistById } from "@/lib/artists-data"

export default function ArtistPage({ params }: { params: { id: string } }) {
  const artistId = Number.parseInt(params.id)
  const artistData = getArtistById(artistId)

  if (!artistData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sanatçı Bulunamadı</h1>
          <p className="text-gray-600">Aradığınız sanatçı mevcut değil.</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-[url('/hero-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src={artistData.image || "/placeholder.svg"}
                alt={artistData.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{artistData.name}</h1>
              <p className="text-lg md:text-xl max-w-2xl">{artistData.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Yaklaşan Etkinlikler</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artistData.events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>

                <div className="flex items-center mb-2 text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  <span>
                    {event.date} - {event.time}
                  </span>
                </div>

                <div className="flex items-center mb-4 text-gray-600">
                  <MapPin size={16} className="mr-2" />
                  <span>{event.location}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-orange-600 font-semibold">{event.price}</span>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    <Link href={`/event/${event.id}`}>Bilet Al</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
