import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HelpCenter } from "@/components/help-center"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-gradient-to-r from-vibetix-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Yardım Merkezi</h1>
          <p className="text-xl text-center mt-2">Sorularınıza hızlı cevaplar</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <HelpCenter />
      </div>

      <Footer />
    </div>
  )
}
