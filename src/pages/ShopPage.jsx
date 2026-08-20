import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, X, ArrowUpDown, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

export default function ShopPage() {
  const { PRODUCTS } = useShop();
  
  // Filter States
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'stationery', name: 'Stationery' },
    { id: 'bags-accessories', name: 'Bags & Accessories' },
    { id: 'beauty', name: 'Beauty & Self Care' },
    { id: 'gifts', name: 'Gifting' }
  ];

  // Filtering & Sorting Logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    result = result.filter(p => p.price <= maxPrice);

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'bestsellers') {
      result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    } else if (sortBy === 'newest') {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [PRODUCTS, selectedCategory, maxPrice, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setMaxPrice(1000);
    setSortBy('featured');
  };

  return (
    <div className="py-10 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D70] bg-[#FBEAE7] px-3.5 py-1.5 rounded-full border border-[#F7D6D0] inline-block mb-3">
            Salty-Inspired Catalogue 🛍️
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2424]">
            Shop All Cute Finds
          </h1>
          <p className="text-xs sm:text-sm text-[#7A6C68] mt-2">
            Browse our entire collection of stationery, bags, press-on nails, and curated gift sets.
          </p>
        </div>

        {/* Top Controls Bar */}
        <div className="bg-white p-4 rounded-2xl border border-[#F2EBD9] shadow-2xs mb-8 flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            {/* Mobile Filter Toggle */}
            <button
              type="button"
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden px-4 py-2 bg-[#FBEAE7] hover:bg-[#F7D6D0] text-[#C26D70] font-bold text-xs rounded-full border border-[#F7D6D0] flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>

            <p className="text-xs text-[#7A6C68] font-medium">
              Showing <strong className="text-[#2D2424]">{filteredProducts.length}</strong> cute items
            </p>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <label className="text-xs text-[#7A6C68] font-bold uppercase tracking-wider hidden sm:inline">Sort By:</label>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-full border border-[#F7D6D0] bg-[#FAF7F2] text-xs font-bold text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#C26D70] cursor-pointer"
              >
                <option value="featured">Featured Picks</option>
                <option value="bestsellers">Bestselling First</option>
                <option value="newest">New Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

        </div>

        {/* Main Content Layout: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Left Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-3 bg-white p-6 rounded-3xl border border-[#F2EBD9] shadow-xs space-y-6 sticky top-28">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#F2EBD9]">
              <h3 className="font-serif text-base font-bold text-[#2D2424] flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#C26D70]" />
                <span>Filter Catalogue</span>
              </h3>
              <button
                type="button"
                onClick={resetFilters}
                className="text-[11px] text-[#C26D70] hover:underline font-semibold"
              >
                Reset All
              </button>
            </div>

            {/* Category Filter */}
            <div>
              <h4 className="text-xs font-bold text-[#2D2424] uppercase tracking-wider mb-3">
                Categories
              </h4>
              <div className="space-y-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                      selectedCategory === cat.id
                        ? 'bg-[#FBEAE7] text-[#C26D70] font-bold border border-[#F7D6D0]'
                        : 'text-[#594A47] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <span>{cat.name}</span>
                    {selectedCategory === cat.id && <Sparkles className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="pt-4 border-t border-[#F2EBD9]">
              <div className="flex items-center justify-between text-xs font-bold text-[#2D2424] mb-2">
                <span>Max Price</span>
                <span className="text-[#C26D70]">₹{maxPrice}</span>
              </div>
              <input
                type="range"
                min={150}
                max={1000}
                step={50}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#C26D70] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#7A6C68] mt-1 font-medium">
                <span>₹150</span>
                <span>₹1000</span>
              </div>
            </div>

          </div>

          {/* Right Product Grid (4 columns desktop) */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-[#F2EBD9] space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FBEAE7] flex items-center justify-center text-2xl mx-auto border border-[#F7D6D0]">
                  🛍️
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2D2424]">No cute items found</h3>
                <p className="text-xs text-[#7A6C68]">Try adjusting your price slider or selected category filter.</p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-[#C26D70] text-white text-xs font-bold rounded-full hover:bg-[#b05c5f] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Mobile Drawer Filter */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-xs" onClick={() => setMobileFilterOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-xs bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#F2EBD9]">
                  <h3 className="font-serif text-lg font-bold text-[#2D2424]">Filters</h3>
                  <button type="button" onClick={() => setMobileFilterOpen(false)} className="p-2 rounded-full hover:bg-[#FAF7F2]">
                    <X className="w-5 h-5 text-[#2D2424]" />
                  </button>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#2D2424] uppercase tracking-wider mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setMobileFilterOpen(false);
                        }}
                        className={`w-full text-left p-3 rounded-xl text-xs font-medium ${
                          selectedCategory === cat.id ? 'bg-[#FBEAE7] text-[#C26D70] font-bold' : 'bg-[#FAF7F2] text-[#594A47]'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#2D2424] mb-2">
                    <span>Max Price</span>
                    <span className="text-[#C26D70]">₹{maxPrice}</span>
                  </div>
                  <input
                    type="range"
                    min={150}
                    max={1000}
                    step={50}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-[#C26D70]"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-[#F2EBD9] flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    resetFilters();
                    setMobileFilterOpen(false);
                  }}
                  className="flex-1 py-3 text-xs font-bold text-[#7A6C68] bg-[#FAF7F2] rounded-full"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  className="flex-1 py-3 text-xs font-bold text-white bg-[#C26D70] rounded-full shadow-md"
                >
                  Apply Filters
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
