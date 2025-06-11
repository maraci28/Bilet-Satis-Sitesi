export const artistsData = {
  1: {
    id: 1,
    name: "Tarkan",
    image: "/artists/tarkan.jpg",
    bio: "Tarkan Tevetoğlu, Türk pop müziğinin en tanınmış isimlerinden biridir. 1990'larda başlayan kariyeri boyunca hem Türkiye'de hem de uluslararası alanda büyük başarılar elde etmiştir. 'Şımarık', 'Dudu', 'Kuzu Kuzu' gibi hit şarkılarıyla tanınan sanatçı, Türk pop müziğinin dünyaya açılan kapısı olarak kabul edilir.",
    category: "Pop",
    events: [
      {
        id: 1,
        title: "Tarkan - Harbiye Açıkhava Konseri",
        image: "/placeholder.svg?height=400&width=600",
        date: "15 Temmuz 2025",
        time: "21:00",
        location: "İstanbul, Harbiye Açıkhava",
        price: "750 TL'den başlayan fiyatlarla",
      },
      {
        id: 2,
        title: "Tarkan - Ankara Konseri",
        image: "/placeholder.svg?height=400&width=600",
        date: "20 Temmuz 2025",
        time: "20:30",
        location: "Ankara, Congresium",
        price: "700 TL'den başlayan fiyatlarla",
      },
    ],
  },
  2: {
    id: 2,
    name: "Duman",
    image: "/artists/duman.jpg",
    bio: "Duman, 1999 yılında kurulan Türk rock grubudur. Kaan Tangöze'nin vokalliğinde, alternatif rock ve grunge tarzında müzik yapan grup, 'Bu Akşam', 'Her Şeyi Yak', 'Senden Daha Güzel' gibi hit şarkılarıyla Türk rock müziğinde önemli bir yere sahiptir. Enerjik sahne performansları ve özgün müzik tarzlarıyla geniş bir hayran kitlesine sahiptir.",
    category: "Rock",
    events: [
      {
        id: 3,
        title: "Duman - Rock Festivali",
        image: "/placeholder.svg?height=400&width=600",
        date: "22 Temmuz 2025",
        time: "20:00",
        location: "Ankara, ODTÜ Vişnelik",
        price: "500 TL'den başlayan fiyatlarla",
      },
      {
        id: 4,
        title: "Duman - İstanbul Konseri",
        image: "/placeholder.svg?height=400&width=600",
        date: "28 Temmuz 2025",
        time: "21:30",
        location: "İstanbul, Zorlu PSM",
        price: "400 TL'den başlayan fiyatlarla",
      },
    ],
  },
  4: {
    id: 4,
    name: "Mabel Matiz",
    image: "/artists/mabel-matiz.jpg",
    bio: "Mabel Matiz, gerçek adı Fatih Karaca olan Türk şarkıcı ve söz yazarıdır. Alternatif pop ve indie müzik tarzında eserler veren sanatçı, 'Gel', 'Ya Bu İşler Ne', 'Mendil' gibi şarkılarıyla tanınır. Özgün sesi ve romantik şarkılarıyla özellikle genç nesil arasında büyük bir hayran kitlesine sahiptir.",
    category: "Pop",
    events: [
      {
        id: 5,
        title: "Mabel Matiz - Yaz Konseri",
        image: "/placeholder.svg?height=400&width=600",
        date: "10 Temmuz 2025",
        time: "20:30",
        location: "İstanbul, KüçükÇiftlik Park",
        price: "350 TL'den başlayan fiyatlarla",
      },
    ],
  },
  8: {
    id: 8,
    name: "Ceza",
    image: "/artists/ceza.jpg",
    bio: "Ceza, gerçek adı Bilgin Özçalkan olan Türk rap sanatçısıdır. 1990'ların sonlarından itibaren Türk hip-hop sahnesinin öncü isimlerinden biri olan Ceza, hızlı rap tarzı ve sosyal içerikli şarkılarıyla tanınır. 'Holocaust', 'Suspus', 'Yerli Plaka' gibi albümleriyle Türk rap müziğinin gelişimine büyük katkı sağlamıştır.",
    category: "Rap",
    events: [
      {
        id: 6,
        title: "Ceza - Rap Gecesi",
        image: "/placeholder.svg?height=400&width=600",
        date: "5 Ağustos 2025",
        time: "22:00",
        location: "İstanbul, Volkswagen Arena",
        price: "250 TL'den başlayan fiyatlarla",
      },
    ],
  },
  9: {
    id: 9,
    name: "Sagopa Kajmer",
    image: "/artists/sagopa-kajmer.jpg",
    bio: "Sagopa Kajmer, gerçek adı Yunus Özyavuz olan Türk rap sanatçısıdır. Derin ve felsefi sözleri, karmaşık kafiye düzenleri ile tanınan sanatçı, Türk hip-hop sahnesinin en saygın isimlerinden biridir. 'Bir Pesimistin Gözyaşları', 'Kağıt Kesikleri', 'Galiba' gibi albümleriyle underground rap müziğinin öncülerinden olmuştur.",
    category: "Rap",
    events: [
      {
        id: 7,
        title: "Sagopa Kajmer - Hip Hop Konseri",
        image: "/placeholder.svg?height=400&width=600",
        date: "12 Ağustos 2025",
        time: "21:00",
        location: "Ankara, MEB Şura Salonu",
        price: "200 TL'den başlayan fiyatlarla",
      },
    ],
  },
}

export function getArtistById(id: number) {
  console.log("Requested artist ID:", id)
  const artist = artistsData[id as keyof typeof artistsData] || null
  console.log("Found artist:", artist?.name || "Not found")
  return artist
}

export function getAllArtists() {
  return Object.values(artistsData)
}
