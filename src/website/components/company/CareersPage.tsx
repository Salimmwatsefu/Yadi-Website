import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronRight, ArrowRight, 
  Target, Zap, TrendingUp, UserCheck, 
  Briefcase
} from 'lucide-react';
import WebsiteLayout from '../../layouts/WebsiteLayout';

const CareersPage = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <WebsiteLayout>
      
      {/* 1. HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-black md:pt-32 overflow-hidden">
        {/* Background Image - Fixed */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 saturate-0" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <motion.div style={{ y: yHero }} className="max-w-4xl">
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
                     <span className="text-white">Careers</span>
                 </motion.div>

                 <h1 className="text-5xl md:text-8xl font-heading font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                    Join the team building the <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                        Future of Events.
                    </span>
                 </h1>
                 <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
                    At Yadi, we’re creating the infrastructure that powers modern experiences. 
                    We value ownership, curiosity, and people who care about impact.
                 </p>
            </motion.div>
        </div>
      </section>

      {/* 2. LIFE AT YADI (Manifesto) */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                  <h2 className="text-3xl font-heading font-bold text-white mb-6">Life at Yadi</h2>
                  <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                      <p>
                          Yadi is built by people who care deeply about solving real problems. We work collaboratively, move with intention, and focus on building systems that organizers can rely on when it matters most.
                      </p>
                      <p className="text-white font-medium">
                          We don't just build features; we build trust.
                      </p>
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                  {[
                      { label: "Ownership", icon: UserCheck },
                      { label: "Execution", icon: Zap },
                      { label: "Curiosity", icon: Target },
                      { label: "Impact", icon: TrendingUp },
                  ].map((val, i) => (
                      <div key={i} className="p-6 bg-zinc-900 border border-white/5 rounded-2xl flex flex-col items-center justify-center text-center hover:border-white/20 transition-colors group">
                          <val.icon className="w-8 h-8 text-zinc-500 mb-4 group-hover:text-white transition-colors" />
                          <span className="font-bold text-white">{val.label}</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 3. CULTURE (Bento Grid) */}
      <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-4xl font-heading font-bold text-white mb-16">Our Culture</h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                  {/* Card 1 */}
                  <div className="md:col-span-2 p-8 rounded-3xl bg-zinc-900/50 border border-white/10">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                          <UserCheck className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">Ownership</h3>
                      <p className="text-zinc-400 text-sm">We take responsibility for what we build and how it performs. No passing the buck.</p>
                  </div>

                  {/* Card 2 */}
                  <div className="md:col-span-2 p-8 rounded-3xl bg-zinc-900/50 border border-white/10">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                          <Target className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">Focus</h3>
                      <p className="text-zinc-400 text-sm">We prioritize meaningful work over noise. We solve the right problems, not just the easy ones.</p>
                  </div>

                  {/* Card 3 */}
                  <div className="md:col-span-2 p-8 rounded-3xl bg-zinc-900/50 border border-white/10">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                          <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">Growth</h3>
                      <p className="text-zinc-400 text-sm">We learn continuously and improve through feedback. We are better today than we were yesterday.</p>
                  </div>

                  {/* Card 4 */}
                  <div className="md:col-span-2 p-8 rounded-3xl bg-zinc-900/50 border border-white/10">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                          <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">Impact</h3>
                      <p className="text-zinc-400 text-sm">We build with real-world users in mind. Technology is only as good as the problem it solves.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. OPEN ROLES / TALENT POOL */}
      <section className="py-32 bg-zinc-950 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 font-bold uppercase tracking-widest text-xs mb-8">
                  <Briefcase className="w-4 h-4" /> Open Roles
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
                  We aren't hiring right now. <br/>
                  <span className="text-zinc-500">But we're always looking.</span>
              </h2>
              
              <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
                  As Yadi evolves, we’ll be opening roles across technology, operations, and partnerships. 
                  If you believe in our mission, we want to know you.
              </p>

              <div className="p-10 rounded-3xl bg-zinc-900 border border-white/10 max-w-2xl mx-auto relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-[60px]" />
                  <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Join Our Talent Pool</h3>
                  <p className="text-zinc-400 text-sm mb-8 relative z-10">
                      Be the first to know when roles open up.
                  </p>
                  
                  {/* Simple Email Capture Mockup */}
                  <div className="flex gap-2 max-w-md mx-auto relative z-10">
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="flex-1 bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                      />
                      <button className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors">
                          Connect
                      </button>
                  </div>
              </div>

              <div className="mt-16 text-zinc-500 text-sm">
                  Building meaningful technology takes time, care, and the right people. <br/>
                  If that resonates with you, we’d love to hear from you.
              </div>
          </div>
      </section>

    </WebsiteLayout>
  );
};

export default CareersPage;