'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Linkedin } from 'lucide-react';

type TeamMemberData = {
  id: number;
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin: string | null;
};

const values = [
  { icon: Target, title: 'Precision', desc: 'Every measurement, every calculation, every weld — executed with exacting precision.' },
  { icon: Heart, title: 'Integrity', desc: 'We build trust the same way we build structures: with honesty and transparency.' },
  { icon: Eye, title: 'Innovation', desc: 'Constantly pushing the boundaries of engineering and construction technology.' },
  { icon: Target, title: 'Excellence', desc: 'We never settle for good enough. Our standard is nothing short of exceptional.' },
];

const milestones = [
  { year: '2009', title: 'Founded', desc: 'STRATECH established with a vision to redefine engineering excellence.' },
  { year: '2013', title: 'First Skyscraper', desc: 'Completed our first 50+ story commercial tower in Dubai.' },
  { year: '2017', title: 'Global Expansion', desc: 'Expanded operations to 15 countries across three continents.' },
  { year: '2020', title: 'Sustainability Pledge', desc: 'Committed to 100% LEED-certified construction practices.' },
  { year: '2024', title: '250+ Projects', desc: 'Surpassed 250 completed projects with zero structural failures.' },
];

export default function AboutContent({ team }: { team: TeamMemberData[] }) {
  return (
    <>
      {/* Story */}
      <section className="bg-ghost py-24">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="heading-eyebrow">Our Journey</span>
              <h2 className="font-serif text-3xl lg:text-4xl font-medium text-ink-dark mb-6">Company Story</h2>
              <p className="text-ink-muted text-base leading-relaxed mb-4">
                Founded in 2009, STRATECH began with a simple yet ambitious vision: to redefine what&apos;s possible in engineering and construction. What started as a small team of passionate engineers has grown into a global powerhouse with operations spanning 30 countries.
              </p>
              <p className="text-ink-muted text-base leading-relaxed mb-4">
                Over 15 years, we&apos;ve delivered more than 250 landmark projects — from soaring skyscrapers to monumental infrastructure. Each project reflects our unwavering commitment to precision, innovation, and sustainability.
              </p>
              <p className="text-ink-muted text-base leading-relaxed">
                Today, STRATECH stands as a symbol of engineering excellence, trusted by governments, corporations, and communities worldwide to build the structures that shape our world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-card overflow-hidden img-zoom shadow-card"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
                alt="STRATECH construction project"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-navy-deep py-24">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-card p-10"
            >
              <Target size={40} className="text-accent mb-6" />
              <h3 className="font-serif text-2xl font-medium text-white mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">
                To deliver engineering and construction solutions that exceed expectations, advance the built environment, and contribute to sustainable development across the globe — building structures that stand as testaments to human ingenuity.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card rounded-card p-10"
            >
              <Eye size={40} className="text-accent mb-6" />
              <h3 className="font-serif text-2xl font-medium text-white mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">
                To be the world&apos;s most trusted engineering and construction partner — recognized for innovation, sustainability, and the transformative impact of our projects on communities and skylines worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-ghost py-24">
        <div className="section-padding">
          <div className="text-center mb-16">
            <span className="heading-eyebrow">What Drives Us</span>
            <h2 className="font-serif text-3xl lg:text-5xl font-light text-ink-dark">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-card p-8 shadow-card card-hover text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-5">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-sans font-bold text-ink-dark text-lg mb-3">{value.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-white py-24">
        <div className="section-padding">
          <div className="text-center mb-16">
            <span className="heading-eyebrow">Our Journey</span>
            <h2 className="font-serif text-3xl lg:text-5xl font-light text-ink-dark">Milestones</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/30" aria-hidden="true" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent -translate-x-1/2 ring-4 ring-ghost" />
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="font-serif text-2xl text-accent font-medium">{m.year}</span>
                    <h3 className="font-sans font-bold text-ink-dark text-lg mt-1 mb-2">{m.title}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed">{m.desc}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-ghost py-24">
        <div className="section-padding">
          <div className="text-center mb-16">
            <span className="heading-eyebrow">Meet The Team</span>
            <h2 className="font-serif text-3xl lg:text-5xl font-light text-ink-dark">Leadership</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-card overflow-hidden shadow-card card-hover group"
              >
                <div className="relative h-72 img-zoom">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin size={18} className="text-white" />
                    </a>
                  )}
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-sans font-bold text-ink-dark text-lg mb-1">{member.name}</h3>
                  <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">{member.role}</p>
                  <p className="text-ink-muted text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications strip */}
      <section className="bg-navy-deep py-16">
        <div className="section-padding text-center">
          <h3 className="font-sans font-semibold text-white/60 text-sm uppercase tracking-[0.15em] mb-8">Certified & Partnered With</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {['ISO 9001', 'LEED Certified', 'OSHA Safety', 'PMI Certified', 'RICS Member'].map((cert) => (
              <div key={cert} className="text-white/40 font-serif text-xl font-medium">{cert}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
