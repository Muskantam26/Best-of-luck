import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function WishlistDrawer({ 
  isOpen, 
  onClose, 
  wishlistIds, 
  onToggleWishlist, 
  onAddToCart 
}) {
  if (!isOpen) return null;

  const wishlistedProducts = PRODUCTS.filter(p => wishlistIds.includes(p.id));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-6 bg-white border-b border-[#F2EBD9] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#C26D70] fill-[#C26D70]" />
                <h2 className="font-serif text-xl font-bold text-[#2D2424]">
                  Your Wishlist ({wishlistedProducts.length})
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#FBEAE7] text-[#2D2424] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {wishlistedProducts.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-20 h-20 rounded-full bg-[#FBEAE7] flex items-center justify-center text-3xl">
                    💕
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#2D2424]">Your Wishlist is Empty</h3>
                  <p className="text-xs text-[#7A6C68] max-w-xs">
                    Tap the heart icon on any product to save your favorite cute items here!
                  </p>
                </div>
              ) : (
                wishlistedProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-white p-4 rounded-2xl border border-[#F2EBD9] shadow-2xs flex gap-4 items-center"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-16 h-16 rounded-xl object-cover bg-[#FAF7F2] border border-[#F7D6D0]" 
                    />

                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif text-sm font-bold text-[#2D2424] truncate">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => onToggleWishlist(product)}
                          className="text-[#7A6C68] hover:text-[#C26D70] p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="font-serif text-sm font-bold text-[#2D2424] block mt-1">
                        ₹{product.price}
                      </span>

                      <button
                        onClick={() => {
                          onAddToCart(product);
                          onToggleWishlist(product);
                        }}
                        className="mt-2 w-full py-1.5 bg-[#FBEAE7] hover:bg-[#C26D70] text-[#C26D70] hover:text-white text-xs font-semibold rounded-full transition-colors flex items-center justify-center gap-1.5"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
