'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

type ProjectData = {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  location: string;
  year: string;
  coverImage: string;
};

export default function FeaturedProjects({ projects }: { projects: ProjectData[] }) {
  return (
    <section className="bg-navy-deep py-24 relative overflow-hidden">
      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
      </div>

      <div className="section-padding relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="heading-eyebrow">Our Work</span>
            <h2 className="font-serif text-3xl lg:text-5xl font-medium text-white">Featured Projects</h2>
          </div>
          <p className="text-white/50 text-base max-w-md leading-relaxed">
            From soaring skyscrapers to monumental infrastructure, explore the projects that define our legacy of engineering excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link href={`/projects/${project.slug}`} className="group block rounded-card overflow-hidden glass-card card-hover">
                {/* Image */}
                <div className="relative h-64 img-zoom">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.coverImage}
                    alt={`${project.title} — ${project.location}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent" />
                  {/* Category badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent/90 text-white text-xs font-sans font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                {/* Body */}
                <div className="p-6 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-medium text-white mb-2">{project.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  {/* Circular arrow icon */}
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-accent flex items-center justify-center group-hover:bg-bright transition-colors duration-300">
                    <ArrowRight size={18} className="text-white" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <Link href="/projects" className="btn-outline">
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
