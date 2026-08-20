import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useShop();
  const [added, setAdded] = useState(false);

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.colors ? product.colors[0] : 'Default');
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-[#F2EBD9] transition-all duration-300 flex flex-col justify-between"
    >
      <div className="relative">
        
        {/* Product Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider bg-[#FBEAE7] text-[#C26D70] border border-[#F7D6D0] px-2.5 py-1 rounded-full shadow-2xs">
            {product.badge}
          </span>
        )}

        {/* Wishlist Heart Button */}
        <button
          type="button"
          onClick={handleToggleWishlist}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center transition-transform hover:scale-110 shadow-sm ${
            isWishlisted ? 'text-[#C26D70]' : 'text-[#7A6C68] hover:text-[#C26D70]'
          }`}
          title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#C26D70]' : ''}`} />
        </button>

        {/* Product Image Link */}
        <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-[#FAF7F2] aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
          />

          {/* Quick View Button Overlay */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              type="button"
              onClick={handleQuickView}
              className="px-4 py-2 bg-white/95 text-[#2D2424] font-bold text-xs rounded-full shadow-md hover:bg-[#FBEAE7] hover:text-[#C26D70] transition-all flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </button>
          </div>
        </Link>

      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 space-y-3">
        
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs mb-1">
            <div className="flex items-center text-[#D98284]">
              <Star className="w-3.5 h-3.5 fill-[#D98284]" />
            </div>
            <span className="font-bold text-[#2D2424] text-[11px]">{product.rating}</span>
            <span className="text-[#7A6C68] text-[10px]">({product.reviewsCount})</span>
          </div>

          {/* Title */}
          <Link to={`/product/${product.id}`}>
            <h3 className="font-serif text-sm font-bold text-[#2D2424] hover:text-[#C26D70] transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>

          {/* Short Description */}
          <p className="text-[11px] text-[#7A6C68] line-clamp-1 mt-1">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing & Add To Cart Button */}
        <div className="pt-2 border-t border-[#F2EBD9] flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-base font-bold text-[#2D2424]">
                ₹{product.price}
              </span>
              {product.oldPrice && (
                <span className="text-xs text-[#7A6C68] line-through font-medium">
                  ₹{product.oldPrice}
                </span>
              )}
            </div>
            {product.discount && (
              <span className="text-[10px] text-[#C26D70] font-bold block">
                {product.discount}
              </span>
            )}
          </div>

          {/* Add to Bag Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className={`py-2 px-3.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 shadow-2xs ${
              added 
                ? 'bg-[#4A7C59] text-white' 
                : 'bg-[#FBEAE7] hover:bg-[#C26D70] text-[#C26D70] hover:text-white border border-[#F7D6D0]'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{added ? 'Added ✓' : 'Add'}</span>
          </button>
        </div>

      </div>
    </motion.div>
  );
}
