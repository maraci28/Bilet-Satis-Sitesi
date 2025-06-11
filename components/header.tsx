"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Search, User, Menu, X, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [logoError, setLogoError] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user")
    if (userData) {
      try {
        setUser(JSON.parse(userData))
      } catch (error) {
        console.error("Failed to parse user data:", error)
      }
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    router.push("/")
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            {!logoError ? (
              <Image
                src="/vibetix-logo.png"
                alt="VibeTix"
                width={140}
                height={50}
                className="h-12 w-auto"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                VibeTix
              </div>
            )}
          </Link>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Sanatçı, etkinlik ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <Button
              type="submit"
              className="ml-2 bg-gradient-to-r from-vibetix-500 to-purple-600 hover:from-vibetix-600 hover:to-purple-700"
            >
              ARA
            </Button>
          </form>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 mr-6">
            <Link href="/events" className="text-gray-600 hover:text-vibetix-600 font-medium transition-colors">
              Tüm Etkinlikler
            </Link>
            <Link href="/artists" className="text-gray-600 hover:text-vibetix-600 font-medium transition-colors">
              Sanatçılar
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 hover:text-vibetix-600">
                    <User size={18} />
                    <span className="hidden sm:inline">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profilim</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Biletlerim</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut size={16} className="mr-2" />
                    Çıkış Yap
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="ghost" className="hover:text-vibetix-600">
                <Link href="/login" className="flex items-center space-x-2">
                  <User size={18} />
                  <span className="hidden sm:inline">Giriş Yap</span>
                </Link>
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Sanatçı, etkinlik ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <Button
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-vibetix-500 to-purple-600 hover:from-vibetix-600 hover:to-purple-700"
              >
                ARA
              </Button>
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              <Link
                href="/events"
                className="block py-2 text-gray-600 hover:text-vibetix-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tüm Etkinlikler
              </Link>
              <Link
                href="/artists"
                className="block py-2 text-gray-600 hover:text-vibetix-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sanatçılar
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
