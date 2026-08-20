import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ProductCarousel from '../components/ProductCarousel';
import PromoBanner from '../components/PromoBanner';
import CustomHamperSection from '../components/CustomHamperSection';
import GiftingSection from '../components/GiftingSection';
import FeaturedGrid from '../components/FeaturedGrid';
import InstagramSection from '../components/InstagramSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQAccordion from '../components/FAQAccordion';
import NewsletterCTA from '../components/NewsletterCTA';
import { useShop } from '../context/ShopContext';

export default function HomePage() {
  const { PRODUCTS } = useShop();

  const bestsellers = PRODUCTS.filter(p => p.isBestseller);
  const newArrivals = PRODUCTS.filter(p => p.isNew);

  return (
    <main>
      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Shop by Category ("Shop Your Mood ✨") */}
      <CategoryGrid />

      {/* 4. Trending / Bestsellers ("Everyone's Loving These ♡") */}
      <ProductCarousel
        badgeTag="Bestsellers"
        title="Everyone's Loving These ♡"
        subtitle="Cute picks that are having a moment."
        products={bestsellers}
        viewAllLink="/collection/bestsellers"
      />

      {/* 5. Promotional Banner */}
      <PromoBanner />

      {/* 6. New Arrivals ("Just Dropped ✨") */}
      <ProductCarousel
        badgeTag="Fresh Drop"
        title="Just Dropped ✨"
        subtitle="Be the first to get your hands on our newest aesthetic releases."
        products={newArrivals}
        viewAllLink="/collection/new-arrivals"
      />

      {/* 7. Custom Hampers ("Make It Personal 💝") */}
      <CustomHamperSection />

      {/* 8. Gifting Collections ("Gifts For Every Little Moment") */}
      <GiftingSection />

      {/* 9. Featured Products ("Cute Finds You'll Love", 4-col desktop grid) */}
      <FeaturedGrid />

      {/* 10. Instagram / Social Proof ("Spotted On Your Feed ♡") */}
      <InstagramSection />

      {/* 11. Testimonials ("Loved By Our Happy People ♡") */}
      <TestimonialsSection />

      {/* 12. FAQ Accordion */}
      <FAQAccordion />

      {/* 13. Newsletter ("Join The Cute Club ✨") */}
      <NewsletterCTA />
    </main>
  );
}
