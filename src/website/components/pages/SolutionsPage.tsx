import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Music, 
  Mic2, 
  Store, 
  Heart, 
  PartyPopper,
  ChevronRight,
  Ticket,
  Globe,
  CheckCircle2,
  Sparkles,
  Zap,
  Layers
} from 'lucide-react';
import WebsiteLayout from '../../layouts/WebsiteLayout';


// --- VISUALS ---

// 1. ABSTRACT CORE VISUAL (The "Engine" connecting everything)
const CoreEngineVisual = () => (
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
        {/* Orbiting Rings */}
        <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        <div className="absolute inset-12 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
        
        {/* Core */}
        <div className="relative z-10 w-32 h-32 bg-zinc-950 border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            <div className="text-center">
                <span className="font-heading font-bold text-2xl text-white block">YADI</span>
                <span className="text-[9px] text-zinc-500 tracking-widest uppercase">CORE OS</span>
            </div>
        </div>

        {/* Satellites */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-12 h-12 bg-pink-500/20 border border-pink-500/50 rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(236,72,153,0.3)] animate-float">
            <Music className="w-5 h-5 text-pink-500" />
        </div>
        <div className="absolute bottom-0 right-1/4 translate-y-6 w-12 h-12 bg-emerald-500/20 border border-emerald-500/50 rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-float" style={{ animationDelay: '1s' }}>
            <Globe className="w-5 h-5 text-emerald-500" />
        </div>
        <div className="absolute bottom-0 left-1/4 translate-y-6 w-12 h-12 bg-blue-500/20 border border-blue-500/50 rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.3)] animate-float" style={{ animationDelay: '2s' }}>
            <Store className="w-5 h-5 text-blue-500" />
        </div>
    </div>
);

// --- COMPONENTS ---

