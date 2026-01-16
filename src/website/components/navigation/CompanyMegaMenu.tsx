import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, Users, Mail, ArrowRight, Sparkles, Handshake, HelpCircle
} from 'lucide-react';

interface CompanyMegaMenuProps {
  closeMenu: () => void;
  mobileMode?: boolean; // Added Prop
}

const CompanyMegaMenu: React.FC<CompanyMegaMenuProps> = ({ closeMenu, mobileMode = false }) => {
  const navigate = useNavigate();

  // --- SCROLL LOCK (Conditional) ---
  useEffect(() => {
    // Only lock scroll if we are NOT in mobile mode (Desktop overlay mode)
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

  // --- DYNAMIC STYLES ---
  // Desktop: Fixed Overlay | Mobile: Relative Flow
  const containerClasses = mobileMode 
    ? "relative w-full bg-transparent p-0 overflow-visible" 
    : "fixed inset-0 top-[88px] bottom-0 bg-black/95 backdrop-blur-3xl z-40 overflow-y-auto pt-10 pb-20 h-[calc(100vh-88px)]";

  // Disable internal animation if in mobile mode (prevents glitch)
  const animationProps = mobileMode ? {} : {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.2 }
  };

  return (
    // @ts-ignore
    <motion.div
        {...animationProps}
        className={containerClasses}
        onMouseLeave={!mobileMode ? closeMenu : undefined}
    >
        <div className={`w-full ${mobileMode ? '' : 'max-w-7xl mx-auto px-6'} h-full pt-10`}>
            {/* Grid vs Flex Column Switch */}
            <div className={`grid ${mobileMode ? 'flex flex-col gap-6' : 'grid-cols-12 gap-6'} h-full`}>
                
                {/* COL 1: MISSION & IDENTITY */}
                <div className={`
                    ${mobileMode ? 'w-full min-h-[300px]' : 'col-span-12 lg:col-span-5'} 
                    relative group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition-colors hover:border-indigo-500/30 flex flex-col justify-between
                `}>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop')] bg-cover bg-center opacity-20 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                    
                    <div className="relative z-10 p-10 flex flex-col h-full justify-between gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-500/20">
                                <Building2 className="w-3 h-3" /> The Company
                            </div>
                            <h3 className="text-4xl font-heading font-bold text-white mb-4">We Build Infrastructure.</h3>
                            {!mobileMode && (
                                <p className="text-zinc-400 leading-relaxed max-w-sm">
                                    Yadi is the operating system for modern events. Learn about our mission to organize the chaos.
                                </p>
                            )}
                        </div>

                        <div className="space-y-3">
                             <div onClick={() => handleNav('/company/about')} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all">
                                 <span className="font-bold text-white">About Yadi</span>
                                 <ArrowRight className="w-4 h-4 text-zinc-400" />
                             </div>
                             <div onClick={() => handleNav('/company/pricing')} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all">
                                 <span className="font-bold text-white">Pricing Models</span>
                                 <ArrowRight className="w-4 h-4 text-zinc-400" />
                             </div>
                        </div>
                    </div>
                </div>

                {/* COL 2: ECOSYSTEM */}
                <div className={`${mobileMode ? 'w-full space-y-4' : 'col-span-12 lg:col-span-4 flex flex-col gap-6'}`}>
                    {/* Careers */}
                    <div 
                        onClick={() => handleNav('/company/careers')} 
                        className={`
                            ${mobileMode ? 'p-6' : 'p-8 flex-1'}
                            rounded-3xl bg-zinc-900/50 border border-white/10 hover:bg-zinc-900 hover:border-pink-500/30 transition-all group cursor-pointer relative overflow-hidden flex flex-col justify-center
                        `}
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-[40px] group-hover:bg-pink-500/20 transition-colors" />
                        <Users className="w-8 h-8 text-pink-500 mb-6" />
                        <h4 className="text-xl font-bold text-white mb-2">Join the Team</h4>
                        <p className="text-sm text-zinc-400 mb-6">Builders, thinkers, and problem solvers.</p>
                        <span className="text-xs font-bold text-white border-b border-pink-500 pb-0.5 w-fit">View Open Roles</span>
                    </div>

                    {/* Partners */}
                    <div 
                        onClick={() => handleNav('/company/partners')} 
                        className={`
                            ${mobileMode ? 'p-6' : 'p-8 flex-1'}
                            rounded-3xl bg-zinc-900/50 border border-white/10 hover:bg-zinc-900 hover:border-purple-500/30 transition-all group cursor-pointer relative overflow-hidden flex flex-col justify-center
                        `}
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] group-hover:bg-purple-500/20 transition-colors" />
                        <Handshake className="w-8 h-8 text-purple-500 mb-6" />
                        <h4 className="text-xl font-bold text-white mb-2">Partners</h4>
                        <p className="text-sm text-zinc-400 mb-6">Agencies, venues, and integrators.</p>
                        <span className="text-xs font-bold text-white border-b border-purple-500 pb-0.5 w-fit">Partner Program</span>
                    </div>
                </div>

                {/* COL 3: DIRECT LINE */}
                <div className={`
                    ${mobileMode ? 'w-full' : 'col-span-12 lg:col-span-3'} 
                    p-8 rounded-3xl bg-black border border-white/10 flex flex-col
                `}>
                    <div className="mb-8">
                        <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Mail className="w-3 h-3" /> Connect
                        </h4>
                        <ul className="space-y-6">
                            <li onClick={() => handleNav('/company/contact')} className="group cursor-pointer">
                                <h5 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Contact Sales</h5>
                                <p className="text-xs text-zinc-500 mt-1">Enterprise & Bulk Pricing</p>
                            </li>
                            <li onClick={() => handleNav('/company/contact')} className="group cursor-pointer">
                                <h5 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">General Inquiries</h5>
                                <p className="text-xs text-zinc-500 mt-1">Press & Media</p>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-auto bg-zinc-900 rounded-xl p-5 border border-white/5">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-bold text-white">Live Support</span>
                        </div>
                        <p className="text-[10px] text-zinc-400 mb-3">
                            Existing client? Skip the queue.
                        </p>
                        <button onClick={() => window.location.href = 'mailto:support@yadi.app'} className="w-full py-2 bg-white text-black text-xs font-bold rounded hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                            <HelpCircle className="w-3 h-3" /> Email Support
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </motion.div>
  );
};

export default CompanyMegaMenu;