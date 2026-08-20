import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#C26D70] uppercase bg-[#FBEAE7] px-3.5 py-1 rounded-full border border-[#F7D6D0]">
            Customer Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2424]">
            Loved By You ♡
          </h2>
          <p className="text-sm sm:text-base text-[#7A6C68]">
            Real review letters from cuties who brought Beads of Luck into their lives.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-3xl border border-[#F2EBD9] hover:border-[#F7D6D0] shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#D98284]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D98284]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-[#594A47] leading-relaxed italic relative">
                  "{t.text}"
                </p>
              </div>

              {/* User Profile */}
              <div className="pt-4 mt-4 border-t border-[#F2EBD9] flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#F7D6D0]"
                />
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#2D2424] flex items-center gap-1">
                    {t.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C26D70]" title="Verified Buyer" />
                  </h4>
                  <p className="text-[11px] text-[#7A6C68]">
                    {t.location} • <span className="text-[#C26D70] font-medium">{t.purchasedItem}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
