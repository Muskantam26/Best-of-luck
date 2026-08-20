import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';

const ShopContext = createContext();

export function ShopProvider({ children }) {
  // Cart state persisted in localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('beads_of_luck_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 'mini-calculator',
          name: 'Aesthetic Mini Pocket Calculator',
          price: 299,
          quantity: 1,
          selectedColor: 'Blush Pink',
          image: '/images/product_calculator.png',
          includeGiftWrap: false
        }
      ];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted in localStorage
  const [wishlistIds, setWishlistIds] = useState(() => {
    try {
      const saved = localStorage.getItem('beads_of_luck_wishlist');
      return saved ? JSON.parse(saved) : ['tote-bag', 'press-on-nails'];
    } catch {
      return ['tote-bag'];
    }
  });

  // Drawers & Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Toast notification state
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('beads_of_luck_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('beads_of_luck_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  const showToast = (productName) => {
    setToast({ productName });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const addToCart = (product, quantity = 1, selectedColor = 'Default', includeGiftWrap = false) => {
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

  const updateCartQuantity = (id, selectedColor, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id, selectedColor);
      return;
    }
    setCartItems(prev => prev.map(item => {
      if (item.id === id && item.selectedColor === selectedColor) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeFromCart = (id, selectedColor) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedColor === selectedColor)));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleWishlist = (product) => {
    setWishlistIds(prev => {
      if (prev.includes(product.id)) {
        return prev.filter(id => id !== product.id);
      } else {
        return [...prev, product.id];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlistIds.includes(productId);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <ShopContext.Provider value={{
      PRODUCTS,
      cartItems,
      wishlistIds,
      cartCount,
      wishlistCount: wishlistIds.length,
      isCartOpen,
      setIsCartOpen,
      isWishlistOpen,
      setIsWishlistOpen,
      isSearchOpen,
      setIsSearchOpen,
      quickViewProduct,
      setQuickViewProduct,
      toast,
      setToast,
      addToCart,
      updateCartQuantity,
      removeFromCart,
      clearCart,
      toggleWishlist,
      isInWishlist,
      showToast
    }}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}
