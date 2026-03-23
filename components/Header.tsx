
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo-ecco.svg"
            alt="Ecco Cleaning"
            className="h-10 w-auto"
            loading="eager"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#services" className="font-medium hover:text-blue-600 transition-colors">Services</a>
          <a href="#about" className="font-medium hover:text-blue-600 transition-colors">About</a>
          <a href="#reviews" className="font-medium hover:text-blue-600 transition-colors">Reviews</a>
          <a href="tel:8048742733" aria-label="Ligar para Ecco House Cleaning" className="flex items-center gap-2 font-bold text-blue-700">
            <Phone size={18} aria-hidden="true" />
            (804) 874-2733
          </a>
          <a href="tel:8048742733" aria-label="Ligar para Ecco House Cleaning" className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-[length:200%_100%] animate-shimmer text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all shadow-lg flex items-center gap-2">
            <Phone size={18} aria-hidden="true" />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          id="mobile-menu-button"
          className="lg:hidden text-blue-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="mobile-menu-button"
          className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300"
        >
          <a 
            href="#services" 
            role="menuitem"
            className="text-xl font-medium" 
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#about" 
            role="menuitem"
            className="text-xl font-medium" 
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#reviews" 
            role="menuitem"
            className="text-xl font-medium" 
            onClick={() => setIsMenuOpen(false)}
          >
            Reviews
          </a>
          <hr />
          <div className="flex flex-col gap-4">
            <a 
              href="tel:8048742733" 
              role="menuitem"
              aria-label="Ligar para Ecco House Cleaning"
              className="flex items-center justify-center gap-2 py-3 bg-blue-50 text-blue-700 rounded-lg font-bold"
            >
              <Phone size={20} aria-hidden="true" /> Call Us
            </a>
            <a 
              href="sms:8048742733?body=Hi, I would like a quote" 
              role="menuitem"
              aria-label="Enviar mensagem para Ecco House Cleaning"
              className="flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-[length:200%_100%] animate-shimmer text-white rounded-lg font-bold shadow-lg" 
              onClick={() => setIsMenuOpen(false)}
            >
              💬 Text Me Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
