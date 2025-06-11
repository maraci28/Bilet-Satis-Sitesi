import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardContent className="p-8">
          <Tabs defaultValue="general" className="mb-8">
            <TabsList className="w-full justify-start overflow-auto mb-6">
              <TabsTrigger value="general">Genel Koşullar</TabsTrigger>
              <TabsTrigger value="cancellation">İptal Koşulları</TabsTrigger>
              <TabsTrigger value="postponement">Erteleme Durumu</TabsTrigger>
              <TabsTrigger value="process">İade Süreci</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Genel İade Koşulları</h2>
                <p className="text-gray-600 mb-4">
                  BiletX olarak, müşteri memnuniyetini en üst düzeyde tutmayı hedefliyoruz. Aşağıdaki koşullar
                  çerçevesinde bilet iade ve değişim işlemlerinizi gerçekleştirebilirsiniz.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    Biletler, etkinlik tarihinden <strong>48 saat öncesine kadar</strong> iade edilebilir.
                  </li>
                  <li>
                    İade işlemlerinde, bilet bedelinin <strong>%10'u</strong> hizmet bedeli olarak kesilerek kalan tutar
                    iade edilir.
                  </li>
                  <li>
                    Etkinlik iptal edildiği takdirde, bilet bedeli <strong>tam olarak</strong> iade edilir.
                  </li>
                  <li>
                    İade işlemleri, ödeme yaptığınız kart veya hesaba <strong>3-5 iş günü</strong> içerisinde yapılır.
                  </li>
                  <li>
                    Promosyon kodları veya hediye çekleri ile alınan biletlerin iadesi, aynı şekilde promosyon kodu veya
                    hediye çeki olarak yapılır.
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="cancellation" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">İptal Koşulları</h2>
                <p className="text-gray-600 mb-4">
                  Etkinlik iptali durumunda izlenecek süreç ve koşullar aşağıda belirtilmiştir:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    Etkinliğin organizatör tarafından iptal edilmesi durumunda, bilet bedeli <strong>tam olarak</strong>{" "}
                    iade edilir.
                  </li>
                  <li>
                    İptal bilgisi, etkinlik tarihinden önce e-posta ve SMS yoluyla tüm bilet sahiplerine bildirilir.
                  </li>
                  <li>
                    İptal edilen etkinlikler için otomatik iade süreci başlatılır, ayrıca talepte bulunmanıza gerek
                    yoktur.
                  </li>
                  <li>
                    Mücbir sebeplerden (doğal afet, terör olayları, salgın hastalık vb.) dolayı iptal edilen
                    etkinliklerde de bilet bedeli tam olarak iade edilir.
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="postponement" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Erteleme Durumu</h2>
                <p className="text-gray-600 mb-4">
                  Etkinliğin ertelenmesi durumunda izlenecek süreç ve koşullar aşağıda belirtilmiştir:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    Etkinliğin ertelenmesi durumunda, biletiniz otomatik olarak yeni tarih için geçerli olacaktır.
                  </li>
                  <li>Erteleme bilgisi, e-posta ve SMS yoluyla tüm bilet sahiplerine bildirilir.</li>
                  <li>
                    Yeni tarihte etkinliğe katılamayacak olmanız durumunda, yeni etkinlik tarihinden{" "}
                    <strong>48 saat öncesine kadar</strong> biletinizi iade edebilirsiniz.
                  </li>
                  <li>
                    Ertelenen etkinlikler için iade talebinde bulunmak istiyorsanız, profil sayfanızdan "Biletlerim"
                    bölümüne giderek ilgili bilet için "İade Talep Et" seçeneğini kullanabilirsiniz.
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="process" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">İade Süreci</h2>
                <p className="text-gray-600 mb-4">İade işlemleriniz için izlemeniz gereken adımlar:</p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                  <li>
                    Profil sayfanızdan <strong>"Biletlerim"</strong> bölümüne gidin.
                  </li>
                  <li>
                    İade etmek istediğiniz bileti seçin ve <strong>"İade Talep Et"</strong> butonuna tıklayın.
                  </li>
                  <li>İade gerekçenizi seçin ve varsa açıklama ekleyin.</li>
                  <li>
                    İade talebiniz incelendikten sonra onaylanırsa, ödeme yaptığınız kart veya hesaba{" "}
                    <strong>3-5 iş günü</strong> içerisinde iade işlemi gerçekleştirilecektir.
                  </li>
                  <li>
                    İade işleminizin durumunu <strong>"Siparişlerim"</strong> bölümünden takip edebilirsiniz.
                  </li>
                </ol>
                <p className="mt-4 text-gray-600">
                  İade süreciyle ilgili sorularınız için <strong>info@biletx.com</strong> adresine e-posta gönderebilir
                  veya <strong>+90 212 123 45 67</strong> numaralı telefondan müşteri hizmetlerimize ulaşabilirsiniz.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
