import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FaqList } from "@/components/faq-list"

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-gradient-to-r from-vibetix-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Sıkça Sorulan Sorular</h1>
          <p className="text-xl text-center mt-2">Merak ettiğiniz soruların cevapları</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <FaqList />
      </div>

      <Footer />
    </div>
  )
}
