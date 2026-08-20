import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

export default function WishlistDrawer() {
  const { 
    isWishlistOpen, 
    setIsWishlistOpen, 
    wishlistIds, 
    toggleWishlist, 
    addToCart,
    PRODUCTS 
  } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistedProducts = PRODUCTS.filter(p => wishlistIds.includes(p.id));

  const handleMoveAllToCart = () => {
    wishlistedProducts.forEach(product => {
      addToCart(product, 1, product.colors ? product.colors[0] : 'Default');
      toggleWishlist(product);
    });
    setIsWishlistOpen(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Overlay backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsWishlistOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-4 sm:p-6 bg-white border-b border-[#F2EBD9] flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FBEAE7] flex items-center justify-center border border-[#F7D6D0]">
                  <Heart className="w-4 h-4 text-[#C26D70] fill-[#C26D70]" />
                </div>
                <div>
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-[#2D2424]">
                    Your Saved Finds
                  </h2>
                  <p className="text-[10px] sm:text-xs text-[#7A6C68]">
                    {wishlistedProducts.length} {wishlistedProducts.length === 1 ? 'item' : 'items'} saved ♡
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsWishlistOpen(false)}
                className="w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#FBEAE7] text-[#2D2424] flex items-center justify-center transition-colors border border-[#F2EBD9]"
                title="Close Wishlist"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5">
              {wishlistedProducts.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                  <div className="w-20 h-20 rounded-full bg-[#FBEAE7] flex items-center justify-center text-3xl border border-[#F7D6D0] animate-pulse">
                    💕
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-bold text-[#2D2424]">Your Wishlist is Empty</h3>
                    <p className="text-xs text-[#7A6C68] max-w-xs px-4">
                      Tap the heart icon on any cute product to save your favorites here for later!
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsWishlistOpen(false)}
                    className="px-6 py-2.5 bg-[#C26D70] text-white text-xs font-bold rounded-full shadow-md hover:bg-[#b05c5f] transition-all"
                  >
                    Start Browsing
                  </button>
                </div>
              ) : (
                wishlistedProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#F2EBD9] shadow-2xs flex gap-3.5 items-center group hover:border-[#F7D6D0] transition-all"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-20 h-20 rounded-xl object-cover bg-[#FAF7F2] border border-[#F7D6D0] shrink-0" 
                    />

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-serif text-xs sm:text-sm font-bold text-[#2D2424] truncate">
                          {product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => toggleWishlist(product)}
                          className="text-[#7A6C68] hover:text-[#C26D70] p-1 rounded-full hover:bg-[#FBEAE7] transition-colors shrink-0"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-sm font-bold text-[#2D2424]">
                          ₹{product.price}
                        </span>
                        {product.oldPrice && (
                          <span className="text-[11px] text-[#7A6C68] line-through font-medium">
                            ₹{product.oldPrice}
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          addToCart(product, 1, product.colors ? product.colors[0] : 'Default');
                          toggleWishlist(product);
                        }}
                        className="w-full mt-1.5 py-1.5 px-3 bg-[#FBEAE7] hover:bg-[#C26D70] text-[#C26D70] hover:text-white text-xs font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 border border-[#F7D6D0]"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Move to Shopping Bag</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer Actions */}
            {wishlistedProducts.length > 0 && (
              <div className="p-4 sm:p-6 bg-white border-t border-[#F2EBD9] space-y-2.5 shadow-lg">
                <button
                  type="button"
                  onClick={handleMoveAllToCart}
                  className="w-full py-3.5 px-4 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>MOVE ALL TO SHOPPING BAG</span>
                </button>

                <Link
                  to="/wishlist"
                  onClick={() => setIsWishlistOpen(false)}
                  className="w-full py-2.5 px-4 bg-[#FAF7F2] hover:bg-[#FBEAE7] text-[#2D2424] font-bold text-xs rounded-full border border-[#F7D6D0] flex items-center justify-center gap-1.5 transition-all text-center block"
                >
                  <span>View Full Wishlist Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
