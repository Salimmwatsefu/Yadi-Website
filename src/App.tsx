import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import WebsiteHomePage from './website/components/pages/WebsiteHomePage';
import TicketingPage from './website/components/pages/products/TicketingPage';
import EnterprisePage from './website/components/pages/products/EnterprisePage';
import SolutionsPage from './website/components/pages/SolutionsPage';
import ResourcesPage from './website/components/pages/ResourcesPage';
import AboutPage from './website/components/company/AboutPage';
import PricingPage from './website/components/company/PricingPage';
import CareersPage from './website/components/company/CareersPage';
import PartnerPage from './website/components/company/PartnerPage';



// 1. Scroll Reset: Ensures every page load starts at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- APP COMPONENT ---

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      
      <Routes>
        {/* 1. HOME (Root) - Changed from /website to / */}
        <Route path="/" element={<WebsiteHomePage />} />

        {/* 2. PRODUCTS */}
        <Route path="/product/ticketing" element={<TicketingPage />} />
        <Route path="/product/enterprise" element={<EnterprisePage />} />

        {/* 3. SOLUTIONS */}
        <Route path="/solutions" element={<SolutionsPage />} />

        {/* 4. RESOURCES */}
        <Route path="/resources" element={<ResourcesPage />} />

        {/* 5. COMPANY */}
        <Route path="/company/about" element={<AboutPage />} />
        <Route path="/company/pricing" element={<PricingPage />} />
        <Route path="/company/careers" element={<CareersPage />} />
        <Route path="/company/partners" element={<PartnerPage />} />
        

        {/* 6. FALLBACK - Redirect unknown routes to Home */}
        <Route path="*" element={<WebsiteHomePage />} />
      </Routes>
    </Router>
  );
};

export default App;