/* src/website/pages/HomePage.tsx */
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Globe, 
  Users,
  Layers,
  Sparkles,
  Smartphone,
  BarChart3,
  QrCode,
  CreditCard,
  Calendar,
  ShieldCheck,
  Search
} from 'lucide-react';
import WebsiteLayout from '../../layouts/WebsiteLayout';


// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const floatAnimation = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 1, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const floatAnimationDelayed = {
  animate: {
    y: [0, 15, 0],
    rotate: [0, -1, 0],
    transition: {
      duration: 7,
      delay: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// --- REUSABLE UI COMPONENTS ---

const GlassCard = ({ icon: Icon, title, subtitle, value, trend, colorClass, className }: any) => (
    <div className={`backdrop-blur-xl bg-black/60 border border-white/10 p-5 rounded-2xl shadow-2xl ${className}`}>
        <div className="flex justify-between items-start mb-4">
            <div className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center`}>
                <Icon className="w-5 h-5 text-white" />
            </div>
            {trend && (
                <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20">
                    {trend}
                </span>
            )}
        </div>
        <div>
            <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-1">{title}</p>
            <h4 className="text-white font-bold text-xl">{value || subtitle}</h4>
            {!value && <p className="text-zinc-500 text-xs mt-1">{subtitle}</p>}
        </div>
    </div>
);

// --- SECTIONS ---

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        
        {/* 1. IMMERSIVE BACKGROUND (Blended) */}
        <div className="absolute inset-0 z-0">
             {/* The Image */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
             
             {/* The "Void" Gradients - Crucial for blending */}
             <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent/20" />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT: TEXT CONTENT */}
            <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={staggerContainer}
                className="space-y-8 max-w-2xl"
            >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-primary shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                    <Sparkles className="w-3 h-3" />
                    <span className="tracking-wide">THE OPERATING SYSTEM FOR EVENTS</span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-heading font-bold leading-[0.95] tracking-tight text-white">
                    Built for the <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
                        Unforgettable.
                    </span>
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-lg">
                    Manage the chaos. Own the data. Deliver the magic.
                    From underground raves to global summits, Yadi powers the next generation of experiences.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                    <button 
                        onClick={() => window.location.href = 'https://tickets.yadi.app'}
                        className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                        Start Creating <ArrowRight className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => window.location.href = 'https://tickets.yadi.app'}
                        className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-md"
                    >
                        Explore Events
                    </button>
                </motion.div>
            </motion.div>

            {/* RIGHT: FLOATING "LIVE DATA" (No Phone Limit) */}
            <div className="relative h-[600px] hidden lg:block perspective-1000">
                {/* Decorative Blobs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
                
                {/* Floating Card 1: Revenue */}
                <motion.div style={{ y: y1 }} variants={floatAnimation} initial="animate" animate="animate" className="absolute top-10 right-10 z-20">
                     <GlassCard 
                        icon={CreditCard} 
                        title="Total Revenue" 
                        value="KES 4.2M" 
                        trend="+24%" 
                        colorClass="bg-primary"
                        className="w-64 rotate-3"
                     />
                </motion.div>

                {/* Floating Card 2: Scans */}
                <motion.div style={{ y: y2 }} variants={floatAnimationDelayed} initial="animate" animate="animate" className="absolute bottom-20 left-10 z-30">
                     <GlassCard 
                        icon={QrCode} 
                        title="Live Check-ins" 
                        value="1,240 / 1,500" 
                        trend="82%" 
                        colorClass="bg-green-500"
                        className="w-72 -rotate-3"
                     />
                </motion.div>

                 {/* Floating Card 3: Abstract Ticket */}
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                 >
                    <div className="w-[320px] bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-700">
                        <div className="h-40 bg-[url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                        <div className="p-6 space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-bold bg-white text-black px-2 py-1 rounded">VIP ACCESS</span>
                                <div className="flex gap-1">
                                    {[1,2,3,4].map(i => <div key={i} className="w-1 h-1 bg-zinc-600 rounded-full" />)}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Neon Nights Festival</h3>
                            <div className="flex items-center gap-2 text-zinc-400 text-sm">
                                <Calendar className="w-4 h-4" />
                                <span>Dec 24, 2026 • 8:00 PM</span>
                            </div>
                            <div className="h-px bg-white/10 w-full my-4 border-t border-dashed border-zinc-700" />
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-zinc-500 text-xs">ADMIT ONE</p>
                                    <p className="text-white font-mono text-lg">YDI-8829</p>
                                </div>
                                <QrCode className="w-10 h-10 text-white" />
                            </div>
                        </div>
                    </div>
                 </motion.div>
            </div>
        </div>
    </section>
  );
};

const TrustSection = () => (
  <section className="py-10 border-y border-white/5 bg-black/40 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
      <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest whitespace-nowrap">
        Powering Next-Gen Creators
      </p>
      <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
         {/* Using Text for logos to keep it clean, replace with SVGs later */}
         {['SAFARICOM', 'NAIROBI DESIGN', 'BOILER ROOM', 'AFRICA TECH'].map((brand, i) => (
             <span key={i} className="text-lg font-heading font-bold text-white tracking-widest">{brand}</span>
         ))}
      </div>
    </div>
  </section>
);

const ValuePropSection = () => (
    <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
                One Platform. <br/>
                <span className="text-zinc-500">Every kind of chaos.</span>
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
                We've built distinct workflows for distinct needs. 
                Whether you're selling tickets to a rave or managing badges for a trade show, 
                Yadi adapts to your scale.
            </p>
        </div>
    </section>
);

const PillarsSection = () => (
    <section className="pb-32 relative px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
                
                {/* 1. NIGHTLIFE CARD */}
                <div className="group relative h-[600px] rounded-[2.5rem] overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black opacity-90" />
                    
                    <div className="absolute inset-0 p-12 flex flex-col justify-end">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/10">
                            <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-4xl font-heading font-bold mb-4 text-white">Ticketing & Nightlife</h3>
                        <p className="text-zinc-300 mb-8 text-lg leading-relaxed max-w-sm">
                            High-speed checkout. M-Pesa integration. QR entry. Built for speed, hype, and high volume.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {['Flash Sales & Tiers', 'Promoter Links', 'Cashless Bar System'].map(item => (
                                <li key={item} className="flex items-center text-zinc-300 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-primary mr-3" /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-5 bg-primary hover:bg-primary-hover text-white font-bold rounded-2xl transition-all shadow-neon">
                            Start Selling Tickets
                        </button>
                    </div>
                </div>

                {/* 2. ENTERPRISE CARD */}
                <div className="group relative h-[600px] rounded-[2.5rem] overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/40 to-zinc-950 opacity-90" />
                    
                    <div className="absolute inset-0 p-12 flex flex-col justify-end">
                         <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 backdrop-blur-md flex items-center justify-center mb-8 border border-white/10">
                            <Globe className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h3 className="text-4xl font-heading font-bold mb-4 text-white">Summits & Enterprise</h3>
                        <p className="text-zinc-300 mb-8 text-lg leading-relaxed max-w-sm">
                            Structure and control. Manage speakers, complex agendas, exhibitor floor plans, and badges.
                        </p>
                         <ul className="space-y-4 mb-8">
                            {['Agenda Builder', 'Vendor/Booth Maps', 'Badge Printing'].map(item => (
                                <li key={item} className="flex items-center text-zinc-300 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-5 bg-white/10 hover:bg-emerald-600 text-white font-bold rounded-2xl backdrop-blur-md border border-white/20 transition-all">
                            Create Enterprise Event
                        </button>
                    </div>
                </div>
        </div>
    </section>
);

const LifecycleSection = () => (
    <section className="py-32 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
                 <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Built for the Full Lifecycle</h2>
                 <p className="text-zinc-400">We don't just sell the ticket. We power the experience.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
                {/* 1. BEFORE */}
                <div className="space-y-6">
                    <div className="relative h-64 rounded-3xl bg-zinc-800 border border-white/5 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Layers className="w-16 h-16 text-zinc-700 group-hover:text-white transition-colors duration-500" />
                        </div>
                        {/* UI Overlay Mockup */}
                        <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                            <div className="flex justify-between items-center text-xs text-zinc-400 mb-2">
                                <span>Ticket Tiers</span>
                                <span className="text-green-400">Active</span>
                            </div>
                            <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                                <div className="h-full w-3/4 bg-blue-500" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">1. The Setup</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Launch in minutes. Set up complex ticket tiers, approve vendor applications, and build your event page without code.
                        </p>
                    </div>
                </div>

                {/* 2. DURING */}
                <div className="space-y-6">
                    <div className="relative h-64 rounded-3xl bg-zinc-800 border border-white/5 overflow-hidden group">
                         <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                         <div className="absolute inset-0 flex items-center justify-center">
                            <QrCode className="w-16 h-16 text-zinc-700 group-hover:text-white transition-colors duration-500" />
                        </div>
                         {/* UI Overlay Mockup */}
                        <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Access Granted</p>
                                    <p className="text-zinc-500 text-xs">Gate B • Just now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">2. The Experience</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Keep the lines moving. Our offline-first scanner app works in the basement or the bush. Real-time stats on your phone.
                        </p>
                    </div>
                </div>

                {/* 3. AFTER */}
                <div className="space-y-6">
                    <div className="relative h-64 rounded-3xl bg-zinc-800 border border-white/5 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                         <div className="absolute inset-0 flex items-center justify-center">
                            <BarChart3 className="w-16 h-16 text-zinc-700 group-hover:text-white transition-colors duration-500" />
                        </div>
                         {/* UI Overlay Mockup */}
                        <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                             <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-zinc-500 text-xs uppercase">Payout Ready</p>
                                    <p className="text-white font-mono text-lg font-bold">KES 840,200</p>
                                </div>
                                <button className="px-3 py-1 bg-white text-black text-xs font-bold rounded">Withdraw</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">3. The Growth</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Own your data. Export attendee lists, analyze revenue per channel, and retarget your fans for the next one.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const FeaturesBento = () => (
    <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-heading font-bold mb-16 text-center">Everything you need to win.</h2>
            
            <div className="grid md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
                
                {/* 1. LARGE FEATURE: ANALYTICS (The Visual You Liked) */}
                <div className="md:col-span-2 md:row-span-2 rounded-[2rem] bg-zinc-900 border border-white/10 relative overflow-hidden group">
                     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                     
                     <div className="absolute bottom-0 left-0 p-10 w-full">
                        <div className="mb-6 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-neon">
                            <BarChart3 className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Real-Time Intelligence</h3>
                        <p className="text-zinc-300 max-w-md text-lg leading-relaxed mb-6">
                            Stop guessing. Watch ticket sales happen live. Track revenue by channel, monitor gate capacity, and get instant payouts via M-Pesa.
                        </p>
                        
                        {/* Floating Data Card */}
                        <div className="absolute top-10 right-10 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl hidden md:block transform group-hover:-translate-y-2 transition-transform duration-500">
                             <div className="flex items-center gap-4 mb-4">
                                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                 <span className="text-sm font-bold text-white">Live Sales</span>
                             </div>
                             <div className="space-y-3">
                                 <div className="flex justify-between gap-12 text-sm">
                                     <span className="text-zinc-400">VIP Early Bird</span>
                                     <span className="text-white font-mono">24/100</span>
                                 </div>
                                 <div className="w-full h-1 bg-zinc-700 rounded-full overflow-hidden">
                                     <div className="w-[24%] h-full bg-primary" />
                                 </div>
                                 <div className="flex justify-between gap-12 text-sm pt-2">
                                     <span className="text-zinc-400">Regular Phase 1</span>
                                     <span className="text-white font-mono">892/1000</span>
                                 </div>
                                  <div className="w-full h-1 bg-zinc-700 rounded-full overflow-hidden">
                                     <div className="w-[89%] h-full bg-green-500" />
                                 </div>
                             </div>
                        </div>
                     </div>
                </div>

                {/* 2. SMALL FEATURE: DISCOVERY */}
                <div className="rounded-[2rem] bg-zinc-900 border border-white/10 p-8 flex flex-col justify-between hover:bg-zinc-800 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                        <Search className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-2">SEO & Discovery</h4>
                        <p className="text-zinc-400 text-sm">
                            Your events are automatically indexed and optimized for search. Get found by new fans.
                        </p>
                    </div>
                </div>

                {/* 3. SMALL FEATURE: TEAMS */}
                <div className="rounded-[2rem] bg-zinc-900 border border-white/10 p-8 flex flex-col justify-between hover:bg-zinc-800 transition-colors group">
                     <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-2">Team Access</h4>
                        <p className="text-zinc-400 text-sm">
                            Invite your team. Assign roles. Gatekeepers can scan, Finance can view reports, but only you control the money.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const FinalCTA = () => (
    <section className="py-40 relative text-center overflow-hidden">
        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-6xl md:text-8xl font-heading font-bold mb-10 tracking-tight">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500">Go Live?</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                Join thousands of attendees and organizers on the platform that is redefining events in Africa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                    onClick={() => window.location.href = 'https://tickets.yadi.app'}
                    className="px-12 py-5 bg-white text-black text-xl font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.4)] flex items-center gap-3"
                >
                    Get Started Now <ArrowRight className="w-6 h-6" />
                </button>
                <span className="text-zinc-500 text-sm">No credit card required for free events.</span>
            </div>
        </div>
    </section>
);

// --- MAIN PAGE COMPONENT ---

const WebsiteHomePage: React.FC = () => {
  return (
    <WebsiteLayout>
      <HeroSection />
      <TrustSection />
      <ValuePropSection />
      <PillarsSection />
      <LifecycleSection />
      <FeaturesBento />
      <FinalCTA />
    </WebsiteLayout>
  );
};

export default WebsiteHomePage;