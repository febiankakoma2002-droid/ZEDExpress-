import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'Shops', href: '/shops' },
    { name: 'For Sellers', href: '/for-sellers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100" id="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-zed-green rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
              <span className="text-white font-display font-bold text-xl">Z</span>
            </div>
            <span className="text-xl font-display font-bold tracking-tight">
              ZED <span className="text-zed-orange">Express</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-zed-green",
                  location.pathname === link.href ? "text-zed-green" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/categories" 
              className="bg-zed-green text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-sm"
            >
              <Search size={16} />
              Find a Product
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-zed-green hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium rounded-lg transition-colors",
                    location.pathname === link.href 
                      ? "bg-zed-green/5 text-zed-green" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-zed-green"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-3 pt-4">
                <Link
                  to="/categories"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-zed-green text-white px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <Search size={18} />
                  Find a Product
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
