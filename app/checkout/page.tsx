"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { CheckoutForm } from "@/components/checkout-form"
import { OrderSummary } from "@/components/order-summary"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getEventById } from "@/lib/events-data"

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const [orderData, setOrderData] = useState(null)

  useEffect(() => {
    // Get order data from URL params
    const eventId = searchParams.get("eventId")
    const tickets = searchParams.get("tickets")

    if (eventId && tickets) {
      const eventData = getEventById(Number.parseInt(eventId))

      if (eventData) {
        setOrderData({
          eventId: Number.parseInt(eventId),
          tickets: JSON.parse(decodeURIComponent(tickets)),
          event: {
            title: eventData.title,
            date: eventData.date,
            time: eventData.time,
            location: eventData.location,
            image: eventData.image,
          },
        })
      }
    }
  }, [searchParams])

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Sipariş bulunamadı</h2>
          <p className="text-gray-600">Lütfen bilet seçimi yaparak tekrar deneyin.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Ödeme</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <CheckoutForm orderData={orderData} />
          <OrderSummary orderData={orderData} />
        </div>
      </div>

      <Footer />
    </div>
  )
}
