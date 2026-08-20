import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function CollectionDetailPage() {
  const { slug } = useParams();
  const { PRODUCTS } = useShop();

  let title = 'Curated Collection';
  let subtitle = 'Cute items selected for your everyday joy.';
  let items = PRODUCTS;

  if (slug === 'bestsellers') {
    title = "Everyone's Loving These ♡";
    subtitle = 'Our top bestselling items rated 5-stars by cuties across India.';
    items = PRODUCTS.filter(p => p.isBestseller);
  } else if (slug === 'new-arrivals') {
    title = 'Just Dropped ✨';
    subtitle = 'Be the first to discover our newest cute aesthetic releases.';
    items = PRODUCTS.filter(p => p.isNew);
  }

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6">
          <Link to="/collections" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A6C68] hover:text-[#C26D70] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Collections</span>
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#F2EBD9] shadow-sm mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D70] bg-[#FBEAE7] px-3.5 py-1.5 rounded-full border border-[#F7D6D0] inline-block mb-3">
            Collection Edit ✨
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2424]">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-[#7A6C68] max-w-lg mx-auto mt-2">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}
