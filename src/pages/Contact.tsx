import { motion } from 'motion/react';
import { Mail, MessageCircle, Phone, MapPin, Facebook, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-zed-black text-white pt-24 pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl"
              >
                  <h1 className="text-5xl md:text-6xl font-bold font-display mb-8">Get in Touch</h1>
                  <p className="text-xl text-gray-400 leading-relaxed">
                      Questions about a product? Want to register your shop? We're here to help you navigate Kabwe's local marketplace.
                  </p>
              </motion.div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16 pb-24">
          <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100">
                    <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-zed-green/10 text-zed-green rounded-2xl flex items-center justify-center shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                                <p className="font-bold text-zed-black">+260 762 644 751</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-2xl flex items-center justify-center shrink-0">
                                <MessageCircle size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">WhatsApp</p>
                                <p className="font-bold text-zed-black">+260 762 644 751</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-zed-orange/10 text-zed-orange rounded-2xl flex items-center justify-center shrink-0">
                                <Facebook size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Facebook</p>
                                <a href="https://www.facebook.com/profile.php?id=61570759164012" target="_blank" rel="no-referrer" className="font-bold text-zed-black hover:text-zed-orange transition-colors">ZED Express Official</a>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Headquarters</p>
                                <p className="font-bold text-zed-black">Kabwe, Zambia</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-zed-green rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                    <h4 className="text-2xl font-bold mb-4 relative z-10">Visit our office</h4>
                    <p className="text-green-50 mb-8 relative z-10 leading-relaxed">
                        We're located right in the heart of Town Centre. Stop by for a coffee and a chat about growing your local business.
                    </p>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform"></div>
                </div>
              </div>

              <div className="lg:col-span-2">
                  <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-xl border border-gray-100">
                      <h3 className="text-3xl font-bold mb-4">Send us a message</h3>
                      <p className="text-gray-500 mb-12">Alternatively, you can fill out this form and our team will get back to you within 24 hours.</p>
                      
                      <form className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                  <input type="text" placeholder="John Doe" className="w-full bg-gray-50 rounded-2xl px-6 py-4 outline-none border-2 border-transparent focus:border-zed-green transition-all" />
                              </div>
                              <div className="space-y-2">
                                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                                  <input type="text" placeholder="+260..." className="w-full bg-gray-50 rounded-2xl px-6 py-4 outline-none border-2 border-transparent focus:border-zed-green transition-all" />
                              </div>
                          </div>
                          <div className="space-y-2">
                              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                              <select className="w-full bg-gray-50 rounded-2xl px-6 py-4 outline-none border-2 border-transparent focus:border-zed-green transition-all appearance-none cursor-pointer">
                                  <option>Registering a shop</option>
                                  <option>Report a shop</option>
                                  <option>Inquiry about a product</option>
                                  <option>Partnership inquiry</option>
                                  <option>Other</option>
                              </select>
                          </div>
                          <div className="space-y-2">
                              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                              <textarea rows={5} placeholder="How can we help you?" className="w-full bg-gray-50 rounded-2xl px-6 py-4 outline-none border-2 border-transparent focus:border-zed-green transition-all resize-none"></textarea>
                          </div>
                          <button type="submit" className="w-full md:w-auto bg-zed-black text-white px-12 py-5 rounded-2xl font-bold hover:bg-zed-green transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3 group">
                              Send Message <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
