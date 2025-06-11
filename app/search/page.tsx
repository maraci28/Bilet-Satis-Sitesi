import { SearchBar } from "@/components/search-bar"
import { SearchResults } from "@/components/search-results"

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || ""

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-vibetix-600 to-purple-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Arama Sonuçları</h1>
          <SearchBar />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <SearchResults query={query} />
      </div>
    </div>
  )
}
