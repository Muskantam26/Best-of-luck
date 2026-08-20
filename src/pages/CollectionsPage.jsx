import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CollectionsPage() {
  const collections = [
    {
      id: 'bestsellers',
      name: 'Bestsellers',
      slug: 'bestsellers',
      emoji: '✨',
      subtitle: 'Everyone\'s Loving These ♡',
      image: '/images/product_calculator.png',
      count: '8 Items'
    },
    {
      id: 'new-arrivals',
      name: 'New Arrivals',
      slug: 'new-arrivals',
      emoji: '🌸',
      subtitle: 'Freshly Dropped Aesthetic Picks',
      image: '/images/product_slingbag.png',
      count: '6 Items'
    },
    {
      id: 'gift-edit',
      name: 'Gift Edit',
      slug: 'gift-edit',
      emoji: '💝',
      subtitle: 'Thoughtful Tokens of Joy',
      image: '/images/custom_hamper.png',
      count: '12 Items'
    },
    {
      id: 'cute-desk',
      name: 'Cute Desk Essentials',
      slug: 'cute-desk',
      emoji: '🎀',
      subtitle: 'Pastel Study & Work Setup',
      image: '/images/product_pouch.png',
      count: '10 Items'
    },
    {
      id: 'self-care',
      name: 'Self Care Rituals',
      slug: 'self-care',
      emoji: '💅',
      subtitle: 'Plush Wristbands & Gel Nails',
      image: '/images/product_nails.png',
      count: '9 Items'
    },
    {
      id: 'custom-hampers-col',
      name: 'Custom Hampers',
      slug: 'custom-hampers-col',
      emoji: '✨',
      subtitle: 'Personalized Box Studio',
      image: '/images/hero_flatlay.png',
      count: 'Interactive'
    }
  ];

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D70] bg-[#FBEAE7] px-3.5 py-1.5 rounded-full border border-[#F7D6D0] inline-block mb-3">
            Editorial Collections 🌸
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2424]">
            Curated Collections
          </h1>
          <p className="text-xs sm:text-sm text-[#7A6C68] mt-2">
            Explore curated edits designed around moments, study moods, and gift surprises.
          </p>
        </div>

        {/* Collection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col, idx) => (
            <motion.div
              key={col.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-[#F2EBD9] transition-all group"
            >
              <Link to={col.slug === 'custom-hampers-col' ? '/category/custom-hampers' : `/collection/${col.slug}`} className="block p-6">
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-[#FAF7F2]">
                  <img
                    src={col.image}
                    alt={col.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 text-xs font-bold text-[#C26D70] bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#F7D6D0]">
                    {col.emoji} {col.count}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#2D2424] group-hover:text-[#C26D70] transition-colors">
                  {col.name}
                </h3>
                <p className="text-xs text-[#7A6C68] mt-1">
                  {col.subtitle}
                </p>

                <div className="mt-4 pt-3 border-t border-[#F2EBD9] flex items-center justify-between text-xs font-bold text-[#C26D70]">
                  <span>View Collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
