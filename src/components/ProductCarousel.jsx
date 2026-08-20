import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductCarousel({ 
  title, 
  subtitle, 
  products, 
  badgeTag = "Bestsellers",
  viewAllLink = "/shop" 
}) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-[#FAF7F2] border-t border-[#F2EBD9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Carousel Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C26D70] bg-[#FBEAE7] px-3.5 py-1.5 rounded-full border border-[#F7D6D0] inline-block mb-2">
              {badgeTag}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2424]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#7A6C68] mt-1">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full bg-white border border-[#F2EBD9] hover:bg-[#FBEAE7] text-[#2D2424] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full bg-white border border-[#F2EBD9] hover:bg-[#FBEAE7] text-[#2D2424] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {viewAllLink && (
              <Link
                to={viewAllLink}
                className="text-xs font-bold uppercase tracking-wider text-[#C26D70] hover:text-[#b05c5f] flex items-center gap-1 bg-white px-4 py-2.5 rounded-full border border-[#F7D6D0] shadow-2xs transition-colors"
              >
                <span>VIEW ALL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-4 pt-1 snap-x scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[260px] sm:w-[280px] shrink-0 snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
