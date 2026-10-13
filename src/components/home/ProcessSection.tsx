'use client';

import { motion } from 'framer-motion';
import { MessageSquare, PencilRuler, HardHat, CheckCircle } from 'lucide-react';

const steps = [
  { icon: MessageSquare, title: 'Consultation', desc: 'We begin with a thorough consultation to understand your vision, goals, and project requirements.' },
  { icon: PencilRuler, title: 'Design & Planning', desc: 'Our architects and engineers develop detailed plans, 3D models, and structural specifications.' },
  { icon: HardHat, title: 'Construction', desc: 'Expert construction teams execute the plan with precision, quality control, and safety first.' },
  { icon: CheckCircle, title: 'Delivery & Support', desc: 'We deliver on time, provide comprehensive handover, and offer ongoing maintenance support.' },
];

export default function ProcessSection() {
  return (
    <section className="bg-ghost py-24">
      <div className="section-padding">
        <div className="text-center mb-16">
          <span className="heading-eyebrow">How We Work</span>
          <h2 className="font-serif text-3xl lg:text-5xl font-light text-ink-dark">Our Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" aria-hidden="true" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-card mb-6 mx-auto z-10">
                  <Icon size={32} className="text-accent" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white text-sm font-sans font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-sans font-bold text-ink-dark text-lg mb-3">{step.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
