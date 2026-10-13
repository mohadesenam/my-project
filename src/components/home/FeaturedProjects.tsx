'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
    <section className="bg-navy-deep py-16">
      <div className="section-padding">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-white">Featured Projects</h2>
          <p className="text-ink-secondary text-sm max-w-md leading-relaxed">
            From soaring skyscrapers to monumental infrastructure, explore the projects that define our legacy of engineering excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Link href={`/projects/${project.slug}`} className="group block rounded-card overflow-hidden bg-navy-panel card-hover">
                {/* Image */}
                <div className="relative h-44 img-zoom">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.coverImage}
                    alt={`${project.title} — ${project.location}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Body — dark blue panel */}
                <div className="p-5 flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans font-semibold text-white text-base mb-1">{project.title}</h3>
                    <p className="text-ink-secondary text-xs leading-relaxed line-clamp-2">{project.description}</p>
                  </div>
                  {/* Small white outline icon */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
