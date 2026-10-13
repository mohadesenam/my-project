'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

type ServiceData = {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
};

export default function ServicesGrid({ services }: { services: ServiceData[] }) {
  return (
    <section className="bg-ghost py-24">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = (LucideIcons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[service.icon] || LucideIcons.Building2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="bg-white rounded-card overflow-hidden shadow-card card-hover group"
              >
                <div className="relative h-56 img-zoom">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-white/90 flex items-center justify-center">
                    <Icon size={24} className="text-accent" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium text-ink-dark mb-3">{service.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed mb-5">{service.shortDescription}</p>
                  <p className="text-ink-muted text-sm leading-relaxed mb-5 line-clamp-3">{service.fullDescription}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-sans text-sm font-semibold uppercase tracking-wider transition-colors"
                  >
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
