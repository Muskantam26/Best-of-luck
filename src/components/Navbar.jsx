import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X, Sparkles, ChevronDown, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import AnnouncementBar from './AnnouncementBar';

export default function Navbar() {
  const { cartCount, wishlistCount, setIsCartOpen, setIsWishlistOpen, setIsSearchOpen } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setShopDropdownOpen(false);
  }, [location]);

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

  const shopCategories = [
    { name: 'Stationery', href: '/category/stationery', emoji: '🎀', desc: 'Calculators, notebooks & desk cute finds' },
    { name: 'Bags & Accessories', href: '/category/bags-accessories', emoji: '👜', desc: 'Totes, puffer slings & claws' },
    { name: 'Beauty & Self Care', href: '/category/beauty', emoji: '💅', desc: 'Press-on nails, spa wristbands & pampering' },
    { name: 'Gift Ideas', href: '/category/gifts', emoji: '💝', desc: 'Curated hampers & birthday boxes' },
    { name: 'Bestsellers', href: '/collection/bestsellers', emoji: '✨', desc: 'Our most-loved customer picks' },
    { name: 'New Arrivals', href: '/collection/new-arrivals', emoji: '🌸', desc: 'Freshly dropped cute additions' },
  ];

  return (
    <>
      <AnnouncementBar />

      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#F2EBD9]' 
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

            {/* Brand Logo / Wordmark */}
            <div className="flex-1 lg:flex-none text-center lg:text-left">
              <Link to="/" className="inline-flex items-center gap-2 group">
                <span className="w-9 h-9 rounded-full bg-[#FBEAE7] flex items-center justify-center text-[#C26D70] text-base group-hover:rotate-12 transition-transform duration-300 shadow-xs border border-[#F7D6D0]">
                  🎀
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#2D2424]">
                  Beads of Luck
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 relative">
              
              {/* SHOP with Mega Menu Dropdown */}
              <div 
                className="relative py-4"
                onMouseEnter={() => setShopDropdownOpen(true)}
                onMouseLeave={() => setShopDropdownOpen(false)}
              >
                <Link
                  to="/shop"
                  className="text-xs font-bold uppercase tracking-widest text-[#2D2424] hover:text-[#C26D70] transition-colors flex items-center gap-1"
                >
                  <span>SHOP</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${shopDropdownOpen ? 'rotate-180 text-[#C26D70]' : ''}`} />
                </Link>

                {/* Dropdown Mega Menu */}
                <AnimatePresence>
                  {shopDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-[#F2EBD9] p-3 grid grid-cols-1 gap-1 z-50"
                    >
                      {shopCategories.map((cat) => (
                        <Link
                          key={cat.name}
                          to={cat.href}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FBEAE7] transition-colors group"
                        >
                          <span className="text-xl p-1.5 rounded-lg bg-[#FAF7F2] group-hover:scale-110 transition-transform">
                            {cat.emoji}
                          </span>
                          <div>
                            <p className="text-xs font-bold text-[#2D2424] group-hover:text-[#C26D70]">
                              {cat.name}
                            </p>
                            <p className="text-[11px] text-[#7A6C68] leading-tight">
                              {cat.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/collections"
                className="text-xs font-bold uppercase tracking-widest text-[#594A47] hover:text-[#C26D70] transition-colors"
              >
                COLLECTIONS
              </Link>

              <Link
                to="/category/gifts"
                className="text-xs font-bold uppercase tracking-widest text-[#594A47] hover:text-[#C26D70] transition-colors"
              >
                GIFTS
              </Link>

              <Link
                to="/category/custom-hampers"
                className="text-xs font-bold uppercase tracking-widest text-[#C26D70] bg-[#FBEAE7] px-3.5 py-1.5 rounded-full hover:bg-[#F7D6D0] transition-all border border-[#F7D6D0] flex items-center gap-1.5 shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C26D70]" />
                CUSTOM HAMPERS
              </Link>

              <Link
                to="/about"
                className="text-xs font-bold uppercase tracking-widest text-[#594A47] hover:text-[#C26D70] transition-colors"
              >
                ABOUT
              </Link>

            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Search Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 rounded-full text-[#2D2424] hover:bg-[#FBEAE7] transition-colors"
                title="Search Products"
              >
                <Search className="w-5 h-5 text-[#594A47]" />
              </button>

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
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

              {/* Account Icon */}
              <Link
                to="/contact"
                className="p-2.5 rounded-full text-[#2D2424] hover:bg-[#FBEAE7] transition-colors hidden sm:block"
                title="Contact / Account"
              >
                <User className="w-5 h-5 text-[#594A47]" />
              </Link>

              {/* Shopping Bag Icon */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2 bg-[#FBEAE7] hover:bg-[#F7D6D0] text-[#2D2424] px-3.5 py-2 rounded-full transition-all duration-300 border border-[#F7D6D0] shadow-2xs hover:shadow"
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
                <span className="hidden sm:inline text-xs font-bold text-[#2D2424]">
                  {cartCount === 0 ? 'Bag' : `${cartCount}`}
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-50 backdrop-blur-xs lg:hidden"
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-[#FAF7F2] z-50 p-6 flex flex-col justify-between lg:hidden shadow-2xl overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#F2EBD9]">
                  <Link to="/" className="inline-flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#FBEAE7] flex items-center justify-center text-[#C26D70] text-sm border border-[#F7D6D0]">
                      🎀
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#2D2424]">
                      Beads of Luck
                    </span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-[#FBEAE7] text-[#2D2424]"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-2">
                  <Link to="/shop" className="p-3 font-bold text-sm text-[#2D2424] hover:bg-[#FBEAE7] rounded-2xl">
                    🛍️ SHOP ALL
                  </Link>
                  <Link to="/category/stationery" className="p-3 font-medium text-xs text-[#594A47] hover:bg-[#FBEAE7] rounded-2xl pl-6">
                    🎀 Stationery
                  </Link>
                  <Link to="/category/bags-accessories" className="p-3 font-medium text-xs text-[#594A47] hover:bg-[#FBEAE7] rounded-2xl pl-6">
                    👜 Bags & Accessories
                  </Link>
                  <Link to="/category/beauty" className="p-3 font-medium text-xs text-[#594A47] hover:bg-[#FBEAE7] rounded-2xl pl-6">
                    💅 Beauty & Self Care
                  </Link>
                  <Link to="/category/gifts" className="p-3 font-medium text-xs text-[#594A47] hover:bg-[#FBEAE7] rounded-2xl pl-6">
                    💝 Gift Ideas
                  </Link>
                  <Link to="/category/custom-hampers" className="p-3 font-bold text-xs text-[#C26D70] bg-[#FBEAE7] rounded-2xl border border-[#F7D6D0]">
                    ✨ Custom Hampers Studio
                  </Link>
                  <Link to="/collections" className="p-3 font-bold text-sm text-[#2D2424] hover:bg-[#FBEAE7] rounded-2xl">
                    🌸 COLLECTIONS
                  </Link>
                  <Link to="/about" className="p-3 font-bold text-sm text-[#2D2424] hover:bg-[#FBEAE7] rounded-2xl">
                    💕 ABOUT US
                  </Link>
                  <Link to="/contact" className="p-3 font-bold text-sm text-[#2D2424] hover:bg-[#FBEAE7] rounded-2xl">
                    💌 CONTACT US
                  </Link>
                </nav>
              </div>

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
