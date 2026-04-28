import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageSquare, ShieldCheck, Zap, ArrowLeft, Clock, ShoppingBag } from 'lucide-react';
import { MOCK_SHOPS, MOCK_PRODUCTS } from '../constants';

export function ShopDetail() {
  const { id } = useParams();
  const shop = MOCK_SHOPS.find(s => s.id === id);
  const products = MOCK_PRODUCTS.filter(p => p.shopId === id);

  if (!shop) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Shop Not Found</h2>
        <Link to="/shops" className="text-zed-green font-bold">Back to Shops</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Cover / Header */}
      <div className="bg-zed-black h-48 md:h-64 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-zed-green/20 to-zed-orange/20"></div>
          <div className="max-w-7xl mx-auto px-4 h-full relative flex items-end pb-8">
              <Link to="/shops" className="absolute top-8 left-4 text-white flex items-center gap-2 hover:text-zed-green transition-colors font-bold text-sm bg-white/10 backdrop-blur px-4 py-2 rounded-xl">
                  <ArrowLeft size={16} />
                  Back
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
         <div className="flex flex-col lg:flex-row gap-12 -mt-16 relative z-10">
            {/* Sidebar info */}
            <div className="lg:w-1/3 space-y-6">
                <div className="bg-white rounded-[2.5rem] shadow-xl p-8 border border-gray-100">
                    <div className="w-24 h-24 bg-gray-50 rounded-3xl flex items-center justify-center border border-gray-100 mb-6 shadow-inner mx-auto lg:mx-0">
                        <span className="text-4xl font-display font-bold text-zed-green">{shop.name.charAt(0)}</span>
                    </div>
                    
                    <h1 className="text-3xl font-bold mb-2 text-center lg:text-left">{shop.name}</h1>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
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

                    <div className="space-y-4 pt-6 border-t border-gray-50">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-zed-green shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div className="text-sm">
                                <p className="font-bold text-gray-900">Location</p>
                                <p className="text-gray-500">{shop.location}</p>
                                <p className="text-zed-green font-bold text-xs uppercase mt-1">{shop.area}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-zed-green shrink-0">
                                <Clock size={20} />
                            </div>
                            <div className="text-sm">
                                <p className="font-bold text-gray-900">Store Hours</p>
                                <p className="text-gray-500">Mon - Sat: 08:00 - 18:00</p>
                                <p className="text-gray-500 font-medium">Sun: Closed</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-zed-green shrink-0">
                                <ShoppingBag size={20} />
                            </div>
                            <div className="text-sm">
                                <p className="font-bold text-gray-900">Services</p>
                                <p className="text-gray-500">In-store pickup only</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 space-y-3">
                        <a 
                            href={`https://wa.me/${shop.whatsapp.replace(/\+/g, '')}`}
                            className="bg-zed-green text-white w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-opacity-95 transition-all shadow-xl shadow-zed-green/10"
                        >
                            <MessageSquare size={20} />
                            Chat on WhatsApp
                        </a>
                        <a 
                            href={`tel:${shop.phone}`}
                            className="bg-white text-zed-black border-2 border-zed-black w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-zed-black hover:text-white transition-all shadow-md"
                        >
                            <Phone size={20} />
                            Call Shop
                        </a>
                    </div>
                </div>

                <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
                    <h4 className="font-bold mb-4">About the Shop</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {shop.description}
                    </p>
                </div>
            </div>

            {/* Products grid */}
            <div className="lg:w-2/3">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Products at {shop.name}</h2>
                    <span className="text-sm font-bold text-gray-400">{products.length} Items</span>
                </div>

                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {products.map(product => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-[2rem] overflow-hidden border border-gray-50 hover:shadow-xl transition-all group"
                            >
                                <div className="aspect-square relative overflow-hidden">
                                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-xl font-bold text-zed-green shadow-sm text-sm">
                                        {product.currency}{product.price.toLocaleString()}
                                    </div>
                                    {product.isPromoted && (
                                        <div className="absolute top-4 left-4 bg-zed-orange text-white px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg">
                                            Featured
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <h4 className="font-bold text-lg mb-2 group-hover:text-zed-green transition-colors">{product.name}</h4>
                                    <p className="text-gray-500 text-xs mb-6 line-clamp-2">{product.description}</p>
                                    <a 
                                        href={`https://wa.me/${shop.whatsapp.replace(/\+/g, '')}?text=Hello, I saw ${product.name} on ZED Express, is it still available?`}
                                        className="inline-flex items-center gap-2 text-zed-green font-bold text-sm bg-zed-green/10 px-4 py-2 rounded-lg hover:bg-zed-green hover:text-white transition-all"
                                    >
                                        <MessageSquare size={16} />
                                        Inquire Now
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-[2.5rem] p-16 text-center border-2 border-dashed border-gray-100">
                        <ShoppingBag size={48} className="mx-auto mb-6 text-gray-200" />
                        <h3 className="text-xl font-bold text-gray-400">No products listed yet</h3>
                        <p className="text-gray-500 text-sm mt-2">Check back soon for new arrivals from this shop.</p>
                    </div>
                )}
            </div>
         </div>
      </div>
    </div>
  );
}
