import Link from "next/link"
import Image from "next/image"

const allArtists = [
  {
    id: 1,
    name: "Tarkan",
    image: "/artists/tarkan.jpg",
    eventCount: 2,
    category: "Pop",
    description: "Türk pop müziğinin megastarı",
  },
  {
    id: 2,
    name: "Duman",
    image: "/artists/duman.jpg",
    eventCount: 2,
    category: "Rock",
    description: "Türk rock müziğinin efsane grubu",
  },
  {
    id: 4,
    name: "Mabel Matiz",
    image: "/artists/mabel-matiz.jpg",
    eventCount: 1,
    category: "Pop",
    description: "Alternatif pop müziğin yükselen yıldızı",
  },
  {
    id: 8,
    name: "Ceza",
    image: "/artists/ceza.jpg",
    eventCount: 1,
    category: "Rap",
    description: "Türk rap müziğinin efsanesi",
  },
  {
    id: 9,
    name: "Sagopa Kajmer",
    image: "/artists/sagopa-kajmer.jpg",
    eventCount: 1,
    category: "Rap",
    description: "Hip-hop kültürünün öncülerinden",
  },
]

export function AllArtists() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {allArtists.map((artist) => (
        <Link key={artist.id} href={`/artist/${artist.id}`} className="group">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 group-hover:ring-4 ring-orange-500 transition-all duration-300">
              <Image
                src={artist.image || "/placeholder.svg"}
                alt={artist.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-1">{artist.name}</h3>
            <p className="text-orange-600 text-sm font-medium mb-2">{artist.category}</p>
            <p className="text-gray-600 text-sm mb-3">{artist.description}</p>
            <p className="text-gray-500 text-sm">{artist.eventCount} Etkinlik</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
