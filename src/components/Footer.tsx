import { Link } from 'react-router-dom';
import { Facebook, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zed-black text-white pt-16 pb-8" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-zed-green rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">Z</span>
              </div>
              <span className="text-lg font-display font-bold tracking-tight">
                ZED <span className="text-zed-orange">Express</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Kabwe's leading product discovery platform. Connecting local shops with the community.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://www.facebook.com/profile.php?id=61570759164012" 
                target="_blank" 
                rel="no-referrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-zed-green transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://wa.me/260762644751" 
                target="_blank" 
                rel="no-referrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-zed-green transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/categories" className="hover:text-zed-green transition-colors">Categories</Link></li>
              <li><Link to="/shops" className="hover:text-zed-green transition-colors">Local Shops</Link></li>
              <li><Link to="/for-sellers" className="hover:text-zed-green transition-colors">Sell on ZED Express</Link></li>
              <li><Link to="/contact" className="hover:text-zed-green transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Location</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-zed-green shrink-0" />
                <span>Kabwe, Central Province, Zambia</span>
              </li>
              <li className="flex gap-3 text-zed-green font-semibold italic">
                <span>"No delivery for now – Visit the shop and buy directly"</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex gap-3">
                <Phone size={18} className="text-zed-green shrink-0" />
                <span>+260 762 644 751</span>
              </li>
              <li className="flex gap-3">
                <MessageCircle size={18} className="text-zed-green shrink-0" />
                <span>Chat on WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left font-medium">
            &copy; {currentYear} ZED Express. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-xs font-medium">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
