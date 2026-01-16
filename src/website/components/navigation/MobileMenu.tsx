import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronLeft, ChevronRight, 
  Zap, Building2, Layers, Layout, ArrowRight
} from 'lucide-react';
import ProductMegaMenu from './ProductMegaMenu';
import CompanyMegaMenu from './CompanyMegaMenu';

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

// ... Animation variants remain the same ...
const menuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { opacity: 0, x: '100%', transition: { duration: 0.2 } }
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    transition: { duration: 0.2 }
  })
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, closeMenu }) => {
  const navigate = useNavigate();
  const [view, setView] = useState<'main' | 'products' | 'company'>('main');
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const goTo = (newView: 'main' | 'products' | 'company') => {
    setDirection(newView === 'main' ? -1 : 1);
    setView(newView);
  };

  const handleNav = (path: string) => {
    navigate(path);
    closeMenu();
    setTimeout(() => setView('main'), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-50 flex flex-col"
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/10 relative z-20">
             {view !== 'main' ? (
                 <button onClick={() => goTo('main')} className="p-2 -ml-2 text-zinc-400 hover:text-white flex items-center gap-1 font-bold">
                     <ChevronLeft className="w-5 h-5" /> Back
                 </button>
             ) : (
                 <div className="w-32 flex items-center justify-center">
                     <img
                     src='Logo.png'
                     alt='logo'
                     />
                 </div>
             )}
             
             <button onClick={closeMenu} className="p-2 -mr-2 text-zinc-400 hover:text-white">
                 <X className="w-6 h-6" />
             </button>
          </div>

          {/* CONTENT AREA */}
          <div className="flex-1 relative overflow-hidden">
             <AnimatePresence initial={false} custom={direction} mode="wait">
                
                {/* 1. MAIN MENU */}
                {view === 'main' && (
                    <motion.div 
                        key="main"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0 p-6 overflow-y-auto"
                    >
                        <div className="space-y-4">
                            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Explore</p>
                            
                            <button onClick={() => goTo('products')} className="w-full flex items-center justify-between p-5 bg-zinc-900/50 border border-white/5 rounded-2xl group active:scale-95 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white"><Layers className="w-5 h-5" /></div>
                                    <span className="text-xl font-heading font-bold text-white">Products</span>
                                </div>
                                <ChevronRight className="w-5 h-5 text-zinc-500" />
                            </button>

                            <button onClick={() => handleNav('/solutions')} className="w-full flex items-center justify-between p-5 bg-zinc-900/50 border border-white/5 rounded-2xl group active:scale-95 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white"><Zap className="w-5 h-5" /></div>
                                    <span className="text-xl font-heading font-bold text-white">Solutions</span>
                                </div>
                            </button>

                            <button onClick={() => goTo('company')} className="w-full flex items-center justify-between p-5 bg-zinc-900/50 border border-white/5 rounded-2xl group active:scale-95 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white"><Building2 className="w-5 h-5" /></div>
                                    <span className="text-xl font-heading font-bold text-white">Company</span>
                                </div>
                                <ChevronRight className="w-5 h-5 text-zinc-500" />
                            </button>

                            <button onClick={() => handleNav('/resources')} className="w-full flex items-center justify-between p-5 bg-zinc-900/50 border border-white/5 rounded-2xl group active:scale-95 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white"><Layout className="w-5 h-5" /></div>
                                    <span className="text-xl font-heading font-bold text-white">Resources</span>
                                </div>
                            </button>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                             <button onClick={() => window.location.href = 'https://tickets.yadi.app'} className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2">
                                 Get Started <ArrowRight className="w-4 h-4" />
                             </button>
                             <button onClick={() => window.location.href = 'https://tickets.yadi.app/login'} className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl text-center">
                                 Sign In
                             </button>
                        </div>
                    </motion.div>
                )}

                {/* 2. REUSED PRODUCT MEGA MENU */}
                {view === 'products' && (
                    <motion.div 
                        key="products"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0 px-6 pb-20 overflow-y-auto"
                    >
                        {/* Rendering the EXACT same component, just in mobile mode */}
                        <ProductMegaMenu closeMenu={closeMenu} mobileMode={true} />
                    </motion.div>
                )}

                {/* 3. REUSED COMPANY MEGA MENU */}
                {view === 'company' && (
                    <motion.div 
                        key="company"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0 px-6 pb-20 overflow-y-auto"
                    >
                        {/* Rendering the EXACT same component, just in mobile mode */}
                        <CompanyMegaMenu closeMenu={closeMenu} mobileMode={true} />
                    </motion.div>
                )}

             </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;