import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, CheckCircle2 } from 'lucide-react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-r from-[#FBEAE7] via-[#FDF5F2] to-[#EFE8F8] p-8 sm:p-12 border border-[#F7D6D0] shadow-md text-center overflow-hidden"
        >
          {/* Subtle Background Icons */}
          <div className="absolute -top-4 -left-4 text-3xl opacity-20 pointer-events-none">✨</div>
          <div className="absolute -bottom-4 -right-4 text-3xl opacity-20 pointer-events-none">💌</div>

          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-[#C26D70] text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              Join Our VIP Family
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2424]">
              Stay in the Cute Club ✨
            </h2>

            <p className="text-sm sm:text-base text-[#594A47]">
              Get first access to new arrivals, cute finds and special offers + 10% off your first order!
            </p>

            {isSubscribed ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-4 bg-white rounded-2xl border border-[#F7D6D0] text-[#C26D70] font-semibold text-sm flex items-center justify-center gap-2 shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#C26D70]" />
                <span>Yay! You're officially in the Cute Club ♡ Check your inbox soon!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <div className="relative w-full sm:flex-1">
                  <Mail className="w-4 h-4 text-[#7A6C68] absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white border border-[#F7D6D0] text-xs text-[#2D2424] placeholder-[#7A6C68] focus:outline-none focus:ring-2 focus:ring-[#C26D70] shadow-xs"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#C26D70] hover:bg-[#b05c5f] text-white text-xs font-semibold rounded-full shadow-md shadow-[#C26D70]/20 transition-all hover:shadow-lg"
                >
                  Join the Club
                </button>
              </form>
            )}

            <p className="text-[11px] text-[#7A6C68]">
              No spam ever. Only sweet updates & exclusive cuteness! 💕
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
