import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Smartphone, 
  Wallet, 
  QrCode, 
  Users, 
  BarChart3,
  Search,
  WifiOff,
  ShieldCheck,
  Ticket,
  ChevronRight,
  TrendingUp,
  MapPin
} from 'lucide-react';
import WebsiteLayout from '../../../layouts/WebsiteLayout';

// --- VISUALS (CSS 3D & ANIMATION) ---

// 1. BEFORE VISUAL: "The Sales Rush" (3D Ticket Stack)
const SalesRushVisual = () => (
    <div className="relative w-full max-w-sm mx-auto perspective-1000 group">
        <div className="absolute inset-0 bg-pink-500/20 blur-[80px] -z-10" />
        
        {/* Container rotating slightly */}
        <div className="relative transform rotate-y-[-12deg] rotate-x-[10deg] transition-transform duration-700 group-hover:rotate-0">
            
            {/* Card 1: Sold Out */}
            <div className="absolute top-0 w-full transform -translate-y-24 translate-z-[-50px] opacity-60 scale-90">
                <div className="bg-zinc-900 border border-white/10 p-4 rounded-xl flex justify-between items-center">
                    <span className="text-zinc-500 font-mono text-xs">EARLY BIRD</span>
                    <span className="bg-zinc-800 text-zinc-500 text-xs px-2 py-1 rounded">SOLD OUT</span>
                </div>
            </div>

            {/* Card 2: Active Selling */}
            <div className="relative bg-zinc-950 border border-pink-500/30 p-6 rounded-2xl shadow-2xl z-20">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                        </span>
                        <span className="text-pink-500 font-bold text-xs tracking-wider">SELLING FAST</span>
                    </div>
                    <span className="text-white font-mono text-sm">248/500</span>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-2">Regular Phase 1</h4>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden mb-4">
                    <div className="bg-gradient-to-r from-pink-600 to-pink-400 h-full w-[65%] animate-pulse" />
                </div>
                <div className="flex justify-between text-xs text-zinc-400">
                    <span>KES 1,500</span>
                    <span>Ends in 2h 14m</span>
                </div>
            </div>

            {/* Card 3: Next Tier */}
            <div className="absolute top-full w-full transform -translate-y-4 translate-z-[-20px] scale-95 z-10">
                 <div className="bg-zinc-900 border border-white/5 p-4 rounded-b-2xl flex justify-between items-center opacity-50">
                    <span className="text-zinc-500 font-mono text-xs">VIP ACCESS</span>
                    <span className="text-zinc-600 text-xs">LOCKED</span>
                </div>
            </div>
            
            {/* Floating Notifications */}
            <div className="absolute -right-12 top-10 bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center gap-3 animate-float shadow-xl">
                 <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                     <TrendingUp className="w-4 h-4 text-green-500" />
                 </div>
                 <div>
                     <p className="text-white text-xs font-bold">+12 Sales</p>
                     <p className="text-zinc-500 text-[10px]">Just now</p>
                 </div>
            </div>
        </div>
    </div>
);

