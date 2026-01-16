import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Layers, 
  Map, 
  Users, 
  BarChart3,
  Mic2,
  CalendarDays,
  Store,
  ChevronRight,
  Bot,
  ShieldAlert,
  IdCard,
  Printer,
  FileText,
  Lock,
  Megaphone,
  Briefcase,
  LayoutTemplate
} from 'lucide-react';
import WebsiteLayout from '../../../layouts/WebsiteLayout';

// --- VISUALS (CSS 3D & ANIMATION) ---

// 1. PLAN VISUAL: "The Blueprint Engine"
const BlueprintVisual = () => (
    <div className="relative w-full max-w-sm mx-auto perspective-1000 group">
        <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] -z-10" />
        
        {/* Container */}
        <div className="relative transform rotate-y-[12deg] rotate-x-[10deg] transition-transform duration-700 group-hover:rotate-0">
            
            {/* Card 1: Floor Plan Base */}
            <div className="relative bg-zinc-950 border border-emerald-500/40 p-1 rounded-xl shadow-2xl z-10">
                <div className="bg-zinc-900 rounded-lg p-4 h-64 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                    <div className="absolute inset-0 p-6 grid grid-cols-3 gap-4 content-center">
                        <div className="col-span-3 h-10 border-2 border-dashed border-zinc-700 rounded flex items-center justify-center text-[10px] text-zinc-600 uppercase tracking-widest">Main Stage</div>
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className={`h-14 border ${i===2 ? 'border-emerald-500 bg-emerald-500/20' : 'border-zinc-700 bg-zinc-800'} rounded flex flex-col items-center justify-center`}>
                                <span className="text-[8px] font-mono text-zinc-500">B-{10+i}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Card 2: Accreditation (Floating) */}
            <div className="absolute -bottom-6 -right-6 w-48 bg-white text-black p-4 rounded-xl shadow-2xl transform translate-z-[60px] rotate-[-5deg] border border-zinc-200 z-30">
                <div className="flex justify-between items-start mb-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-300 flex items-center justify-center">
                         <IdCard className="w-4 h-4 text-zinc-500" />
                    </div>
                    <div className="w-8 h-8 bg-black p-0.5">
                        <div className="w-full h-full border border-white flex flex-wrap content-center justify-center gap-0.5">
                             {[...Array(9)].map((_,i)=><div key={i} className="w-1.5 h-1.5 bg-white" />)}
                        </div>
                    </div>
                </div>
                <div className="space-y-0.5">
                    <div className="inline-block bg-emerald-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider mb-1">Speaker</div>
                    <div className="font-bold text-lg leading-none">Dr. Sarah K.</div>
                    <div className="text-[10px] text-zinc-600 font-medium">Fintech Summit</div>
                </div>
            </div>
        </div>
    </div>
);

