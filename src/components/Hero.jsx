import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Star, Gift, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Hero() {
  const { setQuickViewProduct, PRODUCTS } = useShop();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const floatingProductVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.12,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  const openProduct = (id) => {
    const p = PRODUCTS.find(prod => prod.id === id);
    if (p) setQuickViewProduct(p);
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:py-20 bg-gradient-to-b from-[#FAF7F2] via-[#FDF5F2] to-[#FAF7F2]">
      
      {/* Background Decorative Soft Blobs */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#FBEAE7] rounded-full blur-3xl opacity-60 pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#EFE8F8] rounded-full blur-3xl opacity-50 pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 text-center lg:text-left space-y-6"
          >
            {/* Small Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBEAE7] border border-[#F7D6D0] text-[#C26D70] text-xs font-bold tracking-wider uppercase shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                Cute Finds • Thoughtfully Curated
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2424] leading-[1.15] tracking-tight"
            >
              Little Things. Big Smiles. <span className="text-[#C26D70] font-script font-normal text-5xl sm:text-6xl lg:text-7xl italic ml-1">♡</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-[#594A47] font-normal leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Cute stationery, everyday essentials, thoughtful gifts and little treasures — all in one happy place.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link
                to="/shop"
                className="w-full sm:w-auto px-8 py-4 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-bold rounded-full shadow-lg shadow-[#C26D70]/20 hover:shadow-xl hover:shadow-[#C26D70]/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group text-xs uppercase tracking-wider"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/category/gifts"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#FBEAE7] text-[#2D2424] font-bold rounded-full border border-[#F7D6D0] shadow-2xs hover:shadow transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
              >
                <Gift className="w-4 h-4 text-[#C26D70]" />
                <span>EXPLORE GIFTS</span>
              </Link>
            </motion.div>

            {/* Mini Trust Highlights */}
            <motion.div 
              variants={itemVariants}
              className="pt-6 border-t border-[#F2EBD9] flex items-center justify-center lg:justify-start gap-6 sm:gap-8 text-xs text-[#7A6C68]"
            >
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#D98284] fill-[#D98284]" />
                <span className="font-semibold text-[#2D2424]">4.9/5</span> (500+ Happy Cuties)
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-base">🎁</span> Luxury Gift Wrapping
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-base">🌸</span> Handpicked with Love
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Aesthetic Product Flatlay Composition */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Composition Container */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Floating Sparkles & Hearts Accents */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-4 z-20 bg-white/90 p-2.5 rounded-full shadow-md border border-[#F7D6D0] text-base"
              >
                🎀
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/3 -right-4 z-20 bg-white/90 p-2.5 rounded-full shadow-md border border-[#F7D6D0] text-base"
              >
                ✨
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 left-1/4 z-20 bg-white/90 p-2.5 rounded-full shadow-md border border-[#F7D6D0] text-base"
              >
                💕
              </motion.div>

              {/* Central Main Showcase Flatlay Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group"
              >
                <img
                  src="/images/hero_flatlay.png"
                  alt="Beads of Luck Product Flatlay"
                  className="w-full h-[380px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Product Badges over Hero Image */}
                
                {/* 1. Mini Calculator Tag */}
                <motion.div
                  custom={0}
                  variants={floatingProductVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => openProduct('mini-calculator')}
                  className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-[#F7D6D0] flex items-center gap-2 cursor-pointer hover:bg-[#FBEAE7] transition-all transform hover:scale-105"
                >
                  <img src="/images/product_calculator.png" alt="Mini Calculator" className="w-8 h-8 rounded-lg object-cover" />
                  <div>
                    <div className="text-xs font-bold text-[#2D2424]">Mini Calculator</div>
                    <div className="text-[10px] text-[#C26D70] font-semibold">₹299 • Bestseller</div>
                  </div>
                </motion.div>

                {/* 2. Tote Bag Tag */}
                <motion.div
                  custom={1}
                  variants={floatingProductVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => openProduct('tote-bag')}
                  className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-[#F7D6D0] flex items-center gap-2 cursor-pointer hover:bg-[#FBEAE7] transition-all transform hover:scale-105"
                >
                  <img src="/images/product_tote.png" alt="Tote Bag" className="w-8 h-8 rounded-lg object-cover" />
                  <div>
                    <div className="text-xs font-bold text-[#2D2424]">Canvas Tote Bag</div>
                    <div className="text-[10px] text-[#C26D70] font-semibold">₹499 • Popular</div>
                  </div>
                </motion.div>

                {/* 3. Korean Sling Bag Tag */}
                <motion.div
                  custom={2}
                  variants={floatingProductVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => openProduct('korean-sling-bag')}
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-[#F7D6D0] hidden sm:flex items-center gap-2 cursor-pointer hover:bg-[#FBEAE7] transition-all transform hover:scale-105"
                >
                  <img src="/images/product_slingbag.png" alt="Korean Sling Bag" className="w-8 h-8 rounded-lg object-cover" />
                  <div>
                    <div className="text-xs font-bold text-[#2D2424]">Korean Sling Bag</div>
                    <div className="text-[10px] text-[#C26D70] font-semibold">₹699 • New</div>
                  </div>
                </motion.div>

              </motion.div>

              {/* Small Floating Product Thumbnails below hero image */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <motion.div
                  whileHover={{ y: -4 }}
                  onClick={() => openProduct('facial-wrist-band')}
                  className="bg-white p-2 rounded-2xl shadow-xs border border-[#F2EBD9] flex items-center gap-2 cursor-pointer hover:border-[#F7D6D0] transition-all"
                >
                  <img src="/images/product_wristband.png" alt="Wristband" className="w-9 h-9 rounded-xl object-cover" />
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-bold text-[#2D2424] truncate">Spa Wristband</p>
                    <p className="text-[10px] text-[#C26D70] font-semibold">₹199</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  onClick={() => openProduct('press-on-nails')}
                  className="bg-white p-2 rounded-2xl shadow-xs border border-[#F2EBD9] flex items-center gap-2 cursor-pointer hover:border-[#F7D6D0] transition-all"
                >
                  <img src="/images/product_nails.png" alt="Press on Nails" className="w-9 h-9 rounded-xl object-cover" />
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-bold text-[#2D2424] truncate">Press on Nails</p>
                    <p className="text-[10px] text-[#C26D70] font-semibold">₹299</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  onClick={() => openProduct('silicon-travel-pouch')}
                  className="bg-white p-2 rounded-2xl shadow-xs border border-[#F2EBD9] flex items-center gap-2 cursor-pointer hover:border-[#F7D6D0] transition-all"
                >
                  <img src="/images/product_pouch.png" alt="Silicone Pouch" className="w-9 h-9 rounded-xl object-cover" />
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-bold text-[#2D2424] truncate">Silicone Pouch</p>
                    <p className="text-[10px] text-[#C26D70] font-semibold">₹349</p>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
