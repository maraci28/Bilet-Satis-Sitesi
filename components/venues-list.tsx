import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"

const venues = [
  {
    id: 1,
    name: "Harbiye Açıkhava Tiyatrosu",
    image: "/placeholder.svg?height=400&width=600",
    location: "İstanbul, Şişli",
    address: "Harbiye Mah. Taşkışla Cad. No:8, Şişli/İstanbul",
    capacity: "4500 kişi",
    upcomingEvents: 3,
  },
  {
    id: 2,
    name: "Volkswagen Arena",
    image: "/placeholder.svg?height=400&width=600",
    location: "İstanbul, Sarıyer",
    address: "Huzur Mah. Maslak Ayazağa Cad. No:4 Sarıyer/İstanbul",
    capacity: "5500 kişi",
    upcomingEvents: 2,
  },
  {
    id: 3,
    name: "Zorlu PSM",
    image: "/placeholder.svg?height=400&width=600",
    location: "İstanbul, Beşiktaş",
    address: "Zorlu Center PSM, Levazım Mah. Koru Sok. No:2 Beşiktaş/İstanbul",
    capacity: "2500 kişi",
    upcomingEvents: 4,
  },
  {
    id: 4,
    name: "KüçükÇiftlik Park",
    image: "/placeholder.svg?height=400&width=600",
    location: "İstanbul, Sarıyer",
    address: "Tarabya Mah. Haydar Aliyev Cad. No:64 Sarıyer/İstanbul",
    capacity: "17000 kişi",
    upcomingEvents: 2,
  },
  {
    id: 5,
    name: "Ankara Congresium",
    image: "/placeholder.svg?height=400&width=600",
    location: "Ankara, Çankaya",
    address: "Eskişehir Yolu 7. km, Tepe Prime AVM yanı, Ankara",
    capacity: "3000 kişi",
    upcomingEvents: 1,
  },
  {
    id: 6,
    name: "ODTÜ Vişnelik",
    image: "/placeholder.svg?height=400&width=600",
    location: "Ankara, Çankaya",
    address: "ODTÜ Kampüsü, Vişnelik Tesisleri, Ankara",
    capacity: "5000 kişi",
    upcomingEvents: 1,
  },
]

export function VenuesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {venues.map((venue) => (
        <div
          key={venue.id}
          className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-48">
            <Image src={venue.image || "/placeholder.svg"} alt={venue.name} fill className="object-cover" />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{venue.name}</h3>

            <div className="flex items-center mb-4 text-gray-600">
              <MapPin size={16} className="mr-2" />
              <span>{venue.location}</span>
            </div>

            <div className="space-y-2 mb-4">
              <p className="text-gray-600">
                <span className="font-medium">Adres:</span> {venue.address}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Kapasite:</span> {venue.capacity}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-vibetix-600 font-semibold">{venue.upcomingEvents} Yaklaşan Etkinlik</span>
              <Link
                href={`/venues/${venue.id}`}
                className="text-vibetix-600 hover:text-vibetix-700 font-medium transition-colors"
              >
                Detaylar
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
