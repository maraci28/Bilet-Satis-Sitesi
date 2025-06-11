"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CreditCard, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface CheckoutFormProps {
  orderData: any
}

export function CheckoutForm({ orderData }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    cardNumber: "4242 4242 4242 4242",
    expiryDate: "12/28",
    cvv: "123",
    cardName: "Test Kullanıcı",
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      // Encode order data to pass to success page
      const orderParam = encodeURIComponent(JSON.stringify(orderData))
      router.push(`/success?order=${orderParam}`)
      setIsLoading(false)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value

    // Format card number
    if (e.target.name === "cardNumber") {
      value = value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
      if (value.length > 19) value = value.substring(0, 19)
    }

    // Format expiry date
    if (e.target.name === "expiryDate") {
      value = value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2")
      if (value.length > 5) value = value.substring(0, 5)
    }

    // Format CVV
    if (e.target.name === "cvv") {
      value = value.replace(/\D/g, "")
      if (value.length > 3) value = value.substring(0, 3)
    }

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }))
  }

  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>İletişim Bilgileri</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="ornek@email.com"
            />
          </div>
          <div>
            <Label htmlFor="name">Ad Soyad</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Adınız Soyadınız"
            />
          </div>
        </CardContent>
      </Card>

      {/* Payment Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CreditCard size={20} />
            <span>Ödeme Bilgileri</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4 bg-blue-50 border-blue-200">
            <AlertDescription>
              <strong>Test Kart Bilgileri:</strong>
              <br />
              Kart No: 4242 4242 4242 4242
              <br />
              Son Kullanma: 12/28
              <br />
              CVV: 123
            </AlertDescription>
          </Alert>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="cardNumber">Kart Numarası</Label>
              <Input
                id="cardNumber"
                name="cardNumber"
                type="text"
                required
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiryDate">Son Kullanma Tarihi</Label>
                <Input
                  id="expiryDate"
                  name="expiryDate"
                  type="text"
                  required
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  name="cvv"
                  type="text"
                  required
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="cardName">Kart Üzerindeki İsim</Label>
              <Input
                id="cardName"
                name="cardName"
                type="text"
                required
                value={formData.cardName}
                onChange={handleChange}
                placeholder="Kart sahibinin adı"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-vibetix-500 to-purple-600 hover:from-vibetix-600 hover:to-purple-700 text-lg py-6"
              disabled={isLoading}
            >
              <Lock className="mr-2" size={18} />
              {isLoading ? "Ödeme İşleniyor..." : "Güvenli Ödeme Yap"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
