
import React from 'react';
import { CalendarCheck, MessageSquare, Sparkles, ThumbsUp, Phone } from 'lucide-react';
import Reveal from './Reveal';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Call or Text Us',
    description:
      'Reach out via call or text for a transparent price. No surprises, no hidden fees — ever.',
    color: 'bg-blue-600',
    lightColor: 'bg-blue-100',
    textColor: 'text-blue-600',
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Book Your Preferred Time',
    description:
      'Pick a date and time that works for you. We work around your schedule — weekdays, weekends, even same-day.',
    color: 'bg-violet-600',
    lightColor: 'bg-violet-100',
    textColor: 'text-violet-600',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'We Clean, You Relax',
    description:
      'Our vetted, background-checked team arrives on time with all supplies. You just enjoy your day while we do the work.',
    color: 'bg-cyan-600',
    lightColor: 'bg-cyan-100',
    textColor: 'text-cyan-600',
  },
  {
    number: '04',
    icon: ThumbsUp,
    title: 'Love It or It\'s Free',
    description:
      'Not 100% satisfied? We\'ll come back and re-clean at no extra cost. Your happiness is our guarantee.',
    color: 'bg-emerald-600',
    lightColor: 'bg-emerald-100',
    textColor: 'text-emerald-600',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-20">
            <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Simple Process</p>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-5 serif">
              Clean Home in <span className="text-blue-600">4 Easy Steps</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              From reaching out to a sparkling clean home — it's simpler than you think.
            </p>
          </div>
        </Reveal>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-violet-200 via-cyan-200 to-emerald-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Reveal key={idx} delay={idx * 120}>
                  <div className="flex flex-col items-center text-center group">
                    {/* Icon circle */}
                    <div className={`relative w-28 h-28 rounded-full ${step.lightColor} flex items-center justify-center mb-6 shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:-translate-y-2`}>
                      <Icon size={40} className={step.textColor} strokeWidth={1.6} aria-hidden="true" />
                      {/* Step number badge */}
                      <span className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${step.color} text-white text-sm font-bold flex items-center justify-center shadow-md`}>
                        {idx + 1}
                      </span>
                    </div>

                    {/* Big number watermark */}
                    <p className={`text-8xl font-black leading-none ${step.textColor} opacity-[0.07] select-none mb-2 -mt-4`}>{step.number}</p>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-[220px]">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-5">
            <a
              href="tel:8048742733"
              aria-label="Ligar para Ecco House Cleaning"
              className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-[length:200%_100%] animate-shimmer text-white px-12 py-5 rounded-full text-lg font-bold shadow-xl hover:-translate-y-1 transition-transform flex items-center gap-2"
            >
              <Phone size={20} aria-hidden="true" />
              Call Now
            </a>
            <a
              href="sms:8048742733?body=Hi, I would like a quote"
              aria-label="Enviar mensagem para Ecco House Cleaning"
              className="flex items-center gap-3 text-slate-700 font-semibold hover:text-blue-600 transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <MessageSquare size={18} className="text-blue-600" aria-hidden="true" />
              </span>
              Or text (804) 874-2733
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorks;
