'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Cog, Map, Leaf, Maximize, Globe } from 'lucide-react';

const expertise = [
  { icon: Cog, title: 'Advanced Engineering', desc: 'Cutting-edge structural and civil engineering powered by the latest technology and methodologies.' },
  { icon: Map, title: 'Strategic Planning', desc: 'Comprehensive project planning that anticipates challenges and optimizes every phase of delivery.' },
  { icon: Leaf, title: 'Sustainable Solutions', desc: 'Eco-friendly construction practices and green building certifications for a sustainable future.' },
  { icon: Maximize, title: 'Scalable Solutions', desc: 'Flexible, scalable construction approaches that grow with your project from concept to completion.' },
];

export default function AboutExpertise() {
  return (
    <section className="bg-ghost py-24">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — About Us */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="heading-eyebrow">Who We Are</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-ink-dark mb-6">About Us</h2>
            <div className="relative rounded-card overflow-hidden img-zoom mb-8 shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="Modern glass commercial building at golden hour"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-ink-muted text-base leading-relaxed mb-6">
              For over 15 years, STRATECH has been at the forefront of engineering and construction, delivering landmark projects across 30 countries. We combine visionary design with engineering precision to build structures that define skylines and serve communities for generations.
            </p>
            <Link href="/about" className="btn-outline-dark">
              <Globe size={18} /> Global Reach
            </Link>
          </motion.div>

          {/* Right — Our Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="heading-eyebrow">What We Do</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-ink-dark mb-8">Our Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {expertise.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-6 rounded-card bg-white shadow-card card-hover"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <h3 className="font-sans font-bold text-ink-dark text-lg mb-2">{item.title}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
