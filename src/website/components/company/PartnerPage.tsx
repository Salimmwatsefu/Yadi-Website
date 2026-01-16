import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, Sparkles, Timer, Handshake
} from 'lucide-react';
import WebsiteLayout from '../../layouts/WebsiteLayout';

const PartnerPage = () => {
  return (
    <WebsiteLayout>
      
      <section className="relative min-h-screen flex items-center bg-black overflow-hidden md:pt-32">
        
        {/* ATMOSPHERE - Right Aligned Glow */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none animate-pulse-slow" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2">
            
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-10"
            >
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
                    <span onClick={() => window.location.href='/website'} className="hover:text-white cursor-pointer transition-colors">Home</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-zinc-400">Company</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-white">Partners</span>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                    <Timer className="w-3 h-3 animate-spin-slow" /> Coming 2026
                </div>

                {/* Headline */}
                <h1 className="text-6xl md:text-8xl font-heading font-bold text-white tracking-tighter leading-[0.9]">
                    Building the <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                        Ecosystem.
                    </span>
                </h1>
                
                {/* Subtext */}
                <p className="text-xl text-zinc-400 max-w-xl leading-relaxed border-l-2 border-purple-500/20 pl-6">
                    We are architecting a unified program for Agencies, Venues, and Integrators. Be the first to access the infrastructure.
                </p>

                {/* Categories */}
                <div className="flex flex-wrap gap-3">
                    {['Event Agencies', 'Venue Halls', 'API Developers'].map((tag, i) => (
                        <div key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-zinc-500 text-sm">
                            {tag}
                        </div>
                    ))}
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
                                <Sparkles className="w-4 h-4" /> Join Waitlist
                            </button>
                        </div>
                    </div>
                    <p className="text-xs text-zinc-600 mt-4 uppercase tracking-widest pl-2">Priority access for early applicants</p>
                </div>

            </motion.div>

            {/* Right Side Visual (Optional Abstract Graphic) */}
            <div className="hidden lg:flex items-center justify-center relative">
                {/* A subtle geometric shape indicating connection */}
                <div className="relative w-96 h-96">
                    <div className="absolute inset-0 border border-purple-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-12 border border-indigo-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
                    <Handshake className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-purple-500/50" />
                </div>
            </div>

        </div>

      </section>

    </WebsiteLayout>
  );
};

export default PartnerPage;