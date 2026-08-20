import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function PromoBanner() {
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#FAF3EE] border border-[#F2EBD9] shadow-lg">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6 z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C26D70] bg-white px-3.5 py-1.5 rounded-full border border-[#F7D6D0] inline-flex items-center gap-1.5 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                Curated Lifestyle Edit
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2424] leading-tight">
                Your Next Little Obsession ✨
              </h2>

              <p className="text-sm sm:text-base text-[#594A47] max-w-lg leading-relaxed">
                Discover cute finds you'll want to keep, gift and show off — from soft quilted cloud bags to handwritten mini study essentials.
              </p>

              <div className="pt-2">
                <Link
                  to="/collection/new-arrivals"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-md shadow-[#C26D70]/20 hover:shadow-lg transition-all group"
                >
                  <span>SHOP NEW ARRIVALS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[380px] overflow-hidden">
              <img
                src="/images/brand_story.png"
                alt="Editorial Lifestyle"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#FAF3EE] via-transparent to-transparent opacity-80 lg:opacity-60" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
