import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Heart, ShoppingBag, Gift, Check, Sparkles, Truck, ShieldCheck, RefreshCw } from 'lucide-react';

export default function ProductDetailModal({ 
  product, 
  onClose, 
  onAddToCart, 
  onBuyNow, 
  onToggleWishlist, 
  isWishlisted 
}) {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || 'Default');
  const [includeGiftWrap, setIncludeGiftWrap] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, quantity, selectedColor, includeGiftWrap);
  };

  const handleBuyNow = () => {
    onBuyNow(product, quantity, selectedColor, includeGiftWrap);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all border border-[#F2EBD9] my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-[#FBEAE7] text-[#2D2424] flex items-center justify-center transition-colors shadow-sm"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Product Image Section */}
              <div className="relative bg-[#FAF7F2] p-6 sm:p-8 flex items-center justify-center min-h-[320px]">
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-[#F7D6D0] text-[#2D2424] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {product.badge}
                  </span>
                )}
                
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[340px] w-auto object-contain rounded-2xl drop-shadow-md hover:scale-105 transition-transform duration-500"
                />

                <button
                  type="button"
                  onClick={() => onToggleWishlist(product)}
                  className={`absolute bottom-4 right-4 p-3 rounded-full shadow-md transition-all ${
                    isWishlisted ? 'bg-[#C26D70] text-white' : 'bg-white text-[#594A47] hover:bg-[#FBEAE7]'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-white' : ''}`} />
                </button>
              </div>

              {/* Product Details Section */}
              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  {/* Category & Ratings */}
                  <div className="flex items-center justify-between text-xs text-[#7A6C68] mb-2">
                    <span className="font-semibold text-[#C26D70] uppercase tracking-wider">{product.category}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#D98284] fill-[#D98284]" />
                      <span className="font-bold text-[#2D2424]">{product.rating}</span>
                      <span className="text-[#7A6C68]">({product.reviewsCount} reviews)</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2424] leading-tight">
                    {product.name}
                  </h2>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mt-3">
                    <span className="font-serif text-2xl font-bold text-[#2D2424]">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-[#7A6C68] line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                    <span className="text-xs text-[#C26D70] font-semibold bg-[#FBEAE7] px-2.5 py-0.5 rounded-full ml-2">
                      Save ₹{product.originalPrice - product.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#594A47] mt-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  {product.highlights && (
                    <div className="mt-4 space-y-1.5">
                      <p className="text-xs font-bold text-[#2D2424] uppercase tracking-wider">Product Highlights:</p>
                      <ul className="grid grid-cols-1 gap-1 text-xs text-[#594A47]">
                        {product.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#C26D70]" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Color Selector if available */}
                  {product.colors && product.colors.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs font-bold text-[#2D2424] uppercase tracking-wider mb-2">Select Shade/Color:</p>
                      <div className="flex items-center gap-2">
                        {product.colors.map((color) => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                              selectedColor === color
                                ? 'bg-[#C26D70] text-white shadow-sm'
                                : 'bg-[#FAF7F2] text-[#594A47] hover:bg-[#FBEAE7] border border-[#F2EBD9]'
                            }`}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Gift Wrap Checkbox */}
                  <div className="mt-4 p-3 bg-[#FBEAE7]/60 rounded-2xl border border-[#F7D6D0] flex items-center justify-between">
                    <label className="flex items-center gap-2 text-xs font-medium text-[#2D2424] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={includeGiftWrap}
                        onChange={(e) => setIncludeGiftWrap(e.target.checked)}
                        className="rounded text-[#C26D70] focus:ring-[#C26D70]"
                      />
                      <Gift className="w-4 h-4 text-[#C26D70]" />
                      <span>Add Luxury Gift Box Wrap + Ribbon (+₹49)</span>
                    </label>
                  </div>
                </div>

                {/* Actions & Quantity */}
                <div className="space-y-4 pt-4 border-t border-[#F2EBD9]">
                  <div className="flex items-center gap-4">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-[#F7D6D0] rounded-full p-1 bg-[#FAF7F2]">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-full bg-white hover:bg-[#FBEAE7] text-[#2D2424] font-bold text-sm flex items-center justify-center shadow-2xs"
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-bold text-sm text-[#2D2424]">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 rounded-full bg-white hover:bg-[#FBEAE7] text-[#2D2424] font-bold text-sm flex items-center justify-center shadow-2xs"
                      >
                        +
                      </button>
                    </div>

                    {/* Add to Cart */}
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 py-3.5 px-6 bg-[#FBEAE7] hover:bg-[#F7D6D0] text-[#2D2424] font-semibold text-sm rounded-full transition-colors flex items-center justify-center gap-2 border border-[#F7D6D0]"
                    >
                      <ShoppingBag className="w-4 h-4 text-[#C26D70]" />
                      <span>Add to Bag</span>
                    </button>
                  </div>

                  {/* Buy Now Direct Button */}
                  <button
                    onClick={handleBuyNow}
                    className="w-full py-3.5 px-6 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-semibold text-sm rounded-full transition-all shadow-md shadow-[#C26D70]/20 flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Buy Now • Instant Checkout</span>
                  </button>

                  {/* Shipping Badges */}
                  <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] text-[#7A6C68] text-center">
                    <div className="flex flex-col items-center gap-1">
                      <Truck className="w-4 h-4 text-[#C26D70]" />
                      <span>Fast Shipping</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-[#C26D70]" />
                      <span>100% Authentic</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <RefreshCw className="w-4 h-4 text-[#C26D70]" />
                      <span>Easy 7-Day Return</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
