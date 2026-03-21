
import React, { useState, useRef, useCallback } from 'react';
import { Phone } from 'lucide-react';
import Reveal from './Reveal';

interface SliderItem {
  before: string;
  after: string;
  label: string;
  tag: string;
}

const sliders: SliderItem[] = [
  {
    before: '/slider-kichen_before.webp',
    after: '/slider-kichen_after.webp',
    label: 'Kitchen',
    tag: 'Deep Clean',
  },
  {
    before: '/slider-badroom_before.webp',
    after: '/slider-badroom_after.webp',
    label: 'Bedroom',
    tag: 'Standard Clean',
  },
  {
    before: '/slider-before_bathtub.webp',
    after: '/slider-after_bathtub.webp',
    label: 'Bathroom',
    tag: 'Deep Clean',
  },
];

const BeforeAfterSlider: React.FC<{ item: SliderItem; index: number }> = ({ item, index }) => {
  const [pos, setPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getPos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    getPos(e.clientX);
  };

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    getPos(e.clientX);
  }, [isDragging, getPos]);

  const onMouseUp = () => setIsDragging(false);

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    getPos(e.touches[0].clientX);
  };

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    getPos(e.touches[0].clientX);
  }, [isDragging, getPos]);

  const onTouchEnd = () => setIsDragging(false);

  return (
    <Reveal delay={index * 150}>
      <div className="group relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900"
        style={{ aspectRatio: '4/3' }}>

        {/* After image (full) */}
        <img
          src={item.after}
          alt={`After ${item.label}`}
          className="absolute inset-0 w-full h-full object-cover select-none"
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <img
            src={item.before}
            alt={`Before ${item.label}`}
            className="absolute inset-0 w-full h-full object-cover select-none"
            style={{ width: `${10000 / pos}%`, maxWidth: 'none' }}
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.6)] z-20"
          style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
        />

        {/* Drag handle */}
        <div
          ref={containerRef}
          className="absolute inset-0 z-30 cursor-ew-resize"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-40 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center transition-transform duration-150"
            style={{ left: `${pos}%`, transform: `translate(-50%, -50%) scale(${isDragging ? 1.15 : 1})` }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M8 12L4 8m0 0l4-4M4 8h16m0 8l-4 4m4-4l-4-4m4 4H4" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Before label */}
        <span className="absolute top-4 left-4 z-20 bg-slate-900/75 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
          Before
        </span>
        {/* After label */}
        <span className="absolute top-4 right-4 z-20 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
          After
        </span>

        {/* Bottom tag */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-5 bg-gradient-to-t from-slate-900/80 to-transparent flex justify-between items-end">
          <div>
            <p className="text-white font-bold text-xl">{item.label}</p>
            <p className="text-blue-300 text-sm font-semibold">{item.tag}</p>
          </div>
          <div className="text-white/70 text-xs font-medium">← Drag →</div>
        </div>
      </div>
    </Reveal>
  );
};

const Transformations: React.FC = () => {
  return (
    <section id="transformations" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[160px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[160px] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Real Results</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-5 serif">
              See the <span className="text-blue-400">Difference</span> We Make
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Drag the sliders to reveal the transformation our team delivers in every home.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {sliders.map((item, i) => (
            <BeforeAfterSlider key={i} item={item} index={i} />
          ))}
        </div>

        <Reveal>
          <div className="mt-14 text-center">
            <a
              href="tel:8048742733"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-[length:200%_100%] animate-shimmer text-white px-12 py-5 rounded-full text-lg font-bold shadow-xl hover:-translate-y-1 transition-transform"
            >
              <Phone size={20} />
              Call Now — (804) 874-2733
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Transformations;
