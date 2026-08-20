import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gift, Sparkles, ArrowRight, Heart } from 'lucide-react';

export default function CustomHamperSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#FAF7F2] via-[#FBEAE7]/40 to-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#F2EBD9] shadow-xl relative overflow-hidden">
          
          {/* Decorative Sparkles */}
          <div className="absolute top-6 right-8 text-2xl animate-pulse">💝</div>
          <div className="absolute bottom-6 left-8 text-xl animate-pulse" style={{ animationDelay: '1.5s' }}>🎀</div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C26D70] bg-[#FBEAE7] px-4 py-1.5 rounded-full border border-[#F7D6D0] inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Custom Gift Studio 🎀
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2424] leading-tight">
                Make It Personal <span className="text-[#C26D70] font-script italic font-normal">💝</span>
              </h2>

              <p className="text-sm sm:text-base text-[#594A47] leading-relaxed max-w-lg mx-auto lg:mx-0">
                Build a thoughtful hamper filled with little things they'll actually love — wrapped with silk ribbons, dried flowers & your handwritten note card.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/category/custom-hampers"
                  className="w-full sm:w-auto px-8 py-4 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-md shadow-[#C26D70]/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  <Gift className="w-4 h-4" />
                  <span>BUILD YOUR HAMPER</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/category/gifts"
                  className="w-full sm:w-auto px-8 py-4 bg-[#FAF7F2] hover:bg-[#FBEAE7] text-[#2D2424] font-bold text-xs uppercase tracking-widest rounded-full border border-[#F7D6D0] transition-colors flex items-center justify-center gap-2"
                >
                  <span>EXPLORE GIFT IDEAS</span>
                </Link>
              </div>
            </div>

            {/* Right Showcase Image */}
            <div className="lg:col-span-6 relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2] bg-[#FAF7F2]"
              >
                <img
                  src="/images/custom_hamper.png"
                  alt="Custom Gift Hamper Box"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />

                {/* Floating Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#F7D6D0] shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#FBEAE7] flex items-center justify-center text-lg text-[#C26D70]">
                      🎀
                    </span>
                    <div>
                      <p className="text-xs font-bold text-[#2D2424]">Custom Gift Box Studio</p>
                      <p className="text-[10px] text-[#C26D70] font-semibold">Includes 15% Bundle Discount!</p>
                    </div>
                  </div>
                  <Link
                    to="/category/custom-hampers"
                    className="px-4 py-2 bg-[#C26D70] text-white text-xs font-bold rounded-full hover:bg-[#b05c5f] transition-colors"
                  >
                    Start Studio
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
