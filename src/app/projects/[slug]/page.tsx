import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { ArrowLeft, MapPin, Calendar, User, Maximize, ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
  const projects = await prisma.project.findMany();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await prisma.project.findUnique({ where: { slug: params.slug } });
  if (!project) return { title: 'Project Not Found' };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await prisma.project.findUnique({ where: { slug: params.slug } });
  if (!project) notFound();

  const related = await prisma.project.findMany({
    where: {
      category: project.category,
      slug: { not: project.slug },
    },
    take: 3,
  });

  const gallery: string[] = JSON.parse(project.gallery || '[]');

  const specs = [
    { icon: MapPin, label: 'Location', value: project.location },
    { icon: Calendar, label: 'Year', value: project.year },
    { icon: User, label: 'Client', value: project.client },
    { icon: Maximize, label: 'Area', value: project.area },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden pt-20">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.coverImage} alt={`${project.title} — ${project.location}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-navy-deep/30" />
        </div>
        <div className="section-padding relative z-10 pb-12">
          <span className="px-3 py-1 rounded-full bg-accent text-white text-xs font-sans font-semibold uppercase tracking-wider mb-4 inline-block">
            {project.category}
          </span>
          <h1 className="font-serif text-4xl lg:text-6xl font-light text-white">{project.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-ghost py-24">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl lg:text-3xl font-medium text-ink-dark mb-6">Project Overview</h2>
              <p className="text-ink-muted text-base leading-relaxed mb-12">{project.description}</p>

              {/* Gallery */}
              {gallery.length > 0 && (
                <>
                  <h2 className="font-serif text-2xl lg:text-3xl font-medium text-ink-dark mb-6">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {gallery.map((img, i) => (
                      <div key={i} className="rounded-card overflow-hidden img-zoom h-64">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img} alt={`${project.title} gallery image ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </>
              )}

              <Link href="/projects" className="btn-outline-dark">
                <ArrowLeft size={18} /> Back to Projects
              </Link>
            </div>

            {/* Specs sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-card shadow-card p-8 sticky top-28">
                <h3 className="font-sans font-bold text-ink-dark text-lg mb-6">Project Details</h3>
                <dl className="space-y-5">
                  {specs.map((spec) => {
                    const Icon = spec.icon;
                    return (
                      <div key={spec.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon size={18} className="text-accent" />
                        </div>
                        <div>
                          <dt className="text-ink-muted text-xs uppercase tracking-wider font-semibold mb-1">{spec.label}</dt>
                          <dd className="text-ink-dark font-sans font-medium">{spec.value}</dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="bg-navy-deep py-24">
          <div className="section-padding">
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-white mb-12">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link key={rp.id} href={`/projects/${rp.slug}`} className="group block rounded-card overflow-hidden glass-card card-hover">
                  <div className="relative h-56 img-zoom">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={rp.coverImage} alt={rp.title} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-medium text-white mb-2">{rp.title}</h3>
                    <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider">
                      View Project <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
