import Image from "next/image"
import Link from "next/link"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const popularArtists = [
  {
    id: 1,
    name: "Tarkan",
    image: "/artists/tarkan.jpg",
    eventCount: 2,
  },
  {
    id: 2,
    name: "Duman",
    image: "/artists/duman.jpg",
    eventCount: 2,
  },
  {
    id: 4,
    name: "Mabel Matiz",
    image: "/artists/mabel-matiz.jpg",
    eventCount: 1,
  },
  {
    id: 8,
    name: "Ceza",
    image: "/artists/ceza.jpg",
    eventCount: 1,
  },
  {
    id: 9,
    name: "Sagopa Kajmer",
    image: "/artists/sagopa-kajmer.jpg",
    eventCount: 1,
  },
]

export function PopularArtists() {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Popüler Sanatçılar</h2>
        <Link href="/artists" className="text-vibetix-600 hover:text-vibetix-700 font-semibold">
          Tümünü Gör
        </Link>
      </div>

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-6 pb-4">
          {popularArtists.map((artist) => (
            <Link key={artist.id} href={`/artist/${artist.id}`} className="group">
              <div className="w-[180px] text-center">
                <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden mb-4 group-hover:ring-4 ring-orange-500 transition-all duration-300">
                  <Image
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-lg text-gray-800">{artist.name}</h3>
                <p className="text-gray-600">{artist.eventCount} Etkinlik</p>
              </div>
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  )
}
