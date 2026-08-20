import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, ShoppingBag, Truck, ShieldCheck, ChevronDown, Check, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { PRODUCTS, addToCart, toggleWishlist, isInWishlist, setIsCartOpen } = useShop();

  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : 'Default');
  const [quantity, setQuantity] = useState(1);
  const [includeGiftWrap, setIncludeGiftWrap] = useState(false);
  const [openTab, setOpenTab] = useState('details'); // 'details', 'shipping', 'care', 'reviews'

  const images = product.images || [product.image];
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, includeGiftWrap);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor, includeGiftWrap);
    setIsCartOpen(true);
    navigate('/cart');
  };

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Links */}
        <nav className="flex items-center gap-2 text-xs text-[#7A6C68] mb-8 font-medium">
          <Link to="/" className="hover:text-[#C26D70]">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#C26D70]">Shop</Link>
          <span>/</span>
          <Link to={`/category/${product.category}`} className="hover:text-[#C26D70]">{product.categoryName}</Link>
          <span>/</span>
          <span className="text-[#2D2424] font-bold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Main Product Layout: Gallery Left, Details Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white p-6 sm:p-10 rounded-3xl border border-[#F2EBD9] shadow-lg mb-16">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Main Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#FAF7F2] border border-[#F7D6D0]">
              <img
                src={images[activeImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider bg-[#FBEAE7] text-[#C26D70] border border-[#F7D6D0] px-3 py-1 rounded-full shadow-2xs">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeImageIndex === idx ? 'border-[#C26D70] scale-105 shadow-sm' : 'border-[#F2EBD9] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Information & Purchase Controls */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-4">
              
              {/* Category & Ratings */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C26D70] bg-[#FBEAE7] px-3 py-1 rounded-full border border-[#F7D6D0]">
                  {product.categoryName}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-[#D98284]">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D98284]" />
                    ))}
                  </div>
                  <span className="font-bold text-[#2D2424]">{product.rating}</span>
                  <span className="text-[#7A6C68]">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2424]">
                {product.name}
              </h1>

              {/* Price & Discount */}
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl font-bold text-[#2D2424]">
                  ₹{product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-base text-[#7A6C68] line-through font-medium">
                    ₹{product.oldPrice}
                  </span>
                )}
                {product.discount && (
                  <span className="text-xs font-bold text-[#C26D70] bg-[#FBEAE7] px-2.5 py-1 rounded-full border border-[#F7D6D0]">
                    {product.discount}
                  </span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-[#594A47] leading-relaxed">
                {product.description || product.shortDescription}
              </p>

              {/* Color Selection if available */}
              {product.colors && product.colors.length > 0 && (
                <div className="pt-2">
                  <label className="block text-xs font-bold text-[#2D2424] uppercase tracking-wider mb-2">
                    Select Shade / Color: <span className="text-[#C26D70] font-normal">{selectedColor}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((col) => (
                      <button
                        key={col}
                        type="button"
                        onClick={() => setSelectedColor(col)}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                          selectedColor === col
                            ? 'bg-[#C26D70] text-white border-[#C26D70] shadow-2xs'
                            : 'bg-[#FAF7F2] text-[#2D2424] border-[#F7D6D0] hover:border-[#C26D70]'
                        }`}
                      >
                        {col}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Gift Wrap Checkbox */}
              <div 
                onClick={() => setIncludeGiftWrap(!includeGiftWrap)}
                className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                  includeGiftWrap ? 'bg-[#FBEAE7] border-[#C26D70]' : 'bg-[#FAF7F2] border-[#F2EBD9]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">🎀</span>
                  <div>
                    <p className="text-xs font-bold text-[#2D2424]">Add Luxury Gift Packaging (+₹49)</p>
                    <p className="text-[10px] text-[#7A6C68]">Wrapped in blush tissue paper, silk ribbon & floral card</p>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  includeGiftWrap ? 'bg-[#C26D70] text-white border-[#C26D70]' : 'bg-white border-[#F7D6D0]'
                }`}>
                  {includeGiftWrap && <Check className="w-3.5 h-3.5" />}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-xs font-bold text-[#2D2424] uppercase tracking-wider">Quantity:</span>
                <div className="flex items-center border border-[#F7D6D0] rounded-full bg-[#FAF7F2] p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-full bg-white text-[#2D2424] font-bold text-sm flex items-center justify-center shadow-2xs"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-xs text-[#2D2424]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-full bg-white text-[#2D2424] font-bold text-sm flex items-center justify-center shadow-2xs"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* CTAs: ADD TO CART, BUY NOW, WISHLIST */}
              <div className="space-y-3 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="py-4 px-6 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-md shadow-[#C26D70]/20 flex items-center justify-center gap-2 transition-all"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO CART</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className="py-4 px-6 bg-[#2D2424] hover:bg-black text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-md flex items-center justify-center gap-2 transition-all"
                  >
                    <span>BUY NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className={`w-full py-3 px-6 rounded-full text-xs font-bold transition-all border flex items-center justify-center gap-2 ${
                    isWishlisted 
                      ? 'bg-[#FBEAE7] text-[#C26D70] border-[#F7D6D0]' 
                      : 'bg-white text-[#594A47] border-[#F2EBD9] hover:border-[#F7D6D0]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#C26D70] text-[#C26D70]' : ''}`} />
                  <span>{isWishlisted ? 'SAVED TO WISHLIST ♡' : 'ADD TO WISHLIST'}</span>
                </button>
              </div>

            </div>

            {/* Accordion Tabs Section */}
            <div className="pt-6 border-t border-[#F2EBD9] space-y-3">
              
              {/* Product Details Tab */}
              <div className="border-b border-[#F2EBD9] pb-3">
                <button
                  type="button"
                  onClick={() => setOpenTab(openTab === 'details' ? '' : 'details')}
                  className="w-full flex items-center justify-between text-xs font-bold text-[#2D2424] uppercase tracking-wider"
                >
                  <span>Product Details & Highlights</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openTab === 'details' ? 'rotate-180 text-[#C26D70]' : ''}`} />
                </button>
                {openTab === 'details' && (
                  <ul className="mt-3 text-xs text-[#594A47] space-y-1.5 list-disc pl-4 leading-relaxed">
                    {product.highlights ? (
                      product.highlights.map((h, i) => <li key={i}>{h}</li>)
                    ) : (
                      <>
                        <li>Premium handpicked aesthetic quality</li>
                        <li>Soft tactile pastel aesthetic design</li>
                        <li>Carefully inspected before dispatch</li>
                      </>
                    )}
                  </ul>
                )}
              </div>

              {/* Shipping & Returns Tab */}
              <div className="border-b border-[#F2EBD9] pb-3">
                <button
                  type="button"
                  onClick={() => setOpenTab(openTab === 'shipping' ? '' : 'shipping')}
                  className="w-full flex items-center justify-between text-xs font-bold text-[#2D2424] uppercase tracking-wider"
                >
                  <span>Shipping & Hassle-Free Returns</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openTab === 'shipping' ? 'rotate-180 text-[#C26D70]' : ''}`} />
                </button>
                {openTab === 'shipping' && (
                  <p className="mt-3 text-xs text-[#594A47] leading-relaxed">
                    Dispatched within 24 hours. Free delivery on orders above ₹999. Easy 7-day exchange or refund policy.
                  </p>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* You May Also Like Section */}
        <div className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-[#2D2424] mb-6">
            You May Also Like ♡
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map(rel => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
