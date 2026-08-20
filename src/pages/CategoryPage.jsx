import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Sparkles, ArrowLeft } from 'lucide-react';

export default function CategoryPage() {
  const { slug } = useParams();
  const { PRODUCTS } = useShop();

  const categoryMeta = CATEGORIES.find(c => c.slug === slug) || {
    name: slug ? slug.toUpperCase().replace('-', ' ') : 'Category',
    emoji: '✨',
    description: 'Explore our aesthetic collection of handpicked cute products.'
  };

  const categoryProducts = PRODUCTS.filter(p => p.category === slug || (slug === 'gifts' && p.category === 'gifts'));

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link to="/shop" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A6C68] hover:text-[#C26D70] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* Category Header Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#F2EBD9] shadow-sm mb-10 text-center relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-[#FBEAE7] border border-[#F7D6D0] flex items-center justify-center text-3xl mx-auto mb-4">
            {categoryMeta.emoji}
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D70] bg-[#FBEAE7] px-3.5 py-1.5 rounded-full border border-[#F7D6D0] inline-block mb-3">
            Category Edit
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2424]">
            {categoryMeta.name}
          </h1>

          <p className="text-xs sm:text-sm text-[#7A6C68] max-w-xl mx-auto mt-2 leading-relaxed">
            {categoryMeta.description}
          </p>

          <p className="text-xs font-bold text-[#C26D70] mt-4">
            Showing {categoryProducts.length > 0 ? categoryProducts.length : PRODUCTS.length} curated items
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {(categoryProducts.length > 0 ? categoryProducts : PRODUCTS).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}
