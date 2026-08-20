import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GIFT_MOMENTS } from '../data/products';

export default function GiftingSection() {
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D70] bg-[#FBEAE7] px-3.5 py-1.5 rounded-full border border-[#F7D6D0] inline-block mb-3">
            Celebrate Them 💕
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2424]">
            Gifts For Every Little Moment
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6C68] mt-2">
            Find sweet, thoughtful presents matched to their unique personality and occasion.
          </p>
        </div>

        {/* Gift Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {GIFT_MOMENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-[#F2EBD9] transition-all duration-300 flex flex-col justify-between"
            >
              <Link to={`/category/${item.categorySlug}`} className="block h-full flex flex-col justify-between p-4">
                
                <div className="relative h-44 rounded-2xl overflow-hidden mb-4 bg-[#FAF7F2]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-2 left-2 text-[10px] font-bold text-[#C26D70] bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#F7D6D0]">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-base font-bold text-[#2D2424] group-hover:text-[#C26D70] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#7A6C68] mt-1 line-clamp-2 leading-tight">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-[#F2EBD9] flex items-center justify-between text-xs font-bold text-[#C26D70]">
                  <span>Explore Edit</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
