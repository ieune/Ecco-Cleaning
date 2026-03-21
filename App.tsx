import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import HowItWorks from './components/HowItWorks';
import Transformations from './components/Transformations';
import Guarantees from './components/Guarantees';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage: React.FC = () => (
  <main>
    <Hero />
    
    {/* Trusted By Section */}
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 text-center">
        <Reveal>
          <p className="text-slate-400 font-semibold uppercase tracking-widest text-xs mb-8">Trusted by Richmond Families</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-50">
            <span className="text-2xl font-bold">HOMEADVISOR</span>
            <span className="text-2xl font-bold">THUMBTACK</span>
            <span className="text-2xl font-bold">YELP ELITE</span>
            <span className="text-2xl font-bold">ANGI'S LIST</span>
            <span className="text-2xl font-bold">GOOGLE GUARANTEED</span>
          </div>
        </Reveal>
      </div>
    </section>

    <HowItWorks />
    <Services />
    <Transformations />
    <About />
    <Guarantees />
    <Reviews />
    <FAQ />

    {/* Final CTA */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <Reveal className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
           <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
           
           <h2 className="text-4xl md:text-6xl font-bold mb-6 serif">Ready for a spotless home?</h2>
           <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Join happy Richmond families who trust Ecco House Cleaning with their keys. Call us today.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="tel:8048742733" className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-[length:200%_100%] animate-shimmer text-white px-12 py-5 rounded-full text-lg font-bold shadow-xl hover:-translate-y-1 transition-transform">
               Call (804) 874-2733
             </a>
             <a href="sms:8048742733?body=Hi, I would like a quote" className="bg-white/10 backdrop-blur-md text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-white/20 transition-all border border-white/20">
               💬 Text Me Now
             </a>
           </div>
        </Reveal>
      </div>
    </section>
  </main>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
