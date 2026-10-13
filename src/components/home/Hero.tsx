'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/60 to-navy-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="section-padding relative z-10 pt-32 pb-48 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.15] mb-6">
            Advancing Innovative
            <br />
            Engineering &amp; Construction
          </h1>
          <p className="text-lg sm:text-xl text-white/80 font-sans font-light max-w-xl mb-8">
            Building the future with expertise and excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="btn-primary">
              Learn More <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
