
import React from 'react';
import { Shield, Clock, Heart, Star, Phone } from 'lucide-react';
import Reveal from './Reveal';

const servicesList = [
  {
    title: "Regular Cleaning",
    description: "Our signature recurring cleaning. Perfect for keeping your Richmond home consistently fresh and maintained.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=400",
    features: ["Dusting", "Vacuuming", "Kitchen Sanitizing", "Bathrooms"]
  },
  {
    title: "Deep Cleaning",
    description: "A top-to-bottom thorough scrub of every corner. Recommended for first-time visits and seasonal refreshes.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400",
    features: ["Baseboards", "Inside Cabinets", "Tile Grout", "Deep Disinfect"]
  },
  {
    title: "Move In / Out",
    description: "Starting or ending a chapter? We'll make sure the space is pristine for the new occupants or for you.",
    image: "/services-mov_in.webp",
    features: ["Inside Appliances", "Wall Washing", "Closet Cleaning", "Window Tracks"]
  },
  {
    title: "Post-Construction Cleaning",
    description: "Just finished a renovation? We remove dust, debris, and residues so you can enjoy your new space worry-free.",
    image: "/services-post_construction.webp",
    features: ["Debris Removal", "Dust Wipe-Down", "Floor Scrubbing", "Paint Residue"]
  },
  {
    title: "Vacation Rental Cleaning",
    description: "Keep your Airbnb or vacation rental guest-ready with professional turnover cleanings between stays.",
    image: "/services-vacation.webp",
    features: ["Linen Change", "Full Sanitize", "Restock Check", "Quick Turnaround"]
  },
  {
    title: "Eco-Friendly Cleaning",
    description: "Green cleaning with plant-based, non-toxic products. Safe for your family, pets, and the planet.",
    image: "/services-eco_friendly.webp",
    features: ["Non-Toxic Products", "Biodegradable", "Allergy-Safe", "Pet Friendly"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Professional Solutions for Every Home.</h3>
            </div>
            <p className="text-slate-600 max-w-sm mb-2">We bring the supplies, the skill, and the attention to detail that transforms homes across Richmond.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <Reveal key={idx} delay={idx * 100} className="h-full">
              <div className="group bg-slate-50 rounded-3xl p-6 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2 border border-slate-100 h-full flex flex-col">
                <div className="rounded-2xl overflow-hidden mb-6 h-48 shrink-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                </div>
                <h4 className="text-2xl font-bold mb-3 text-slate-900">{service.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <Star size={14} className="text-blue-500 fill-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="tel:8048742733"
                  className="block w-full text-center py-4 rounded-xl border-2 border-slate-200 font-bold text-slate-800 transition-all hover:bg-slate-900 hover:text-white hover:border-slate-900 mt-auto flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  Call to Book
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Brand Pillars */}
        <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-slate-100">
          <div className="text-center space-y-4 group">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600 animate-float">
              <Shield size={32} />
            </div>
            <h5 className="font-bold">Fully Insured</h5>
            <p className="text-sm text-slate-500">Your property is protected.</p>
          </div>
          <div className="text-center space-y-4 group">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600">
              <Clock size={32} className="animate-wiggle" />
            </div>
            <h5 className="font-bold">Punctual</h5>
            <p className="text-sm text-slate-500">We respect your time.</p>
          </div>
          <div className="text-center space-y-4 group">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600">
              <Heart size={32} className="animate-beat" />
            </div>
            <h5 className="font-bold">Eco-Friendly</h5>
            <p className="text-sm text-slate-500">Safe for kids and pets.</p>
          </div>
          <div className="text-center space-y-4 group">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600">
              <Star size={32} className="animate-spin-slow" />
            </div>
            <h5 className="font-bold">Vetted Staff</h5>
            <p className="text-sm text-slate-500">Top 1% of applicants.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
