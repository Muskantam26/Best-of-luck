import React from 'react';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer({ onScrollToTop }) {
  return (
    <footer id="footer" className="bg-white border-t border-[#F2EBD9] pt-16 pb-8 text-[#594A47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#F2EBD9]">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#FBEAE7] flex items-center justify-center text-[#C26D70] text-sm border border-[#F7D6D0]">
                🎀
              </span>
              <span className="font-serif text-2xl font-bold text-[#2D2424]">
                Beads of Luck
              </span>
            </a>
            <p className="text-xs text-[#7A6C68] leading-relaxed max-w-sm">
              Discover cute stationery, trendy accessories, thoughtful gifts and everyday essentials — curated specially for you with love & magic.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#FBEAE7] text-[#2D2424] hover:text-[#C26D70] flex items-center justify-center transition-colors border border-[#F2EBD9]"
                title="Follow us on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#FBEAE7] text-[#2D2424] hover:text-[#C26D70] flex items-center justify-center transition-colors border border-[#F2EBD9]"
                title="Follow us on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#2D2424] uppercase tracking-wider">
              Shop
            </h4>
            <ul className="space-y-2 text-xs text-[#7A6C68]">
              <li><a href="#bestsellers" className="hover:text-[#C26D70] transition-colors">New Arrivals</a></li>
              <li><a href="#bestsellers" className="hover:text-[#C26D70] transition-colors">Bestsellers</a></li>
              <li><a href="#categories" className="hover:text-[#C26D70] transition-colors">Stationery</a></li>
              <li><a href="#gifting" className="hover:text-[#C26D70] transition-colors">Gifts & Hampers</a></li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#2D2424] uppercase tracking-wider">
              Help
            </h4>
            <ul className="space-y-2 text-xs text-[#7A6C68]">
              <li><a href="#footer" className="hover:text-[#C26D70] transition-colors">Contact Us</a></li>
              <li><a href="#footer" className="hover:text-[#C26D70] transition-colors">Shipping Policy</a></li>
              <li><a href="#footer" className="hover:text-[#C26D70] transition-colors">Returns & Refunds</a></li>
              <li><a href="#footer" className="hover:text-[#C26D70] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#2D2424] uppercase tracking-wider">
              Follow Us
            </h4>
            <p className="text-xs text-[#7A6C68]">
              Tag us in your unboxing videos on Instagram <strong>@beadsofluck</strong> to win monthly gift hampers!
            </p>
            <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#F2EBD9]">
              <span className="text-[11px] font-bold text-[#C26D70] block">✨ Customer Support:</span>
              <span className="text-[11px] text-[#2D2424] block">hello@beadsofluck.com</span>
              <span className="text-[11px] text-[#7A6C68] block">+91 98765 43210 (Mon-Sat)</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6C68]">
          <p>© 2026 Beads of Luck. All rights reserved. Made with 💕 for cuties everywhere.</p>
          
          <button
            onClick={onScrollToTop}
            className="flex items-center gap-1.5 hover:text-[#C26D70] transition-colors text-xs font-semibold bg-[#FAF7F2] px-3.5 py-1.5 rounded-full border border-[#F2EBD9]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
