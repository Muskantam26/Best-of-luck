import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, ShoppingBag, Eye } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onAddToCart, 
  onQuickView, 
  onToggleWishlist, 
  isWishlisted 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-3xl p-3.5 sm:p-4 border border-[#F2EBD9] hover:border-[#F7D6D0] shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
    >
      {/* Product Image Container */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#FAF7F2] mb-3.5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
        />
        
        {/* Badge Label */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-xs ${
              product.badge === 'Bestseller' 
                ? 'bg-[#F7D6D0] text-[#2D2424]' 
                : product.badge === 'New' 
                ? 'bg-[#EFE8F8] text-[#594A47]'
                : 'bg-[#F5EFE6] text-[#7A6C68]'
            }`}>
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Heart Toggle Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
            isWishlisted 
              ? 'bg-[#C26D70] text-white opacity-100' 
              : 'bg-white/90 text-[#594A47] hover:text-[#C26D70] opacity-80 group-hover:opacity-100 hover:bg-white'
          }`}
          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
        </button>

        {/* Quick View Button on Image Hover Overlay */}
        <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
          <button
            type="button"
            onClick={() => onQuickView(product)}
            className="bg-white/95 text-[#2D2424] hover:bg-[#C26D70] hover:text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="space-y-2 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-[#7A6C68] mb-1">
            <span className="font-medium text-[#C26D70]">{product.category}</span>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-[#D98284] fill-[#D98284]" />
              <span className="font-semibold text-[#2D2424] text-[11px]">{product.rating}</span>
              <span className="text-[10px] opacity-75">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-serif text-base font-bold text-[#2D2424] group-hover:text-[#C26D70] transition-colors line-clamp-1 cursor-pointer"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#7A6C68] line-clamp-1 mt-0.5">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Add to Cart */}
        <div className="pt-3 border-t border-[#F2EBD9] flex items-center justify-between mt-2">
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-lg font-bold text-[#2D2424]">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#7A6C68] line-through font-medium">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="bg-[#FBEAE7] hover:bg-[#C26D70] text-[#C26D70] hover:text-white px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 border border-[#F7D6D0] hover:border-[#C26D70] shadow-2xs hover:shadow"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>

    </motion.div>
  );
}
