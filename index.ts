export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'men' | 'women';
  subcategory: string;
  isNew?: boolean;
  isFeatured?: boolean;
  rating: number;
  reviewCount: number;
  colors?: string[];
  sizes?: string[];
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
}

export interface WishlistItem {
  product: Product;
  addedAt: Date;
}

export interface Review {
  id: string;
  productId?: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  avatar?: string;
  verified?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}
