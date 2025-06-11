"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = Math.min(window.innerHeight * 0.7, 600)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Floating music elements
    const musicElements: Array<{
      x: number
      y: number
      size: number
      rotation: number
      rotationSpeed: number
      opacity: number
      type: "note" | "wave" | "circle"
      speed: number
    }> = []

    // Create floating elements
    for (let i = 0; i < 15; i++) {
      musicElements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 20,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        opacity: Math.random() * 0.3 + 0.1,
        type: ["note", "wave", "circle"][Math.floor(Math.random() * 3)] as "note" | "wave" | "circle",
        speed: Math.random() * 0.5 + 0.2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw floating elements
      musicElements.forEach((element) => {
        ctx.save()
        ctx.globalAlpha = element.opacity
        ctx.translate(element.x, element.y)
        ctx.rotate(element.rotation)

        if (element.type === "note") {
          // Musical note
          ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
          ctx.beginPath()
          ctx.ellipse(0, 0, element.size * 0.3, element.size * 0.2, 0, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillRect(element.size * 0.25, -element.size * 0.6, element.size * 0.08, element.size * 0.8)
        } else if (element.type === "wave") {
          // Sound wave
          ctx.strokeStyle = "rgba(255, 255, 255, 0.4)"
          ctx.lineWidth = 3
          ctx.beginPath()
          for (let i = 0; i < 3; i++) {
            const radius = element.size * 0.3 + i * 8
            ctx.arc(0, 0, radius, 0, Math.PI, false)
            ctx.stroke()
          }
        } else {
          // Circle
          ctx.fillStyle = "rgba(255, 255, 255, 0.2)"
          ctx.beginPath()
          ctx.arc(0, 0, element.size * 0.4, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.restore()

        // Update position
        element.y -= element.speed
        element.rotation += element.rotationSpeed

        // Reset position when off screen
        if (element.y < -element.size) {
          element.y = canvas.height + element.size
          element.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="relative bg-gradient-to-br from-vibetix-500 via-purple-600 to-pink-500 text-white overflow-hidden min-h-[70vh] flex items-center">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />

      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fillOpacity%3D%220.05%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-black mb-2 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent drop-shadow-2xl">
              VibeTix
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block mb-2">Unutulmaz Etkinlikler İçin</span>
            <span className="bg-gradient-to-r from-orange-300 to-pink-200 bg-clip-text text-transparent">
              Biletiniz Hazır!
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            En sevdiğiniz sanatçıların konserlerini kaçırmayın, hemen biletinizi alın ve unutulmaz anılar biriktirin.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              className="group relative px-8 py-4 bg-white text-vibetix-600 font-bold text-lg rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Link href="/events">
                <span className="relative z-10">Etkinlikleri Keşfet</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
            </Button>
            <Button
              asChild
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold text-lg rounded-full hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-white/20"
            >
              <Link href="/artists">Popüler Sanatçılar</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-300 mb-2">50K+</div>
              <div className="text-blue-200">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-300 mb-2">1000+</div>
              <div className="text-blue-200">Etkinlik</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-300 mb-2">100+</div>
              <div className="text-blue-200">Sanatçı</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-white"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-white"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  )
}
