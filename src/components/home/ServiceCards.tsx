'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Construction, Building2, Building } from 'lucide-react';

const cards = [
  {
    title: 'Infrastructure Development',
    description: 'Building the foundations of modern civilization through bridges, roads, and transit systems.',
    image: 'https://images.unsplash.com/photo-1529926691761-20fb82067c71?w=600&q=80',
    icon: Construction,
    href: '/services/infrastructure-development',
  },
  {
    title: 'Commercial Buildings',
    description: 'Iconic corporate towers and commercial complexes that define city skylines.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    icon: Building2,
    href: '/services/commercial-buildings',
  },
  {
    title: 'Urban Solutions',
    description: 'Smart city planning and urban development for growing metropolitan areas.',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=600&q=80',
    icon: Building,
    href: '/services/urban-solutions',
  },
];

export default function ServiceCards() {
  return (
    <section className="relative z-20 -mt-32 pb-16">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-card overflow-hidden card-hover group bg-navy-panel"
              >
                {/* Image */}
                <div className="relative h-40 img-zoom">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                {/* Body — dark navy panel */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-sans font-semibold text-white text-base">{card.title}</h3>
                    <Icon size={18} className="text-white/50 flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-ink-secondary text-xs leading-relaxed mb-4">{card.description}</p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-white/10 text-white/80 text-xs font-medium hover:bg-white/20 transition-colors"
                  >
                    Discover More <ArrowRight size={12} />
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
