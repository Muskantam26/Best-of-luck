import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Star, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function QuickSearchModal({ isOpen, onClose, onQuickView }) {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const searchResults = query.trim() === ''
    ? PRODUCTS.slice(0, 3)
    : PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        />

        <div className="flex min-h-full items-start justify-center p-4 pt-16 sm:p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-xl transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all border border-[#F2EBD9]"
          >
            {/* Search Input Bar */}
            <div className="p-4 sm:p-6 border-b border-[#F2EBD9] flex items-center gap-3">
              <Search className="w-5 h-5 text-[#C26D70]" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search cute mini calculator, tote bag, press-on nails..."
                className="w-full text-sm sm:text-base text-[#2D2424] placeholder-[#7A6C68] focus:outline-none"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-[#7A6C68] hover:text-[#2D2424]">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results */}
            <div className="p-4 sm:p-6 max-h-96 overflow-y-auto space-y-3">
              <p className="text-xs font-bold text-[#7A6C68] uppercase tracking-wider">
                {query ? `Search Results (${searchResults.length})` : 'Popular Searches:'}
              </p>

              {searchResults.length === 0 ? (
                <div className="text-center py-8 text-xs text-[#7A6C68]">
                  No cute finds matched "{query}". Try searching for "Tote", "Calculator", or "Nails"!
                </div>
              ) : (
                searchResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onQuickView(product);
                      onClose();
                    }}
                    className="p-3 rounded-2xl bg-[#FAF7F2] hover:bg-[#FBEAE7] border border-[#F2EBD9] hover:border-[#F7D6D0] transition-colors flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-12 h-12 rounded-xl object-cover" />
                      <div>
                        <h4 className="font-serif text-xs font-bold text-[#2D2424] group-hover:text-[#C26D70]">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-[#7A6C68] mt-0.5">
                          <span className="text-[#C26D70] font-semibold">{product.category}</span>
                          <span>• ₹{product.price}</span>
                        </div>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-[#C26D70] opacity-0 group-hover:opacity-100 transition-opacity" />
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
