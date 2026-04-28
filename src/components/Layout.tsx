import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AIAssistant } from './AIAssistant';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Banner Notice */}
      <div className="bg-zed-orange text-white py-1.5 px-4 text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest relative z-40">
        No delivery for now – Visit the shop and buy directly. Delivery coming soon!
      </div>

      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* AI Assistant */}
        <AIAssistant />

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/260762644751"
          target="_blank"
          rel="no-referrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group relative border-2 border-white"
        >
          <MessageCircle size={28} />
          <span className="absolute right-full mr-4 bg-[#25D366] text-white px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
          </span>
        </motion.a>
      </div>
    </div>
  );
}
