import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, CheckCircle2, ArrowRight, MessageSquare, Smartphone, Shirt, Footprints, Watch, Home as HomeIcon, Zap, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { KABWE_AREAS, MOCK_PRODUCTS, MOCK_SHOPS } from '../constants';

const CATEGORIES = [
  { name: 'Phones', icon: Smartphone, slug: 'phones', color: 'bg-blue-50 text-blue-600' },
  { name: 'Clothes', icon: Shirt, slug: 'clothes', color: 'bg-pink-50 text-pink-600' },
  { name: 'Shoes', icon: Footprints, slug: 'shoes', color: 'bg-orange-50 text-orange-600' },
  { name: 'Accessories', icon: Watch, slug: 'accessories', color: 'bg-purple-50 text-purple-600' },
  { name: 'Home & More', icon: HomeIcon, slug: 'home', color: 'bg-green-50 text-green-600' },
];

const FEATURES = [
  { title: 'Find products easily', desc: 'Search through hundreds of local items', icon: Search },
  { title: 'Trusted local shops', desc: 'Verified businesses in your area', icon: ShieldCheck },
  { title: 'Compare options', desc: 'Find the best deals in Kabwe', icon: Zap },
  { title: 'Support local businesses', desc: 'Help Kabwe economy grow', icon: Users },
];

