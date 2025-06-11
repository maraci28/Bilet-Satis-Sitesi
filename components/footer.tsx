import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-vibetix-500">VibeTix</h3>
            <p className="text-gray-400 mb-4">
              Türkiye'nin en büyük bilet satış platformu. Konserler, festivaller ve daha fazlası için biletinizi hemen
              alın!
            </p>
            <div className="flex space-x-4">
              <Link href="/social/facebook" className="text-gray-400 hover:text-vibetix-500">
                <Facebook size={20} />
              </Link>
              <Link href="/social/instagram" className="text-gray-400 hover:text-vibetix-500">
                <Instagram size={20} />
              </Link>
              <Link href="/social/twitter" className="text-gray-400 hover:text-vibetix-500">
                <Twitter size={20} />
              </Link>
              <Link href="/social/youtube" className="text-gray-400 hover:text-vibetix-500">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="text-gray-400 hover:text-vibetix-500">
                  Etkinlikler
                </Link>
              </li>
              <li>
                <Link href="/artists" className="text-gray-400 hover:text-vibetix-500">
                  Sanatçılar
                </Link>
              </li>
              <li>
                <Link href="/venues" className="text-gray-400 hover:text-vibetix-500">
                  Mekanlar
                </Link>
              </li>
              <li>
                <Link href="/festivals" className="text-gray-400 hover:text-vibetix-500">
                  Festivaller
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Müşteri Hizmetleri</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-vibetix-500">
                  Yardım Merkezi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-vibetix-500">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-vibetix-500">
                  Sıkça Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-gray-400 hover:text-vibetix-500">
                  İade Politikası
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">İletişim</h3>
            <address className="not-italic text-gray-400">
              <p>Levent Mah. Büyükdere Cad.</p>
              <p>No:123 Şişli</p>
              <p>İstanbul, Türkiye</p>
              <p className="mt-2">Email: info@biletx.com</p>
              <p>Tel: +90 212 123 45 67</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} VibeTix. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
