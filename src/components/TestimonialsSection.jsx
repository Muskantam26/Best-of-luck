import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D70] bg-[#FBEAE7] px-3.5 py-1.5 rounded-full border border-[#F7D6D0] inline-block mb-3">
            Real Reviews 💕
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2D2424]">
            Loved By Our Happy People ♡
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6C68] mt-1">
            Hear from cuties who turned their everyday moments into little celebrations.
          </p>
        </div>

        {/* 4 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-3xl border border-[#F2EBD9] shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#D98284]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D98284]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs text-[#594A47] leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              {/* Customer Avatar & Details */}
              <div className="pt-3 border-t border-[#F2EBD9] flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#F7D6D0]"
                />
                <div>
                  <h4 className="font-serif text-xs font-bold text-[#2D2424]">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-[#C26D70] font-semibold">
                    Verified Buyer • {item.location}
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
