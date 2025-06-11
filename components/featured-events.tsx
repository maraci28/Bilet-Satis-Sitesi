import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const featuredEvents = [
  {
    id: 1,
    title: "Tarkan - Harbiye Açıkhava Konseri",
    image: "/events/harbiye.jpg",
    date: "15 Temmuz 2025",
    time: "21:00",
    location: "İstanbul, Harbiye Açıkhava",
    price: "500 TL'den başlayan fiyatlarla",
    badge: "Popüler",
  },
  {
    id: 3,
    title: "Duman - Rock Festivali",
    image: "/events/rock-festival.jpg",
    date: "22 Temmuz 2025",
    time: "20:00",
    location: "Ankara, ODTÜ Vişnelik",
    price: "300 TL'den başlayan fiyatlarla",
    badge: "Sınırlı",
  },
  {
    id: 6,
    title: "Ceza - Rap Gecesi",
    image: "/events/ceza-rap-night.jpg",
    date: "5 Ağustos 2025",
    time: "22:00",
    location: "İstanbul, Volkswagen Arena",
    price: "250 TL'den başlayan fiyatlarla",
    badge: "VIP",
  },
]

export function FeaturedEvents() {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Öne Çıkan Etkinlikler</h2>
        <Link href="/events" className="text-blue-600 hover:text-blue-700 font-semibold">
          Tümünü Gör
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <Badge className="absolute top-4 right-4 bg-orange-600 hover:bg-orange-700">{event.badge}</Badge>
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
                <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                  <Link href={`/event/${event.id}`}>Bilet Al</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
