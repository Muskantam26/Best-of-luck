import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useShop } from '../context/ShopContext';
import { openCheckout } from '../store/checkoutSlice';

export default function CartPage() {
  const dispatch = useDispatch();
  const { cartItems, updateCartQuantity, removeFromCart } = useShop();

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 79;
  const finalTotal = subtotal + shippingFee;

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D70] bg-[#FBEAE7] px-3.5 py-1.5 rounded-full border border-[#F7D6D0] inline-block mb-3">
            Your Shopping Bag 🛍️
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2424]">
            Shopping Bag ({cartItems.length})
          </h1>
        </div>

        {cartItems.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center border border-[#F2EBD9] shadow-sm space-y-6 max-w-lg mx-auto">
            <div className="w-20 h-20 rounded-full bg-[#FBEAE7] flex items-center justify-center text-4xl mx-auto border border-[#F7D6D0]">
              🛍️
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-[#2D2424]">
                Your little collection is waiting ♡
              </h3>
              <p className="text-xs text-[#7A6C68]">
                Explore our cute stationery, trendy bags, and gift sets to add joy to your bag!
              </p>
            </div>
            <div>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-md transition-all"
              >
                <span>CONTINUE SHOPPING</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* Full Cart Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Cart Items List */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#F2EBD9] shadow-xs space-y-4">
              
              {/* Shipping Progress Meter */}
              <div className="bg-[#FBEAE7] p-4 rounded-2xl border border-[#F7D6D0] mb-4">
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

              {cartItems.map((item) => (
                <div 
                  key={`${item.id}-${item.selectedColor}`}
                  className="p-4 rounded-2xl border border-[#F2EBD9] bg-[#FAF7F2] flex gap-4 items-center"
                >
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover border border-[#F7D6D0] bg-white" />
                  
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-start justify-between">
                      <h4 className="font-serif text-sm font-bold text-[#2D2424] truncate">{item.name}</h4>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id, item.selectedColor)}
                        className="text-[#7A6C68] hover:text-[#C26D70] p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {item.selectedColor && (
                      <span className="text-[10px] text-[#7A6C68] block mt-0.5">Shade: {item.selectedColor}</span>
                    )}

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#F7D6D0] rounded-full p-0.5 bg-white">
                        <button
                          type="button"
                          onClick={() => updateCartQuantity(item.id, item.selectedColor, item.quantity - 1)}
                          className="w-6 h-6 rounded-full bg-[#FAF7F2] text-[#2D2424] text-xs font-bold flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-7 text-center font-bold text-xs text-[#2D2424]">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateCartQuantity(item.id, item.selectedColor, item.quantity + 1)}
                          className="w-6 h-6 rounded-full bg-[#FAF7F2] text-[#2D2424] text-xs font-bold flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-serif text-base font-bold text-[#2D2424]">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

            </div>

            {/* Order Summary */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#F2EBD9] shadow-lg sticky top-28 space-y-6">
              <h3 className="font-serif text-lg font-bold text-[#2D2424]">Order Summary</h3>

              <div className="space-y-3 text-xs text-[#594A47]">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-bold text-[#2D2424]">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping:</span>
                  <span className="font-semibold text-[#2D2424]">
                    {shippingFee === 0 ? <span className="text-[#C26D70]">FREE</span> : `₹${shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between pt-3 border-t border-[#F2EBD9] text-base font-bold text-[#2D2424]">
                  <span>Total Amount:</span>
                  <span className="font-serif text-2xl text-[#2D2424]">₹{finalTotal}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => dispatch(openCheckout())}
                className="w-full py-4 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-md shadow-[#C26D70]/20 flex items-center justify-center gap-2 group transition-all"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#7A6C68]">
                <ShieldCheck className="w-4 h-4 text-[#C26D70]" />
                <span>Secure 256-Bit SSL Encrypted Checkout</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
