'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Cog, Map, Leaf, Maximize, Globe } from 'lucide-react';

const expertise = [
  { icon: Cog, title: 'Advanced Engineering', desc: 'Cutting-edge structural and civil engineering powered by the latest technology.' },
  { icon: Map, title: 'Strategic Planning', desc: 'Comprehensive project planning that anticipates challenges and optimizes delivery.' },
  { icon: Leaf, title: 'Sustainable Solutions', desc: 'Eco-friendly construction practices and green building certifications.' },
  { icon: Maximize, title: 'Smart Solutions', desc: 'Flexible, scalable construction approaches from concept to completion.' },
];

export default function AboutExpertise() {
  return (
    <section className="bg-ghost py-16">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — About Us */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl font-semibold text-ink-dark mb-5">About Us</h2>
            <div className="rounded-card overflow-hidden mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Modern glass office building with architectural lighting"
                className="w-full h-44 object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-ink-muted text-sm leading-relaxed">
              For over 15 years, STRATECH has been at the forefront of engineering and construction, delivering landmark projects across 30 countries. We combine visionary design with engineering precision to build structures that define skylines and serve communities for generations.
            </p>
          </motion.div>

          {/* Right — Our Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl font-semibold text-ink-dark mb-5">Our Expertise</h2>
            <div className="grid grid-cols-2 gap-5 mb-6">
              {expertise.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex gap-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-md border border-accent flex items-center justify-center">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-ink-dark text-sm mb-1">{item.title}</h3>
                      <p className="text-ink-muted text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors"
            >
              <Globe size={16} /> Global Reach
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
