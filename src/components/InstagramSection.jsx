import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/products';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function InstagramSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FAF7F2] via-white to-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBEAE7] border border-[#F7D6D0] text-[#C26D70] text-xs font-semibold hover:bg-[#F7D6D0] transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>@beadsofluck</span>
          </a>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2424]">
            A Little Love From Our Community ♡
          </h2>
          <p className="text-sm text-[#7A6C68]">
            Tag <strong>#beadsofluck</strong> on Instagram to be featured on our cozy feed!
          </p>
        </div>

        {/* Instagram 6 Square Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#F2EBD9] shadow-xs cursor-pointer"
            >
              <img
                src={post.image}
                alt="Instagram post by Beads of Luck"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 text-white">
                <div className="flex items-center justify-end">
                  <InstagramIcon className="w-4 h-4 text-white/90" />
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-xs font-bold">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-white text-white" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
                      {post.comments}
                    </span>
                  </div>
                  <p className="text-[10px] text-white/90 line-clamp-2">
                    {post.caption}
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
