'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Construction, Building2, Building } from 'lucide-react';

const cards = [
  {
    title: 'Infrastructure Development',
    description: 'Building the foundations of modern civilization through bridges, roads, and transit systems.',
    image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=600&q=80',
    icon: Building,
    href: '/services/urban-solutions',
  },
];

export default function ServiceCards() {
  return (
    <section className="relative z-20 -mt-40 pb-20">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-card rounded-card overflow-hidden card-hover group"
              >
                {/* Image */}
                <div className="relative h-48 img-zoom">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep to-transparent" />
                  {/* Icon in top-right corner */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>
                </div>
                {/* Body */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium text-white mb-3">{card.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">{card.description}</p>
                  <Link href={card.href} className="btn-pill-white">
                    Discover More <ArrowRight size={16} />
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
