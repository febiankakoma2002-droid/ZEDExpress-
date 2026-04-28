import { Shop, Product } from './types';

export const COLORS = {
  primary: '#1f7a3a', // Green
  secondary: '#ff7a00', // Orange
  black: '#111111',
  white: '#FFFFFF',
  gray: {
    50: '#f9f9f9',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  }
};

export const KABWE_AREAS = [
  'Town Centre',
  'Mine',
  'Makululu',
  'Bwacha',
  'Chowa',
  'Highridge',
  'Luangwa',
  'Lukanga',
];

export const MOCK_SHOPS: Shop[] = [
  {
    id: 'shop-1',
    name: 'Kabwe Digital Hub',
    location: 'Freedom Way, Town Centre',
    area: 'Town Centre',
    phone: '+260762644751',
    whatsapp: '+260762644751',
    description: 'The best source for latest smartphones and tech accessories in Kabwe.',
    isVerified: true,
    isTrusted: true,
  },
  {
    id: 'shop-2',
    name: 'Style Haven Kabwe',
    location: 'Mine Area Market',
    area: 'Mine',
    phone: '+260970000001',
    whatsapp: '+260970000001',
    description: 'Trendy clothes and shoes for all occasions.',
    isVerified: true,
    isTrusted: false,
  },
  {
    id: 'shop-3',
    name: 'Home Essentials Bwacha',
    location: 'Bwacha Shopping Centre',
    area: 'Bwacha',
    phone: '+260960000002',
    whatsapp: '+260960000002',
    description: 'Quality furniture and home appliances.',
    isVerified: false,
    isTrusted: true,
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    shopId: 'shop-1',
    name: 'iPhone 13 Pro (Used)',
    price: 12500,
    currency: 'K',
    category: 'phones',
    description: 'Clean condition, 128GB, Pacific Blue. Shop warranty included.',
    imageUrl: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=500&auto=format&fit=crop',
    isPromoted: true,
    createdAt: Date.now(),
  },
  {
    id: 'prod-2',
    shopId: 'shop-1',
    name: 'Samsung Galaxy A54',
    price: 7800,
    currency: 'K',
    category: 'phones',
    description: 'Brand new, sealed. Awesome Graphite color.',
    imageUrl: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=500&auto=format&fit=crop',
    isPromoted: false,
    createdAt: Date.now(),
  },
  {
    id: 'prod-3',
    shopId: 'shop-2',
    name: 'Classic White Sneakers',
    price: 450,
    currency: 'K',
    category: 'shoes',
    description: 'Comfortable and stylish daily wear sneakers.',
    imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=500&auto=format&fit=crop',
    isPromoted: true,
    createdAt: Date.now(),
  },
  {
    id: 'prod-4',
    shopId: 'shop-2',
    name: 'Denim Jacket (Size L)',
    price: 350,
    currency: 'K',
    category: 'clothes',
    description: 'High quality denim, fits slim. Perfect for Kabwe nights.',
    imageUrl: 'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?q=80&w=500&auto=format&fit=crop',
    isPromoted: false,
    createdAt: Date.now(),
  },
  {
    id: 'prod-5',
    shopId: 'shop-3',
    name: 'Smart Kitchen Blender',
    price: 850,
    currency: 'K',
    category: 'home',
    description: 'Powerful motor, 1.5L capacity. Ideal for smoothies.',
    imageUrl: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=500&auto=format&fit=crop',
    isPromoted: false,
    createdAt: Date.now(),
  }
];
