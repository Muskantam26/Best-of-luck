import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import BestsellersSection from './components/BestsellersSection';
import ProductDetailModal from './components/ProductDetailModal';
import CustomHamperSection from './components/CustomHamperSection';
import CustomHamperModal from './components/CustomHamperModal';
import GiftingSection from './components/GiftingSection';
import InstagramSection from './components/InstagramSection';
import TestimonialsSection from './components/TestimonialsSection';
import BrandStory from './components/BrandStory';
import NewsletterCTA from './components/NewsletterCTA';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import WishlistDrawer from './components/WishlistDrawer';
import QuickSearchModal from './components/QuickSearchModal';
import ToastNotification from './components/ToastNotification';
import BackToTop from './components/BackToTop';
import { PRODUCTS } from './data/products';

export default function App() {
  // App State
  const [cartItems, setCartItems] = useState([
    {
      id: 'mini-calculator',
      name: 'Aesthetic Mini Pocket Calculator',
      price: 299,
      quantity: 1,
      selectedColor: 'Blush Pink',
      image: '/images/product_calculator.png',
      includeGiftWrap: false
    }
  ]);
  
  const [wishlistIds, setWishlistIds] = useState(['tote-bag', 'press-on-nails']);

  // Modals & Drawers State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHamperModalOpen, setIsHamperModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Category filter state for bestsellers
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Toast state
  const [toast, setToast] = useState(null);

  const showToast = (productName) => {
    setToast({ productName });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Cart Actions
  const handleAddToCart = (product, quantity = 1, selectedColor = 'Default', includeGiftWrap = false) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === product.id && item.selectedColor === selectedColor);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: quantity,
          selectedColor: selectedColor,
          image: product.image,
          includeGiftWrap: includeGiftWrap
        }];
      }
    });

    showToast(product.name);
  };

  const handleUpdateCartQuantity = (id, color, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveCartItem(id, color);
      return;
    }
    setCartItems(prev => prev.map(item => {
      if (item.id === id && item.selectedColor === color) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const handleRemoveCartItem = (id, color) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedColor === color)));
  };

  const handleAddHamperToCart = (hamperItem) => {
    setCartItems(prev => [...prev, { ...hamperItem, quantity: 1 }]);
    showToast(hamperItem.name);
  };

  // Wishlist Actions
  const handleToggleWishlist = (product) => {
    setWishlistIds(prev => {
      if (prev.includes(product.id)) {
        return prev.filter(id => id !== product.id);
      } else {
        return [...prev, product.id];
      }
    });
  };

  // Quick view trigger
  const handleQuickViewById = (productId) => {
    const found = PRODUCTS.find(p => p.id === productId);
    if (found) {
      setQuickViewProduct(found);
    }
  };

  const handleBuyNow = (product, quantity, selectedColor, includeGiftWrap) => {
    handleAddToCart(product, quantity, selectedColor, includeGiftWrap);
    setQuickViewProduct(null);
    setIsCartOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans antialiased text-[#2D2424]">
      
      {/* Sticky Navbar */}
      <Navbar
        cartCount={cartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenHamperBuilder={() => setIsHamperModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onShopClick={() => {
          document.querySelector('#bestsellers')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onExploreGiftsClick={() => {
          document.querySelector('#gifting')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onQuickView={handleQuickViewById}
      />

      {/* Featured Categories */}
      <CategorySection
        onSelectCategory={(catName) => {
          setSelectedCategory(catName);
          document.querySelector('#bestsellers')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Bestsellers Product Grid */}
      <BestsellersSection
        onAddToCart={handleAddToCart}
        onQuickView={(prod) => setQuickViewProduct(prod)}
        onToggleWishlist={handleToggleWishlist}
        wishlistIds={wishlistIds}
        selectedCategory={selectedCategory}
        onResetCategory={() => setSelectedCategory(null)}
      />

      {/* Custom Hampers Section */}
      <CustomHamperSection
        onOpenHamperBuilder={() => setIsHamperModalOpen(true)}
      />

      {/* Gifting Section */}
      <GiftingSection
        onSelectGiftMoment={(momentTitle) => {
          setSelectedCategory(momentTitle.split(' ')[0]);
          document.querySelector('#bestsellers')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Instagram Community Section */}
      <InstagramSection />

      {/* Customer Reviews Section */}
      <TestimonialsSection />

      {/* Brand Story Editorial */}
      <BrandStory />

      {/* Newsletter CTA */}
      <NewsletterCTA />

      {/* Footer */}
      <Footer
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      {/* Modals & Drawers */}
      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
      />

      <CustomHamperModal
        isOpen={isHamperModalOpen}
        onClose={() => setIsHamperModalOpen(false)}
        onAddHamperToCart={handleAddHamperToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutModalOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        cartItems={cartItems}
        onClearCart={() => setCartItems([])}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onQuickView={(prod) => setQuickViewProduct(prod)}
      />

      {/* Floating Toast Notification */}
      <ToastNotification
        toast={toast}
        onClose={() => setToast(null)}
        onOpenCart={() => {
          setToast(null);
          setIsCartOpen(true);
        }}
      />

      {/* Back to top button */}
      <BackToTop />

    </div>
  );
}