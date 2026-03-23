
import React, { useState } from 'react';
import { Shield, Star, Users, RotateCcw, Leaf, Clock, Phone } from 'lucide-react';
import Reveal from './Reveal';

const guarantees = [
  {
    icon: Shield,
    title: 'Fully Bonded & Insured',
    description:
      'Every team member is covered by our comprehensive liability insurance. Your home and belongings are always protected.',
    highlight: false,
    badge: null,
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description:
      'We use plant-based, non-toxic cleaning products that are safe for children, pets, and the environment.',
    highlight: false,
    badge: null,
  },
  {
    icon: Clock,
    title: 'Punctuality Pledge',
    description:
      'We respect your schedule. Our team arrives within the agreed window — or we credit your next service.',
    highlight: false,
    badge: null,
  },
];

const stats = [
  { value: '20,000+', label: 'Homes Cleaned' },
  { value: '16', label: 'Years Serving' },
  { value: '97%', label: 'Customer Satisfaction' },
  { value: '4.8', label: 'Average Rating' },
];

const Guarantees: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="guarantees" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Blue blob decoration */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-blue-200 rounded-full opacity-30 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-20">
            <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Promise to You</p>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-5 serif">
              Why Richmond Families <span className="text-blue-600">Trust Us</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Every Ecco service comes backed by ironclad guarantees so you can book with complete confidence.
            </p>
          </div>
        </Reveal>

        {/* Stats bar */}
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-3xl md:text-4xl font-black text-blue-600 mb-1 serif">{stat.value}</p>
                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Guarantee cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((g, idx) => {
            const Icon = g.icon;
            const isHovered = hoveredIdx === idx;
            return (
              <Reveal key={idx} delay={idx * 80}>
                <div
                  className={`relative rounded-3xl p-8 border transition-all duration-300 cursor-default h-full flex flex-col ${
                    g.highlight
                      ? 'bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-200'
                      : `bg-white border-slate-100 ${isHovered ? 'shadow-xl -translate-y-2' : 'shadow-sm'}`
                  }`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Badge */}
                  {g.badge && (
                    <span className="absolute top-5 right-5 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                      {g.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    g.highlight ? 'bg-white/20' : 'bg-blue-100'
                  }`}>
                    <Icon
                      size={26}
                      className={g.highlight ? 'text-white' : 'text-blue-600'}
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${g.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {g.title}
                  </h3>
                  <p className={`text-sm leading-relaxed flex-grow ${g.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                    {g.description}
                  </p>

                  {/* Check mark accent */}
                  <div className={`mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
                    g.highlight ? 'text-blue-200' : 'text-blue-600'
                  }`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Guaranteed
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <Reveal>
          <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-md border border-slate-100">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 serif">Ready to experience the difference?</h3>
              <p className="text-slate-500">Join happy Richmond families. Call us today.</p>
            </div>
            <a
              href="tel:8048742733"
              aria-label="Ligar para Ecco House Cleaning"
              className="shrink-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-[length:200%_100%] animate-shimmer text-white px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:-translate-y-1 transition-transform whitespace-nowrap flex items-center gap-2"
            >
              <Phone size={20} aria-hidden="true" />
              Call Now →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Guarantees;
