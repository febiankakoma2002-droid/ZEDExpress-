import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Edit, Trash2, ShoppingBag, Store, MessageSquare, LayoutDashboard, Search, ShieldCheck } from 'lucide-react';
import { MOCK_PRODUCTS, MOCK_SHOPS, KABWE_AREAS } from '../constants';
import { cn } from '../lib/utils';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'shops' | 'requests'>('overview');
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [shops, setShops] = useState(MOCK_SHOPS);
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
            {/* Admin Sidebar */}
            <aside className="md:w-64 space-y-2">
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-zed-black rounded-xl flex items-center justify-center text-white">
                            <LayoutDashboard size={20} />
                        </div>
                        <h3 className="font-bold">Admin Panel</h3>
                    </div>
                </div>

                {[
                    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
                    { id: 'products', name: 'Manage Products', icon: ShoppingBag },
                    { id: 'shops', name: 'Manage Shops', icon: Store },
                    { id: 'requests', name: 'User Requests', icon: MessageSquare },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id as any)}
                        className={cn(
                            "w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm transition-all",
                            activeTab === item.id 
                                ? "bg-zed-black text-white shadow-lg shadow-black/10" 
                                : "text-gray-500 hover:bg-white hover:text-zed-black"
                        )}
                    >
                        <item.icon size={18} />
                        {item.name}
                    </button>
                ))}
            </aside>

            {/* Main Content */}
            <main className="flex-grow">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 min-h-[600px]">
                    {activeTab === 'overview' && (
                        <div className="space-y-12">
                            <div className="flex justify-between items-center">
                                <h2 className="text-3xl font-bold">System Overview</h2>
                                <span className="px-4 py-2 bg-zed-green/10 text-zed-green rounded-xl text-xs font-bold uppercase tracking-widest">Live in Kabwe</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="p-6 rounded-[2rem] bg-gray-50 border border-gray-100">
                                    <div className="text-4xl font-display font-bold text-zed-black mb-2">{products.length}</div>
                                    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Active Products</div>
                                </div>
                                <div className="p-6 rounded-[2rem] bg-gray-50 border border-gray-100">
                                    <div className="text-4xl font-display font-bold text-zed-green mb-2">{shops.length}</div>
                                    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Partner Shops</div>
                                </div>
                                <div className="p-6 rounded-[2rem] bg-gray-50 border border-gray-100">
                                    <div className="text-4xl font-display font-bold text-zed-orange mb-2">12</div>
                                    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">New Requests</div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h4 className="font-bold text-xl">Recent Activity</h4>
                                <div className="space-y-4">
                                    {[
                                        { action: 'New shop joined', target: 'Kabwe Digital Hub', time: '2 hours ago' },
                                        { action: 'Product updated', target: 'iPhone 13 Pro', time: '5 hours ago' },
                                        { action: 'New request from User', target: '"Looking for sneakers"', time: 'Yesterday' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex justify-between items-center p-4 rounded-xl border border-gray-50 bg-gray-50/30">
                                            <div>
                                                <p className="font-bold text-sm">{item.action}</p>
                                                <p className="text-gray-400 text-xs">{item.target}</p>
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-300 uppercase">{item.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'products' && (
                        <div>
                             <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
                                <h2 className="text-3xl font-bold">Manage Products</h2>
                                <button className="bg-zed-green text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 text-sm hover:scale-105 transition-all">
                                    <Plus size={18} /> Add New Product
                                </button>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="text-gray-400 text-[10px] uppercase tracking-widest border-b border-gray-100">
                                            <th className="pb-4 font-bold">Product</th>
                                            <th className="pb-4 font-bold">Shop</th>
                                            <th className="pb-4 font-bold">Price</th>
                                            <th className="pb-4 font-bold">Status</th>
                                            <th className="pb-4 font-bold text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {products.map((product) => (
                                            <tr key={product.id} className="group hover:bg-gray-50/50 transition-colors">
                                                <td className="py-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded-xl border overflow-hidden bg-gray-50 shrink-0">
                                                            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                                                        </div>
                                                        <span className="font-bold text-sm">{product.name}</span>
                                                    </div>
                                                </td>
                                                <td className="py-6">
                                                    <span className="text-xs font-semibold text-gray-500">
                                                        {shops.find(s => s.id === product.shopId)?.name}
                                                    </span>
                                                </td>
                                                <td className="py-6">
                                                    <span className="font-bold text-sm text-zed-green">{product.currency}{product.price}</span>
                                                </td>
                                                <td className="py-6">
                                                    {product.isPromoted ? (
                                                        <span className="px-3 py-1 bg-zed-orange/10 text-zed-orange rounded-full text-[10px] font-bold uppercase tracking-widest">Promoted</span>
                                                    ) : (
                                                        <span className="px-3 py-1 bg-gray-100 text-gray-400 rounded-full text-[10px] font-bold uppercase tracking-widest">Standard</span>
                                                    )}
                                                </td>
                                                <td className="py-6 text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <button className="p-2 text-gray-300 hover:text-zed-black transition-colors"><Edit size={16} /></button>
                                                        <button className="p-2 text-gray-300 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'shops' && (
                        <div>
                             <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
                                <h2 className="text-3xl font-bold">Manage Shops</h2>
                                <button className="bg-zed-green text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 text-sm hover:scale-105 transition-all">
                                    <Plus size={18} /> Add New Shop
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {shops.map((shop) => (
                                    <div key={shop.id} className="p-6 rounded-[2rem] border border-gray-100 bg-white hover:border-zed-green transition-all group">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center font-display font-bold text-zed-green text-xl border border-gray-100">
                                                {shop.name.charAt(0)}
                                            </div>
                                            <div className="flex gap-2">
                                                {shop.isVerified && <ShieldCheck size={18} className="text-zed-green" />}
                                                <Edit size={16} className="text-gray-300 hover:text-zed-black cursor-pointer" />
                                            </div>
                                        </div>
                                        <h4 className="font-bold mb-2">{shop.name}</h4>
                                        <div className="text-xs font-bold text-zed-green uppercase tracking-wider mb-4">{shop.area}</div>
                                        <p className="text-gray-400 text-xs line-clamp-2 mb-6">{shop.description}</p>
                                        <div className="flex gap-4 items-center pt-4 border-t border-gray-50">
                                            <div className="text-[10px] font-bold text-gray-300 uppercase">12 Products</div>
                                            <div className="text-[10px] font-bold text-gray-300 uppercase">86 Visits</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'requests' && (
                        <div className="py-24 text-center">
                            <MessageSquare size={48} className="mx-auto mb-6 text-gray-200" />
                            <h3 className="text-xl font-bold text-gray-400">User requests will appear here</h3>
                            <p className="text-gray-500 text-sm mt-2 max-w-xs mx-auto italic">
                                "Looking for iPhone 12 under K6000 in Town Centre"
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </div>
      </div>
    </div>
  );
}
