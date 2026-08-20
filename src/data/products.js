export const PRODUCTS = [
  {
    id: 'mini-calculator',
    name: 'Aesthetic Mini Pocket Calculator',
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviewsCount: 128,
    badge: 'Bestseller',
    category: 'Stationery',
    image: '/images/product_calculator.png',
    shortDescription: 'Ultra-cute pocket calculator with smooth rounded buttons and a key ring charm for your bag or keys.',
    description: 'Bring a touch of pastel joy to your everyday calculations! Our Aesthetic Mini Pocket Calculator features tactile rounded buttons, dual power supply, and a handy keychain attachment so you can bring cute functionality wherever you go.',
    highlights: [
      'Tactile soft-touch rounded buttons',
      'Dual power: Solar + battery included',
      'Built-in keychain attachment ring',
      'Pocket-sized light weight (only 45g)'
    ],
    inStock: true,
    colors: ['Blush Pink', 'Soft Lilac', 'Warm Cream']
  },
  {
    id: 'tote-bag',
    name: 'Blush Floral Embroidered Canvas Tote Bag',
    price: 499,
    originalPrice: 649,
    rating: 5.0,
    reviewsCount: 94,
    badge: 'Popular',
    category: 'Bags & Accessories',
    image: '/images/product_tote.png',
    shortDescription: 'Heavyweight organic cotton canvas tote with delicate dusty rose floral embroidery.',
    description: 'Designed for daily coffee runs, bookstore trips, and warm weekend walks. Crafted from 100% heavy organic canvas with reinforced handles and a subtle inner zip pocket for your phone and lip balm.',
    highlights: [
      '100% Premium organic cotton canvas',
      'Intricate dusty rose floral embroidery',
      'Spacious interior with zipper safety pocket',
      'Sturdy 11-inch drop shoulder handles'
    ],
    inStock: true,
    colors: ['Natural Ivory', 'Blush Tinted']
  },
  {
    id: 'facial-wrist-band',
    name: 'Plush Bow Spa Facial Wrist Bands (Set of 2)',
    price: 199,
    originalPrice: 299,
    rating: 4.8,
    reviewsCount: 210,
    badge: 'Cute Pick',
    category: 'Beauty & Self Care',
    image: '/images/product_wristband.png',
    shortDescription: 'Ultra-soft plush microfiber spa wristbands to keep your arms & sleeves completely dry during skincare routines.',
    description: 'Say goodbye to water dripping down your arms while washing your face! These plush microfiber wristbands absorb moisture instantly and feature adorable bow accents to elevate your daily self-care ritual.',
    highlights: [
      'Ultra-absorbent plush microfiber fabric',
      'High-elasticity comfortable fit for all wrist sizes',
      'Quick-drying & machine washable',
      'Set includes 2 matching wristbands'
    ],
    inStock: true,
    colors: ['Pink & Lavender Set', 'Ivory & Pink Set']
  },
  {
    id: 'korean-sling-bag',
    name: 'Korean Quilted Puffer Cloud Sling Bag',
    price: 699,
    originalPrice: 899,
    rating: 4.9,
    reviewsCount: 85,
    badge: 'New',
    category: 'Bags & Accessories',
    image: '/images/product_slingbag.png',
    shortDescription: 'Trendy soft pastel quilted puffer crossbody sling bag with luxurious gold chain accent.',
    description: 'The ultimate aesthetic accessory loved across Seoul streets! Ultra-lightweight cloud puffer texture with a soft dusty rose finish, smooth zipper closure, and gold hardware accents that elevate any outfit.',
    highlights: [
      'Featherweight soft puffer quilt material',
      'Elegant gold-tone hardware & chain detail',
      'Adjustable crossbody strap',
      'Water-resistant lining with inner slot'
    ],
    inStock: true,
    colors: ['Dusty Rose', 'Creamy Vanilla', 'Soft Lilac']
  },
  {
    id: 'press-on-nails',
    name: 'Handmade Pearl & Ribbon Press-On Nail Set',
    price: 299,
    originalPrice: 459,
    rating: 4.9,
    reviewsCount: 165,
    badge: 'Trending',
    category: 'Beauty & Self Care',
    image: '/images/product_nails.png',
    shortDescription: 'Salon-quality reusable gel press-on nails with delicate pearl charms and hand-painted bow art.',
    description: 'Get instant salon-worthy nails in under 5 minutes without damage! Each kit includes 24 custom-sized press-on nails crafted with high-shine gel polish, delicate pearls, and 3D bow charms, plus a full prep tool kit.',
    highlights: [
      'Reusable up to 5+ wear applications',
      'Includes 24 nails in 12 universal sizes',
      'Full application kit (Nail glue, tabs, file, wooden stick)',
      'Chip-resistant UV gel topcoat finish'
    ],
    inStock: true,
    colors: ['Blush Bow Pearls', 'Milky Way Lavender']
  },
  {
    id: 'silicon-travel-pouch',
    name: 'Matte Pastel Silicone Travel Pouch',
    price: 349,
    originalPrice: 449,
    rating: 4.7,
    reviewsCount: 72,
    badge: 'Cute Pick',
    category: 'Cute Finds',
    image: '/images/product_pouch.png',
    shortDescription: 'Waterproof smooth matte silicone pouch with rose gold zipper for stationery, makeup & travel items.',
    description: 'Keep your daily bag organized in pure aesthetic style. Made from food-grade waterproof matte silicone that easily wipes clean. Perfect for pens, makeup, lipsticks, and small trinkets.',
    highlights: [
      '100% Waterproof & stain-resistant silicone',
      'Smooth premium rose-gold zipper',
      'Soft-touch matte tactile feel',
      'Compact size (20cm x 8cm x 5cm)'
    ],
    inStock: true,
    colors: ['Lavender Mist', 'Blush Nude', 'Sage Dew']
  }
];

