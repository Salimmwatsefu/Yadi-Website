import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, ArrowRight, ChevronDown 
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import ProductMegaMenu from '../components/navigation/ProductMegaMenu';
import MobileMenu from '../components/navigation/MobileMenu';
import CompanyMegaMenu from '../components/navigation/CompanyMegaMenu';


const WebsiteNavbar: React.FC = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (path: string) => {
    navigate(path);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const closeMenu = () => setActiveDropdown(null);

  return (
    <>
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b  ${
              isScrolled || activeDropdown ? 'bg-black/90 backdrop-blur-xl border-white/5 py-4' : 'bg-transparent border-transparent py-6'
            }`}
            onMouseLeave={closeMenu}
        >
          <div className="relative z-50 max-w-7xl mx-auto px-6 flex justify-between items-center">
            
            {/* LOGO */}
            <div className="-mt-5 gap-2 cursor-pointer group z-50" onClick={() => handleNav('/website')}>
                  <div className="relative">
                      <img 
                        src="/Logo.png" 
                        alt="Yadi Logo"
                        className="md:w-36 w-32 object-contain transform group-hover:rotate-12 transition-transform duration-300"
                      />
                    </div>
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center space-x-8">
              
              {/* PRODUCT TRIGGER */}
              <div className="relative group">
                <button 
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${activeDropdown === 'product' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
                    onMouseEnter={() => setActiveDropdown('product')}
                    onClick={() => setActiveDropdown(activeDropdown === 'product' ? null : 'product')}
                >
                    Products <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'product' ? 'rotate-180' : ''}`} />
                </button>
                <div className="absolute top-full left-0 w-full h-12 bg-transparent" />
              </div>

              <button onClick={() => handleNav('/solutions')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Solutions</button>
              <button onClick={() => handleNav('/resources')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Resources</button>
              
              {/* COMPANY TRIGGER */}
              <div className="relative group">
                 <button 
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${activeDropdown === 'company' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
                    onMouseEnter={() => setActiveDropdown('company')}
                    onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                >
                    Company <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
                </button>
                <div className="absolute top-full left-0 w-full h-12 bg-transparent" />
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4">
                
                 <button 
                    onClick={() => window.location.href = 'https://tickets.yadi.app'}
                    className="group relative px-5 py-2 rounded-full bg-white text-black font-bold text-sm overflow-hidden hover:scale-105 transition-transform hidden md:block"
                 >
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                    </span>
                 </button>
                 
                 {/* Mobile Menu Button - CLICKABLE TOGGLE */}
                 <button className="md:hidden text-zinc-300 relative z-50 p-2" onClick={() => setIsMobileMenuOpen(true)}>
                    <Menu />
                 </button>
            </div>
          </div>

          {/* --- DESKTOP MEGA MENUS --- */}
          <AnimatePresence>
            {activeDropdown === 'product' && (
                <ProductMegaMenu closeMenu={closeMenu} />
            )}

            {activeDropdown === 'company' && (
                <CompanyMegaMenu closeMenu={closeMenu} />
            )}
          </AnimatePresence>

        </nav>

        {/* --- MOVED OUTSIDE NAV TO FIX SCROLL BUG --- */}
        <MobileMenu isOpen={isMobileMenuOpen} closeMenu={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default WebsiteNavbar;