// 2. OPERATE VISUAL: "Mission Control"
const MissionControlVisual = () => (
    <div className="relative w-full max-w-sm mx-auto perspective-1000">
        <div className="absolute inset-0 bg-teal-500/10 blur-[80px] -z-10" />
        
        <div className="bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="p-4 bg-zinc-900 border-b border-white/5 flex justify-between items-center">
                <span className="text-xs font-bold text-teal-500 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" /> LIVE OPS
                </span>
                <span className="font-mono text-xs text-zinc-500">14:02:45</span>
            </div>
            <div className="p-6 grid gap-4">
                <div className="flex gap-4">
                    <div className="flex-1 bg-zinc-900 p-3 rounded-lg border border-white/5">
                        <p className="text-[10px] text-zinc-500 uppercase">Check-in</p>
                        <p className="text-xl font-bold text-white">2,492</p>
                    </div>
                    <div className="flex-1 bg-zinc-900 p-3 rounded-lg border border-white/5">
                        <p className="text-[10px] text-zinc-500 uppercase">Capacity</p>
                        <p className="text-xl font-bold text-teal-500">84%</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-2">Real-Time Logs</p>
                    {[1,2,3].map(i => (
                        <div key={i} className="flex justify-between items-center text-xs border-b border-white/5 pb-2 last:border-0">
                            <span className="text-white">Gate {i} (Main)</span>
                            <span className="text-teal-500 font-mono">AUTHORIZED</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// 3. ANALYZE VISUAL: "Data Command"
const AnalyticsVisual = () => (
    <div className="relative w-full max-w-sm mx-auto">
        <div className="absolute inset-0 bg-blue-500/10 blur-[60px]" />
        
        <div className="bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
             <div className="p-6 space-y-6">
                 <div className="flex justify-between items-end">
                     <div>
                         <p className="text-zinc-500 text-xs uppercase tracking-wider">Vendor ROI</p>
                         <h3 className="text-4xl font-mono font-bold text-white">4.2x</h3>
                     </div>
                     <BarChart3 className="w-8 h-8 text-emerald-500" />
                 </div>
                 <div className="h-24 flex items-end gap-1">
                     {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85].map((h, i) => (
                         <div key={i} className="flex-1 bg-zinc-800 rounded-t-sm relative group overflow-hidden">
                             <div 
                                style={{ height: `${h}%` }} 
                                className={`absolute bottom-0 w-full ${i > 6 ? 'bg-emerald-500' : 'bg-zinc-600'} transition-all duration-500 group-hover:bg-white`} 
                             />
                         </div>
                     ))}
                 </div>
             </div>
        </div>
    </div>
);

// --- MAIN PAGE ---

const EnterprisePage: React.FC = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <WebsiteLayout>
      
      {/* 1. LEFT-ALIGNED HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black md:pt-32 pt-20">
        {/* RIGHT-ALIGNED BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
             {/* Use specific conference image */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-[center_right] opacity-70 " />
             
             {/* Gradient Blend (Heavy Fade Left) */}
             <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
             <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay" />
        </div>

        <div className="max-w-7xl mx-auto px-6  relative z-10 w-full grid lg:grid-cols-2">
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
                      <span onClick={() => window.location.href='/website'} className="hover:text-white cursor-pointer transition-colors">Home</span>
                                         <ChevronRight className="w-3 h-3" />
                     <span className="hover:text-white cursor-pointer transition-colors">Products</span>
                     <ChevronRight className="w-3 h-3" />
                     <span className="text-white">Enterprise</span>
                 </motion.div>
                 
                 {/* Headline */}
                 <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="text-5xl md:text-8xl font-heading font-bold text-white leading-[0.95] tracking-tight"
                 >
                    Enterprise <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">
                        Infrastructure.
                    </span>
                 </motion.h1>

                 {/* Subheadline */}
                 <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-zinc-400 max-w-lg leading-relaxed"
                 >
                    Plan, operate, and analyze large-scale events with a unified platform built for complexity, collaboration, and real-world execution.
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
                          className="px-10 py-5 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-colors flex items-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                      >
                          Run an Enterprise Event <ArrowRight className="w-5 h-5" />
                      </button>
                      <button 
                          onClick={() => window.location.href = 'https://tickets.yadi.app'}
                          className="px-10 py-5 bg-zinc-900 border border-white/10 text-white font-bold rounded-lg hover:bg-zinc-800 transition-colors"
                      >
                          Talk to Sales
                      </button>
                 </motion.div>
            </motion.div>
        </div>
      </section>

      {/* 2. PHASE 1: PLAN (Expanded Feature Set) */}
      <section className="relative py-32 bg-black border-t border-white/5">
          <div className="absolute top-0 left-1/2 w-px h-full bg-white/5 hidden lg:block" />

          <div className="max-w-7xl mx-auto px-6 space-y-24">
              
              {/* Introduction & Narrative */}
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-10 lg:text-right order-2 lg:order-1">
                      <div className="inline-flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-widest text-sm lg:flex-row-reverse">
                          <Layers className="w-4 h-4" /> Phase 1: Plan
                      </div>
                      <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                          Structure <span className="text-zinc-500">Everything.</span>
                      </h2>
                      <p className="text-lg text-zinc-400 leading-relaxed">
                          Enterprise events aren't just bigger; they are more complex. 
                          Structure your floor plans, manage speaker bios, approve vendors, and print badges—all from one command center.
                      </p>
                  </div>
                  <div className="order-1 lg:order-2">
                      <BlueprintVisual />
                  </div>
              </div>

              {/* THE FEATURE GRID (ALL 10+ FEATURES) */}
              <div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 lg:p-12">
                  <div className="mb-10">
                      <h3 className="text-2xl font-bold text-white mb-2">The Planning Suite</h3>
                      <p className="text-zinc-500">Everything you need before the doors open.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      
                      {/* Feature 1: Floor Plans */}
                      <div className="col-span-1 md:col-span-2 bg-zinc-950 border border-white/5 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
                          <LayoutTemplate className="w-8 h-8 text-emerald-500 mb-4" />
                          <h4 className="text-lg font-bold text-white mb-2">Interactive Floor Plans</h4>
                          <p className="text-sm text-zinc-400 leading-relaxed">
                              Drag-and-drop builder for expo halls. Sell booths directly from the map. Real-time inventory management for exhibitors.
                          </p>
                      </div>

                      {/* Feature 2: Accreditation */}
                      <div className="col-span-1 md:col-span-2 bg-zinc-950 border border-white/5 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
                          <IdCard className="w-8 h-8 text-emerald-500 mb-4" />
                          <h4 className="text-lg font-bold text-white mb-2">Accreditation & Badging</h4>
                          <p className="text-sm text-zinc-400 leading-relaxed">
                              Design custom badges for Speakers, VIPs, and Staff. Generate secure QRs and print instantly on-site.
                          </p>
                      </div>

                      {/* Remaining Features */}
                      {[
                          { icon: Mic2, title: "Speaker Management", desc: "Call-for-papers portals, bios, and headshot approvals." },
                          { icon: CalendarDays, title: "Multi-Track Agenda", desc: "Build complex schedules across multiple stages and days." },
                          { icon: Store, title: "Vendor Portal", desc: "Self-service portal for exhibitors to upload docs and staff." },
                          { icon: Users, title: "Volunteer Force", desc: "Shift scheduling and role assignment for ground teams." },
                          { icon: Lock, title: "Role-Based Access", desc: "Granular permissions. Finance sees money, Security sees scans." },
                          { icon: FileText, title: "Asset Management", desc: "Central storage for slides, waivers, and contracts." },
                          { icon: Briefcase, title: "Sponsor Tiers", desc: "Manage deliverables and exposure levels for partners." },
                          { icon: Megaphone, title: "Comms Center", desc: "Blast updates to specific groups instantly." },
                      ].map((item, i) => (
                          <div key={i} className="bg-zinc-900 border border-white/5 p-5 rounded-xl hover:bg-zinc-800 transition-colors">
                              <item.icon className="w-6 h-6 text-zinc-500 mb-3 group-hover:text-white transition-colors" />
                              <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                              <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                          </div>
                      ))}
                  </div>
              </div>

          </div>
      </section>

      {/* 3. PHASE 2: OPERATE */}
      <section className="relative py-32 bg-zinc-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
               <div className="order-1 flex justify-center">
                   <MissionControlVisual />
               </div>
               <div className="space-y-8 order-2">
                  <div className="inline-flex items-center gap-2 text-teal-500 font-bold uppercase tracking-widest text-sm">
                      <Globe className="w-4 h-4" /> Phase 2: Operate
                  </div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                      Mission <span className="text-zinc-500">Control.</span>
                  </h2>
                  <p className="text-lg text-zinc-400 leading-relaxed">
                      Run your event with military precision. Monitor attendance flow, 
                      manage access zones, and keep your vendors happy.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                       <div className="bg-zinc-900 border border-white/5 p-5 rounded-xl">
                           <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
                               <ShieldAlert className="w-4 h-4 text-teal-500" /> Access Control
                           </h4>
                           <p className="text-xs text-zinc-500">Real-time validation for thousands of badges. Prevent unauthorized entry.</p>
                       </div>
                       <div className="bg-zinc-900 border border-white/5 p-5 rounded-xl">
                           <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
                               <Map className="w-4 h-4 text-teal-500" /> Live Floor
                           </h4>
                           <p className="text-xs text-zinc-500">Monitor heatmaps and booth traffic. Redirect crowds instantly.</p>
                       </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. PHASE 3: ANALYZE */}
      <section className="relative py-32 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 lg:text-right order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm lg:flex-row-reverse">
                      <BarChart3 className="w-4 h-4" /> Phase 3: Analyze
                  </div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                      Data-Driven <span className="text-zinc-500">ROI.</span>
                  </h2>
                  <p className="text-lg text-zinc-400 leading-relaxed">
                      Turn your event into a business asset. Prove value to sponsors with 
                      detailed engagement reports and vendor performance metrics.
                  </p>
                   <ul className="space-y-4 inline-block text-left">
                      <li className="flex items-center gap-3 text-zinc-300">
                           <CheckCircle2 className="w-5 h-5 text-blue-500" /> Session Popularity Tracking
                      </li>
                      <li className="flex items-center gap-3 text-zinc-300">
                           <CheckCircle2 className="w-5 h-5 text-blue-500" /> Sponsor & Vendor ROI Reports
                      </li>
                  </ul>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                  <AnalyticsVisual />
              </div>
          </div>
      </section>

      {/* 5. INTELLIGENCE (AI) */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
              <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-6">
                      <Bot className="w-4 h-4" /> Built-In Intelligence
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                      Intelligence That Works<br/>in the Background.
                  </h2>
                  <p className="text-zinc-400 mb-8">
                      Yadi intelligence enhances clarity and decision-making without adding complexity.
                  </p>
                  <div className="space-y-4">
                      {[
                          "AI-generated executive summaries for reports",
                          "Automatic tagging of audience sentiment",
                          "Intelligent schedule conflict detection"
                      ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              <span className="text-zinc-300">{item}</span>
                          </div>
                      ))}
                  </div>
              </div>
              <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px]" />
                   <div className="space-y-4 relative z-10">
                       <div className="flex gap-4">
                           <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center"><Bot className="w-4 h-4 text-white" /></div>
                           <div className="bg-black/50 p-4 rounded-r-xl rounded-bl-xl border border-white/5 text-sm text-zinc-300">
                               Summary: "Future Fintech" session. 94% capacity. Sentiment: Positive.
                           </div>
                       </div>
                   </div>
              </div>
          </div>
      </section>

      {/* 6. TARGET AUDIENCE & CTA */}
      <section className="py-32 relative text-center overflow-hidden bg-black border-t border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
          <div className="max-w-4xl mx-auto px-6 relative z-10">
              <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-10">Trusted Infrastructure For</p>
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                  {['Global Summits', 'Trade Shows', 'Tech Conferences', 'Academic Expos', 'Multi-Day Festivals'].map((tag, i) => (
                      <span key={i} className="px-6 py-3 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 font-medium hover:border-emerald-500/50 hover:text-white transition-colors cursor-default">
                          {tag}
                      </span>
                  ))}
              </div>

              <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tighter">
                  Run Enterprise Events<br/>With Confidence.
              </h2>
              <p className="text-xl text-zinc-400 mb-12">
                  From planning to execution to insight, Yadi gives you full control at every stage.
              </p>
              <button 
                  onClick={() => window.location.href = 'https://tickets.yadi.app'}
                  className="px-10 py-5 bg-white text-black text-lg font-bold rounded-lg hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.3)]"
              >
                  Run an Enterprise Event
              </button>
          </div>
      </section>

    </WebsiteLayout>
  );
};

export default EnterprisePage;