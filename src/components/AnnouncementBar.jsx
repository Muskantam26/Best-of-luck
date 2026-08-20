import React from 'react';
import { Sparkles } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#F7D6D0] text-[#2D2424] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-[#F2D0C8]">
      <Sparkles className="w-3.5 h-3.5 text-[#C26D70] animate-pulse" />
      <span>✨ Free Shipping on Orders Above ₹999 | Cute Finds • Thoughtfully Curated | Code: <strong>CUTE10</strong> ✨</span>
      <Sparkles className="w-3.5 h-3.5 text-[#C26D70] animate-pulse" />
    </div>
  );
}
