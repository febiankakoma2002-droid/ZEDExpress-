import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, ShieldCheck, Zap, Phone, MessageSquare, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_SHOPS, KABWE_AREAS } from '../constants';
import { cn } from '../lib/utils';

export function Shops() {
  const [filterArea, setFilterArea] = useState('All Areas');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredShops = MOCK_SHOPS.filter(shop => {
    const matchesArea = filterArea === 'All Areas' || shop.area === filterArea;
    const matchesSearch = shop.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          shop.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesArea && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-zed-black text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Local Shops in Kabwe</h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              We've mapped out the best trusted shops in Kabwe. Find them easily and support local businesses.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-l from-zed-green to-transparent"></div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 mb-12">
        <div className="bg-white rounded-3xl shadow-xl p-4 md:p-8 flex flex-col md:flex-row gap-4 border border-gray-100">
           <div className="flex-grow flex items-center bg-gray-50 rounded-2xl px-4 py-3">
              <Search className="text-gray-400 mr-3" size={20} />
              <input 
                type="text" 
                placeholder="Search shops by name..." 
                className="bg-transparent w-full outline-none font-medium text-gray-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
           </div>
           <div className="flex items-center gap-4">
              <div className="relative shrink-0 w-full md:w-48">
                  <select 
                    className="appearance-none bg-gray-50 border-2 border-transparent rounded-2xl px-5 py-3 pr-10 outline-none focus:border-zed-green w-full font-semibold text-gray-700"
                    value={filterArea}
                    onChange={(e) => setFilterArea(e.target.value)}
                  >
                    <option>All Areas</option>
                    {KABWE_AREAS.map(area => <option key={area}>{area}</option>)}
                  </select>
                  <Filter className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
           </div>
        </div>
      </div>

      {/* Shops Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredShops.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShops.map((shop) => (
              <motion.div
                key={shop.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100 flex flex-col h-full"
              >
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:bg-zed-green/5 transition-colors">
                      <span className="text-2xl font-display font-bold text-zed-green">{shop.name.charAt(0)}</span>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                       {shop.isVerified && (
                         <div className="bg-zed-green/10 text-zed-green px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 border border-zed-green/20">
                            <ShieldCheck size={12} />
                            Verified
                         </div>
                       )}
                       {shop.isTrusted && (
                         <div className="bg-zed-orange/10 text-zed-orange px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 border border-zed-orange/20">
                            <Zap size={12} />
                            Trusted
                         </div>
                       )}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-zed-green transition-colors">{shop.name}</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <MapPin size={16} className="text-zed-green" />
                    {shop.location}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    {shop.description}
                  </p>
                </div>

                <div className="px-8 pb-8 space-y-3">
                   <Link 
                    to={`/shop/${shop.id}`}
                    className="block w-full text-center py-3 rounded-xl font-bold bg-zed-black text-white hover:bg-zed-green transition-all shadow-lg shadow-black/5"
                   >
                    View Products
                   </Link>
                   <div className="flex gap-2">
                      <a 
                        href={`tel:${shop.phone}`}
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold border-2 border-gray-100 text-gray-400 hover:border-zed-black hover:text-zed-black transition-all"
                      >
                         <Phone size={16} />
                         Call
                      </a>
                      <a 
                        href={`https://wa.me/${shop.whatsapp.replace(/\+/g, '')}`}
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold border-2 border-green-100 text-green-500 hover:bg-green-500 hover:text-white transition-all"
                      >
                         <MessageSquare size={16} />
                         WhatsApp
                      </a>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
               <Search size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-400">No shops found</h3>
            <p className="text-gray-500">Try adjusting your filters or search query</p>
            <button 
              onClick={() => {setFilterArea('All Areas'); setSearchQuery('');}}
              className="mt-6 text-zed-green font-bold hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>

      {/* Seller CTA */}
      <div className="max-w-7xl mx-auto px-4 mt-24">
         <div className="bg-zed-green rounded-[3rem] p-12 text-white relative overflow-hidden group">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                   <h2 className="text-3xl font-bold mb-4">Are you a shop owner in Kabwe?</h2>
                   <p className="text-green-100 mb-8 max-w-sm">
                      Join the largest discovery platform in town. Reach thousands of customers looking for products like yours.
                   </p>
                   <Link 
                    to="/for-sellers"
                    className="inline-block bg-white text-zed-green px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-transform"
                   >
                    Register My Shop
                   </Link>
                </div>
                <div className="hidden md:flex justify-end">
                    <div className="w-64 h-64 bg-white/10 rounded-full border-4 border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:rotate-12 transition-transform">
                        <ShieldCheck size={80} />
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-zed-orange/20 rounded-full blur-3xl"></div>
         </div>
      </div>
    </div>
  );
}
