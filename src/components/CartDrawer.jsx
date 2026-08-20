import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { openCheckout } from '../store/checkoutSlice';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem
}) {
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 79;
  const finalTotal = subtotal + shippingFee;

  const handleCheckoutClick = () => {
    onClose();
    dispatch(openCheckout());
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col justify-between"
          >
            {/* Drawer Header */}
            <div className="p-6 bg-white border-b border-[#F2EBD9] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#C26D70]" />
                <h2 className="font-serif text-xl font-bold text-[#2D2424]">
                  Your Shopping Bag ({cartItems.length})
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#FBEAE7] text-[#2D2424] flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Bar */}
            <div className="bg-[#FBEAE7] p-4 border-b border-[#F7D6D0]">
              <div className="flex items-center justify-between text-xs font-semibold text-[#2D2424] mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C26D70]" />
                  {subtotal >= freeShippingThreshold 
                    ? "✨ You unlocked FREE Shipping!" 
                    : `Add ₹${freeShippingThreshold - subtotal} more for FREE Shipping!`}
                </span>
                <span className="text-[#C26D70] font-bold">{Math.round(progressPercent)}%</span>
              </div>
              <div className="w-full h-2 bg-white rounded-full overflow-hidden border border-[#F7D6D0]">
                <div 
                  className="h-full bg-[#C26D70] transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-20 h-20 rounded-full bg-[#FBEAE7] flex items-center justify-center text-3xl border border-[#F7D6D0]">
                    🛍️
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#2D2424]">Your bag is empty</h3>
                  <p className="text-xs text-[#7A6C68] max-w-xs">
                    Explore our cute stationery, accessories, and gifts to add joy to your bag!
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-[#C26D70] text-white text-xs font-semibold rounded-full shadow-sm hover:bg-[#b05c5f] transition-all"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div 
                    key={`${item.id}-${item.selectedColor}`} 
                    className="bg-white p-4 rounded-2xl border border-[#F2EBD9] shadow-2xs flex gap-4 items-center"
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 rounded-xl object-cover bg-[#FAF7F2] border border-[#F7D6D0]" 
                    />

                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif text-sm font-bold text-[#2D2424] truncate">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id, item.selectedColor)}
                          className="text-[#7A6C68] hover:text-[#C26D70] p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.selectedColor && (
                        <span className="text-[10px] text-[#7A6C68] block mt-0.5">
                          Shade: {item.selectedColor}
                        </span>
                      )}

                      {item.includeGiftWrap && (
                        <span className="text-[10px] text-[#C26D70] font-semibold block">
                          + Luxury Gift Wrap (₹49)
                        </span>
                      )}

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity adjuster */}
                        <div className="flex items-center border border-[#F7D6D0] rounded-full p-0.5 bg-[#FAF7F2]">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.selectedColor, item.quantity - 1)}
                            className="w-6 h-6 rounded-full bg-white text-[#2D2424] text-xs font-bold flex items-center justify-center shadow-2xs"
                          >
                            -
                          </button>
                          <span className="w-7 text-center font-bold text-xs text-[#2D2424]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-white text-[#2D2424] text-xs font-bold flex items-center justify-center shadow-2xs"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-serif text-sm font-bold text-[#2D2424]">
                          ₹{(item.price + (item.includeGiftWrap ? 49 : 0)) * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Redux Checkout Button */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-white border-t border-[#F2EBD9] space-y-4">
                <div className="space-y-1.5 text-xs text-[#594A47]">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-bold text-[#2D2424]">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span className="font-semibold text-[#2D2424]">
                      {shippingFee === 0 ? <span className="text-[#C26D70]">FREE</span> : `₹${shippingFee}`}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#F2EBD9] text-sm font-bold text-[#2D2424]">
                    <span>Total Amount:</span>
                    <span className="font-serif text-lg text-[#2D2424]">₹{finalTotal}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckoutClick}
                  className="w-full py-4 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-bold text-sm rounded-full transition-all shadow-md shadow-[#C26D70]/20 flex items-center justify-center gap-2 group"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#7A6C68]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C26D70]" />
                  <span>Secure 256-Bit SSL Encrypted Checkout</span>
                </div>
              </div>
            )}

          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
