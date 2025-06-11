"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserProfile } from "@/components/user-profile"
import { UserTickets } from "@/components/user-tickets"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ProfilePage() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/login")
      return
    }

    try {
      setUser(JSON.parse(userData))
    } catch (error) {
      console.error("Failed to parse user data:", error)
      localStorage.removeItem("user")
      router.push("/login")
    }
  }, [router])

  if (!user) {
    return null // Loading state or redirect will happen
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Hesabım</h1>

        <Tabs defaultValue="tickets" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="tickets" className="text-lg">
              Biletlerim
            </TabsTrigger>
            <TabsTrigger value="profile" className="text-lg">
              Profil Bilgilerim
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tickets">
            <UserTickets />
          </TabsContent>

          <TabsContent value="profile">
            <UserProfile user={user} />
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
