import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

export default function WishlistPage() {
  const { wishlistIds, PRODUCTS } = useShop();

  const wishlistedProducts = PRODUCTS.filter(p => wishlistIds.includes(p.id));

  return (
    <div className="py-8 sm:py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C26D70] bg-[#FBEAE7] px-3.5 py-1.5 rounded-full border border-[#F7D6D0] inline-block mb-2 sm:mb-3">
            Saved Finds ♡
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#2D2424]">
            Your Wishlist ({wishlistedProducts.length})
          </h1>
          <p className="text-xs text-[#7A6C68] mt-1">
            All your favorite cute stationery, accessories and pampering finds saved in one place.
          </p>
        </div>

        {wishlistedProducts.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-[#F2EBD9] shadow-xs space-y-6 max-w-md mx-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FBEAE7] flex items-center justify-center text-3xl sm:text-4xl mx-auto border border-[#F7D6D0]">
              💕
            </div>
            <div className="space-y-1.5">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D2424]">
                Nothing saved yet ♡
              </h3>
              <p className="text-xs text-[#7A6C68]">
                Tap the heart icon on any cute item while browsing to save it to your wishlist!
              </p>
            </div>
            <div>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-md transition-all"
              >
                <span>EXPLORE THE SHOP</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {wishlistedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
