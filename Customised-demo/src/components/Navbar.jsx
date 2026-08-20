import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, Sparkles, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ 
  cartCount, 
  wishlistCount, 
  onOpenCart, 
  onOpenWishlist, 
  onOpenSearch, 
  onOpenHamperBuilder,
  activeSection,
  onNavigate 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Shop', href: '#bestsellers' },
    { name: 'Collections', href: '#categories' },
    { name: 'Custom Hampers', href: '#hampers', isSpecial: true },
    { name: 'About Us', href: '#brand-story' },
    { name: 'Contact', href: '#footer' },
  ];

  const handleNavClick = (href, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href === '#hampers') {
      onOpenHamperBuilder();
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#F7D6D0] text-[#2D2424] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#C26D70] animate-pulse" />
        <span>✨ Free Shipping on orders over ₹999 | Use code <strong>CUTE10</strong> for 10% off ✨</span>
        <Sparkles className="w-3.5 h-3.5 text-[#C26D70] animate-pulse" />
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-sm border-b border-[#F2EBD9]' 
          : 'bg-[#FAF7F2]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left: Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-full text-[#2D2424] hover:bg-[#FBEAE7] transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 lg:flex-none text-center lg:text-left">
              <a href="#home" className="inline-flex items-center gap-2 group">
                <span className="w-8 h-8 rounded-full bg-[#FBEAE7] flex items-center justify-center text-[#C26D70] text-sm group-hover:rotate-12 transition-transform duration-300 shadow-sm border border-[#F7D6D0]">
                  🎀
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#2D2424]">
                  Beads of Luck
                </span>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    link.isSpecial 
                      ? 'text-[#C26D70] font-semibold bg-[#FBEAE7] px-3 py-1.5 rounded-full hover:bg-[#F7D6D0] transition-all border border-[#F7D6D0] flex items-center gap-1.5' 
                      : 'text-[#594A47] hover:text-[#C26D70]'
                  }`}
                >
                  {link.isSpecial && <Sparkles className="w-3.5 h-3.5 text-[#C26D70]" />}
                  {link.name}
                  {!link.isSpecial && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C26D70] transition-all duration-300 group-hover:w-full" />
                  )}
                </a>
              ))}
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Search Button */}
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-2.5 rounded-full text-[#2D2424] hover:bg-[#FBEAE7] transition-colors relative"
                title="Search Products"
              >
                <Search className="w-5 h-5 text-[#594A47]" />
              </button>

              {/* Wishlist Icon */}
              <button
                type="button"
                onClick={onOpenWishlist}
                className="p-2.5 rounded-full text-[#2D2424] hover:bg-[#FBEAE7] transition-colors relative"
                title="Wishlist"
              >
                <Heart className="w-5 h-5 text-[#594A47]" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#C26D70] text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag / Cart Icon */}
              <button
                type="button"
                onClick={onOpenCart}
                className="flex items-center gap-2 bg-[#FBEAE7] hover:bg-[#F7D6D0] text-[#2D2424] px-3.5 py-2 rounded-full transition-all duration-300 border border-[#F7D6D0] shadow-sm hover:shadow"
                title="Shopping Cart"
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 text-[#C26D70]" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#2D2424] text-white text-[10px] font-bold flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline text-xs font-semibold text-[#2D2424]">
                  {cartCount === 0 ? 'Bag' : `${cartCount} items`}
                </span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm lg:hidden"
            />

            {/* Menu Container */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-[#FAF7F2] z-50 p-6 flex flex-col justify-between lg:hidden shadow-2xl overflow-y-auto"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-6 border-b border-[#F2EBD9]">
                  <a href="#home" className="inline-flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <span className="w-8 h-8 rounded-full bg-[#FBEAE7] flex items-center justify-center text-[#C26D70] text-sm border border-[#F7D6D0]">
                      🎀
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#2D2424]">
                      Beads of Luck
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-[#FBEAE7] text-[#2D2424]"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="mt-8 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(link.href, e)}
                      className={`flex items-center justify-between text-base font-medium py-3 px-4 rounded-2xl transition-colors ${
                        link.isSpecial
                          ? 'bg-[#FBEAE7] text-[#C26D70] font-semibold border border-[#F7D6D0]'
                          : 'text-[#2D2424] hover:bg-[#F5EFE6]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {link.isSpecial && <Sparkles className="w-4 h-4 text-[#C26D70]" />}
                        {link.name}
                      </span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </a>
                  ))}
                </nav>

                {/* Quick Banner in Mobile Drawer */}
                <div className="mt-8 bg-white p-4 rounded-2xl border border-[#F7D6D0] shadow-sm">
                  <div className="text-xs font-semibold text-[#C26D70] tracking-wider uppercase mb-1">Custom Hamper Studio</div>
                  <p className="text-xs text-[#594A47] mb-3">Build your personalized gift box with cute products & custom notes.</p>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenHamperBuilder();
                    }}
                    className="w-full bg-[#C26D70] hover:bg-[#b05c5f] text-white text-xs font-medium py-2.5 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Create Your Hamper
                  </button>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="pt-6 border-t border-[#F2EBD9] text-center">
                <p className="text-xs text-[#7A6C68]">© 2026 Beads of Luck • Made with 💕</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