interface SolutionCardProps {
  title: string;
  desc: string;
  icon: React.ElementType;
  image: string;
  color: string; // Tailwind color class prefix e.g. "pink-500"
  features: string[];
  link: string;
  delay?: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, desc, icon: Icon, image, color, features, link, delay = 0 }) => {
  // Dynamic class construction based on color prop
  const borderClass = `border-${color}/20`;
  const bgClass = `bg-${color}/5`;
  const textClass = `text-${color}`;
  const hoverBorderClass = `group-hover:border-${color}/50`;
  const iconBgClass = `bg-${color}/10`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`group relative overflow-hidden rounded-3xl border ${borderClass} bg-zinc-900/50 ${hoverBorderClass} transition-all duration-500 h-full flex flex-col`}
    >
      {/* Background Hover Glow */}
      <div className={`absolute -right-20 -top-20 w-64 h-64 bg-${color}/10 rounded-full blur-[80px] group-hover:bg-${color}/20 transition-colors duration-500 pointer-events-none`} />

      {/* Image Section */}
      <div className="relative h-48 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" style={{ backgroundImage: `url(${image})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
          
          <div className="absolute bottom-4 left-6">
              <div className={`w-10 h-10 rounded-lg ${iconBgClass} border ${borderClass} flex items-center justify-center backdrop-blur-md`}>
                  <Icon className={`w-5 h-5 ${textClass}`} />
              </div>
          </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
              {desc}
          </p>

          {/* Features List */}
          <div className="space-y-2 mb-6">
              {features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                      <div className={`w-1 h-1 rounded-full bg-${color}`} />
                      <span className="text-xs text-zinc-500 font-mono uppercase tracking-tight">{feat}</span>
                  </div>
              ))}
          </div>

          <a href={link} className={`inline-flex items-center gap-2 text-sm font-bold ${textClass} hover:opacity-80 transition-opacity mt-auto`}>
              Explore Solution <ArrowRight className="w-4 h-4" />
          </a>
      </div>
    </motion.div>
  );
};

// --- MAIN PAGE ---

const SolutionsPage: React.FC = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <WebsiteLayout>
      
      {/* 1. HERO SECTION (Left Aligned, Immersive) */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-black pt-32">
        {/* Right-Aligned Background Image */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1740&auto=format&fit=crop')] bg-cover bg-[center_right] opacity-50 saturate-0" />
             {/* Gradient Blends */}
             <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2">
            <motion.div 
                style={{ y: yHero }}
                className="space-y-8"
            >
                 {/* Breadcrumb */}
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-zinc-500"
                 >
                     <span className="hover:text-white cursor-pointer transition-colors">Home</span>
                     <ChevronRight className="w-3 h-3" />
                     <span className="text-white bg-white/10 px-2 py-0.5 rounded-full backdrop-blur-md">Solutions</span>
                 </motion.div>
                 
                 {/* Headline */}
                 <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="text-6xl md:text-8xl font-heading font-bold text-white leading-[0.95] tracking-tight"
                 >
                    Built for <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                        Every Scale.
                    </span>
                 </motion.h1>

                 {/* Subheadline */}
                 <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-zinc-400 max-w-lg leading-relaxed"
                 >
                    From high-energy concerts to large-scale conferences. 
                    Yadi adapts to how your event works — not the other way around.
                 </motion.p>

                 {/* CTAs */}
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-4 pt-8"
                 >
                      <button 
                          onClick={() => window.location.href = 'https://tickets.yadi.app'}
                          className="px-10 py-5 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-2"
                      >
                          Get Started <ArrowRight className="w-5 h-5" />
                      </button>
                 </motion.div>
            </motion.div>
        </div>
      </section>

      {/* 2. INTRO: "REAL EVENTS" */}
      <section className="py-24 border-b border-white/5 bg-zinc-950">
           <div className="max-w-4xl mx-auto px-6 text-center">
               <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                   <Layers className="w-3 h-3" /> Adaptive Infrastructure
               </div>
               <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">
                   Built for Real Events, Not Just One Type.
               </h2>
               <p className="text-lg text-zinc-400 leading-relaxed">
                   No two events are the same. Some are loud and fast-moving. Others are structured and operationally complex. 
                   <span className="text-white block mt-4 font-medium">Yadi gives you the specific infrastructure needed for yours.</span>
               </p>
           </div>
      </section>

      {/* 3. SOLUTIONS GRID (Premium Cards) */}
      <section className="py-32 bg-black">
         <div className="max-w-7xl mx-auto px-6">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 
                 {/* 1. CONCERTS (Pink) */}
                 <SolutionCard 
                    title="Concerts & Festivals"
                    desc="High volume entry, fast sales, and fraud prevention. Built for the rush."
                    icon={Music}
                    image="https://images.unsplash.com/photo-1459749411177-287ce371c015?q=80&w=2070&auto=format&fit=crop"
                    color="pink-500"
                    features={['Smart Ticket Tiers', 'Mobile-First Checkout', 'M-Pesa Integration']}
                    link="/product/ticketing"
                    delay={0}
                 />

                 {/* 2. CONFERENCES (Emerald) */}
                 <SolutionCard 
                    title="Conferences & Summits"
                    desc="Manage speakers, multi-track schedules, and attendee flow with precision."
                    icon={Globe}
                    image="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop"
                    color="emerald-500"
                    features={['Speaker Management', 'Multi-Track Agenda', 'Accreditation']}
                    link="/product/enterprise"
                    delay={0.1}
                 />

                 {/* 3. EXPOS (Blue) */}
                 <SolutionCard 
                    title="Expos & Trade Shows"
                    desc="Complete vendor management. Sell booths, assign floor plans, and track ROI."
                    icon={Store}
                    image="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1740&auto=format&fit=crop"
                    color="blue-500"
                    features={['Interactive Floor Plans', 'Vendor Portal', 'Lead Generation']}
                    link="/product/enterprise"
                    delay={0.2}
                 />

                 {/* 4. NIGHTLIFE (Violet) */}
                 <SolutionCard 
                    title="Parties & Nightlife"
                    desc="Instant ticket activation and guest list management for clubs and pop-ups."
                    icon={PartyPopper}
                    image="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1740&auto=format&fit=crop"
                    color="violet-500"
                    features={['Guest Lists', 'Fast Entry Scanning', 'Promoter Links']}
                    link="/product/ticketing"
                    delay={0.3}
                 />

                 {/* 5. COMMUNITY (Amber - New Accent) */}
                 <SolutionCard 
                    title="Community & Campus"
                    desc="Affordable tools for universities and NGOs. Organize volunteers and track attendance."
                    icon={Heart}
                    image="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1740&auto=format&fit=crop"
                    color="amber-500"
                    features={['Volunteer Management', 'Budget Friendly', 'Simple Setup']}
                    link="/product/ticketing"
                    delay={0.4}
                 />

                 {/* 6. CORPORATE (Zinc/White) */}
                 <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 flex flex-col justify-center items-center p-8 text-center hover:border-white/30 transition-colors">
                     <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                         <Zap className="w-8 h-8 text-white" />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2">Something Else?</h3>
                     <p className="text-zinc-400 text-sm mb-6 max-w-xs">
                         Our platform is flexible enough to handle custom requirements for unique events.
                     </p>
                     <button onClick={() => window.location.href = 'https://tickets.yadi.app'} className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors">
                         Let's Talk
                     </button>
                 </div>

             </div>
         </div>
      </section>

      {/* 4. UNIFIED PLATFORM */}
      <section className="py-32 border-t border-white/5 bg-zinc-950 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
                      One Platform.<br />
                      <span className="text-zinc-500">Infinite Possibilities.</span>
                  </h2>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                      Instead of building separate tools for different events, Yadi focuses on a flexible Core OS. 
                      This means you don’t outgrow the platform as your events evolve — and you don’t need to switch tools when your needs change.
                  </p>
                  
                  <div className="space-y-6">
                      <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-5 h-5 text-white" />
                          </div>
                          <div>
                              <h4 className="text-white font-bold">Unified Data</h4>
                              <p className="text-sm text-zinc-500">All your attendee data in one place, regardless of event type.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-5 h-5 text-white" />
                          </div>
                          <div>
                              <h4 className="text-white font-bold">Consistent Brand</h4>
                              <p className="text-sm text-zinc-500">Your brand stays front and center across every touchpoint.</p>
                          </div>
                      </div>
                  </div>
              </div>
              
              {/* Visual: The Core Engine */}
              <div className="relative">
                  <CoreEngineVisual />
              </div>
          </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-32 relative text-center overflow-hidden bg-black border-t border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/5 rounded-full blur-[120px]" />
          <div className="max-w-3xl mx-auto px-6 relative z-10">
              <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-10 tracking-tighter">
                  Whatever You’re Planning, <br />Start with Yadi.
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button 
                      onClick={() => window.location.href = 'https://tickets.yadi.app'}
                      className="px-12 py-5 bg-white text-black text-lg font-bold rounded-lg hover:scale-105 transition-transform"
                  >
                      Get Started
                  </button>
                  <button 
                      onClick={() => window.location.href = 'https://tickets.yadi.app'}
                      className="px-12 py-5 bg-zinc-900 border border-white/10 text-white text-lg font-bold rounded-lg hover:bg-zinc-800 transition-colors"
                  >
                      Explore Events
                  </button>
              </div>
          </div>
      </section>

    </WebsiteLayout>
  );
};

export default SolutionsPage;