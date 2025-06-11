"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { CheckCircle, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SuccessPage() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get order data from URL params
    const orderData = searchParams.get("order")

    if (orderData) {
      try {
        const order = JSON.parse(decodeURIComponent(orderData))

        // Generate a ticket for each ticket type
        const tickets = order.tickets.flatMap((ticket: any) => {
          const ticketsArray = []

          // Create a ticket for each quantity
          for (let i = 0; i < ticket.quantity; i++) {
            ticketsArray.push({
              id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
              eventId: order.eventId,
              eventTitle: order.event.title,
              eventImage: order.event.image || "/placeholder.svg?height=400&width=600",
              eventDate: order.event.date,
              eventTime: order.event.time,
              eventLocation: order.event.location,
              ticketType: ticket.name,
              price: ticket.price,
              purchaseDate: new Date().toLocaleDateString("tr-TR"),
            })
          }

          return ticketsArray
        })

        // Save tickets to localStorage
        const existingTickets = JSON.parse(localStorage.getItem("userTickets") || "[]")
        localStorage.setItem("userTickets", JSON.stringify([...existingTickets, ...tickets]))
      } catch (error) {
        console.error("Failed to process order:", error)
      }
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <Card className="max-w-md w-full">
        <CardContent className="text-center p-8">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />

          <h1 className="text-2xl font-bold text-gray-900 mb-2">Ödeme Başarılı!</h1>

          <p className="text-gray-600 mb-6">
            Biletiniz başarıyla satın alındı. E-posta adresinize bilet detayları gönderildi.
          </p>

          <div className="space-y-3 mb-6">
            <Button className="w-full" variant="outline">
              <Download className="mr-2" size={18} />
              Bileti İndir
            </Button>

            <Button className="w-full" variant="outline">
              <Mail className="mr-2" size={18} />
              E-posta Gönder
            </Button>
          </div>

          <div className="space-y-3">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-vibetix-500 to-purple-600 hover:from-vibetix-600 hover:to-purple-700"
            >
              <Link href="/profile">Biletlerime Git</Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/">Ana Sayfaya Dön</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
