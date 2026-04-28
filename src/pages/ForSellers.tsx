import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp, Zap, CheckCircle2, MessageSquare, MapPin, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const BENEFITS = [
  {
    title: 'Reach More Customers',
    desc: 'Get discovered by thousands of Kabwe residents searching for your products daily.',
    icon: TrendingUp,
    color: 'bg-green-50 text-green-600'
  },
  {
    title: 'Professional Profile',
    desc: 'Showcase your shop and products with a digital storefront designed to convert.',
    icon: Smartphone,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Verified Badges',
    desc: 'Gain customer trust with "Verified Shop" and "Trusted Seller" badges.',
    icon: ShieldCheck,
    color: 'bg-orange-50 text-orange-600'
  },
  {
    title: 'Direct WhatsApp Leads',
    desc: 'Customers connect with you directly on WhatsApp to finalize the sale.',
    icon: MessageSquare,
    color: 'bg-purple-50 text-purple-600'
  }
];

export function ForSellers() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-zed-black text-white pt-24 pb-32 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 bg-zed-orange/30 blur-[100px]"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-block px-4 py-2 bg-zed-green/20 text-zed-green rounded-xl text-xs font-bold uppercase tracking-widest mb-8 border border-zed-green/30"
                >
                    ZED Express for Merchants
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-bold font-display leading-tight mb-8"
                >
                    Grow your business <br />
                    <span className="text-zed-orange">in Kabwe</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed"
                >
                    ZED Express is Kabwe's leading product discovery platform. We help local shops find their digital voice and reach more customers than ever before.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                    <a 
                      href="https://wa.me/260762644751?text=Hello, I want to register my shop as a seller on ZED Express. What's the process for the K50 registration?"
                      className="bg-zed-orange text-white px-10 py-5 rounded-2xl font-bold text-center text-lg hover:bg-opacity-90 transition-all shadow-xl shadow-zed-orange/20"
                    >
                        Register as a Seller (K50)
                    </a>
                    <Link 
                      to="/shops"
                      className="border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-center text-lg hover:bg-white hover:text-zed-black transition-all"
                    >
                        See Existing Shops
                    </Link>
                </motion.div>
            </div>
         </div>
      </section>

      {/* Benefits */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {BENEFITS.map((benefit, i) => (
                  <div key={i} className="p-8 rounded-[2.5rem] border border-gray-100 bg-white hover:shadow-xl transition-all group">
                      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", benefit.color)}>
                          <benefit.icon size={28} />
                      </div>
                      <h4 className="font-bold text-xl mb-4 leading-tight">{benefit.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
              ))}
          </div>
      </section>

      {/* Trusted Seller System */}
      <section className="py-24 bg-gray-50 rounded-[4rem] mx-4 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                   <div className="w-20 h-20 bg-zed-green rounded-3xl flex items-center justify-center mb-10 shadow-lg shadow-zed-green/20">
                      <Zap className="text-white" size={32} />
                   </div>
                   <h2 className="text-4xl font-bold mb-8 italic">Become a Verified & Trusted shop in Kabwe</h2>
                   <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                      ZED Express is more than just a website. We visit your shop, verify your location, and help you present your products professionally.
                   </p>
                   <ul className="space-y-6">
                      <li className="flex items-center gap-4">
                          <div className="w-6 h-6 rounded-full bg-zed-green/10 text-zed-green flex items-center justify-center shrink-0">
                                <CheckCircle2 size={16} />
                          </div>
                          <span className="font-semibold text-gray-700">Digital presence for your business</span>
                      </li>
                      <li className="flex items-center gap-4">
                          <div className="w-6 h-6 rounded-full bg-zed-green/10 text-zed-green flex items-center justify-center shrink-0">
                                <CheckCircle2 size={16} />
                          </div>
                          <span className="font-semibold text-gray-700">Featured placement on the home page</span>
                      </li>
                      <li className="flex items-center gap-4">
                          <div className="w-6 h-6 rounded-full bg-zed-green/10 text-zed-green flex items-center justify-center shrink-0">
                                <CheckCircle2 size={16} />
                          </div>
                          <span className="font-semibold text-gray-700">Analytics on customer searches</span>
                      </li>
                   </ul>
              </div>
              <div className="lg:w-1/2 relative">
                  <div className="bg-white rounded-[3rem] p-12 shadow-2xl relative z-10">
                      <h4 className="text-2xl font-bold mb-8">Registration Package</h4>
                      <div className="space-y-6 mb-12">
                          <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                <span className="font-medium text-gray-600">Verification Fee</span>
                                <span className="font-bold text-zed-green">K30</span>
                          </div>
                          <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                <span className="font-medium text-gray-600">Platform Management</span>
                                <span className="font-bold text-zed-green">K20</span>
                          </div>
                          <div className="flex justify-between items-center pt-6">
                                <span className="font-bold text-lg">Total Cost</span>
                                <span className="text-3xl font-display font-bold text-zed-orange">K50</span>
                          </div>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest text-center mt-4">One-time payment for the initial phase</p>
                      </div>
                      <a 
                        href="https://wa.me/260762644751?text=Hello, I want to register my shop for K50. Please guide me through the next steps."
                        className="block w-full bg-zed-green text-white text-center py-5 rounded-2xl font-bold text-xl hover:bg-opacity-90 shadow-xl shadow-zed-green/20"
                      >
                        Start Registration Now
                      </a>
                  </div>
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-zed-green/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-zed-orange/10 rounded-full blur-3xl"></div>
              </div>
          </div>
      </section>

      {/* Stats */}
      <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-12 text-center">
                  <div>
                      <div className="text-6xl font-display font-bold text-zed-black mb-4">50+</div>
                      <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Partner Shops</p>
                  </div>
                  <div>
                      <div className="text-6xl font-display font-bold text-zed-green mb-4">500+</div>
                      <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Daily Searchers</p>
                  </div>
                  <div>
                      <div className="text-6xl font-display font-bold text-zed-orange mb-4">100%</div>
                      <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Kabwe Focused</p>
                  </div>
              </div>
          </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center">
          <div className="bg-zed-black rounded-[3rem] p-12 overflow-hidden relative border border-white/5">
              <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-6">Need more information?</h2>
                  <p className="text-gray-400 mb-10">Our team is ready to visit your shop and explain how ZED Express can help your business grow in Kabwe.</p>
                  <a 
                    href="https://wa.me/260762644751"
                    className="inline-flex items-center gap-3 bg-white text-zed-black px-10 py-5 rounded-2xl font-bold hover:bg-zed-orange hover:text-white transition-all shadow-xl shadow-white/5 group"
                  >
                    Contact Merchant Support <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </a>
              </div>
          </div>
      </section>
    </div>
  );
}
