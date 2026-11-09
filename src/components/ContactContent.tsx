'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'What types of projects does STRATECH handle?', a: 'We handle a wide range of projects including infrastructure development, commercial buildings, urban solutions, residential projects, and engineering consulting across 30 countries.' },
  { q: 'How can I request a quote for my project?', a: 'Simply fill out the contact form on this page with your project details, or call us directly. Our team will respond within 24 hours with next steps.' },
  { q: 'Does STRATECH offer sustainable building solutions?', a: 'Yes. We are committed to 100% LEED-certified construction practices and offer comprehensive sustainable building solutions across all our services.' },
  { q: 'What is your typical project timeline?', a: 'Project timelines vary based on scope and complexity. During our initial consultation, we provide a detailed timeline with milestones for your specific project.' },
  { q: 'Can STRATECH handle international projects?', a: 'Absolutely. We have completed projects in 30+ countries and have the infrastructure and expertise to deliver anywhere in the world.' },
];

export default function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', serviceType: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', serviceType: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const contactInfo = [
    { icon: MapPin, label: 'Address', value: '123 Engineering Plaza, Dubai, UAE' },
    { icon: Phone, label: 'Phone', value: '+971 4 123 4567' },
    { icon: Mail, label: 'Email', value: 'info@stratech.com' },
    { icon: Clock, label: 'Working Hours', value: 'Sun–Thu, 8:00 AM – 6:00 PM' },
  ];

  const serviceTypes = [
    'Infrastructure Development',
    'Commercial Buildings',
    'Urban Solutions',
    'Residential Projects',
    'Project Management',
    'Engineering Consulting',
  ];

  return (
    <section className="bg-ghost py-24">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="heading-eyebrow">Send a Message</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-ink-dark mb-8">Let's Build Together</h2>

            {status === 'success' ? (
              <div className="rounded-card bg-green-50 border border-green-200 p-8 text-center">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-sans font-bold text-ink-dark text-lg mb-2">Message Sent!</h3>
                <p className="text-ink-muted text-sm mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="btn-outline-dark">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-ink-dark text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border bg-white text-ink-dark focus:outline-none transition-colors ${errors.name ? 'border-red-400' : 'border-gray-200 focus:border-accent'}`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-ink-dark text-sm font-semibold mb-2">Email *</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-ink-dark focus:outline-none transition-colors ${errors.email ? 'border-red-400' : 'border-gray-200 focus:border-accent'}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-ink-dark text-sm font-semibold mb-2">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-ink-dark focus:outline-none focus:border-accent"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="serviceType" className="block text-ink-dark text-sm font-semibold mb-2">Service Type</label>
                  <select
                    id="serviceType"
                    value={form.serviceType}
                    onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-ink-dark focus:outline-none focus:border-accent"
                  >
                    <option value="">Select a service...</option>
                    {serviceTypes.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-ink-dark text-sm font-semibold mb-2">Message *</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border bg-white text-ink-dark focus:outline-none transition-colors resize-none ${errors.message ? 'border-red-400' : 'border-gray-200 focus:border-accent'}`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or call us directly.</p>
                )}
              </form>
            )}
          </motion.div>

          {/* Right — Info + Map + FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Contact info */}
            <div className="bg-white rounded-card shadow-card p-8 mb-8">
              <h3 className="font-serif text-2xl font-medium text-ink-dark mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="text-ink-muted text-xs uppercase tracking-wider font-semibold mb-1">{info.label}</h4>
                        <p className="text-ink-dark font-sans font-medium">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-card overflow-hidden shadow-card mb-8 h-64 bg-navy-deep relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-accent mx-auto mb-3" />
                  <p className="text-white/60 text-sm">Dubai, United Arab Emirates</p>
                  <p className="text-white/40 text-xs mt-1">Interactive map coming soon</p>
                </div>
              </div>
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'linear-gradient(rgba(31,95,214,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(31,95,214,0.3) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }} />
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-card shadow-card p-8">
              <h3 className="font-serif text-2xl font-medium text-ink-dark mb-6">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-gray-100 last:border-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between py-4 text-left"
                      aria-expanded={openFaq === i}
                    >
                      <span className="font-sans font-semibold text-ink-dark text-sm">{faq.q}</span>
                      <ChevronDown size={18} className={`text-accent flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <p className="text-ink-muted text-sm leading-relaxed pb-4">{faq.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
