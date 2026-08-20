import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="brand-story" className="py-20 bg-gradient-to-b from-[#FAF7F2] via-white to-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/images/brand_story.png"
                alt="Beads of Luck Studio Workspace"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-4 rounded-2xl shadow-lg border border-[#F7D6D0] flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#FBEAE7] flex items-center justify-center text-lg">
                🌸
              </span>
              <div>
                <p className="text-xs font-bold text-[#2D2424]">Handpacked Studio</p>
                <p className="text-[11px] text-[#7A6C68]">Crafted with love in every detail</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            <span className="text-xs font-semibold tracking-widest text-[#C26D70] uppercase bg-[#FBEAE7] px-3.5 py-1 rounded-full border border-[#F7D6D0]">
              Our Story & Passion
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2424] leading-tight">
              A Little Brand With A Lot Of Love <span className="font-script font-normal text-4xl text-[#C26D70]">♡</span>
            </h2>

            <p className="text-base sm:text-lg text-[#594A47] font-normal leading-relaxed">
              Beads of Luck is all about discovering those little things that make ordinary days feel a little more special — from cute stationery and accessories to thoughtful gifts made for people you love.
            </p>

            <p className="text-sm text-[#7A6C68] leading-relaxed">
              What started as a tiny desk passion project has grown into a cozy haven for aesthetic dreamers. Every pouch, calculator, tote bag, and press-on nail kit is hand-selected and custom-packaged with ribbon bow details, dried baby's breath, and a touch of luck.
            </p>

            {/* Quote Badge */}
            <div className="p-4 rounded-2xl bg-[#FBEAE7]/50 border-l-4 border-[#C26D70] text-left">
              <p className="font-serif italic text-xs sm:text-sm text-[#2D2424]">
                “We believe that small acts of kindness and cute everyday objects have the magic to transform any ordinary day into something wonderful.”
              </p>
              <p className="text-[11px] font-bold text-[#C26D70] mt-1">— Founder, Beads of Luck</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
