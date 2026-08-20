import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D70] bg-[#FBEAE7] px-3.5 py-1.5 rounded-full border border-[#F7D6D0] inline-block mb-3">
            Explore Collections ✨
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2424]">
            Shop Your Mood ✨
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6C68] mt-2">
            Curated categories thoughtfully created for study desks, cozy bags, daily pampering, and gifting.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-[#F2EBD9] transition-all duration-300 flex flex-col justify-between"
            >
              <Link to={`/category/${cat.slug}`} className="block h-full flex flex-col justify-between p-6">
                
                <div>
                  {/* Top Emoji Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#F7D6D0] flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      {cat.emoji}
                    </span>
                    <span className="text-[11px] font-bold text-[#C26D70] bg-[#FBEAE7] px-2.5 py-1 rounded-full">
                      {cat.itemCount}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl font-bold text-[#2D2424] group-hover:text-[#C26D70] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#7A6C68] mt-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Bottom Image Showcase & Explore link */}
                <div className="mt-6">
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-4 bg-[#FAF7F2]">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="flex items-center text-xs font-bold text-[#2D2424] group-hover:text-[#C26D70] transition-colors">
                    <span>Explore {cat.name}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-2 transition-transform duration-300" />
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
