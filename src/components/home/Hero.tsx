'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1619796404374-aff912b43cd2?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/60 to-navy-deep/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-navy-deep/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="section-padding relative z-10 pt-28 pb-40 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-semibold text-white leading-[1.2] mb-5">
            Advancing Innovative
            <br />
            Engineering &amp; Construction
          </h1>
          <p className="text-base sm:text-lg text-white/75 font-sans font-light max-w-lg mb-7">
            Building the future with expertise and excellence.
          </p>
          <Link href="/about" className="btn-primary">
            Learn More <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
