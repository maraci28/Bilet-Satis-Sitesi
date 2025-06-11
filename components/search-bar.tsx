"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-lg mx-auto">
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder="Sanatçı, etkinlik veya mekan ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-4 pr-10 py-3 h-14 rounded-l-full text-black border-2 border-r-0 border-white focus-visible:ring-yellow-400"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
      <Button type="submit" className="h-14 rounded-r-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6">
        ARA
      </Button>
    </form>
  )
}