export function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('All Areas');

  const featuredProducts = MOCK_PRODUCTS.filter(p => p.isPromoted);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-28 lg:pb-32 bg-zed-gray-50">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20">
            <div className="w-[500px] h-[500px] rounded-full bg-zed-green"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-10">
            <div className="w-[400px] h-[400px] rounded-full bg-zed-orange"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zed-green/10 text-zed-green text-xs font-bold uppercase tracking-wider mb-6">
                <MapPin size={14} />
                Based in Kabwe, Zambia
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-8 text-zed-black">
                Find It. <span className="text-zed-green underline decoration-zed-orange decoration-4 underline-offset-8">Check It.</span> Buy It.
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                Discover the best components, clothes, phones and accessories from trusted shops in <span className="font-bold text-zed-black">Kabwe</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/categories" className="bg-zed-green text-white px-8 py-4 rounded-2xl font-bold text-center hover:bg-opacity-90 transition-all shadow-lg hover:scale-[1.02] transform">
                  Search for a Product
                </Link>
                <a href="https://wa.me/260762644751" className="flex items-center justify-center gap-2 border-2 border-zed-black text-zed-black px-8 py-4 rounded-2xl font-bold hover:bg-zed-black hover:text-white transition-all">
                  <MessageSquare size={20} />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium">
                    <span className="text-zed-green font-bold">500+</span> happy shoppers in Kabwe
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl skew-y-3">
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop" alt="shoes" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-xl -skew-x-3">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop" alt="watch" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-xl skew-x-3">
                        <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop" alt="phone" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl -skew-y-3">
                        <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=500&auto=format&fit=crop" alt="shirt" className="w-full h-full object-cover" />
                    </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search / Request System */}
      <section className="py-12 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-[2rem] shadow-2xl p-6 sm:p-10 border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-center">What are you looking for?</h3>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-grow flex items-center bg-gray-50 rounded-2xl px-5 py-3 border-2 border-transparent focus-within:border-zed-green transition-all">
                        <Search className="text-gray-400 mr-3" size={20} />
                        <input 
                            type="text" 
                            placeholder="e.g. sneakers size 42 under K500" 
                            className="bg-transparent w-full outline-none text-gray-800 font-medium"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="relative shrink-0">
                        <select 
                            className="appearance-none bg-gray-50 border-2 border-transparent rounded-2xl px-5 py-3 pr-10 outline-none focus:border-zed-green w-full font-semibold text-gray-700 h-full"
                            value={selectedArea}
                            onChange={(e) => setSelectedArea(e.target.value)}
                        >
                            <option>All Areas</option>
                            {KABWE_AREAS.map(area => <option key={area}>{area}</option>)}
                        </select>
                        <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                    </div>
                    <button className="bg-zed-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-zed-green transition-all shrink-0">
                        Send Request
                    </button>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Popular:</span>
                    <button className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 hover:bg-zed-green hover:text-white transition-colors" onClick={() => setSearchQuery('iPhone')}>iPhone</button>
                    <button className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 hover:bg-zed-green hover:text-white transition-colors" onClick={() => setSearchQuery('Nike Shoes')}>Nike Shoes</button>
                    <button className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 hover:bg-zed-green hover:text-white transition-colors" onClick={() => setSearchQuery('Designer Dress')}>Designer Dress</button>
                </div>
            </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
            <div>
                 <h2 className="text-4xl font-bold mb-4">Browse Categories</h2>
                 <p className="text-gray-500">Pick a category to see what's available in Kabwe shops</p>
            </div>
            <Link to="/categories" className="hidden sm:flex items-center gap-2 text-zed-green font-bold hover:underline mb-1">
                View All <ArrowRight size={18} />
            </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {CATEGORIES.map((cat, idx) => (
                <motion.div
                    key={cat.name}
                    whileHover={{ y: -8 }}
                    className={cn(
                        "p-8 rounded-[2rem] flex flex-col items-center text-center group cursor-pointer transition-all",
                        cat.color
                    )}
                >
                    <div className="mb-4 transform group-hover:scale-110 transition-transform">
                        <cat.icon size={40} />
                    </div>
                    <span className="font-bold text-lg">{cat.name}</span>
                </motion.div>
            ))}
        </div>
      </section>

      {/* Trust Badges Banner */}
      <div className="bg-zed-black py-8 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-zed-green" size={24} />
                  <span className="font-display font-bold text-sm tracking-wide">VERIFIED SHOPS ONLY</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-zed-orange" size={24} />
                  <span className="font-display font-bold text-sm tracking-wide">REAL KABWE LOCATIONS</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-zed-green" size={24} />
                  <span className="font-display font-bold text-sm tracking-wide">WHATSAPP DIRECT CHAT</span>
              </div>
              <Link to="/for-sellers" className="flex items-center gap-3 group">
                  <div className="px-4 py-2 border border-dashed border-white/30 rounded-lg group-hover:border-zed-orange transition-colors">
                    <span className="text-zed-orange font-bold text-sm">NOT YET ON ZED? SELL WITH US</span>
                  </div>
              </Link>
          </div>
      </div>

      {/* Featured Products */}
      <section className="py-24 bg-zed-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 px-4 py-8 bg-white rounded-3xl border border-gray-100 shadow-sm translate-y-[-50%]">
                 <div className="flex items-center gap-6 text-center md:text-left">
                    <div className="bg-zed-orange text-white p-4 rounded-2xl shadow-lg shadow-zed-orange/20">
                        <Zap size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Featured Today</h3>
                        <p className="text-gray-500 text-sm">Hand-picked hot items from Kabwe's top sellers</p>
                    </div>
                 </div>
                 <Link to="/categories" className="bg-zed-black text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-zed-green transition-all shrink-0">
                    See More Deals
                 </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProducts.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100"
                    >
                        <div className="aspect-[4/3] overflow-hidden relative">
                            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-xl text-xs font-bold text-zed-black flex items-center gap-2">
                                <MapPin size={12} className="text-zed-green" />
                                {MOCK_SHOPS.find(s => s.id === product.shopId)?.area}
                            </div>
                            <div className="absolute top-4 right-4 bg-zed-orange text-white px-3 py-1.5 rounded-xl text-sm font-bold shadow-lg">
                                {product.currency}{product.price.toLocaleString()}
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-lg group-hover:text-zed-green transition-colors">{product.name}</h4>
                            </div>
                            <p className="text-gray-500 text-sm mb-6 line-clamp-2">{product.description}</p>
                            <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-50">
                                <Link to={`/shop/${product.shopId}`} className="text-sm font-bold text-gray-400 hover:text-zed-black transition-colors flex items-center gap-2">
                                    <ShieldCheck size={14} className="text-zed-green" />
                                    {MOCK_SHOPS.find(s => s.id === product.shopId)?.name}
                                </Link>
                                <a 
                                    href={`https://wa.me/260762644751?text=Hello, I saw ${product.name} on ZED Express, is it still available?`}
                                    className="bg-zed-green/10 text-zed-green p-3 rounded-2xl hover:bg-zed-green hover:text-white transition-all transform hover:rotate-6"
                                >
                                    <MessageSquare size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-20">
                  <h2 className="text-4xl font-bold mb-6">How ZED Express Works</h2>
                  <p className="text-gray-500 text-lg">Finding what you need in Kabwe shouldn't be a headache. We've made it simple.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-12 relative">
                  {/* Connection lines (desktop only) */}
                  <div className="hidden md:block absolute top-[2.5rem] left-[20%] right-[20%] h-0.5 bg-dashed border-t-2 border-dashed border-gray-100 -z-10"></div>
                  
                  {[
                      { step: '01', title: 'Tell us what you need', desc: 'Use our search or send a request for specific items you want to find.' },
                      { step: '02', title: 'We show you where to get it', desc: 'Discover local shops in Kabwe that have your product in stock right now.' },
                      { step: '03', title: 'Visit the shop and buy', desc: 'See the location, chat on WhatsApp, and head over to the shop to buy.' }
                  ].map((item, i) => (
                      <div key={i} className="text-center group">
                          <div className="w-20 h-20 bg-white rounded-3xl border shadow-sm flex items-center justify-center mx-auto mb-8 text-2xl font-display font-bold text-zed-green group-hover:bg-zed-green group-hover:text-white transition-all transform group-hover:scale-110">
                              {item.step}
                          </div>
                          <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                          <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="py-24 bg-zed-black text-white rounded-[4rem] mx-4 mb-24 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 border-4 border-zed-green rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 border-4 border-zed-orange rounded-full"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-4xl lg:text-5xl font-bold mb-12">Growing Kabwe's Digital Economy</h2>
                      <div className="grid sm:grid-cols-2 gap-8">
                          {FEATURES.map((f, i) => (
                              <div key={i} className="space-y-4">
                                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-zed-green">
                                      <f.icon size={24} />
                                  </div>
                                  <h4 className="font-bold text-lg">{f.title}</h4>
                                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                              </div>
                          ))}
                      </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-zed-orange rounded-full flex items-center justify-center text-white">
                                <Smartphone size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Register as a Seller</h3>
                        </div>
                        <p className="text-gray-300 mb-10 leading-relaxed">
                            Join over 50+ local shops in Kabwe already reaching more customers through ZED Express. It's time to take your business to the next level.
                        </p>
                        <ul className="space-y-4 mb-12">
                            <li className="flex items-center gap-3 text-sm font-medium">
                                <CheckCircle2 size={18} className="text-zed-green" /> Get more customers everyday
                            </li>
                             <li className="flex items-center gap-3 text-sm font-medium">
                                <CheckCircle2 size={18} className="text-zed-green" /> Promote your top products
                            </li>
                             <li className="flex items-center gap-3 text-sm font-medium">
                                <CheckCircle2 size={18} className="text-zed-green" /> Verified Shop Badge
                            </li>
                        </ul>
                        <a 
                            href="https://wa.me/260762644751?text=Hello, I want to register my shop as a seller on ZED Express. What's the process for the K50 registration?"
                            className="block w-full bg-zed-orange text-white text-center py-4 rounded-2xl font-bold hover:bg-opacity-90 transition-all text-lg shadow-xl shadow-zed-orange/20"
                        >
                            ENTRY NOW - ONLY K50
                        </a>
                        <p className="text-center mt-4 text-xs text-gray-500 font-bold uppercase tracking-widest">
                            Limited offer initial phase
                        </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Trust System Badges Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16">The Trust System</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-[2rem] border-2 border-gray-50 bg-white hover:border-zed-green transition-all group">
                  <div className="w-16 h-16 bg-zed-green/10 text-zed-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <ShieldCheck size={32} />
                  </div>
                  <h4 className="font-bold text-xl mb-4">Verified Shop</h4>
                  <p className="text-gray-500 text-sm">Shops that have been physically visited and confirmed by the ZED Express team in Kabwe.</p>
              </div>
              <div className="p-8 rounded-[2rem] border-2 border-gray-50 bg-white hover:border-zed-orange transition-all group">
                  <div className="w-16 h-16 bg-zed-orange/10 text-zed-orange rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Zap size={32} />
                  </div>
                  <h4 className="font-bold text-xl mb-4">Trusted Seller</h4>
                  <p className="text-gray-500 text-sm">Long-term partners with a consistent history of positive customer feedback and reliable service.</p>
              </div>
          </div>
      </section>
    </div>
  );
}
