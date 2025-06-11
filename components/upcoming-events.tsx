import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const upcomingEvents = [
  {
    id: 5,
    title: "Mabel Matiz - Yaz Konseri",
    date: "10 Temmuz 2025",
    time: "20:30",
    location: "İstanbul, KüçükÇiftlik Park",
    price: "350 TL'den başlayan fiyatlarla",
  },
  {
    id: 2,
    title: "Tarkan - Ankara Konseri",
    date: "20 Temmuz 2025",
    time: "20:30",
    location: "Ankara, Congresium",
    price: "350 TL'den başlayan fiyatlarla",
  },
  {
    id: 4,
    title: "Duman - İstanbul Konseri",
    date: "28 Temmuz 2025",
    time: "21:30",
    location: "İstanbul, Zorlu PSM",
    price: "400 TL'den başlayan fiyatlarla",
  },
  {
    id: 7,
    title: "Sagopa Kajmer - Hip Hop Konseri",
    date: "12 Ağustos 2025",
    time: "21:00",
    location: "Ankara, MEB Şura Salonu",
    price: "200 TL'den başlayan fiyatlarla",
  },
]

export function UpcomingEvents() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Yaklaşan Etkinlikler</h2>

      <div className="space-y-4">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-white rounded-xl shadow hover:shadow-md transition-shadow duration-300 border border-gray-100"
          >
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
              <div className="flex flex-col sm:flex-row sm:space-x-6 text-gray-600">
                <div className="flex items-center mb-2 sm:mb-0">
                  <Calendar size={16} className="mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center mb-2 sm:mb-0">
                  <Clock size={16} className="mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
              <span className="text-orange-600 font-semibold">{event.price}</span>
              <Button
                asChild
                className="bg-gradient-to-r from-vibetix-500 to-purple-600 hover:from-vibetix-600 hover:to-purple-700 w-full sm:w-auto"
              >
                <Link href={`/event/${event.id}`}>Bilet Al</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button asChild variant="outline" className="border-vibetix-500 text-vibetix-600 hover:bg-vibetix-50">
          <Link href="/events">Tüm Etkinlikleri Gör</Link>
        </Button>
      </div>
    </section>
  )
}
