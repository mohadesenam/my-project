'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden bg-navy-deep">
      {/* Background image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-mid/80" />
      </div>

      <div className="section-padding relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-3xl lg:text-5xl font-light text-white mb-6">
            Ready to build the future with us?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how STRATECH can bring your vision to life with engineering excellence and construction mastery.
          </p>
          <Link href="/contact" className="btn-primary !px-8 !py-4 !text-base">
            Contact Us <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
