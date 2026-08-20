import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gift, Heart, ArrowRight } from 'lucide-react';

export default function CustomHamperSection({ onOpenHamperBuilder }) {
  return (
    <section id="hampers" className="py-20 bg-gradient-to-r from-[#FBEAE7] via-[#FDF5F2] to-[#EFE8F8] relative overflow-hidden">
      
      {/* Decorative ambient elements */}
      <div className="absolute top-10 left-10 text-2xl animate-float-slow opacity-75">🎀</div>
      <div className="absolute bottom-10 right-10 text-2xl animate-float-reverse opacity-75">✨</div>
      <div className="absolute top-1/2 right-1/4 text-xl animate-pulse-glow opacity-60">🌸</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-16 border border-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBEAE7] border border-[#F7D6D0] text-[#C26D70] text-xs font-semibold tracking-wider uppercase">
              <Gift className="w-3.5 h-3.5" />
              <span>Personalized Gifting Experience</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2424] leading-tight">
              Made Just For You <span className="font-script font-normal text-4xl sm:text-5xl text-[#C26D70] italic">💝</span>
            </h2>

            <p className="text-base sm:text-lg text-[#594A47] font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Create a hamper that feels like it was made for someone special. Handpick cute stationery, plush accessories, and aesthetic treats packed in a luxury ribbon box with your custom gift card.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-semibold text-[#2D2424]">
              <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#F2EBD9] flex items-center justify-center lg:justify-start gap-2">
                <span className="text-base">🎀</span>
                <span>Luxury Ribbon Box</span>
              </div>
              <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#F2EBD9] flex items-center justify-center lg:justify-start gap-2">
                <span className="text-base">💌</span>
                <span>Handwritten Note Card</span>
              </div>
              <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#F2EBD9] flex items-center justify-center lg:justify-start gap-2">
                <span className="text-base">✨</span>
                <span>15% Bundle Discount</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenHamperBuilder}
                className="w-full sm:w-auto px-8 py-4 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-semibold rounded-full shadow-lg shadow-[#C26D70]/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4" />
                <span>Create Your Hamper</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Hamper Showcase Image */}
          <div className="lg:col-span-5 relative">
            <motion.div
              whileHover={{ rotate: 1.5, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group cursor-pointer"
              onClick={onOpenHamperBuilder}
            >
              <img
                src="/images/custom_hamper.png"
                alt="Custom Gift Hamper Box"
                className="w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <span className="text-xs font-semibold bg-[#C26D70] px-3 py-1 rounded-full shadow-sm">
                    Interactive Hamper Studio
                  </span>
                  <p className="font-serif text-lg font-bold">Tap to Customize Your Gift Box →</p>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
