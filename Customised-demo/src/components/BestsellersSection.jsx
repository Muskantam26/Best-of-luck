import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';

export default function BestsellersSection({ 
  onAddToCart, 
  onQuickView, 
  onToggleWishlist, 
  wishlistIds,
  selectedCategory,
  onResetCategory 
}) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Bestsellers', 'New Arrivals', 'Under ₹300', 'Stationery', 'Beauty & Self Care'];

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;

    if (selectedCategory && selectedCategory !== 'All') {
      list = list.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || p.name.toLowerCase().includes(selectedCategory.toLowerCase()));
    }

    switch (activeFilter) {
      case 'Bestsellers':
        return list.filter(p => p.badge === 'Bestseller' || p.badge === 'Popular');
      case 'New Arrivals':
        return list.filter(p => p.badge === 'New' || p.badge === 'Trending');
      case 'Under ₹300':
        return list.filter(p => p.price <= 300);
      case 'Stationery':
        return list.filter(p => p.category === 'Stationery');
      case 'Beauty & Self Care':
        return list.filter(p => p.category === 'Beauty & Self Care');
      default:
        return list;
    }
  }, [activeFilter, selectedCategory]);

  return (
    <section id="bestsellers" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF7F2] via-white to-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#C26D70] uppercase bg-[#FBEAE7] px-3.5 py-1 rounded-full border border-[#F7D6D0]">
            Handpicked Curations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2424]">
            Made to Make You Smile ✨
          </h2>
          <p className="text-sm sm:text-base text-[#7A6C68]">
            Our most-loved picks, chosen with a little extra love.
          </p>
        </div>

        {/* Category Active Filter Notification */}
        {selectedCategory && (
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="text-xs text-[#7A6C68]">Filtering by category:</span>
            <span className="text-xs font-bold text-[#C26D70] bg-[#FBEAE7] px-3 py-1 rounded-full border border-[#F7D6D0] flex items-center gap-1.5">
              {selectedCategory}
              <button 
                onClick={onResetCategory} 
                className="hover:bg-[#C26D70] hover:text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]"
                title="Clear filter"
              >
                ✕
              </button>
            </span>
          </div>
        )}

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                if (selectedCategory) onResetCategory();
              }}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                activeFilter === filter && !selectedCategory
                  ? 'bg-[#C26D70] text-white shadow-md shadow-[#C26D70]/20'
                  : 'bg-white text-[#594A47] hover:bg-[#FBEAE7] border border-[#F2EBD9]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlistIds.includes(product.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
