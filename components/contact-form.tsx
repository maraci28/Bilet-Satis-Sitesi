"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mesajınız gönderildi",
        description: "En kısa sürede size dönüş yapacağız.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Information */}
      <div className="lg:col-span-1">
        <Card className="h-full">
          <CardContent className="p-6 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">İletişim Bilgileri</h2>
              <p className="text-gray-600 mb-8">
                Sorularınız, önerileriniz veya şikayetleriniz için bizimle iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-vibetix-100 p-3 rounded-full mr-4">
                  <MapPin className="text-vibetix-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Adres</h3>
                  <p className="text-gray-600">Levent Mah. Büyükdere Cad. No:123 Şişli, İstanbul</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-vibetix-100 p-3 rounded-full mr-4">
                  <Mail className="text-vibetix-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@biletx.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-vibetix-100 p-3 rounded-full mr-4">
                  <Phone className="text-vibetix-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Telefon</h3>
                  <p className="text-gray-600">+90 212 123 45 67</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Bize Yazın</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Adınız Soyadınız</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Adresiniz</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject">Konu</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Mesajınız</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                className="bg-gradient-to-r from-vibetix-500 to-purple-600 hover:from-vibetix-600 hover:to-purple-700"
                disabled={isLoading}
              >
                <Send className="mr-2" size={18} />
                {isLoading ? "Gönderiliyor..." : "Mesaj Gönder"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
