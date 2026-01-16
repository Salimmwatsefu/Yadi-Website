import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  CheckCircle2, ArrowRight, ChevronRight, Zap, Globe, Sparkles
} from 'lucide-react';
import WebsiteLayout from '../../layouts/WebsiteLayout';

const PricingPage = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <WebsiteLayout>
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center bg-black pt-32 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <motion.div style={{ y: yHero }} className="max-w-3xl">
                 {/* Breadcrumb */}
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-zinc-500 mb-8"
                 >
                     <span onClick={() => window.location.href='/website'} className="hover:text-white cursor-pointer transition-colors">Home</span>
                     <ChevronRight className="w-3 h-3" />
                     <span className="text-zinc-400">Company</span>
                     <ChevronRight className="w-3 h-3" />
                     <span className="text-white">Pricing</span>
                 </motion.div>

                 <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight">
                    Simple pricing that <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">scales with you.</span>
                 </h1>
                 <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                    Whether you’re selling tickets or managing a complex enterprise event, 
                    Yadi pricing is designed to be transparent, fair, and aligned with your success.
                 </p>
            </motion.div>
        </div>
      </section>

      {/* 2. PRICING CARDS */}
      <section className="py-24 bg-zinc-950 border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                  
                  {/* CARD 1: TICKETING (Commission Model) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-900 border border-white/10 relative overflow-hidden group"
                  >
                      {/* Glow */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px] group-hover:bg-pink-500/20 transition-colors" />
                      
                      <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-6">
                              <div className="p-3 bg-pink-500/10 rounded-xl border border-pink-500/20">
                                  <Zap className="w-6 h-6 text-pink-500" />
                              </div>
                              <h3 className="text-2xl font-bold text-white">Ticketed Events</h3>
                          </div>
                          
                          <p className="text-zinc-400 mb-8 leading-relaxed h-12">
                              For public and ticketed events. You only pay when you sell tickets.
                          </p>

                          <div className="mb-10 p-6 bg-black/50 rounded-2xl border border-white/5">
                              <div className="flex items-baseline gap-2">
                                  <span className="text-5xl font-heading font-bold text-white">4%</span>
                                  <span className="text-zinc-500 font-medium">per ticket sold</span>
                              </div>
                              <p className="text-xs text-zinc-500 mt-2 uppercase tracking-widest">No Setup Fees • No Hidden Costs</p>
                          </div>

                          <div className="space-y-4 mb-10">
                              <p className="text-sm font-bold text-white uppercase tracking-widest mb-4">What's Included</p>
                              {[
                                  'Event creation & management',
                                  'Multiple ticket tiers (Early Bird, VIP)',
                                  'Secure online payments (M-Pesa)',
                                  'Digital tickets with QR codes',
                                  'Entry validation & check-in tools',
                                  'Basic sales & attendance analytics'
                              ].map(item => (
                                  <div key={item} className="flex items-start gap-3 text-zinc-300 text-sm">
                                      <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0" />
                                      {item}
                                  </div>
                              ))}
                          </div>

                          <button 
                              onClick={() => window.location.href = 'https://tickets.yadi.app'}
                              className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                          >
                              Get Started with Ticketing <ArrowRight className="w-4 h-4" />
                          </button>
                      </div>
                  </motion.div>

                  {/* CARD 2: ENTERPRISE (Custom Model) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-900 border border-white/10 relative overflow-hidden group"
                  >
                      {/* Glow */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-colors" />
                      
                      <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-6">
                              <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                                  <Globe className="w-6 h-6 text-emerald-500" />
                              </div>
                              <h3 className="text-2xl font-bold text-white">Enterprise Events</h3>
                          </div>
                          
                          <p className="text-zinc-400 mb-8 leading-relaxed h-12">
                              For conferences, summits, and expos. Pricing customized to your scale.
                          </p>

                          <div className="mb-10 p-6 bg-black/50 rounded-2xl border border-white/5">
                              <div className="flex items-baseline gap-2">
                                  <span className="text-4xl font-heading font-bold text-white">Custom Pricing</span>
                              </div>
                              <p className="text-xs text-emerald-500 mt-2 uppercase tracking-widest">Tailored to your requirements</p>
                          </div>

                          <div className="space-y-4 mb-10">
                              <p className="text-sm font-bold text-white uppercase tracking-widest mb-4">Advanced Capabilities</p>
                              {[
                                  'Advanced event operations tools',
                                  'Speaker & Program management',
                                  'Vendor & Expo management',
                                  'Team roles & permissions',
                                  'Custom workflows & support',
                                  'Post-event reporting & insights'
                              ].map(item => (
                                  <div key={item} className="flex items-start gap-3 text-zinc-300 text-sm">
                                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                      {item}
                                  </div>
                              ))}
                          </div>

                          <button 
                              onClick={() => window.location.href = 'mailto:sales@yadi.app'}
                              className="w-full py-4 bg-zinc-800 border border-white/10 text-white font-bold rounded-xl hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2"
                          >
                              Contact Sales <ArrowRight className="w-4 h-4" />
                          </button>
                      </div>
                  </motion.div>

              </div>

              {/* FOOTNOTE */}
              <div className="mt-16 text-center max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
                      <Sparkles className="w-4 h-4 text-zinc-400" />
                      <span className="text-sm text-zinc-400">All pricing is transparent and aligned with value. Unsure? <a href="mailto:hello@yadi.app" className="text-white hover:underline">Chat with us.</a></span>
                  </div>
              </div>
          </div>
      </section>

    </WebsiteLayout>
  );
};

export default PricingPage;