'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 250, suffix: '+', label: 'Projects Completed' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 120, suffix: '+', label: 'Expert Engineers' },
  { value: 30, suffix: '+', label: 'Countries' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-navy-mid py-16 relative overflow-hidden">
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(31,95,214,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(31,95,214,0.15) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
      </div>
      <div className="section-padding relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-4xl lg:text-5xl font-light text-white mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/60 font-sans text-sm uppercase tracking-[0.1em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
