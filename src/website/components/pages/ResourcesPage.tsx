import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, Timer, Sparkles, Library
} from 'lucide-react';
import WebsiteLayout from '../../layouts/WebsiteLayout';


const ResourcesPage = () => {
  return (
    <WebsiteLayout>
      
      <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-32">
        
        {/* ATMOSPHERE - Right Aligned Glow (Blue/Cyan for Knowledge) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-x-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none animate-pulse-slow" />

        <div className="max-w-7xl mx-auto px-6 pb-20 relative z-10 w-full grid lg:grid-cols-2">
            
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-10"
            >
                {/* Breadcrumb (Animated) */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-zinc-500"
                >
                    <span onClick={() => window.location.href='/website'} className="hover:text-white cursor-pointer transition-colors">Home</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-white">Resources</span>
                </motion.div>

               

                {/* Headline */}
                <h1 className="text-6xl md:text-8xl font-heading font-bold text-white tracking-tighter leading-[0.9]">
                    The Event <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                        Library.
                    </span>
                </h1>
                
                {/* Subtext */}
                <p className="text-xl text-zinc-400 max-w-xl leading-relaxed border-l-2 border-blue-500/20 pl-6">
                    We are currently curating a definitive collection of playbooks, guides, and case studies for modern organizers.
                </p>

                {/* Upcoming Topics */}
                <div className="space-y-4">
                    <p className="text-xs font-bold text-zinc-600 uppercase tracking-widest">Coming Soon</p>
                    <div className="flex flex-wrap gap-3">
                        {['Organizer Playbooks', 'Ticketing Guides', 'Case Studies', 'Market Insights'].map((tag, i) => (
                            <div key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-zinc-500 text-sm">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Input Form */}
                <div className="pt-8 max-w-md">
                    <div className="p-1 rounded-2xl bg-gradient-to-r from-zinc-800 to-zinc-900">
                        <div className="bg-black rounded-xl p-2 flex items-center gap-2">
                            <input 
                                type="email" 
                                placeholder="work@email.com" 
                                className="flex-1 bg-transparent border-none text-white px-4 py-2 focus:outline-none placeholder:text-zinc-600"
                            />
                            <button className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-2 whitespace-nowrap">
                                <Sparkles className="w-4 h-4" /> Notify Me
                            </button>
                        </div>
                    </div>
                    <p className="text-xs text-zinc-600 mt-4 uppercase tracking-widest pl-2">Get notified when we publish.</p>
                </div>

            </motion.div>

            {/* Right Side Visual (Abstract Books/Stack) */}
            <div className="hidden lg:flex items-center justify-center relative">
                <div className="relative w-96 h-96">
                    {/* Abstract Shapes */}
                    <div className="absolute inset-0 border border-blue-500/10 rounded-3xl transform rotate-6 scale-90 animate-float" />
                    <div className="absolute inset-0 border border-cyan-500/10 rounded-3xl transform -rotate-3 scale-95 animate-float" style={{ animationDelay: '1s' }} />
                    <div className="absolute inset-0 border border-white/10 rounded-3xl transform rotate-0 scale-100 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                        <Library className="w-24 h-24 text-blue-500/50" />
                    </div>
                </div>
            </div>

        </div>

      </section>

    </WebsiteLayout>
  );
};

export default ResourcesPage;