// 2. DURING VISUAL: The "Scanner App" (Preserved)
const ScannerMockup = () => (
    <div className="relative w-[280px] mx-auto transform hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-purple-500/20 blur-[60px]" />
        <div className="relative bg-black border-4 border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden h-[550px]">
            {/* Camera View */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')] bg-cover opacity-40" />
            
            {/* Scanning Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-48 h-48 border-2 border-white/30 rounded-3xl relative">
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-purple-500 rounded-tl-xl" />
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-purple-500 rounded-tr-xl" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-purple-500 rounded-bl-xl" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-purple-500 rounded-br-xl" />
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,1)] animate-scan" />
                </div>
                <div className="mt-8 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-white text-xs font-bold">Ready to Scan</span>
                </div>
            </div>

            {/* Bottom Sheet */}
            <div className="absolute bottom-0 inset-x-0 bg-zinc-900 p-6 rounded-t-3xl border-t border-white/10">
                 <div className="flex justify-between items-center mb-4">
                     <span className="text-zinc-400 text-xs uppercase">Recent Scans</span>
                     <span className="text-white text-xs font-bold">1,204 / 1,500</span>
                 </div>
                 <div className="space-y-3">
                     {[1,2].map(i => (
                         <div key={i} className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><CheckCircle2 className="w-4 h-4" /></div>
                             <div>
                                 <p className="text-white text-sm font-bold">Gate {i}</p>
                                 <p className="text-zinc-500 text-xs">Just now</p>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>
        </div>
    </div>
);

// 3. AFTER VISUAL: "Holographic Audience Grid"
const AudienceInsightsVisual = () => (
    <div className="relative w-full max-w-sm mx-auto">
        <div className="absolute inset-0 bg-cyan-500/10 blur-[60px]" />
        
        {/* Main Card */}
        <div className="bg-zinc-950/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
             {/* Background Grid */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
             <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />

             {/* Header */}
             <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                     <Users className="w-5 h-5 text-cyan-400" />
                 </div>
                 <div>
                     <h4 className="text-white font-bold">Audience Map</h4>
                     <p className="text-cyan-500 text-xs">Data Verified</p>
                 </div>
             </div>

             {/* Nodes Visualization */}
             <div className="relative h-32 mb-6">
                 {/* Center Node */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-cyan-500 rounded-full blur-[20px] opacity-20" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" />
                 
                 {/* Connecting Lines & Nodes */}
                 {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                     <div key={i} className="absolute top-1/2 left-1/2 w-24 h-px bg-gradient-to-r from-cyan-500/50 to-transparent origin-left" style={{ transform: `rotate(${deg}deg)` }}>
                         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-700 rounded-full border border-cyan-500/50" />
                     </div>
                 ))}
             </div>

             {/* Stats Row */}
             <div className="grid grid-cols-2 gap-4">
                 <div className="bg-black/40 p-3 rounded-lg border border-white/5">
                     <p className="text-zinc-500 text-[10px] uppercase">Retention</p>
                     <p className="text-white font-mono font-bold">84%</p>
                 </div>
                 <div className="bg-black/40 p-3 rounded-lg border border-white/5">
                     <p className="text-zinc-500 text-[10px] uppercase">New Fans</p>
                     <p className="text-white font-mono font-bold text-green-400">+1,204</p>
                 </div>
             </div>
        </div>

        {/* Floating Card Behind */}
        <div className="absolute -z-10 top-4 -right-4 w-full h-full bg-zinc-900/50 border border-white/5 rounded-2xl transform rotate-6 scale-95" />
    </div>
);

// --- MAIN PAGE ---

const TicketingPage: React.FC = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <WebsiteLayout>
      
      {/* 1. LEFT-ALIGNED HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black md:pt-32 pt-20">
        {/* RIGHT-ALIGNED BACKGROUND IMAGE (Huge, Blends In) */}
        <div className="absolute inset-0 z-0">
             {/* The Image (Right Aligned) */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1074&auto=format&fit=crop')] bg-cover bg-[center_right_-100px] opacity-60" />
             
             {/* The Gradient Blend (Heavy fade from left to right) */}
             <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6  relative z-10 w-full grid lg:grid-cols-2">
            <motion.div 
                style={{ y: yHero }}
                className="space-y-8"
            >
                 {/* Breadcrumb (Left Aligned) */}
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-zinc-500"
                 >
                      <span onClick={() => window.location.href='/website'} className="hover:text-white cursor-pointer transition-colors">Home</span>
                                         <ChevronRight className="w-3 h-3" />
                     <span className="hover:text-white cursor-pointer transition-colors">Products</span>
                     <ChevronRight className="w-3 h-3" />
                     <span className="text-white">Ticketing</span>
                 </motion.div>
                 
                 {/* Headline (Left Aligned, Big) */}
                 <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="text-5xl md:text-8xl font-heading font-bold text-white leading-[0.9] tracking-tighter"
                 >
                    Sell Tickets.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">
                        Own the Crowd.
                    </span>
                 </motion.h1>

                 {/* Subheadline (Left Aligned) */}
                 <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-zinc-400 max-w-lg leading-relaxed"
                 >
                    The operating system for high-energy events. <br className="hidden md:block"/>
                    From the first drop to the last scan.
                 </motion.p>

                 {/* CTAs (Left Aligned) */}
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-4 pt-8"
                 >
                      <button 
                          onClick={() => window.location.href = 'https://tickets.yadi.app'}
                          className="md:px-10 px-5 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                      >
                          Get Started <ArrowRight className="w-5 h-5" />
                      </button>
                      <button 
                          onClick={() => window.location.href = 'https://tickets.yadi.app'}
                          className="md:px-10 px-5 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors backdrop-blur-md"
                      >
                          View Demo
                      </button>
                 </motion.div>
            </motion.div>
        </div>
      </section>

      {/* 2. ZIG-ZAG LIFECYCLE (The "Cool" Part) */}
      <section className="relative py-32 overflow-hidden bg-black">
          {/* Connecting Beam */}
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-pink-500/30 to-transparent hidden lg:block" />

          <div className="max-w-7xl mx-auto px-6 space-y-40">
              
              {/* PHASE 1: BEFORE (Left Text, Right Visual) */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8 lg:text-right order-2 lg:order-1">
                      <div className="inline-flex items-center gap-2 text-pink-500 font-bold uppercase tracking-widest text-sm lg:flex-row-reverse">
                          <Zap className="w-4 h-4" /> Before Event
                      </div>
                      <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                          The Launch
                      </h2>
                      <p className="text-xl text-zinc-400 leading-relaxed">
                          Build hype instantly. Create unlimited ticket tiers that unlock as others sell out. 
                          Watch sales hit your wallet in real-time.
                      </p>
                      <ul className="space-y-4 inline-block text-left">
                          <li className="flex items-center gap-3 text-zinc-300">
                               <CheckCircle2 className="w-5 h-5 text-pink-500" /> Tiered Ticketing
                          </li>
                          <li className="flex items-center gap-3 text-zinc-300">
                               <CheckCircle2 className="w-5 h-5 text-pink-500" /> Instant M-Pesa Payments
                          </li>
                      </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                      <SalesRushVisual />
                  </div>
              </div>

              {/* PHASE 2: DURING (Right Text, Left Visual) */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                   <div className="order-1 flex justify-center">
                       <ScannerMockup />
                   </div>
                   <div className="space-y-8 order-2">
                      <div className="inline-flex items-center gap-2 text-purple-500 font-bold uppercase tracking-widest text-sm">
                          <QrCode className="w-4 h-4" /> During Event
                      </div>
                      <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                          The Experience
                      </h2>
                      <p className="text-xl text-zinc-400 leading-relaxed">
                          Kill the queue. Our scanner app validates tickets in milliseconds, even without internet.
                          Keep the vibes high and the line moving.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                          <div className="p-5 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                              <WifiOff className="w-6 h-6 text-purple-500 mb-2" />
                              <h4 className="font-bold text-white text-sm">Offline Ready</h4>
                              <p className="text-xs text-zinc-500 mt-1">Works everywhere</p>
                          </div>
                          <div className="p-5 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                              <ShieldCheck className="w-6 h-6 text-purple-500 mb-2" />
                              <h4 className="font-bold text-white text-sm">Anti-Fraud</h4>
                              <p className="text-xs text-zinc-500 mt-1">Secure codes</p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* PHASE 3: AFTER (Left Text, Right Visual) */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8 lg:text-right order-2 lg:order-1">
                      <div className="inline-flex items-center gap-2 text-cyan-500 font-bold uppercase tracking-widest text-sm lg:flex-row-reverse">
                          <BarChart3 className="w-4 h-4" /> After Event
                      </div>
                      <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                          The Growth
                      </h2>
                      <p className="text-xl text-zinc-400 leading-relaxed">
                          Don't just guess. Know exactly who came. Export your data, 
                          analyze peak sales times, and build a recurring audience.
                      </p>
                       <ul className="space-y-4 inline-block text-left">
                          <li className="flex items-center gap-3 text-zinc-300">
                               <CheckCircle2 className="w-5 h-5 text-cyan-500" /> Full Attendee Export
                          </li>
                          <li className="flex items-center gap-3 text-zinc-300">
                               <CheckCircle2 className="w-5 h-5 text-cyan-500" /> Revenue Analytics
                          </li>
                      </ul>
                  </div>
                  <div className="order-1 lg:order-2 flex justify-center">
                      <AudienceInsightsVisual />
                  </div>
              </div>

          </div>
      </section>

      {/* 3. EXPERIENCE GRID */}
      <section className="py-32 bg-zinc-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-left mb-16 max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Built for the Fans</h2>
                  <p className="text-zinc-400 text-lg">We designed the attendee experience to be as frictionless as possible. Because a happy fan is a returning fan.</p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                  {[
                      { icon: Smartphone, title: "One-Tap Login", desc: "No passwords. Just Google and go." },
                      { icon: Wallet, title: "Ticket Wallet", desc: "All tickets in one secure place." },
                      { icon: Users, title: "Easy Transfers", desc: "Send tickets to friends instantly." },
                      { icon: MapPin, title: "Venue Maps", desc: "Direct integration with Google Maps." }
                  ].map((item, i) => (
                      <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                          <item.icon className="w-10 h-10 text-zinc-500 group-hover:text-white transition-colors mb-6" />
                          <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                          <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-32 relative overflow-hidden bg-black">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]" />
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
              <h2 className="text-5xl md:text-8xl font-heading font-bold text-white mb-10 tracking-tighter">
                  Ready to Go Live?
              </h2>
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                  Launch your next event on the platform that powers the culture.
              </p>
              <button 
                  onClick={() => window.location.href = 'https://tickets.yadi.app'}
                  className="px-12 py-5 bg-white text-black text-xl font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.4)]"
              >
                  Get Started on Yadi
              </button>
          </div>
      </section>

    </WebsiteLayout>
  );
};

export default TicketingPage;