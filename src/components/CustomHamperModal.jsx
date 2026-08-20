import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Plus, Check, Gift, Heart, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRODUCTS } from '../data/products';

export default function CustomHamperModal({ isOpen, onClose, onAddHamperToCart }) {
  if (!isOpen) return null;

  const boxOptions = [
    { id: 'blush-ribbon', name: 'Blush Pink Silk Ribbon Box', price: 149, color: '#F7D6D0', image: '/images/custom_hamper.png' },
    { id: 'ivory-gold', name: 'Ivory Gold Foil Keepsake Box', price: 179, color: '#F5EFE6', image: '/images/custom_hamper.png' },
    { id: 'lavender-dreams', name: 'Lavender Pastel Dream Box', price: 149, color: '#EFE8F8', image: '/images/custom_hamper.png' },
  ];

  const [selectedBox, setSelectedBox] = useState(boxOptions[0]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cardMessage, setCardMessage] = useState('Wishing you a day filled with sweetness and everyday joy! 💕');

  const toggleProduct = (product) => {
    if (selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
    } else {
      if (selectedProducts.length >= 5) {
        alert('You can select up to 5 cute items for a single hamper!');
        return;
      }
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const rawTotal = selectedBox.price + selectedProducts.reduce((sum, item) => sum + item.price, 0);
  const bundleDiscount = Math.round(rawTotal * 0.15);
  const finalHamperPrice = rawTotal - bundleDiscount;

  const handleFinishHamper = () => {
    if (selectedProducts.length === 0) {
      alert('Please pick at least 1 cute item to add into your hamper!');
      return;
    }

    // Trigger celebratory confetti burst!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F7D6D0', '#C26D70', '#EFE8F8', '#D4AF37']
    });

    const customHamperItem = {
      id: `custom-hamper-${Date.now()}`,
      name: `Custom Gift Hamper (${selectedProducts.length} Cute Items)`,
      price: finalHamperPrice,
      originalPrice: rawTotal,
      badge: 'Custom Gift',
      category: 'Gifting',
      image: '/images/custom_hamper.png',
      shortDescription: `Gift Box: ${selectedBox.name} • Note: "${cardMessage.slice(0, 30)}..."`,
      highlights: [
        `Gift Box: ${selectedBox.name}`,
        `Items included: ${selectedProducts.map(p => p.name).join(', ')}`,
        `Card Note: "${cardMessage}"`
      ]
    };

    onAddHamperToCart(customHamperItem);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all border border-[#F2EBD9] my-8"
          >
            {/* Header */}
            <div className="bg-[#FAF7F2] p-6 border-b border-[#F2EBD9] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#C26D70] uppercase tracking-wider bg-[#FBEAE7] px-3 py-1 rounded-full border border-[#F7D6D0]">
                  Custom Gift Hamper Studio 💝
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2424] mt-1">
                  Build Your Personalized Gift Box
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white hover:bg-[#FBEAE7] text-[#2D2424] flex items-center justify-center shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Customization Controls */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Step 1: Select Box Style */}
                <div>
                  <label className="block text-xs font-bold text-[#2D2424] uppercase tracking-wider mb-2">
                    Step 1: Choose Your Premium Gift Box
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {boxOptions.map((box) => (
                      <div
                        key={box.id}
                        onClick={() => setSelectedBox(box)}
                        className={`p-3 rounded-2xl border text-center cursor-pointer transition-all ${
                          selectedBox.id === box.id
                            ? 'border-[#C26D70] bg-[#FBEAE7] shadow-sm'
                            : 'border-[#F2EBD9] bg-white hover:border-[#F7D6D0]'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-full mx-auto mb-2 border border-[#F7D6D0]" style={{ backgroundColor: box.color }} />
                        <p className="text-xs font-bold text-[#2D2424] line-clamp-1">{box.name}</p>
                        <p className="text-[11px] text-[#C26D70] font-semibold">₹{box.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 2: Pick Products */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-[#2D2424] uppercase tracking-wider">
                      Step 2: Pick Cute Items (Select 1 to 5)
                    </label>
                    <span className="text-xs text-[#C26D70] font-semibold">
                      {selectedProducts.length}/5 Selected
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-60 overflow-y-auto pr-1">
                    {PRODUCTS.map((prod) => {
                      const isSelected = selectedProducts.some(p => p.id === prod.id);
                      return (
                        <div
                          key={prod.id}
                          onClick={() => toggleProduct(prod)}
                          className={`p-2.5 rounded-2xl border flex items-center gap-2 cursor-pointer transition-all ${
                            isSelected
                              ? 'border-[#C26D70] bg-[#FBEAE7]'
                              : 'border-[#F2EBD9] bg-white hover:border-[#F7D6D0]'
                          }`}
                        >
                          <img src={prod.image} alt={prod.name} className="w-10 h-10 rounded-xl object-cover" />
                          <div className="overflow-hidden flex-1">
                            <p className="text-[11px] font-bold text-[#2D2424] truncate">{prod.name}</p>
                            <p className="text-[10px] text-[#C26D70] font-semibold">₹{prod.price}</p>
                          </div>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                            isSelected ? 'bg-[#C26D70] text-white' : 'border border-[#F7D6D0] bg-white text-[#7A6C68]'
                          }`}>
                            {isSelected ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Card Message */}
                <div>
                  <label className="block text-xs font-bold text-[#2D2424] uppercase tracking-wider mb-2">
                    Step 3: Add Custom Gift Card Message 💌
                  </label>
                  <textarea
                    value={cardMessage}
                    onChange={(e) => setCardMessage(e.target.value)}
                    rows={2}
                    maxLength={150}
                    placeholder="Write a sweet message for the receiver..."
                    className="w-full text-xs p-3 rounded-2xl border border-[#F7D6D0] bg-[#FAF7F2] text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#C26D70]"
                  />
                </div>

              </div>

              {/* Right Column: Live Hamper Preview & Price Breakdown */}
              <div className="lg:col-span-5 bg-[#FAF7F2] p-6 rounded-3xl border border-[#F2EBD9] flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2D2424] mb-3 flex items-center gap-2">
                    <Gift className="w-5 h-5 text-[#C26D70]" />
                    <span>Hamper Summary</span>
                  </h3>

                  {/* Selected Box */}
                  <div className="bg-white p-3 rounded-2xl border border-[#F2EBD9] mb-3 flex items-center justify-between text-xs">
                    <span className="font-medium text-[#594A47]">{selectedBox.name}</span>
                    <span className="font-bold text-[#2D2424]">₹{selectedBox.price}</span>
                  </div>

                  {/* Included Items */}
                  <div className="space-y-2 mb-4">
                    <p className="text-[11px] font-bold text-[#7A6C68] uppercase tracking-wider">Selected Items:</p>
                    {selectedProducts.length === 0 ? (
                      <p className="text-xs text-[#7A6C68] italic">No items selected yet. Tap products to add!</p>
                    ) : (
                      selectedProducts.map((p) => (
                        <div key={p.id} className="flex items-center justify-between text-xs text-[#2D2424]">
                          <span className="truncate pr-2">• {p.name}</span>
                          <span className="font-semibold">₹{p.price}</span>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Discount Badge */}
                  <div className="bg-[#FBEAE7] p-3 rounded-2xl border border-[#F7D6D0] text-center text-xs text-[#C26D70] font-semibold flex items-center justify-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>15% Bundle Savings Applied!</span>
                  </div>
                </div>

                {/* Total & Action */}
                <div className="pt-4 border-t border-[#F2EBD9]">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs font-bold text-[#7A6C68] uppercase">Total Hamper Price:</span>
                    <div className="text-right">
                      <span className="font-serif text-2xl font-bold text-[#2D2424]">
                        ₹{finalHamperPrice}
                      </span>
                      {bundleDiscount > 0 && (
                        <span className="block text-[11px] text-[#C26D70] font-medium line-through">
                          ₹{rawTotal}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={handleFinishHamper}
                    className="w-full py-3.5 px-6 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-bold text-sm rounded-full transition-all shadow-md shadow-[#C26D70]/20 flex items-center justify-center gap-2 group"
                  >
                    <span>Complete & Add Hamper to Bag</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
