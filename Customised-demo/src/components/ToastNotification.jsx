import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShoppingBag, X } from 'lucide-react';

export default function ToastNotification({ toast, onClose, onOpenCart }) {
  if (!toast) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="fixed bottom-6 right-6 z-50 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-[#F7D6D0] flex items-center gap-3 max-w-sm"
      >
        <div className="w-10 h-10 rounded-xl bg-[#FBEAE7] flex items-center justify-center text-[#C26D70] font-bold shrink-0">
          🛍️
        </div>

        <div className="flex-1 overflow-hidden">
          <p className="text-xs font-bold text-[#2D2424] flex items-center gap-1">
            <span>Added to your little collection ♡</span>
          </p>
          <p className="text-[11px] text-[#7A6C68] truncate mt-0.5">
            {toast.productName}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={onOpenCart}
            className="px-3 py-1.5 bg-[#C26D70] hover:bg-[#b05c5f] text-white text-[11px] font-semibold rounded-full shadow-xs transition-colors"
          >
            View Bag
          </button>
          <button
            onClick={onClose}
            className="p-1 text-[#7A6C68] hover:text-[#2D2424] rounded-full"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
