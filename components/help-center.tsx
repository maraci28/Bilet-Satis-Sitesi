import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const helpCategories = [
  {
    id: 1,
    title: "Bilet Satın Alma",
    description: "Bilet satın alma, ödeme seçenekleri ve işlem adımları hakkında bilgiler.",
    link: "/help/tickets",
  },
  {
    id: 2,
    title: "Hesap İşlemleri",
    description: "Hesap oluşturma, şifre değiştirme ve profil yönetimi hakkında bilgiler.",
    link: "/help/account",
  },
  {
    id: 3,
    title: "İade ve Değişim",
    description: "Bilet iade, değişim ve iptal işlemleri hakkında bilgiler.",
    link: "/refund",
  },
  {
    id: 4,
    title: "Etkinlik Günü",
    description: "Etkinlik günü yapılması gerekenler ve bilet kontrolü hakkında bilgiler.",
    link: "/help/event-day",
  },
  {
    id: 5,
    title: "Teknik Sorunlar",
    description: "Web sitesi ve mobil uygulama kullanımı ile ilgili teknik sorunlar.",
    link: "/help/technical",
  },
  {
    id: 6,
    title: "İletişim",
    description: "Müşteri hizmetleri ile iletişime geçme yöntemleri.",
    link: "/contact",
  },
]

const popularQuestions = [
  {
    id: 1,
    question: "Biletimi nasıl iptal edebilirim?",
    link: "/refund",
  },
  {
    id: 2,
    question: "Etkinlik ertelenirse ne olur?",
    link: "/help/postponed",
  },
  {
    id: 3,
    question: "Biletimi başkasına devredebilir miyim?",
    link: "/help/tickets",
  },
  {
    id: 4,
    question: "Ödeme yaparken sorun yaşıyorum, ne yapmalıyım?",
    link: "/help/payment",
  },
  {
    id: 5,
    question: "Biletimi nasıl görebilirim?",
    link: "/profile",
  },
]

export function HelpCenter() {
  return (
    <div className="space-y-12">
      {/* Search */}
      <div className="max-w-2xl mx-auto">
        <form className="flex gap-2">
          <div className="relative flex-grow">
            <Input type="text" placeholder="Sorunuzu yazın..." className="pl-4 pr-10 py-6 h-14 rounded-l-lg text-lg" />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <Button className="h-14 rounded-r-lg bg-vibetix-600 hover:bg-vibetix-700 text-lg px-6">Ara</Button>
        </form>
      </div>

      {/* Popular Questions */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sık Sorulan Sorular</h2>
        <div className="bg-white rounded-xl shadow p-6">
          <ul className="space-y-4">
            {popularQuestions.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="flex items-center text-gray-700 hover:text-vibetix-600 transition-colors"
                >
                  <span className="mr-2 text-orange-600 font-bold">•</span>
                  {item.question}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <Button asChild variant="outline" className="border-vibetix-500 text-vibetix-600 hover:bg-vibetix-50">
              <Link href="/faq">Tüm Soruları Gör</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Yardım Kategorileri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpCategories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Button asChild variant="link" className="text-vibetix-600 p-0 h-auto">
                  <Link href={category.link}>Detaylı Bilgi</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
