import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { useShop } from '../context/ShopContext';

export default function FeaturedGrid() {
  const { PRODUCTS } = useShop();

  return (
    <section className="py-16 bg-[#FAF7F2] border-t border-[#F2EBD9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C26D70] bg-[#FBEAE7] px-3.5 py-1.5 rounded-full border border-[#F7D6D0] inline-block mb-2">
              Handpicked Essentials ✨
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#2D2424]">
              Cute Finds You'll Love
            </h2>
            <p className="text-xs sm:text-sm text-[#7A6C68] mt-1">
              Top trending items loved by our Instagram community.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C26D70] hover:text-[#b05c5f] bg-white px-5 py-2.5 rounded-full border border-[#F7D6D0] shadow-2xs transition-colors self-start sm:self-auto"
          >
            <span>DISCOVER ALL PRODUCTS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-column Desktop Grid (2-col mobile, 3-col tablet) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {PRODUCTS.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
