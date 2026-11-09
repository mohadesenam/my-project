'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Search, MapPin, ArrowRight } from 'lucide-react';

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

const categories = ['All', 'Infrastructure', 'Commercial', 'Urban', 'Residential'];

export default function ProjectsExplorer({ projects }: { projects: ProjectData[] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [projects, activeCategory, search]);

  return (
    <section className="bg-ghost py-24">
      <div className="section-padding">
        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 bg-white text-ink-dark placeholder-ink-muted/50 focus:outline-none focus:border-accent"
            />
          </div>
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-lg font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-accent text-white shadow-glow'
                    : 'bg-white text-ink-muted hover:bg-accent/10 hover:text-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/projects/${project.slug}`} className="group block rounded-card overflow-hidden bg-white shadow-card card-hover">
                  <div className="relative h-64 img-zoom">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.coverImage}
                      alt={`${project.title} — ${project.location}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent/90 text-white text-xs font-sans font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <div className="absolute inset-0 bg-navy-deep/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="btn-primary !bg-accent">
                        View Project <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-medium text-ink-dark mb-2">{project.title}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between text-ink-muted text-sm">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> {project.location}
                      </span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-ink-muted text-lg">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