export const CATEGORIES = [
  {
    id: 'stationery',
    name: 'Stationery',
    emoji: '🎀',
    description: 'Cute notebooks, pens, mini calculators & desk accessories to brighten your workspace.',
    image: '/images/product_calculator.png',
    itemCount: '24+ Items'
  },
  {
    id: 'gifting',
    name: 'Gifting',
    emoji: '💝',
    description: 'Thoughtfully curated gift sets & hampers made to bring warm smiles to someone special.',
    image: '/images/custom_hamper.png',
    itemCount: '18+ Bundles'
  },
  {
    id: 'bags-accessories',
    name: 'Bags & Accessories',
    emoji: '👜',
    description: 'Trendy tote bags, quilted puffer slings & aesthetic everyday carry essentials.',
    image: '/images/product_slingbag.png',
    itemCount: '32+ Items'
  },
  {
    id: 'beauty-selfcare',
    name: 'Beauty & Self Care',
    emoji: '💅',
    description: 'Plush spa wristbands, hand-painted press-on nails & cozy self-pampering finds.',
    image: '/images/product_nails.png',
    itemCount: '15+ Items'
  },
  {
    id: 'cute-finds',
    name: 'Cute Finds',
    emoji: '✨',
    description: 'Charming silicone pouches, keychains, ribbons & delightful everyday novelties.',
    image: '/images/product_pouch.png',
    itemCount: '40+ Items'
  }
];

export const GIFT_MOMENTS = [
  {
    id: 'birthday',
    title: 'Birthday 🎂',
    subtitle: 'Sweet surprises for her special day',
    image: '/images/custom_hamper.png',
    tag: 'Popular for Birthdays'
  },
  {
    id: 'bestie',
    title: 'Bestie 💕',
    subtitle: 'Matching cute finds for your partner in crime',
    image: '/images/product_wristband.png',
    tag: 'Bestie Favorites'
  },
  {
    id: 'self-love',
    title: 'Self Love 🌸',
    subtitle: 'Treat yourself to everyday pampering & joy',
    image: '/images/product_nails.png',
    tag: 'Personal Treat'
  },
  {
    id: 'thank-you',
    title: 'Thank You 💌',
    subtitle: 'Thoughtful tokens of heartfelt gratitude',
    image: '/images/product_calculator.png',
    tag: 'Warm Thanks'
  },
  {
    id: 'just-because',
    title: 'Just Because ✨',
    subtitle: 'No occasion needed to spread cute happiness',
    image: '/images/product_tote.png',
    tag: 'Spontaneous Joy'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: '/images/hero_flatlay.png',
    likes: '1,420',
    comments: '84',
    caption: 'Sunday flatlay goals with our new mini calculators & press-on nails 💕 ✨ #beadsofluck'
  },
  {
    id: 2,
    image: '/images/custom_hamper.png',
    likes: '2,150',
    comments: '112',
    caption: 'Packed with love for a special birthday hamper today! 🎀 🎁 #customhampers'
  },
  {
    id: 3,
    image: '/images/product_slingbag.png',
    likes: '1,890',
    comments: '96',
    caption: 'Cloud puffer perfection for cozy coffee walks ☕ ☁️ #aestheticbag'
  },
  {
    id: 4,
    image: '/images/product_wristband.png',
    likes: '980',
    comments: '45',
    caption: 'No more wet sleeves during skincare routines! 🌸 💦 #selfcare'
  },
  {
    id: 5,
    image: '/images/product_nails.png',
    likes: '3,200',
    comments: '178',
    caption: 'Pearl bows & gel shine. Custom handmade press-ons 💅 ✨ #nailsofinstagram'
  },
  {
    id: 6,
    image: '/images/brand_story.png',
    likes: '1,640',
    comments: '73',
    caption: 'Inside our studio today crafting your cute orders! 💌 🎀 #studiobites'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ananya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Everything was so cute and beautifully packed! Absolutely loved my order. The mini calculator is literally the cutest thing on my study desk. 💕',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    purchasedItem: 'Mini Calculator & Wristbands'
  },
  {
    id: 2,
    name: 'Rhea Kapoor',
    location: 'Delhi',
    rating: 5,
    text: "Perfect little gifts for my bestie's birthday. The custom hamper option was so easy to pick and the gift box packaging felt like pure luxury! Will definitely order again!",
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    purchasedItem: 'Custom Birthday Hamper'
  },
  {
    id: 3,
    name: 'Priya Nair',
    location: 'Bengaluru',
    rating: 5,
    text: 'Loved the quality and the packaging. So aesthetic! The tote bag is heavyweight and holds all my books comfortably. Super fast shipping too! ✨',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80',
    purchasedItem: 'Blush Floral Canvas Tote Bag'
  },
  {
    id: 4,
    name: 'Tara D’Souza',
    location: 'Pune',
    rating: 5,
    text: 'The Korean puffer sling bag is insane value for money! Got so many compliments at college. Beats big brand bags in quality and look! 🌸',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    purchasedItem: 'Korean Quilted Puffer Sling Bag'
  }
];
