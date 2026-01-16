import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Zap, Globe, Layers, Target, Heart, 
  ShieldCheck, Handshake, Eye, TrendingUp, Cpu,
  ChevronRight
} from 'lucide-react';
import WebsiteLayout from '../../layouts/WebsiteLayout';

// --- VISUAL COMPONENTS ---

const ValuesCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group"
    >
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors border border-white/5">
            <Icon className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
        </div>
        <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
        <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
);

const AboutPage = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <WebsiteLayout>
      
      {/* 1. HERO: LEFT ALIGNED & INFRASTRUCTURAL */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32">
        {/* Right-Aligned Background Image (Production/Rigging) */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-[center_right] opacity-40 saturate-0" />
             <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2">
            <motion.div 
                style={{ y: yHero }}
                className="space-y-10"
            >
                 <motion.div 
                                     initial={{ opacity: 0, x: -20 }}
                                     animate={{ opacity: 1, x: 0 }}
                                     className="flex items-center gap-2 text-sm font-medium text-zinc-500"
                                  >
                                      <span onClick={() => window.location.href='/website'} className="hover:text-white cursor-pointer transition-colors">Home</span>
                                                         <ChevronRight className="w-3 h-3" />
                                      <span className="hover:text-white cursor-pointer transition-colors">Company</span>
                                      <ChevronRight className="w-3 h-3" />
                                      <span className="text-white">About</span>
                                  </motion.div>
                 
                 <h1 className="text-5xl md:text-8xl font-heading font-bold text-white leading-[0.9] tracking-tighter md:w-[150vh]">
                    Building the <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">
                        Infrastructure
                    </span> <br/>
                    For Modern Events.
                 </h1>

                 <p className="text-lg md:text-2xl text-zinc-400 md:max-w-3xl max-w-lg  leading-relaxed border-l-2 border-white/10 pl-6">
                    Yadi is an event technology platform that powers ticketing, event operations, and on-ground execution for organizers, teams, and enterprises.
                 </p>

                 <div className="pt-4">
                     <p className="text-sm text-zinc-500 mb-6 uppercase tracking-widest font-bold">Trusted To Power</p>
                     <div className="flex flex-wrap gap-3">
                         {['Public Events', 'Large-Scale Conferences', 'Enterprise Gatherings'].map(tag => (
                             <span key={tag} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-zinc-300 text-sm">
                                 {tag}
                             </span>
                         ))}
                     </div>
                 </div>
            </motion.div>
        </div>
      </section>

      {/* 2. WHO WE ARE & PROBLEM (Editorial Layout) */}
      <section className="py-32 bg-zinc-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 space-y-32">
              
              {/* BLOCK A: WHO WE ARE */}
              <div className="grid lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-4">
                      <h2 className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4">01 — Who We Are</h2>
                      <h3 className="text-4xl font-heading font-bold text-white">Built for the people who make events happen.</h3>
                  </div>
                  <div className="lg:col-span-8 space-y-6 text-lg text-zinc-400 leading-relaxed">
                      <p>
                          We are a technology company focused on simplifying how events are planned, sold, managed, and experienced. 
                          Our platform brings together ticketing, payments, access control, and event operations into one connected system, 
                          eliminating the need for fragmented tools and manual workflows.
                      </p>
                      <p className="text-white">
                          Yadi serves both ticketed public events and enterprise-grade events, adapting to different scales, formats, and operational needs.
                      </p>
                  </div>
              </div>

              {/* BLOCK B: THE PROBLEM */}
              <div className="grid lg:grid-cols-12 gap-12 pt-12 border-t border-white/5">
                  <div className="lg:col-span-4">
                      <h2 className="text-xs font-bold text-pink-500 uppercase tracking-widest mb-4">02 — Why Yadi Exists</h2>
                      <h3 className="text-4xl font-heading font-bold text-white">Events are complex.<br/>The tools shouldn't be.</h3>
                  </div>
                  <div className="lg:col-span-8">
                      <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                          Organizers struggle with outdated, disconnected tools built for only one part of the process. 
                          This leads to operational stress and poor insights.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                          {[
                              "Fragmented ticketing & payments",
                              "Limited real-time visibility",
                              "Operational stress on-site",
                              "Poor post-event insights"
                          ].map((item, i) => (
                              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900 border border-white/5">
                                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                                  <span className="text-zinc-300 text-sm">{item}</span>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>

          </div>
      </section>

      {/* 3. SOLUTION & APPROACH (Visual Break) */}
      <section className="py-32 bg-black relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-20">
                  <h2 className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-4">03 — Our Approach</h2>
                  <h3 className="text-5xl font-heading font-bold text-white mb-6">Designed around the full lifecycle.</h3>
                  <p className="text-xl text-zinc-400">
                      We support organizers before, during, and after their events. Practical, scalable, and built for reality.
                  </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                  {[
                      { icon: Zap, title: "Smart Ticketing", desc: "Seamless sales & payments." },
                      { icon: Layers, title: "Ops Tools", desc: "For teams & venues." },
                      { icon: ShieldCheck, title: "Access Control", desc: "On-site validation." },
                      { icon: Target, title: "Analytics", desc: "Post-event insights." }
                  ].map((item, i) => (
                      <div key={i} className="p-8 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-sm hover:bg-zinc-900 transition-colors">
                          <item.icon className="w-8 h-8 text-white mb-4" />
                          <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                          <p className="text-zinc-500 text-sm">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 4. MISSION & VISION (Typography) */}
      <section className="py-32 bg-zinc-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24">
              <div>
                  <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Our Mission</h2>
                  <p className="text-3xl font-heading font-bold text-white leading-tight">
                      To empower event organizers with reliable, intelligent tools that simplify execution and elevate experiences.
                  </p>
                  <p className="mt-6 text-zinc-400">
                      We believe great events should be supported by technology that works quietly in the background.
                  </p>
              </div>
              <div>
                  <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Our Vision</h2>
                  <p className="text-3xl font-heading font-bold text-white leading-tight">
                      To become the leading event infrastructure platform for emerging and global markets.
                  </p>
                  <p className="mt-6 text-zinc-400">
                      A future where event technology is unified, adaptable, and accessible for everyone.
                  </p>
              </div>
          </div>
      </section>

      {/* 5. VALUES (Bento Grid) */}
      <section className="py-32 bg-black">
          <div className="max-w-7xl mx-auto px-6">
              <div className="mb-16">
                  <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">04 — What We Stand For</h2>
                  <h3 className="text-4xl font-heading font-bold text-white">Our Values</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                  <ValuesCard 
                      icon={Eye} 
                      title="Clarity" 
                      desc="We build systems that are easy to understand and easy to use." 
                      delay={0}
                  />
                  <ValuesCard 
                      icon={ShieldCheck} 
                      title="Reliability" 
                      desc="Events are time-critical. Our platform performs when it matters most." 
                      delay={0.1}
                  />
                  <ValuesCard 
                      icon={TrendingUp} 
                      title="Scale" 
                      desc="We think beyond today’s event, designing for growth and complexity." 
                      delay={0.2}
                  />
                  <div className="md:col-span-1">
                      <ValuesCard 
                          icon={Handshake} 
                          title="Partnership" 
                          desc="We work alongside organizers, not above them." 
                          delay={0.3}
                      />
                  </div>
                  <div className="md:col-span-2">
                      <ValuesCard 
                          icon={Zap} 
                          title="Impact" 
                          desc="We care about real-world outcomes, not just features. Technology should drive results." 
                          delay={0.4}
                      />
                  </div>
              </div>
          </div>
      </section>

      {/* 6. PLATFORM & JOURNEY */}
      <section className="py-32 bg-zinc-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
              <div className="p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 relative overflow-hidden">
                  {/* Decor */}
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
                  
                  <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                      <div>
                          <h3 className="text-2xl font-bold text-white mb-6">One Platform, Multiple Experiences</h3>
                          <div className="space-y-6">
                              <div className="flex gap-4">
                                  <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center border border-white/5 text-white font-bold">1</div>
                                  <div>
                                      <h4 className="text-white font-bold">tickets.yadi.app</h4>
                                      <p className="text-sm text-zinc-400">For ticketing and event discovery.</p>
                                  </div>
                              </div>
                              <div className="flex gap-4">
                                  <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center border border-white/5 text-white font-bold">2</div>
                                  <div>
                                      <h4 className="text-white font-bold">Core Platform Tools</h4>
                                      <p className="text-sm text-zinc-400">For enterprise event management.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      <div>
                          <h3 className="text-2xl font-bold text-white mb-6">Where We’re Going</h3>
                          <p className="text-zinc-400 leading-relaxed mb-6">
                              Yadi is continuously evolving. We are expanding our capabilities across event operations, intelligence, and integrations.
                          </p>
                          <p className="text-white font-medium border-l-2 border-indigo-500 pl-4">
                              Our focus remains on building long-term infrastructure, not short-term tools.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 7. CTA */}
      <section className="py-32 relative text-center bg-black overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[120px]" />
          
          <div className="max-w-3xl mx-auto px-6 relative z-10">
              <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tighter">
                  Build With Yadi.
              </h2>
              <p className="text-xl text-zinc-400 mb-12">
                  Whether you’re organizing your next event or exploring enterprise solutions, Yadi is here to support your journey.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button 
                      onClick={() => window.location.href = 'https://tickets.yadi.app'}
                      className="px-10 py-5 bg-white text-black text-lg font-bold rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-2"
                  >
                      Get Started <ArrowRight className="w-5 h-5" />
                  </button>
                  <button 
                      onClick={() => window.location.href = 'mailto:hello@yadi.app'}
                      className="px-10 py-5 bg-transparent border border-white/20 text-white text-lg font-bold rounded-lg hover:bg-white/5 transition-colors"
                  >
                      Talk to Our Team
                  </button>
              </div>
          </div>
      </section>

    </WebsiteLayout>
  );
};

export default AboutPage;