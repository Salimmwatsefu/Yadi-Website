import React from 'react';
import WebsiteNavbar from './WebsiteNavbar';

interface WebsiteLayoutProps {
  children: React.ReactNode;
}

const WebsiteLayout: React.FC<WebsiteLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      
      {/* 1. THE NEW MEGA MENU NAVBAR */}
     
      <WebsiteNavbar />
      

      {/* 2. PAGE CONTENT */}
      <main className=''>
        {children}
      </main>

      {/* 3. FOOTER (Shared across marketing site) */}
      <footer className="bg-surface border-t border-white/5 py-20 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              {/* Brand Col */}
              <div className="space-y-4">
                 <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center">
                        <span className="font-heading font-bold text-white">Y</span>
                    </div>
                    <span className="font-heading font-bold text-xl">Yadi</span>
                 </div>
                 <p className="text-zinc-500 text-sm leading-relaxed">
                   The operating system for modern events. From underground concerts to global summits.
                 </p>
              </div>
              
              {/* Links Sections */}
              {[
                { title: "Product", links: ["Ticketing", "Enterprise", "Check-in App", "Pricing"] },
                { title: "Solutions", links: ["Concerts", "Conferences", "Expos", "Community"] },
                { title: "Company", links: ["About", "Careers", "Contact", "Legal"] },
              ].map((col) => (
                <div key={col.title}>
                  <h4 className="font-bold text-white mb-6">{col.title}</h4>
                  <ul className="space-y-4">
                    {col.links.map(l => (
                      <li key={l}><a href="#" className="text-sm text-zinc-500 hover:text-primary transition-colors">{l}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
           </div>
           
           {/* Bottom Bar */}
           <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
              <p>&copy; 2026 Yadi Platform. Built for Africa.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                 <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
                 <a href="#" className="hover:text-zinc-400">Terms of Service</a>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default WebsiteLayout;