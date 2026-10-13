'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram, Facebook, Send } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-navy-deep text-white pt-20 pb-8">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div>
            <Logo className="mb-4" />
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Advancing innovative engineering and construction worldwide. Building the future with expertise and excellence since 2009.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"
                  aria-label="Social media"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/projects', label: 'Projects' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 text-sm hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white mb-5">Services</h3>
            <ul className="space-y-3">
              {['Infrastructure', 'Commercial Buildings', 'Urban Solutions', 'Residential', 'Project Management', 'Consulting'].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-white/60 text-sm hover:text-accent transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white mb-5">Stay Updated</h3>
            <p className="text-white/60 text-sm mb-4">Subscribe to our newsletter for the latest projects and insights.</p>
            <form onSubmit={subscribe} className="flex gap-2 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm placeholder-white/40 focus:outline-none focus:border-accent"
                required
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-lg bg-accent hover:bg-accent-hover transition-colors"
                aria-label="Subscribe"
                disabled={status === 'loading'}
              >
                <Send size={16} />
              </button>
            </form>
            {status === 'success' && (
              <p className="text-green-400 text-xs">Subscribed! Thank you.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-xs">Something went wrong. Try again.</p>
            )}
            <div className="mt-6 space-y-2 text-white/60 text-sm">
              <p>123 Engineering Plaza, Dubai, UAE</p>
              <p>+971 4 123 4567</p>
              <p>info@stratech.com</p>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} STRATECH. All rights reserved.</p>
          <div className="flex gap-6 text-white/40 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/admin" className="hover:text-white transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
