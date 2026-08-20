import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Sparkles, Plus, Check, Heart, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useShop } from '../context/ShopContext';

export default function CustomHampersPage() {
  const { PRODUCTS, addToCart } = useShop();

  const boxOptions = [
    { id: 'blush-ribbon', name: 'Blush Pink Silk Ribbon Box', price: 149, color: '#F7D6D0' },
    { id: 'ivory-gold', name: 'Ivory Gold Foil Keepsake Box', price: 179, color: '#F5EFE6' },
    { id: 'lavender-dreams', name: 'Lavender Pastel Dream Box', price: 149, color: '#EFE8F8' },
  ];

  const [selectedBox, setSelectedBox] = useState(boxOptions[0]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cardMessage, setCardMessage] = useState('Wishing you a day filled with sweetness and everyday joy! 💕');

  const toggleProduct = (product) => {
    if (selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
    } else {
      if (selectedProducts.length >= 5) {
        alert('You can select up to 5 cute items for a single gift hamper!');
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
      alert('Please pick at least 1 cute item to add into your gift hamper!');
      return;
    }

    confetti({
      particleCount: 90,
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
      category: 'gifts',
      image: '/images/custom_hamper.png',
      shortDescription: `Gift Box: ${selectedBox.name} • Note: "${cardMessage.slice(0, 30)}..."`,
      highlights: [
        `Gift Box: ${selectedBox.name}`,
        `Items included: ${selectedProducts.map(p => p.name).join(', ')}`,
        `Card Note: "${cardMessage}"`
      ]
    };

    addToCart(customHamperItem, 1, selectedBox.name);
  };

  return (
    <div className="py-8 sm:py-12 bg-[#FAF7F2] min-h-screen pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C26D70] bg-[#FBEAE7] px-3.5 py-1.5 rounded-full border border-[#F7D6D0] inline-flex items-center gap-1.5 mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Custom Studio 💝
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#2D2424]">
            Build Your Custom Gift Hamper
          </h1>
          <p className="text-xs sm:text-sm text-[#7A6C68] mt-1.5 sm:mt-2">
            Select your premium box, pick 1 to 5 cute products, add a handwritten card message & enjoy 15% bundle savings!
          </p>
        </div>

        {/* Builder Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Controls (Steps 1, 2, 3) */}
          <div className="lg:col-span-7 bg-white p-4 sm:p-8 rounded-3xl border border-[#F2EBD9] shadow-xs space-y-6 sm:space-y-8">
            
            {/* Step 1: Select Box */}
            <div>
              <label className="block text-xs font-bold text-[#2D2424] uppercase tracking-wider mb-3">
                Step 1: Choose Your Premium Gift Box Style
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {boxOptions.map((box) => (
                  <div
                    key={box.id}
                    onClick={() => setSelectedBox(box)}
                    className={`p-3 sm:p-4 rounded-2xl border text-center cursor-pointer transition-all ${
                      selectedBox.id === box.id
                        ? 'border-[#C26D70] bg-[#FBEAE7] shadow-sm'
                        : 'border-[#F2EBD9] bg-white hover:border-[#F7D6D0]'
                    }`}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mx-auto mb-1.5 sm:mb-2 border border-[#F7D6D0]" style={{ backgroundColor: box.color }} />
                    <p className="text-xs font-bold text-[#2D2424]">{box.name}</p>
                    <p className="text-xs text-[#C26D70] font-semibold mt-0.5">₹{box.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Pick Products */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold text-[#2D2424] uppercase tracking-wider">
                  Step 2: Pick Cute Items (Select 1 to 5)
                </label>
                <span className="text-[10px] sm:text-xs text-[#C26D70] font-bold bg-[#FBEAE7] px-2.5 py-1 rounded-full border border-[#F7D6D0]">
                  {selectedProducts.length}/5 Selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 max-h-80 overflow-y-auto pr-1">
                {PRODUCTS.map((prod) => {
                  const isSelected = selectedProducts.some(p => p.id === prod.id);
                  return (
                    <div
                      key={prod.id}
                      onClick={() => toggleProduct(prod)}
                      className={`p-2.5 sm:p-3 rounded-2xl border flex items-center gap-3 cursor-pointer transition-all ${
                        isSelected
                          ? 'border-[#C26D70] bg-[#FBEAE7]'
                          : 'border-[#F2EBD9] bg-[#FAF7F2] hover:border-[#F7D6D0]'
                      }`}
                    >
                      <img src={prod.image} alt={prod.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover" />
                      <div className="overflow-hidden flex-1">
                        <p className="text-xs font-bold text-[#2D2424] truncate">{prod.name}</p>
                        <p className="text-[11px] text-[#C26D70] font-semibold">₹{prod.price}</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${
                        isSelected ? 'bg-[#C26D70] text-white' : 'border border-[#F7D6D0] bg-white text-[#7A6C68]'
                      }`}>
                        {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
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
                rows={3}
                maxLength={150}
                placeholder="Write a sweet handwritten message for the receiver..."
                className="w-full text-xs p-3.5 rounded-2xl border border-[#F7D6D0] bg-[#FAF7F2] text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#C26D70]"
              />
            </div>

          </div>

          {/* Right Live Preview Summary */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#F2EBD9] shadow-lg sticky top-28 space-y-6">
            
            <div>
              <h3 className="font-serif text-xl font-bold text-[#2D2424] mb-4 flex items-center gap-2">
                <Gift className="w-5 h-5 text-[#C26D70]" />
                <span>Hamper Summary</span>
              </h3>

              {/* Box Info */}
              <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#F2EBD9] mb-4 flex items-center justify-between text-xs">
                <span className="font-medium text-[#594A47]">{selectedBox.name}</span>
                <span className="font-bold text-[#2D2424]">₹{selectedBox.price}</span>
              </div>

              {/* Included Items */}
              <div className="space-y-2 mb-4">
                <p className="text-[11px] font-bold text-[#7A6C68] uppercase tracking-wider">Selected Items:</p>
                {selectedProducts.length === 0 ? (
                  <p className="text-xs text-[#7A6C68] italic bg-[#FAF7F2] p-3 rounded-xl">No items selected yet. Tap products on the left to add!</p>
                ) : (
                  selectedProducts.map((p) => (
                    <div key={p.id} className="flex items-center justify-between text-xs text-[#2D2424] bg-[#FAF7F2] p-2.5 rounded-xl border border-[#F2EBD9]">
                      <span className="truncate pr-2">• {p.name}</span>
                      <span className="font-semibold">₹{p.price}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Discount Savings Badge */}
              <div className="bg-[#FBEAE7] p-3.5 rounded-2xl border border-[#F7D6D0] text-center text-xs text-[#C26D70] font-semibold flex items-center justify-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>15% Custom Bundle Discount Applied!</span>
              </div>
            </div>

            {/* Price & Action */}
            <div className="pt-4 border-t border-[#F2EBD9]">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-bold text-[#7A6C68] uppercase">Total Hamper Price:</span>
                <div className="text-right">
                  <span className="font-serif text-3xl font-bold text-[#2D2424]">
                    ₹{finalHamperPrice}
                  </span>
                  {bundleDiscount > 0 && (
                    <span className="block text-xs text-[#C26D70] font-medium line-through">
                      Original ₹{rawTotal}
                    </span>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={handleFinishHamper}
                className="w-full py-4 px-6 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md shadow-[#C26D70]/20 flex items-center justify-center gap-2 group"
              >
                <span>ADD HAMPER TO BAG</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Floating Mobile Bottom Sticky Hamper Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-3.5 border-t border-[#F2EBD9] shadow-2xl z-40 lg:hidden flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] text-[#7A6C68] font-bold uppercase tracking-wider">{selectedProducts.length} Items Selected</p>
          <p className="font-serif text-lg font-bold text-[#2D2424]">₹{finalHamperPrice}</p>
        </div>

        <button
          type="button"
          onClick={handleFinishHamper}
          className="px-5 py-3 bg-[#C26D70] hover:bg-[#b05c5f] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md flex items-center gap-1.5"
        >
          <Gift className="w-4 h-4" />
          <span>ADD HAMPER</span>
        </button>
      </div>

    </div>
  );
}
