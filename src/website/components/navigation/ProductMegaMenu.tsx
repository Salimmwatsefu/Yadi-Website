import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, Globe, ChevronRight, ArrowRight, Layers
} from 'lucide-react';

interface ProductMegaMenuProps {
  closeMenu: () => void;
  mobileMode?: boolean; // New Prop to control behavior
}

const ProductMegaMenu: React.FC<ProductMegaMenuProps> = ({ closeMenu, mobileMode = false }) => {
  const navigate = useNavigate();

  // --- SCROLL LOCK ---
  // Only lock scroll if we are on Desktop (mobile menu handles its own lock)
  useEffect(() => {
    if (!mobileMode) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [mobileMode]);

  const handleNav = (path: string) => {
    navigate(path);
    closeMenu();
  };

  // --- STYLES CONFIG ---
  const containerClasses = mobileMode 
    ? "relative w-full bg-transparent p-0 overflow-visible" // Mobile: Natural flow, no background
    : "fixed inset-0 top-[88px] bottom-0 bg-black/95 backdrop-blur-3xl z-40 overflow-y-auto pt-10 pb-20 h-[calc(100vh-88px)]"; // Desktop: Fixed Overlay

  // Disable animation on mobile to prevent "Double Bounce" glitch
  const animationProps = mobileMode ? {} : {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.2 }
  };

  return (
    <motion.div
        {...animationProps}
        className={containerClasses}
        onMouseLeave={!mobileMode ? closeMenu : undefined}
    >
        <div className={`w-full ${mobileMode ? '' : 'max-w-7xl mx-auto px-6 '} h-full pt-10`}>
            
            {/* Grid vs Stack Switch */}
            <div className={`grid ${mobileMode ? 'flex flex-col gap-6' : 'grid-cols-12 gap-6'} h-full`}>
                
                {/* COL 1: HERO / CONTEXT */}
                {/* On mobile, we might want this visual smaller or at the top */}
                <div className={`
                    ${mobileMode ? 'w-full aspect-[2/1] min-h-[200px]' : 'col-span-12 lg:col-span-5 h-full'} 
                    relative group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition-colors hover:border-primary/30 flex flex-col justify-between
                `}>
                    {/* Background Visual */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=1170&auto=format&fit=crop')] bg-cover bg-center opacity-30 transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    
                    <div className={`relative z-10 ${mobileMode ? 'p-6' : 'p-10'} flex flex-col h-full justify-between`}>
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/10 backdrop-blur-md">
                                <Layers className="w-3 h-3" /> The Event OS
                            </div>
                            <h3 className={`${mobileMode ? 'text-2xl' : 'text-4xl'} font-heading font-bold text-white mb-4`}>
                                Two Worlds.<br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">One Platform.</span>
                            </h3>
                            {!mobileMode && (
                                <p className="text-zinc-400 leading-relaxed max-w-sm">
                                    Yadi unifies high-energy consumer ticketing with complex enterprise infrastructure. Choose your scale.
                                </p>
                            )}
                        </div>

                        {/* Quick Stats - Hide on small mobile if needed, or keep */}
                        <div className={`flex gap-6 pt-6 border-t border-white/10 ${mobileMode ? 'hidden' : ''}`}>
                             <div>
                                 <p className="text-2xl font-bold text-white">2M+</p>
                                 <p className="text-xs text-zinc-500 uppercase tracking-widest">Tickets</p>
                             </div>
                             <div>
                                 <p className="text-2xl font-bold text-white">15k+</p>
                                 <p className="text-xs text-zinc-500 uppercase tracking-widest">Events</p>
                             </div>
                        </div>
                    </div>
                </div>

                {/* COL 2: THE PRODUCTS */}
                <div className={`${mobileMode ? 'w-full space-y-4' : 'col-span-12 lg:col-span-4 flex flex-col gap-6'}`}>
                    
                    {/* 1. TICKETING (Pink Theme) */}
                    <div 
                        onClick={() => handleNav('/product/ticketing')} 
                        className={`
                            ${mobileMode ? 'p-6' : 'p-8 flex-1 flex-col justify-center'}
                            rounded-3xl bg-zinc-900/50 border border-white/10 hover:bg-zinc-900 hover:border-primary/50 transition-all group cursor-pointer relative overflow-hidden flex
                        `}
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[50px] group-hover:bg-primary/20 transition-colors" />
                        
                        <div className="relative z-10 w-full">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-primary transition-colors opacity-100 transform -translate-x-2 group-hover:translate-x-0" />
                            </div>
                            
                            <h4 className="text-xl font-bold text-white mb-1">Ticketing & Nightlife</h4>
                            <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
                                For concerts, festivals, and clubs. Fast checkout, M-Pesa payments, and QR scanning.
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                {['Sales', 'Access', 'Analytics'].map(tag => (
                                    <span key={tag} className="text-[10px] uppercase font-bold text-zinc-500 bg-white/5 px-2 py-1 rounded border border-white/5 group-hover:text-primary/80 group-hover:border-primary/20 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 2. ENTERPRISE (Emerald Theme) */}
                    <div 
                        onClick={() => handleNav('/product/enterprise')} 
                        className={`
                            ${mobileMode ? 'p-6' : 'p-8 flex-1 flex-col justify-center'}
                            rounded-3xl bg-zinc-900/50 border border-white/10 hover:bg-zinc-900 hover:border-emerald-500/50 transition-all group cursor-pointer relative overflow-hidden flex
                        `}
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-[50px] group-hover:bg-emerald-500/20 transition-colors" />
                        
                        <div className="relative z-10 w-full">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-emerald-500 transition-colors opacity-100 transform -translate-x-2 group-hover:translate-x-0" />
                            </div>
                            
                            <h4 className="text-xl font-bold text-white mb-1">Enterprise Events</h4>
                            <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
                                For conferences and expos. Speaker management, multi-track agendas, and accreditation.
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                {['Speakers', 'Vendors', 'Badges'].map(tag => (
                                    <span key={tag} className="text-[10px] uppercase font-bold text-zinc-500 bg-white/5 px-2 py-1 rounded border border-white/5 group-hover:text-emerald-500/80 group-hover:border-emerald-500/20 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* COL 3: LIFECYCLE & ACTION */}
                <div className={`
                    ${mobileMode ? 'w-full' : 'col-span-12 lg:col-span-3'} 
                    p-8 rounded-3xl bg-black border border-white/10 flex flex-col
                `}>
                    
                    {/* Lifecycle Links */}
                    <div className="mb-auto">
                        <div className="space-y-6 flex md:flex-col space-x-14 md:space-x-0">
                            <div className="group">
                                <p className="text-[10px] text-zinc-600 font-bold uppercase mb-3">Ticketing Flow</p>
                                <ul className="space-y-2 pl-2">
                                    {['Before Event', 'During Event', 'After Event'].map(item => (
                                        <li key={item} onClick={() => handleNav('/product/ticketing')} className="text-sm text-zinc-400 hover:text-primary cursor-pointer transition-colors flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-primary/50" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="group">
                                <p className="text-[10px] text-zinc-600 font-bold uppercase mb-3">Enterprise Flow</p>
                                <ul className="space-y-2 pl-2">
                                    {['Plan & Build', 'Operate', 'Analyze'].map(item => (
                                        <li key={item} onClick={() => handleNav('/product/enterprise')} className="text-sm text-zinc-400 hover:text-emerald-500 cursor-pointer transition-colors flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-emerald-500/50" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="mt-8 space-y-3">
                        <button 
                            onClick={() => window.location.href = 'https://tickets.yadi.app'}
                            className="w-full py-3 bg-white text-black font-bold text-xs rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                        >
                            Get Started <ArrowRight className="w-3 h-3" />
                        </button>
                        <button 
                            onClick={() => window.location.href = 'https://tickets.yadi.app'}
                            className="w-full py-3 bg-zinc-900 border border-white/10 text-white font-bold text-xs rounded-lg hover:bg-zinc-800 transition-colors"
                        >
                            Explore Events
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </motion.div>
  );
};

export default ProductMegaMenu;