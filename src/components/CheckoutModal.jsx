import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, CreditCard, Truck, ShieldCheck, Sparkles, ArrowRight, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import confetti from 'canvas-confetti';
import {
  closeCheckout,
  setCheckoutStep,
  updateShippingInfo,
  setPaymentMethod,
  startProcessingOrder,
  completeOrder,
  resetCheckout,
} from '../store/checkoutSlice';

export default function CheckoutModal({ cartItems, onClearCart }) {
  const dispatch = useDispatch();
  const { isOpen, step, shippingInfo, paymentMethod, orderSummary, isLoading } = useSelector(
    (state) => state.checkout
  );

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = subtotal >= 999 || subtotal === 0 ? 0 : 79;
  const totalAmount = subtotal + shippingFee;

  const handleInputChange = (field, value) => {
    dispatch(updateShippingInfo({ [field]: value }));
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    if (!shippingInfo.fullName || !shippingInfo.phone || !shippingInfo.address || !shippingInfo.pincode) {
      alert('Please fill in all required delivery fields!');
      return;
    }
    dispatch(setCheckoutStep(2));
  };

  const handlePlaceOrder = () => {
    dispatch(startProcessingOrder());

    setTimeout(() => {
      // Fire celebratory confetti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#F7D6D0', '#C26D70', '#EFE8F8', '#D4AF37'],
      });

      dispatch(
        completeOrder({
          items: [...cartItems],
          totalAmount,
        })
      );

      if (onClearCart) onClearCart();
    }, 1200);
  };

  const handleClose = () => {
    if (step === 3) {
      dispatch(resetCheckout());
    } else {
      dispatch(closeCheckout());
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl border border-[#F2EBD9] z-50"
          >
            {/* Header */}
            <div className="bg-[#FAF7F2] p-5 sm:p-6 border-b border-[#F2EBD9] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#FBEAE7] flex items-center justify-center text-[#C26D70] text-sm border border-[#F7D6D0]">
                  🛍️
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2D2424]">
                    {step === 3 ? 'Order Confirmed!' : 'Checkout Studio (Redux Powered)'}
                  </h3>
                  <p className="text-[10px] text-[#C26D70] font-semibold">
                    {step === 1 && 'Step 1 of 2: Shipping Address'}
                    {step === 2 && 'Step 2 of 2: Payment Method'}
                    {step === 3 && 'Thank you for shopping with Beads of Luck! ♡'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="p-2 rounded-full text-[#7A6C68] hover:bg-[#FBEAE7] hover:text-[#2D2424] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step 1: Shipping Address */}
            {step === 1 && (
              <form onSubmit={handleShippingSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#7A6C68] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={shippingInfo.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full p-3 rounded-2xl border border-[#F7D6D0] bg-[#FAF7F2] text-xs text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#C26D70]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#7A6C68] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={shippingInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full p-3 rounded-2xl border border-[#F7D6D0] bg-[#FAF7F2] text-xs text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#C26D70]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#7A6C68] mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="ananya@example.com"
                    value={shippingInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-3 rounded-2xl border border-[#F7D6D0] bg-[#FAF7F2] text-xs text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#C26D70]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#7A6C68] mb-1">
                    Flat / House No. / Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 402, Rose Villa, MG Road"
                    value={shippingInfo.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full p-3 rounded-2xl border border-[#F7D6D0] bg-[#FAF7F2] text-xs text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#C26D70]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#7A6C68] mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Mumbai"
                      value={shippingInfo.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full p-3 rounded-2xl border border-[#F7D6D0] bg-[#FAF7F2] text-xs text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#C26D70]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#7A6C68] mb-1">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="400050"
                      value={shippingInfo.pincode}
                      onChange={(e) => handleInputChange('pincode', e.target.value)}
                      className="w-full p-3 rounded-2xl border border-[#F7D6D0] bg-[#FAF7F2] text-xs text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#C26D70]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#7A6C68] mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      value={shippingInfo.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className="w-full p-3 rounded-2xl border border-[#F7D6D0] bg-[#FAF7F2] text-xs text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#C26D70]"
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-[#F2EBD9]">
                  <div className="text-xs font-bold text-[#2D2424]">
                    Total Amount: <span className="text-[#C26D70] font-serif text-lg">₹{totalAmount}</span>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all flex items-center gap-2"
                  >
                    <span>Proceed to Payment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 2: Payment Method */}
            {step === 2 && (
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF7F2] border border-[#F2EBD9]">
                  <div className="text-xs">
                    <p className="font-bold text-[#2D2424]">Delivering To:</p>
                    <p className="text-[#7A6C68]">
                      {shippingInfo.fullName} • {shippingInfo.address}, {shippingInfo.city} ({shippingInfo.pincode})
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => dispatch(setCheckoutStep(1))}
                    className="text-[11px] text-[#C26D70] font-bold underline"
                  >
                    Edit
                  </button>
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-bold text-[#2D2424] uppercase tracking-wider">
                    Select Payment Method:
                  </label>

                  {/* UPI */}
                  <div
                    onClick={() => dispatch(setPaymentMethod('upi'))}
                    className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                      paymentMethod === 'upi'
                        ? 'border-[#C26D70] bg-[#FBEAE7]'
                        : 'border-[#F2EBD9] bg-white hover:border-[#F7D6D0]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📱</span>
                      <div>
                        <p className="text-xs font-bold text-[#2D2424]">UPI / Google Pay / PhonePe / Paytm</p>
                        <p className="text-[10px] text-[#7A6C68]">Instant payment via any UPI App</p>
                      </div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        paymentMethod === 'upi' ? 'bg-[#C26D70] border-[#C26D70] text-white' : 'border-[#F7D6D0]'
                      }`}
                    >
                      {paymentMethod === 'upi' && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>

                  {/* COD */}
                  <div
                    onClick={() => dispatch(setPaymentMethod('cod'))}
                    className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-[#C26D70] bg-[#FBEAE7]'
                        : 'border-[#F2EBD9] bg-white hover:border-[#F7D6D0]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">💵</span>
                      <div>
                        <p className="text-xs font-bold text-[#2D2424]">Cash On Delivery (COD)</p>
                        <p className="text-[10px] text-[#7A6C68]">Pay with cash upon delivery</p>
                      </div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        paymentMethod === 'cod' ? 'bg-[#C26D70] border-[#C26D70] text-white' : 'border-[#F7D6D0]'
                      }`}
                    >
                      {paymentMethod === 'cod' && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>

                  {/* Cards */}
                  <div
                    onClick={() => dispatch(setPaymentMethod('card'))}
                    className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'border-[#C26D70] bg-[#FBEAE7]'
                        : 'border-[#F2EBD9] bg-white hover:border-[#F7D6D0]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-[#C26D70]" />
                      <div>
                        <p className="text-xs font-bold text-[#2D2424]">Credit / Debit Card / Netbanking</p>
                        <p className="text-[10px] text-[#7A6C68]">Visa, Mastercard, RuPay & Netbanking</p>
                      </div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        paymentMethod === 'card' ? 'bg-[#C26D70] border-[#C26D70] text-white' : 'border-[#F7D6D0]'
                      }`}
                    >
                      {paymentMethod === 'card' && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-[#F2EBD9]">
                  <button
                    type="button"
                    onClick={() => dispatch(setCheckoutStep(1))}
                    className="px-4 py-2.5 text-xs font-bold text-[#7A6C68] hover:text-[#2D2424] flex items-center gap-1"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={handlePlaceOrder}
                    className="px-8 py-3.5 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Processing Order...</span>
                      </>
                    ) : (
                      <>
                        <span>Place Order (₹{totalAmount})</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Order Confirmation Success */}
            {step === 3 && orderSummary && (
              <div className="p-8 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-[#FBEAE7] border border-[#F7D6D0] flex items-center justify-center text-4xl mx-auto animate-bounce">
                  🎉
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#C26D70] bg-[#FBEAE7] px-3.5 py-1 rounded-full border border-[#F7D6D0]">
                    Order #{orderSummary.orderId}
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[#2D2424] pt-2">
                    Order Placed Successfully! 💕
                  </h3>
                  <p className="text-xs text-[#594A47] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#2D2424]">{orderSummary.shippingInfo.fullName}</strong>! We are hand-packing your order with silk ribbons and love.
                  </p>
                </div>

                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#F2EBD9] text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-[#7A6C68]">Amount Paid:</span>
                    <span className="font-bold text-[#2D2424]">₹{orderSummary.totalAmount} ({orderSummary.paymentMethod})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A6C68]">Deliver To:</span>
                    <span className="font-medium text-[#2D2424] truncate max-w-[200px]">
                      {orderSummary.shippingInfo.address}, {orderSummary.shippingInfo.city}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A6C68]">Est. Delivery:</span>
                    <span className="font-bold text-[#C26D70]">In 3 - 5 Days 📦</span>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-8 py-4 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-lg transition-all"
                  >
                    CONTINUE SHOPPING ♡
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
