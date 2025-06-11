"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getAllEvents } from "@/lib/events-data"

export function AllEvents() {
  const [sortBy, setSortBy] = useState("date")
  const [filterBy, setFilterBy] = useState("all")

  const allEvents = getAllEvents()

  // Filter events
  const filteredEvents = allEvents.filter((event) => {
    if (filterBy === "all") return true
    return event.category === filterBy
  })

  // Sort events
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    }
    if (sortBy === "price") {
      const aMinPrice = Math.min(...a.ticketTypes.map((t) => t.price))
      const bMinPrice = Math.min(...b.ticketTypes.map((t) => t.price))
      return aMinPrice - bMinPrice
    }
    if (sortBy === "name") {
      return a.title.localeCompare(b.title)
    }
    return 0
  })

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex items-center space-x-2">
          <Filter size={18} className="text-gray-600" />
          <span className="text-gray-600 font-medium">Filtrele:</span>
        </div>

        <Select value={filterBy} onValueChange={setFilterBy}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Kategori seçin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tüm Kategoriler</SelectItem>
            <SelectItem value="pop">Pop</SelectItem>
            <SelectItem value="rock">Rock</SelectItem>
            <SelectItem value="rap">Rap</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Sırala" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Tarihe Göre</SelectItem>
            <SelectItem value="price">Fiyata Göre</SelectItem>
            <SelectItem value="name">İsme Göre</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <span className="px-2 py-1 bg-orange-600 text-white text-xs font-medium rounded capitalize">
                  {event.category}
                </span>
              </div>
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
                <span className="text-orange-600 font-semibold">
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
      </div>

      {sortedEvents.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Etkinlik bulunamadı</h2>
          <p className="text-gray-600">Seçilen filtrelere uygun etkinlik bulunmuyor.</p>
        </div>
      )}
    </div>
  )
}
