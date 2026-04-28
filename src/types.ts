export type Category = 'phones' | 'clothes' | 'shoes' | 'accessories' | 'home' | 'electronics' | 'other';

export interface Shop {
  id: string;
  name: string;
  location: string; // e.g. "Town Centre, Kabwe"
  area: 'Town Centre' | 'Mine' | 'Makululu' | 'Bwacha' | 'Chowa' | 'Other';
  phone: string;
  whatsapp: string;
  description: string;
  logoUrl?: string;
  isVerified: boolean;
  isTrusted: boolean;
}

export interface Product {
  id: string;
  shopId: string;
  name: string;
  price: number;
  currency: string;
  category: Category;
  description: string;
  imageUrl: string;
  isPromoted: boolean;
  createdAt: number;
}

export interface UserRequest {
  id: string;
  userId?: string;
  query: string;
  areaPreference?: string;
  status: 'pending' | 'responded' | 'closed';
  createdAt: number;
}
