import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { GIFT_MOMENTS } from '../data/products';

export default function GiftingSection({ onSelectGiftMoment }) {
  return (
    <section id="gifting" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#C26D70] uppercase bg-[#FBEAE7] px-3.5 py-1 rounded-full border border-[#F7D6D0]">
            Occasions & Celebrations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2424]">
            Gifts for Every Little Moment
          </h2>
          <p className="text-sm sm:text-base text-[#7A6C68]">
            Curated gift collections for the special people who make your world brighter.
          </p>
        </div>

        {/* Gift Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {GIFT_MOMENTS.map((moment, index) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => onSelectGiftMoment(moment.title)}
              className="group relative rounded-3xl bg-white p-4 shadow-sm hover:shadow-card-hover border border-[#F2EBD9] hover:border-[#F7D6D0] transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Image Box */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#FAF7F2] mb-3">
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs text-[10px] font-bold text-[#C26D70] px-2.5 py-0.5 rounded-full shadow-xs">
                  {moment.tag}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="font-serif text-base font-bold text-[#2D2424] group-hover:text-[#C26D70] transition-colors flex items-center justify-between">
                  <span>{moment.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#C26D70] opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-[#7A6C68] mt-1 line-clamp-2">
                  {moment.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
