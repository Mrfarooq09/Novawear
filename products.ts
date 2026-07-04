import type { Product, Review } from '../types';

export const products: Product[] = [
  // Men's Collection
  {
    id: 'm1',
    name: 'Classic Oxford Suit',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'men',
    subcategory: 'Suits',
    isNew: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 128,
    colors: ['#1a1a1a', '#2c3e50', '#4a4a4a'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Impeccably tailored Oxford suit in premium Italian wool. Features a modern slim fit with natural shoulder construction.'
  },
  {
    id: 'm2',
    name: 'Cashmere Overcoat',
    price: 2499,
    image: 'https://images.pexels.com/photos/10409897/pexels-photo-10409897.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'men',
    subcategory: 'Outerwear',
    isFeatured: true,
    rating: 4.8,
    reviewCount: 89,
    colors: ['#1a1a1a', '#5d4e37', '#8b7355'],
    sizes: ['M', 'L', 'XL'],
    description: 'Luxurious cashmere overcoat with silk lining. Timeless double-breasted design for the distinguished gentleman.'
  },
  {
    id: 'm3',
    name: 'Premium Leather Jacket',
    price: 899,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/8148580/pexels-photo-8148580.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'men',
    subcategory: 'Outerwear',
    isNew: true,
    rating: 4.7,
    reviewCount: 156,
    colors: ['#1a1a1a', '#3d2914'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Handcrafted lambskin leather jacket with quilted lining. A statement piece for the modern wardrobe.'
  },
  {
    id: 'm4',
    name: 'Silk Tie Collection',
    price: 189,
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'men',
    subcategory: 'Accessories',
    rating: 4.6,
    reviewCount: 203,
    colors: ['#8b0000', '#1a1a1a', '#000080', '#006400'],
    description: 'Hand-finished silk ties in classic patterns. Each tie is crafted from the finest mulberry silk.'
  },
  {
    id: 'm5',
    name: 'Merino Wool Sweater',
    price: 349,
    image: 'https://images.pexels.com/photos/6264061/pexels-photo-6264061.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'men',
    subcategory: 'Knitwear',
    rating: 4.8,
    reviewCount: 167,
    colors: ['#1a1a1a', '#f5f5dc', '#5d4e37', '#000080'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Ultra-soft merino wool sweater in a versatile crew neck style. Perfect for layering or worn alone.'
  },
  {
    id: 'm6',
    name: 'Tailored Dress Shirt',
    price: 249,
    originalPrice: 299,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'men',
    subcategory: 'Shirts',
    rating: 4.7,
    reviewCount: 289,
    colors: ['#ffffff', '#87ceeb', '#f5f5dc', '#1a1a1a'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Egyptian cotton dress shirt with French cuffs. Impeccable tailoring meets everyday comfort.'
  },
  // Women's Collection
  {
    id: 'w1',
    name: 'Silk Evening Gown',
    price: 1899,
    image: 'https://images.pexels.com/photos/1004867/pexels-photo-1004867.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'women',
    subcategory: 'Dresses',
    isNew: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 94,
    colors: ['#000000', '#8b0000', '#000080'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Stunning floor-length silk gown with delicate beading. A showstopper for your most elegant evenings.'
  },
  {
    id: 'w2',
    name: 'Cashmere Cardigan',
    price: 599,
    originalPrice: 749,
    image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'women',
    subcategory: 'Knitwear',
    isFeatured: true,
    rating: 4.8,
    reviewCount: 213,
    colors: ['#f5f5dc', '#1a1a1a', '#ffc0cb', '#d2691e'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Sumptuously soft cashmere cardigan with pearl buttons. An essential layering piece with timeless appeal.'
  },
  {
    id: 'w3',
    name: 'Tailored Wool Blazer',
    price: 799,
    image: 'https://images.pexels.com/photos/15370804/pexels-photo-15370804.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'women',
    subcategory: 'Jackets',
    isNew: true,
    rating: 4.7,
    reviewCount: 178,
    colors: ['#1a1a1a', '#ffffff', '#8b7355'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Impeccably structured wool blazer with gold-tone buttons. Power dressing redefined for the modern woman.'
  },
  {
    id: 'w4',
    name: 'Designer Handbag',
    price: 1499,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'women',
    subcategory: 'Accessories',
    isFeatured: true,
    rating: 4.9,
    reviewCount: 342,
    colors: ['#000000', '#8b7355', '#800020'],
    description: 'Exquisite leather handbag with signature gold hardware. Handcrafted by artisan leatherworkers.'
  },
  {
    id: 'w5',
    name: 'Floral Maxi Dress',
    price: 449,
    originalPrice: 549,
    image: 'https://images.pexels.com/photos/15923973/pexels-photo-15923973.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'women',
    subcategory: 'Dresses',
    rating: 4.6,
    reviewCount: 156,
    colors: ['#ffc0cb', '#87ceeb', '#90ee90'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Flowing chiffon maxi dress with delicate floral print. Perfect for garden parties and summer celebrations.'
  },
  {
    id: 'w6',
    name: 'Pearl Necklace Set',
    price: 799,
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'women',
    subcategory: 'Jewelry',
    rating: 4.8,
    reviewCount: 89,
    colors: ['#f5f5dc', '#ffd700'],
    description: 'South Sea pearl necklace with matching earrings. A timeless treasure for generations to come.'
  }
];

export const reviews: Review[] = [
  {
    id: 'r1',
    author: 'Alexandra M.',
    rating: 5,
    title: 'Absolutely stunning quality',
    content: 'The attention to detail is remarkable. Every stitch speaks to true craftsmanship. Will definitely be ordering more pieces.',
    date: '2024-06-15',
    verified: true
  },
  {
    id: 'r2',
    author: 'James Richardson',
    rating: 5,
    title: 'Perfect fit and style',
    content: 'Finally found a brand that understands modern luxury. The suit fits like it was made for me. Exceptional service too.',
    date: '2024-06-10',
    verified: true
  },
  {
    id: 'r3',
    author: 'Sophia Chen',
    rating: 5,
    title: 'Worth every penny',
    content: 'The cashmere cardigan is incredibly soft and beautifully made. It has become my go-to piece for any occasion.',
    date: '2024-05-28',
    verified: true
  },
  {
    id: 'r4',
    author: 'Michael Torres',
    rating: 5,
    title: 'Outstanding craftsmanship',
    content: 'The leather jacket exceeded my expectations. The quality is evident in every detail. A true investment piece.',
    date: '2024-05-20',
    verified: true
  },
  {
    id: 'r5',
    author: 'Emily Watson',
    rating: 5,
    title: 'Elegant and timeless',
    content: 'The evening gown made me feel like royalty. The silk flows beautifully and the beading catches the light perfectly.',
    date: '2024-05-15',
    verified: true
  },
  {
    id: 'r6',
    author: 'David Park',
    rating: 5,
    title: 'Best purchase this year',
    content: 'The overcoat is simply magnificent. Impeccably tailored and the cashmere feels luxurious. Worth the investment.',
    date: '2024-05-08',
    verified: true
  }
];

export const categories = {
  men: ['Suits', 'Outerwear', 'Shirts', 'Knitwear', 'Accessories'],
  women: ['Dresses', 'Jackets', 'Knitwear', 'Accessories', 'Jewelry']
};
