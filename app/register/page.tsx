import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Yeni hesap oluşturun</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Veya{" "}
            <a href="/login" className="font-medium text-orange-600 hover:text-orange-500">
              mevcut hesabınızla giriş yapın
            </a>
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}
