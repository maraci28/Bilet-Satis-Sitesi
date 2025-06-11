"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Ticket {
  id: string
  eventId: number
  eventTitle: string
  eventImage: string
  eventDate: string
  eventTime: string
  eventLocation: string
  ticketType: string
  price: number
  purchaseDate: string
}

export function UserTickets() {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get tickets from localStorage
    const storedTickets = localStorage.getItem("userTickets")
    if (storedTickets) {
      try {
        setTickets(JSON.parse(storedTickets))
      } catch (error) {
        console.error("Failed to parse tickets:", error)
      }
    }
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="text-center py-8">Yükleniyor...</div>
  }

  if (tickets.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-sm border">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Henüz biletiniz bulunmuyor</h2>
        <p className="text-gray-600 mb-6">Etkinliklere göz atıp bilet satın alabilirsiniz.</p>
        <Button asChild>
          <Link href="/events">Etkinliklere Göz At</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {tickets.map((ticket) => (
        <Card key={ticket.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 h-48 md:h-auto relative">
                <Image
                  src={ticket.eventImage || "/placeholder.svg?height=400&width=600"}
                  alt={ticket.eventTitle}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col md:flex-row justify-between items-start w-full">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">Onaylandı</span>
                    <span className="ml-2 text-sm text-gray-500">Satın Alma: {ticket.purchaseDate}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-800">{ticket.eventTitle}</h3>

                  <div className="flex flex-col space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{ticket.eventDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      <span>{ticket.eventTime}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{ticket.eventLocation}</span>
                    </div>
                  </div>

                  <div className="text-sm">
                    <span className="font-medium">Bilet Türü:</span> {ticket.ticketType}
                  </div>
                </div>

                <div className="mt-4 md:mt-0 flex flex-col items-end">
                  <span className="text-orange-600 font-semibold mb-2">{ticket.price.toLocaleString()} TL</span>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download size={16} />
                    Bileti İndir
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
