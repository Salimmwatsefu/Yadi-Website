import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Twitter, Instagram, Linkedin, Github, 
  ArrowUpRight, Circle, Zap 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TOP SECTION: Brand & Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 mb-16">
          
          {/* 1. BRAND (Full width on mobile, Col-span-4 on Desktop) */}
          <div className="col-span-2 md:col-span-4 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-6 w-32">
                <img
                src='Logo.png'
                alt='logo'
                className=''
                />
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-6">
                The operating system for modern events. <br/>
                Built for scale. Designed for humans.
              </p>
            </div>
            
            {/* Socials (Desktop Only usually, but kept compact here) */}
            <div className="flex gap-4">
               {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                 <a key={i} href="#" className="text-zinc-500 hover:text-white transition-colors">
                   <Icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </div>

          {/* 2. LINKS (Compact Grid: 2 Cols on Mobile, Split evenly on Desktop) */}
          
          {/* Product */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/product/ticketing" className="text-sm text-zinc-400 hover:text-white transition-colors">Ticketing</Link></li>
              <li><Link to="/product/enterprise" className="text-sm text-zinc-400 hover:text-white transition-colors">Enterprise</Link></li>
              <li><Link to="/product/pos" className="text-sm text-zinc-400 hover:text-white transition-colors">POS Hardware</Link></li>
              <li><Link to="/product/access" className="text-sm text-zinc-400 hover:text-white transition-colors">Access Control</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/company/about" className="text-sm text-zinc-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/company/careers" className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                Careers 
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-white/10 text-white font-bold">HIRING</span>
              </Link></li>
              <li><Link to="/company/partners" className="text-sm text-zinc-400 hover:text-white transition-colors">Partners</Link></li>
              <li><Link to="/company/contact" className="text-sm text-zinc-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link to="/resources" className="text-sm text-zinc-400 hover:text-white transition-colors">Library</Link></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Developers API</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Status Page</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Call to Action (Small) */}
          <div className="col-span-1 md:col-span-2">
             <div className="p-4 rounded-xl bg-zinc-900 border border-white/5">
                <div className="flex items-center gap-2 text-white font-bold mb-2 text-sm">
                   <Zap className="w-4 h-4 text-yellow-500" /> Start Building
                </div>
                <p className="text-[10px] text-zinc-500 mb-3">Create your first event in seconds.</p>
                <a href="https://tickets.yadi.app" className="block w-full py-2 bg-white text-black text-xs font-bold text-center rounded hover:bg-zinc-200 transition-colors">
                   Launch Console
                </a>
             </div>
          </div>

        </div>

        {/* BOTTOM SECTION: Utility & Status */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-xs text-zinc-600">© {currentYear} Yadi Technology.</p>
            <div className="flex gap-6">
              <Link to="/legal/privacy" className="text-xs text-zinc-600 hover:text-zinc-400">Privacy Policy</Link>
              <Link to="/legal/terms" className="text-xs text-zinc-600 hover:text-zinc-400">Terms of Service</Link>
            </div>
          </div>

          

        </div>
      </div>
    </footer>
  );
};

export default Footer;