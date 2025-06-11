import Image from "next/image"
import { Calendar, Clock, MapPin, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TicketSelection } from "@/components/ticket-selection"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { getEventById } from "@/lib/events-data"
import { notFound } from "next/navigation"

export default function EventPage({ params }: { params: { id: string } }) {
  const eventId = Number.parseInt(params.id)
  const eventData = getEventById(eventId)

  if (!eventData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-black">
        <Image
          src={eventData.image || "/placeholder.svg"}
          alt={eventData.title}
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{eventData.title}</h1>
            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center">
                <Calendar size={20} className="mr-2" />
                <span>{eventData.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={20} className="mr-2" />
                <span>{eventData.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>{eventData.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Event Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Etkinlik Detayları</h2>
              <p className="text-gray-700 mb-6">{eventData.description}</p>

              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={eventData.artist.image || "/placeholder.svg"}
                    alt={eventData.artist.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Sanatçı</h3>
                  <p className="text-gray-700">{eventData.artist.name}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-2">Adres</h3>
                <p className="text-gray-700">{eventData.address}</p>
              </div>

              <Button variant="outline" className="flex items-center gap-2">
                <Share2 size={18} />
                Paylaş
              </Button>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Mekan Haritası</h2>
              <div className="aspect-[16/9] bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Mekan haritası burada görüntülenecek</p>
              </div>
            </div>
          </div>

          {/* Ticket Selection */}
          <div className="lg:col-span-1">
            <TicketSelection ticketTypes={eventData.ticketTypes} eventId={eventData.id} eventData={eventData} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
