import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#F7D6D0', '#C26D70', '#EFE8F8']
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#FAF7F2] to-[#FBEAE7]/50 border-t border-[#F2EBD9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#F7D6D0] shadow-lg relative overflow-hidden">
          
          <div className="w-12 h-12 rounded-full bg-[#FBEAE7] flex items-center justify-center text-xl mx-auto mb-4 border border-[#F7D6D0]">
            💌
          </div>

          <h2 className="font-serif text-3xl font-bold text-[#2D2424]">
            Join The Cute Club ✨
          </h2>

          <p className="text-xs sm:text-sm text-[#7A6C68] max-w-md mx-auto mt-2">
            Be the first to know about new drops, secret discount codes, and cute gifting inspo right in your inbox!
          </p>

          {subscribed ? (
            <div className="mt-6 p-4 rounded-2xl bg-[#FBEAE7] border border-[#F7D6D0] text-xs font-bold text-[#C26D70] flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-[#C26D70]" />
              <span>Yay! You're officially in the Cute Club! Check your inbox soon 💕</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-5 py-3.5 rounded-full border border-[#F7D6D0] bg-[#FAF7F2] text-xs text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#C26D70]"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <span>JOIN NOW</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          <p className="text-[10px] text-[#7A6C68] mt-4">
            No spam ever. Unsubscribe anytime with 1-click. 🌸
          </p>

        </div>

      </div>
    </section>
  );
}
