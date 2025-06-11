import { Calendar, Clock, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface OrderSummaryProps {
  orderData: {
    event: {
      title: string
      date: string
      time: string
      location: string
    }
    tickets: Array<{
      name: string
      price: number
      quantity: number
    }>
  }
}

export function OrderSummary({ orderData }: OrderSummaryProps) {
  const totalPrice = orderData.tickets.reduce((sum, ticket) => sum + ticket.price * ticket.quantity, 0)
  const serviceFee = Math.round(totalPrice * 0.1)
  const finalTotal = totalPrice + serviceFee

  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle>Sipariş Özeti</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Event Details */}
        <div>
          <h3 className="font-bold text-lg mb-2">{orderData.event.title}</h3>
          <div className="space-y-1 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar size={14} className="mr-2" />
              <span>{orderData.event.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-2" />
              <span>{orderData.event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={14} className="mr-2" />
              <span>{orderData.event.location}</span>
            </div>
          </div>
        </div>

        {/* Tickets */}
        <div className="border-t pt-4">
          <h4 className="font-semibold mb-3">Biletler</h4>
          {orderData.tickets.map((ticket, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <div>
                <span className="font-medium">{ticket.name}</span>
                <span className="text-gray-600 ml-2">x{ticket.quantity}</span>
              </div>
              <span className="font-semibold">{(ticket.price * ticket.quantity).toLocaleString()} TL</span>
            </div>
          ))}
        </div>

        {/* Price Breakdown */}
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between">
            <span>Bilet Tutarı:</span>
            <span>{totalPrice.toLocaleString()} TL</span>
          </div>
          <div className="flex justify-between">
            <span>Hizmet Bedeli:</span>
            <span>{serviceFee.toLocaleString()} TL</span>
          </div>
          <div className="flex justify-between text-lg font-bold border-t pt-2">
            <span>Toplam:</span>
            <span className="text-orange-600">{finalTotal.toLocaleString()} TL</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
