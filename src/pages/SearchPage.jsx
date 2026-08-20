import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

export default function SearchPage() {
  const { PRODUCTS } = useShop();
  const [query, setQuery] = useState('');

  const searchResults = query.trim() === ''
    ? PRODUCTS
    : PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Header */}
        <div className="max-w-2xl mx-auto mb-10 text-center space-y-4">
          <h1 className="font-serif text-3xl font-bold text-[#2D2424]">
            Search Catalogue
          </h1>

          <div className="relative bg-white rounded-full border border-[#F7D6D0] p-2 shadow-sm flex items-center gap-3">
            <Search className="w-5 h-5 text-[#C26D70] ml-3 shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search calculator, tote bag, press-on nails, sling bag..."
              className="w-full text-sm text-[#2D2424] placeholder-[#7A6C68] focus:outline-none bg-transparent"
            />
            {query && (
              <button onClick={() => setQuery('')} className="p-2 text-[#7A6C68] hover:text-[#2D2424]">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <p className="text-xs text-[#7A6C68]">
            {query ? `Search results for "${query}" (${searchResults.length} items found)` : 'Showing popular products'}
          </p>
        </div>

        {/* Results Grid */}
        {searchResults.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#F2EBD9] shadow-sm max-w-md mx-auto space-y-3">
            <div className="text-3xl">🔎</div>
            <h3 className="font-serif text-lg font-bold text-[#2D2424]">No cute finds matched "{query}"</h3>
            <p className="text-xs text-[#7A6C68]">Try searching for "Calculator", "Tote", "Nails", or "Pouch"!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
