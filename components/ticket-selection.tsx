"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface TicketType {
  id: number
  name: string
  price: number
  description: string
  available: number
}

interface TicketSelectionProps {
  ticketTypes: TicketType[]
  eventId: number
  eventData: {
    id: number
    title: string
    date: string
    time: string
    location: string
    image: string
  }
}

export function TicketSelection({ ticketTypes, eventId, eventData }: TicketSelectionProps) {
  const [selectedTickets, setSelectedTickets] = useState<Record<number, number>>({})

  const incrementTicket = (id: number) => {
    setSelectedTickets((prev) => {
      const currentCount = prev[id] || 0
      const ticket = ticketTypes.find((t) => t.id === id)

      if (ticket && currentCount < ticket.available) {
        return { ...prev, [id]: currentCount + 1 }
      }
      return prev
    })
  }

  const decrementTicket = (id: number) => {
    setSelectedTickets((prev) => {
      const currentCount = prev[id] || 0
      if (currentCount > 0) {
        return { ...prev, [id]: currentCount - 1 }
      }
      return prev
    })
  }

  const totalTickets = Object.values(selectedTickets).reduce((sum, count) => sum + count, 0)

  const totalPrice = ticketTypes.reduce((sum, ticket) => {
    const count = selectedTickets[ticket.id] || 0
    return sum + ticket.price * count
  }, 0)

  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle className="text-2xl">Bilet Seçimi</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {ticketTypes.map((ticket) => (
          <div key={ticket.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-gray-800">{ticket.name}</h3>
                <div className="flex items-center">
                  <p className="text-orange-600 font-semibold">{ticket.price.toLocaleString()} TL</p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="sm" className="p-0 h-auto ml-1">
                          <Info size={16} className="text-gray-400" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{ticket.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => decrementTicket(ticket.id)}
                  disabled={(selectedTickets[ticket.id] || 0) === 0}
                >
                  <ChevronDown size={16} />
                </Button>

                <span className="mx-3 w-6 text-center">{selectedTickets[ticket.id] || 0}</span>

                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => incrementTicket(ticket.id)}
                  disabled={(selectedTickets[ticket.id] || 0) >= ticket.available}
                >
                  <ChevronUp size={16} />
                </Button>
              </div>
            </div>

            <p className="text-sm text-gray-500">{ticket.available} bilet kaldı</p>
          </div>
        ))}
      </CardContent>

      <CardFooter className="flex-col">
        <div className="w-full border-t pt-4 mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Toplam Bilet:</span>
            <span className="font-semibold">{totalTickets}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span className="font-bold">Toplam:</span>
            <span className="font-bold text-orange-600">{totalPrice.toLocaleString()} TL</span>
          </div>
        </div>

        <Button
          onClick={() => {
            const selectedTicketData = ticketTypes
              .filter((ticket) => selectedTickets[ticket.id] > 0)
              .map((ticket) => ({
                name: ticket.name,
                price: ticket.price,
                quantity: selectedTickets[ticket.id],
              }))

            const queryParams = new URLSearchParams({
              eventId: eventId.toString(),
              tickets: encodeURIComponent(JSON.stringify(selectedTicketData)),
            })

            window.location.href = `/checkout?${queryParams.toString()}`
          }}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200"
          disabled={totalTickets === 0}
        >
          Bilet Al
        </Button>
      </CardFooter>
    </Card>
  )
}
