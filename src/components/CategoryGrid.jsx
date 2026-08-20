import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function CategoryGrid() {
  return (
    <section className="py-12 sm:py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C26D70] bg-[#FBEAE7] px-3.5 py-1.5 rounded-full border border-[#F7D6D0] inline-block mb-2 sm:mb-3">
            Explore Collections ✨
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#2D2424]">
            Shop Your Mood ✨
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6C68] mt-1.5 sm:mt-2">
            Curated categories thoughtfully created for study desks, cozy bags, daily pampering, and gifting.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-[#F2EBD9] transition-all duration-300 flex flex-col justify-between"
            >
              <Link to={`/category/${cat.slug}`} className="block h-full flex flex-col justify-between p-3.5 sm:p-6">
                
                <div>
                  {/* Top Emoji Tag */}
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <span className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FAF7F2] border border-[#F7D6D0] flex items-center justify-center text-lg sm:text-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      {cat.emoji}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#C26D70] bg-[#FBEAE7] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                      {cat.itemCount}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-sm sm:text-xl font-bold text-[#2D2424] group-hover:text-[#C26D70] transition-colors line-clamp-1">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#7A6C68] mt-1 leading-relaxed line-clamp-2 hidden sm:block">
                    {cat.description}
                  </p>
                </div>

                {/* Bottom Image Showcase & Explore link */}
                <div className="mt-3 sm:mt-6">
                  <div className="relative h-28 sm:h-44 rounded-xl sm:rounded-2xl overflow-hidden mb-2 sm:mb-4 bg-[#FAF7F2]">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="flex items-center text-[11px] sm:text-xs font-bold text-[#2D2424] group-hover:text-[#C26D70] transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
