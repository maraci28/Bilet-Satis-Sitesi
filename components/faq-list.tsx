"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const faqCategories = [
  {
    id: "general",
    name: "Genel",
  },
  {
    id: "tickets",
    name: "Biletler",
  },
  {
    id: "payment",
    name: "Ödeme",
  },
  {
    id: "refund",
    name: "İade",
  },
  {
    id: "account",
    name: "Hesap",
  },
]

const faqItems = [
  {
    id: 1,
    question: "Biletimi nasıl satın alabilirim?",
    answer:
      "BiletX üzerinden bilet satın almak çok kolay! İstediğiniz etkinliği seçin, bilet türünü ve adedini belirleyin, ödeme adımlarını tamamlayın. Biletiniz anında e-posta adresinize gönderilecektir.",
    category: "tickets",
  },
  {
    id: 2,
    question: "Biletimi nasıl iptal edebilirim?",
    answer:
      "Biletinizi etkinlik tarihinden 48 saat öncesine kadar iptal edebilirsiniz. Profil sayfanızdan 'Biletlerim' bölümüne giderek iptal etmek istediğiniz bileti seçin ve 'İptal Et' butonuna tıklayın. İade işlemi 3-5 iş günü içinde gerçekleştirilecektir.",
    category: "refund",
  },
  {
    id: 3,
    question: "Hangi ödeme yöntemlerini kullanabilirim?",
    answer:
      "BiletX'te kredi kartı, banka kartı, havale/EFT ve çeşitli online ödeme sistemleri ile ödeme yapabilirsiniz. Tüm ödemeleriniz 256-bit SSL güvenlik sertifikası ile korunmaktadır.",
    category: "payment",
  },
  {
    id: 4,
    question: "Biletimi başkasına devredebilir miyim?",
    answer:
      "Evet, biletinizi başkasına devredebilirsiniz. Profil sayfanızdan 'Biletlerim' bölümüne giderek ilgili biletin detaylarına tıklayın ve 'Bileti Devret' seçeneğini kullanın. Devretmek istediğiniz kişinin e-posta adresini girerek işlemi tamamlayabilirsiniz.",
    category: "tickets",
  },
  {
    id: 5,
    question: "Etkinlik ertelenirse ne olur?",
    answer:
      "Etkinlik ertelenirse, size e-posta ile bilgilendirme yapılacaktır. Biletiniz otomatik olarak yeni tarih için geçerli olacaktır. Eğer yeni tarihte katılamayacaksanız, etkinlik tarihinden 48 saat öncesine kadar biletinizi iade edebilirsiniz.",
    category: "general",
  },
  {
    id: 6,
    question: "Biletimi kaybettim, ne yapmalıyım?",
    answer:
      "Endişelenmeyin! Biletleriniz hesabınızda kayıtlıdır. Profil sayfanızdan 'Biletlerim' bölümüne giderek biletinizi tekrar görüntüleyebilir ve indirebilirsiniz. Ayrıca e-posta adresinize gönderilen bileti de kontrol edebilirsiniz.",
    category: "tickets",
  },
  {
    id: 7,
    question: "Şifremi unuttum, ne yapmalıyım?",
    answer:
      "Giriş sayfasında 'Şifremi Unuttum' seçeneğine tıklayarak e-posta adresinizi girin. Size şifre sıfırlama bağlantısı içeren bir e-posta gönderilecektir. Bu bağlantıya tıklayarak yeni şifrenizi belirleyebilirsiniz.",
    category: "account",
  },
  {
    id: 8,
    question: "İade süreci ne kadar sürer?",
    answer:
      "İade işlemleri, iptal talebinizin onaylanmasından sonra 3-5 iş günü içinde gerçekleştirilir. İade tutarı, ödeme yaptığınız karta veya hesaba aktarılır. Bazı durumlarda bankanızın işlem süresi nedeniyle bu süre uzayabilir.",
    category: "refund",
  },
  {
    id: 9,
    question: "Etkinlik günü yanımda ne getirmeliyim?",
    answer:
      "Etkinliğe gelirken biletinizin çıktısını veya mobil uygulamadaki dijital biletinizi ve kimliğinizi yanınızda bulundurmanız yeterlidir. Bazı etkinlikler için sadece QR kodunuzu göstermeniz yeterli olabilir.",
    category: "general",
  },
  {
    id: 10,
    question: "Ödeme yaparken sorun yaşıyorum, ne yapmalıyım?",
    answer:
      "Ödeme sırasında sorun yaşıyorsanız, farklı bir tarayıcı kullanmayı deneyin veya mobil uygulamamızı kullanın. Sorun devam ederse, kartınızın online ödemelere açık olduğundan emin olun veya farklı bir ödeme yöntemi deneyin. Hala sorun yaşıyorsanız, müşteri hizmetlerimizle iletişime geçebilirsiniz.",
    category: "payment",
  },
]

export function FaqList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("general")

  // Filter FAQ items based on search term and active category
  const filteredFaqs = faqItems.filter((faq) => {
    const matchesSearch =
      searchTerm === "" ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = activeCategory === "all" || faq.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="max-w-3xl mx-auto">
      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <Input
            type="text"
            placeholder="Soru ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-4 pr-10 py-2"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>

      {/* Categories */}
      <Tabs defaultValue="general" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
        <TabsList className="w-full justify-start overflow-auto">
          <TabsTrigger value="all">Tümü</TabsTrigger>
          {faqCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* FAQ Accordion */}
      <div className="bg-white rounded-xl shadow p-6">
        {filteredFaqs.length > 0 ? (
          <Accordion type="single" collapsible className="w-full">
            {filteredFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger className="text-left font-medium">
                  <span className="mr-2 text-vibetix-600 font-bold">•</span>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600">Aramanızla eşleşen soru bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  )
}
