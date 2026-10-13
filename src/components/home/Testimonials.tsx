'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

type TestimonialData = {
  id: number;
  name: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
};

export default function Testimonials({ testimonials }: { testimonials: TestimonialData[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = () => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (paused || testimonials.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next, testimonials.length]);

  if (testimonials.length === 0) return null;
  const current = testimonials[index];

  return (
    <section
      className="bg-navy-mid py-24 relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="section-padding relative z-10">
        <div className="text-center mb-12">
          <span className="heading-eyebrow">Client Voices</span>
          <h2 className="font-serif text-3xl lg:text-5xl font-light text-white">Testimonials</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-card p-10 text-center"
            >
              <Quote size={40} className="text-accent mx-auto mb-6" />
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/80 text-lg font-light leading-relaxed mb-8 font-serif italic">
                &ldquo;{current.text}&rdquo;
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.avatar}
                alt={current.name}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-accent"
                loading="lazy"
              />
              <h4 className="font-sans font-bold text-white">{current.name}</h4>
              <p className="text-white/50 text-sm">{current.company}</p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-accent' : 'w-2 bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
