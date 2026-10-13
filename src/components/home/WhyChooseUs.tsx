'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Leaf, Award } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: 'Safety First', desc: 'Rigorous safety protocols and zero-incident culture across all our construction sites worldwide.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Advanced project management ensures every project is delivered on schedule, every time.' },
  { icon: Leaf, title: 'Sustainable Building', desc: 'LEED-certified practices and eco-friendly materials for environmentally responsible construction.' },
  { icon: Award, title: 'Certified Experts', desc: 'A team of licensed engineers and certified professionals with decades of combined experience.' },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="section-padding">
        <div className="text-center mb-16">
          <span className="heading-eyebrow">Why STRATECH</span>
          <h2 className="font-serif text-3xl lg:text-5xl font-light text-ink-dark">Why Choose Us</h2>
          <p className="text-ink-muted text-base mt-4 max-w-2xl mx-auto">
            We bring unparalleled expertise, innovation, and commitment to every project, ensuring results that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 rounded-card border border-gray-100 card-hover hover:border-accent/30"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-5">
                  <Icon size={28} className="text-accent" />
                </div>
                <h3 className="font-sans font-bold text-ink-dark text-lg mb-3">{feature.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
