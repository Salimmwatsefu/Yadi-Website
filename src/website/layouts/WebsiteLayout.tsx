import React from 'react';
import WebsiteNavbar from './WebsiteNavbar';
import Footer from './Footer';

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
      <Footer />
    </div>
  );
};

export default WebsiteLayout;