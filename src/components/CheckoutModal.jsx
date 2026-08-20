import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Sparkles, Truck, CreditCard, ArrowRight, Package } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutModal({ isOpen, onClose, cartItems, onClearCart }) {
  if (!isOpen) return null;

  const [step, setStep] = useState('form'); // 'form' or 'confirmed'
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [formData, setFormData] = useState({
    name: 'Ananya Roy',
    phone: '+91 98765 43210',
    email: 'ananya@example.com',
    address: 'Flat 402, Bloom Apartments, Bandra West',
    city: 'Mumbai',
    pincode: '400050'
  });
  const [orderId, setOrderId] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingFee = subtotal >= 999 || subtotal === 0 ? 0 : 79;
  const finalTotal = subtotal + shippingFee;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const newOrderId = `BOL-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);
    setStep('confirmed');

    // Confetti celebration
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#F7D6D0', '#C26D70', '#EFE8F8', '#D4AF37']
    });

    onClearCart();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={step === 'confirmed' ? onClose : undefined}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all border border-[#F2EBD9] my-8"
          >
            {/* Header */}
            <div className="bg-[#FAF7F2] p-6 border-b border-[#F2EBD9] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C26D70]" />
                <h2 className="font-serif text-2xl font-bold text-[#2D2424]">
                  {step === 'form' ? 'Checkout & Shipping' : 'Order Confirmed ♡'}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white hover:bg-[#FBEAE7] text-[#2D2424] flex items-center justify-center shadow-xs"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {step === 'form' ? (
              <form onSubmit={handlePlaceOrder} className="p-6 space-y-6">
                
                {/* Shipping Details */}
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#2D2424] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#C26D70]" />
                    <span>Shipping Address</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-[#7A6C68] font-medium mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-xl border border-[#F7D6D0] bg-[#FAF7F2] text-[#2D2424]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#7A6C68] font-medium mb-1">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-xl border border-[#F7D6D0] bg-[#FAF7F2] text-[#2D2424]"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-[#7A6C68] font-medium mb-1">Delivery Address</label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-xl border border-[#F7D6D0] bg-[#FAF7F2] text-[#2D2424]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#7A6C68] font-medium mb-1">City</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-xl border border-[#F7D6D0] bg-[#FAF7F2] text-[#2D2424]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#7A6C68] font-medium mb-1">Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-xl border border-[#F7D6D0] bg-[#FAF7F2] text-[#2D2424]"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Selection */}
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#2D2424] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#C26D70]" />
                    <span>Payment Option</span>
                  </h3>

                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-3 rounded-2xl border text-center cursor-pointer transition-all ${
                        paymentMethod === 'upi' ? 'border-[#C26D70] bg-[#FBEAE7] font-bold' : 'border-[#F2EBD9] bg-white'
                      }`}
                    >
                      <span className="block text-base mb-1">📱</span>
                      <span>UPI / GPay</span>
                    </div>

                    <div
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-2xl border text-center cursor-pointer transition-all ${
                        paymentMethod === 'card' ? 'border-[#C26D70] bg-[#FBEAE7] font-bold' : 'border-[#F2EBD9] bg-white'
                      }`}
                    >
                      <span className="block text-base mb-1">💳</span>
                      <span>Credit/Debit Card</span>
                    </div>

                    <div
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-3 rounded-2xl border text-center cursor-pointer transition-all ${
                        paymentMethod === 'cod' ? 'border-[#C26D70] bg-[#FBEAE7] font-bold' : 'border-[#F2EBD9] bg-white'
                      }`}
                    >
                      <span className="block text-base mb-1">💵</span>
                      <span>Cash on Delivery</span>
                    </div>
                  </div>
                </div>

                {/* Total & Submit */}
                <div className="pt-4 border-t border-[#F2EBD9] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#7A6C68] block">Total Payable:</span>
                    <span className="font-serif text-2xl font-bold text-[#2D2424]">₹{finalTotal}</span>
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-bold text-sm rounded-full shadow-md shadow-[#C26D70]/20 flex items-center gap-2"
                  >
                    <span>Place Order ♡</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            ) : (
              /* Order Confirmation Screen */
              <div className="p-8 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-[#FBEAE7] text-[#C26D70] flex items-center justify-center mx-auto text-4xl shadow-inner border border-[#F7D6D0]">
                  🎀
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-bold text-[#2D2424]">
                    Thank You for Your Order! 💕
                  </h3>
                  <p className="text-xs sm:text-sm text-[#594A47] max-w-md mx-auto">
                    Your little package of joy is being carefully hand-wrapped with silk ribbons and dried baby's breath.
                  </p>
                </div>

                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#F2EBD9] inline-block text-left text-xs space-y-1">
                  <p className="text-[#7A6C68]">Order ID: <strong className="text-[#2D2424]">{orderId}</strong></p>
                  <p className="text-[#7A6C68]">Recipient: <strong className="text-[#2D2424]">{formData.name}</strong></p>
                  <p className="text-[#7A6C68]">Delivery Address: <strong className="text-[#2D2424]">{formData.address}, {formData.city}</strong></p>
                  <p className="text-[#C26D70] font-semibold pt-1">Estimated Delivery: 2-4 Business Days</p>
                </div>

                <div>
                  <button
                    onClick={onClose}
                    className="px-8 py-3.5 bg-[#C26D70] text-white font-bold text-xs rounded-full shadow-md hover:bg-[#b05c5f] transition-all"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}

          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
