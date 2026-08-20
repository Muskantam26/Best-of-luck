import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function CategorySection({ onSelectCategory }) {
  return (
    <section id="categories" className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#C26D70] uppercase bg-[#FBEAE7] px-3.5 py-1 rounded-full border border-[#F7D6D0]">
            Explore Collections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2424]">
            Find Your Little Something
          </h2>
          <p className="text-sm sm:text-base text-[#7A6C68]">
            Explore our thoughtfully curated collections filled with everyday joy and aesthetic charm.
          </p>
        </div>

        {/* Categories Horizontal Scroll / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => onSelectCategory(cat.name)}
              className="group relative rounded-3xl bg-white p-4 sm:p-5 shadow-sm hover:shadow-card-hover border border-[#F2EBD9] hover:border-[#F7D6D0] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              {/* Category Image Box */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#FAF7F2] mb-4">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Emoji badge */}
                <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-sm shadow-sm">
                  {cat.emoji}
                </div>

                {/* Arrow appear on hover */}
                <div className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-[#C26D70] text-white flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Item Count */}
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2D2424] group-hover:text-[#C26D70] transition-colors flex items-center justify-between">
                  <span>{cat.name}</span>
                </h3>
                <p className="text-xs text-[#7A6C68] mt-1 font-medium">
                  {cat.itemCount}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
