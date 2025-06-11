import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const festivals = [
  {
    id: 1,
    name: "İstanbul Müzik Festivali",
    image: "/placeholder.svg?height=400&width=600",
    startDate: "10 Temmuz 2025",
    endDate: "15 Temmuz 2025",
    location: "İstanbul, Çeşitli Mekanlar",
    price: "350 TL'den başlayan fiyatlarla",
    description: "Klasik müzikten caza, dünya müziğinden elektronik müziğe uzanan geniş bir yelpazede konserler.",
    status: "Yakında",
  },
  {
    id: 2,
    name: "Rock Festivali",
    image: "/placeholder.svg?height=400&width=600",
    startDate: "22 Temmuz 2025",
    endDate: "24 Temmuz 2025",
    location: "Ankara, ODTÜ Vişnelik",
    price: "300 TL'den başlayan fiyatlarla",
    description: "Türkiye'nin en iyi rock gruplarının sahne alacağı 3 günlük festival.",
    status: "Biletler Satışta",
  },
  {
    id: 3,
    name: "Elektronik Müzik Festivali",
    image: "/placeholder.svg?height=400&width=600",
    startDate: "5 Ağustos 2025",
    endDate: "7 Ağustos 2025",
    location: "İzmir, Kültürpark",
    price: "400 TL'den başlayan fiyatlarla",
    description: "Elektronik müziğin en iyi DJ'leri ve yapımcıları ile unutulmaz bir deneyim.",
    status: "Biletler Tükeniyor",
  },
  {
    id: 4,
    name: "Hip Hop Festivali",
    image: "/placeholder.svg?height=400&width=600",
    startDate: "15 Ağustos 2025",
    endDate: "16 Ağustos 2025",
    location: "İstanbul, KüçükÇiftlik Park",
    price: "250 TL'den başlayan fiyatlarla",
    description: "Türkiye'nin en iyi rap ve hip hop sanatçılarının sahne alacağı 2 günlük festival.",
    status: "Biletler Satışta",
  },
]

export function FestivalsList() {
  return (
    <div className="space-y-8">
      {festivals.map((festival) => (
        <div
          key={festival.id}
          className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="md:flex">
            <div className="md:w-1/3 h-64 md:h-auto relative">
              <Image src={festival.image || "/placeholder.svg"} alt={festival.name} fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <Badge
                  className={`${
                    festival.status === "Biletler Tükeniyor"
                      ? "bg-red-500"
                      : festival.status === "Biletler Satışta"
                        ? "bg-green-500"
                        : "bg-blue-500"
                  }`}
                >
                  {festival.status}
                </Badge>
              </div>
            </div>

            <div className="p-6 md:w-2/3">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{festival.name}</h3>

              <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>
                    {festival.startDate} - {festival.endDate}
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>{festival.location}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{festival.description}</p>

              <div className="flex justify-between items-center">
                <span className="text-orange-600 font-semibold">{festival.price}</span>
                <Button
                  asChild
                  className="bg-gradient-to-r from-vibetix-500 to-purple-600 hover:from-vibetix-600 hover:to-purple-700"
                >
                  <Link href={`/festivals/${festival.id}`}>Detaylar</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
