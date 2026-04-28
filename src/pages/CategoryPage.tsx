import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, MapPin, Smartphone, Shirt, Footprints, Watch, Home as HomeIcon, Filter, MessageSquare, ShieldCheck } from 'lucide-react';
import { MOCK_PRODUCTS, MOCK_SHOPS, KABWE_AREAS } from '../constants';
import { Category } from '../types';
import { cn } from '../lib/utils';

const CATEGORIES_LIST: {name: string, icon: any, slug: Category, color: string}[] = [
  { name: 'Phones', icon: Smartphone, slug: 'phones', color: 'bg-blue-50 text-blue-600' },
  { name: 'Clothes', icon: Shirt, slug: 'clothes', color: 'bg-pink-50 text-pink-600' },
  { name: 'Shoes', icon: Footprints, slug: 'shoes', color: 'bg-orange-50 text-orange-600' },
  { name: 'Accessories', icon: Watch, slug: 'accessories', color: 'bg-purple-50 text-purple-600' },
  { name: 'Home & More', icon: HomeIcon, slug: 'home', color: 'bg-green-50 text-green-600' },
];

export function CategoryPage() {
  const { slug } = useParams<{ slug: Category }>();
  const [activeArea, setActiveArea] = useState('All Areas');
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = CATEGORIES_LIST.find(c => c.slug === slug);

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesCategory = !slug || product.category === slug;
    const shop = MOCK_SHOPS.find(s => s.id === product.shopId);
    const matchesArea = activeArea === 'All Areas' || shop?.area === activeArea;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesArea && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Category Nav Header */}
      <div className="bg-white border-b border-gray-100 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4 py-6 min-w-max">
            <Link 
                to="/categories"
                className={cn(
                    "px-6 py-3 rounded-2xl text-sm font-bold transition-all border-2",
                    !slug ? "bg-zed-black text-white border-zed-black shadow-lg" : "bg-gray-50 text-gray-400 border-transparent hover:bg-gray-100"
                )}
            >
                All Products
            </Link>
            {CATEGORIES_LIST.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className={cn(
                  "px-6 py-3 rounded-2xl text-sm font-bold transition-all flex items-center gap-2 border-2",
                  slug === cat.slug 
                    ? "bg-zed-green text-white border-zed-green shadow-lg" 
                    : "bg-gray-50 text-gray-400 border-transparent hover:bg-gray-100"
                )}
              >
                <cat.icon size={18} />
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-12">
        <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Filters */}
            <aside className="lg:w-1/4 space-y-8">
                <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold mb-6">Filter Results</h3>
                    
                    <div className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Area in Kabwe</label>
                            <div className="space-y-2">
                                <button
                                    onClick={() => setActiveArea('All Areas')}
                                    className={cn(
                                        "w-full text-left px-4 py-2 rounded-xl text-sm font-semibold transition-all",
                                        activeArea === 'All Areas' ? "bg-zed-green/10 text-zed-green border-l-4 border-zed-green" : "text-gray-500 hover:bg-gray-50"
                                    )}
                                >
                                    All Areas
                                </button>
                                {KABWE_AREAS.map(area => (
                                     <button
                                        key={area}
                                        onClick={() => setActiveArea(area)}
                                        className={cn(
                                            "w-full text-left px-4 py-2 rounded-xl text-sm font-semibold transition-all",
                                            activeArea === area ? "bg-zed-green/10 text-zed-green border-l-4 border-zed-green" : "text-gray-500 hover:bg-gray-50"
                                        )}
                                    >
                                        {area}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Search Keywords</label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="Search..." 
                                    className="w-full bg-gray-50 rounded-xl px-4 py-3 text-sm outline-none border-2 border-transparent focus:border-zed-green transition-all"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-zed-green rounded-[2rem] p-10 text-white relative overflow-hidden">
                    <h4 className="text-xl font-bold mb-4 relative z-10">Can't find what you need?</h4>
                    <p className="text-green-50 text-sm mb-8 relative z-10 leading-relaxed">Let us know and we'll help you locate it in any shop in Kabwe.</p>
                    <a 
                        href="https://wa.me/260762644751"
                        className="block w-full bg-zed-black text-center py-4 rounded-2xl font-bold hover:bg-zed-orange transition-all relative z-10"
                    >
                        Send a Request
                    </a>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="lg:w-3/4">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">
                            {currentCategory ? currentCategory.name : 'All Products'} <span className="text-gray-300 ml-2">({filteredProducts.length})</span>
                        </h2>
                        <p className="text-gray-400 text-sm font-medium">Available in {activeArea}</p>
                    </div>
                    {/* View Controls (could add grid/list toggle here) */}
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => {
                            const shop = MOCK_SHOPS.find(s => s.id === product.shopId);
                            return (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col"
                                >
                                    <div className="aspect-square relative overflow-hidden shrink-0">
                                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-xl font-bold text-zed-green shadow-xl text-sm">
                                            {product.currency}{product.price.toLocaleString()}
                                        </div>
                                        <div className="absolute top-4 left-4 bg-zed-black/50 backdrop-blur text-white px-3 py-1.5 rounded-xl text-[10px] font-bold flex items-center gap-2">
                                            <MapPin size={12} className="text-zed-orange" />
                                            {shop?.area}
                                        </div>
                                    </div>
                                    <div className="p-7 flex flex-col flex-grow">
                                        <h4 className="font-bold text-lg mb-2 group-hover:text-zed-green transition-colors">{product.name}</h4>
                                        <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">
                                            <ShieldCheck size={14} className="text-zed-green" />
                                            {shop?.name}
                                        </div>
                                        <p className="text-gray-500 text-xs mb-8 line-clamp-2 leading-relaxed flex-grow">{product.description}</p>
                                        
                                        <div className="flex gap-2">
                                            <Link 
                                                to={`/shop/${product.shopId}`}
                                                className="flex-1 bg-gray-50 text-gray-600 text-center py-3 rounded-xl font-bold text-xs hover:bg-zed-black hover:text-white transition-all"
                                            >
                                                Visit Shop
                                            </Link>
                                            <a 
                                                href={`https://wa.me/260762644751?text=Hello, I saw ${product.name} on ZED Express, is it still available?`}
                                                className="flex-1 bg-zed-green text-white text-center py-3 rounded-xl font-bold text-xs hover:shadow-lg hover:shadow-zed-green/20 transition-all flex items-center justify-center gap-2"
                                            >
                                                <MessageSquare size={14} />
                                                Inquire
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="bg-white rounded-[3rem] p-24 text-center border-2 border-dashed border-gray-100 italic font-medium text-gray-400">
                        No products found matching these criteria.
                    </div>
                )}
            </main>
        </div>
      </div>
    </div>
  );
}
