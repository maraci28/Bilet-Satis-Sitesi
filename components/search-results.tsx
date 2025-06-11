"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllEvents } from "@/lib/events-data"

// Sanatçı verilerini güncelleyelim
const mockArtists = [
  {
    id: 1,
    name: "Tarkan",
    image: "/placeholder.svg?height=300&width=300",
    eventCount: 2,
    category: "pop",
  },
  {
    id: 2,
    name: "Duman",
    image: "/placeholder.svg?height=300&width=300",
    eventCount: 2,
    category: "rock",
  },
  {
    id: 4,
    name: "Mabel Matiz",
    image: "/placeholder.svg?height=300&width=300",
    eventCount: 1,
    category: "pop",
  },
  {
    id: 8,
    name: "Ceza",
    image: "/placeholder.svg?height=300&width=300",
    eventCount: 1,
    category: "rap",
  },
  {
    id: 9,
    name: "Sagopa Kajmer",
    image: "/placeholder.svg?height=300&width=300",
    eventCount: 1,
    category: "rap",
  },
]

export function SearchResults({ query }: { query: string }) {
  const [results, setResults] = useState<{
    artists: typeof mockArtists
    events: ReturnType<typeof getAllEvents>
  }>({ artists: [], events: [] })

  useEffect(() => {
    // Simulate API call with the query
    if (query) {
      const allEvents = getAllEvents()

      // Filter artists based on query
      const filteredArtists = mockArtists.filter((artist) => artist.name.toLowerCase().includes(query.toLowerCase()))

      // Filter events based on query
      const filteredEvents = allEvents.filter(
        (event) =>
          event.title.toLowerCase().includes(query.toLowerCase()) ||
          event.artist.name.toLowerCase().includes(query.toLowerCase()) ||
          event.location.toLowerCase().includes(query.toLowerCase()),
      )

      setResults({ artists: filteredArtists, events: filteredEvents })
    } else {
      setResults({ artists: [], events: [] })
    }
  }, [query])

  if (!query) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Arama yapmak için bir terim girin</h2>
        <p className="text-gray-600">Sanatçı, etkinlik veya mekan adı ile arama yapabilirsiniz.</p>
      </div>
    )
  }

  if (results.artists.length === 0 && results.events.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Sonuç bulunamadı</h2>
        <p className="text-gray-600">"{query}" için sonuç bulunamadı. Lütfen başka bir arama terimi deneyin.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">"{query}" için arama sonuçları</h2>

      <Tabs defaultValue="events" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="events" className="text-lg">
            Etkinlikler ({results.events.length})
          </TabsTrigger>
          <TabsTrigger value="artists" className="text-lg">
            Sanatçılar ({results.artists.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="events" className="space-y-6">
          {results.events.map((event) => (
            <div key={event.id} className="flex flex-col md:flex-row bg-white rounded-xl shadow overflow-hidden">
              <div className="md:w-1/4 h-48 md:h-auto relative">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>

              <div className="p-6 flex flex-col md:flex-row justify-between items-start w-full">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>

                  <div className="flex flex-col space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 flex flex-col items-end">
                  <span className="text-orange-600 font-semibold mb-2">
                    {Math.min(...event.ticketTypes.map((t) => t.price)).toLocaleString()} TL'den başlayan fiyatlarla
                  </span>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-vibetix-500 to-purple-600 hover:from-vibetix-600 hover:to-purple-700"
                  >
                    <Link href={`/event/${event.id}`}>Bilet Al</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="artists" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.artists.map((artist) => (
            <Link key={artist.id} href={`/artist/${artist.id}`} className="group">
              <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition-shadow duration-300 text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 group-hover:ring-4 ring-orange-500 transition-all duration-300">
                  <Image
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-lg text-gray-800">{artist.name}</h3>
                <p className="text-gray-600">{artist.eventCount} Etkinlik</p>
              </div>
            </Link>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
