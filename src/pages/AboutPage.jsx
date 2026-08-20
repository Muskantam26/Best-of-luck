import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Gift, ShieldCheck, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="py-16 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Hero */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D70] bg-[#FBEAE7] px-4 py-1.5 rounded-full border border-[#F7D6D0] inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Our Brand Philosophy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D2424] leading-tight">
            Little Things, Made With Love. <span className="text-[#C26D70] font-script italic font-normal">♡</span>
          </h1>
          <p className="text-sm sm:text-base text-[#594A47] leading-relaxed">
            Beads of Luck was born from a simple belief: everyday desk tasks, coffee runs, and gift surprises should be filled with sweetness, charm, and aesthetic delight.
          </p>
        </div>

        {/* Story Grid Banner */}
        <div className="bg-white rounded-3xl overflow-hidden border border-[#F2EBD9] shadow-xl grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 sm:p-12 flex flex-col justify-center space-y-4">
            <span className="text-xs font-bold text-[#C26D70] uppercase tracking-wider">Our Story</span>
            <h2 className="font-serif text-2xl font-bold text-[#2D2424]">
              Transforming Ordinary Moments into Aesthetic Celebrations
            </h2>
            <p className="text-xs sm:text-sm text-[#594A47] leading-relaxed">
              We started Beads of Luck to curate a happy corner of the internet. From soft pastel mini calculators that look cute on study desks to plush spa wristbands and hand-painted press-on nails, every single product is hand-picked to make you smile.
            </p>
            <p className="text-xs sm:text-sm text-[#594A47] leading-relaxed">
              Whether you are treating yourself to a little reward or building a personalized gift hamper for your bestie, we hand-pack every single box with silk ribbons, dried flowers, and cozy energy.
            </p>
          </div>
          <div className="relative min-h-[300px]">
            <img
              src="/images/brand_story.png"
              alt="Beads of Luck Studio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3 Pillars: What We Believe */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold text-[#2D2424]">What We Believe</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-[#F2EBD9] shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FBEAE7] flex items-center justify-center text-xl mx-auto text-[#C26D70] border border-[#F7D6D0]">
                🎀
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2D2424]">Cute & Functional</h3>
              <p className="text-xs text-[#7A6C68] leading-relaxed">
                We believe you never have to choose between utility and aesthetics. Our stationery and bags work flawlessly while looking adorable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#F2EBD9] shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FBEAE7] flex items-center justify-center text-xl mx-auto text-[#C26D70] border border-[#F7D6D0]">
                🎁
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2D2424]">Thoughtful Gifting</h3>
              <p className="text-xs text-[#7A6C68] leading-relaxed">
                Gifting should feel deeply personal and warm. Our custom hamper studio makes building personalized boxes effortless and fun.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#F2EBD9] shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FBEAE7] flex items-center justify-center text-xl mx-auto text-[#C26D70] border border-[#F7D6D0]">
                ✨
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2D2424]">Premium Care</h3>
              <p className="text-xs text-[#7A6C68] leading-relaxed">
                Fast dispatch, 256-bit SSL encrypted checkout, zero hidden fees, and hassle-free replacements because your peace of mind comes first.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#FBEAE7] p-8 sm:p-12 rounded-3xl border border-[#F7D6D0] text-center space-y-4">
          <h2 className="font-serif text-3xl font-bold text-[#2D2424]">Ready to Find Your Little Treasure?</h2>
          <p className="text-xs sm:text-sm text-[#594A47] max-w-md mx-auto">
            Explore our curated shop collection and start building your happy bag today.
          </p>
          <div>
            <Link
              to="/shop"
              className="inline-block px-8 py-3.5 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-md transition-all"
            >
              EXPLORE THE SHOP
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
