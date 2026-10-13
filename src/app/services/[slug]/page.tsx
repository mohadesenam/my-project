import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export async function generateStaticParams() {
  const services = await prisma.service.findMany();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = await prisma.service.findUnique({ where: { slug: params.slug } });
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = await prisma.service.findUnique({ where: { slug: params.slug } });
  if (!service) notFound();

  const otherServices = await prisma.service.findMany({
    where: { slug: { not: service.slug } },
    take: 3,
  });

  const Icon = (LucideIcons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[service.icon] || LucideIcons.Building2;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden pt-20">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={service.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/30" />
        </div>
        <div className="section-padding relative z-10 pb-12">
          <div className="w-16 h-16 rounded-2xl bg-accent/20 backdrop-blur flex items-center justify-center mb-4">
            <Icon size={32} className="text-accent" />
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl font-light text-white">{service.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-ghost py-24">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl lg:text-3xl font-medium text-ink-dark mb-6">Service Overview</h2>
              <p className="text-ink-muted text-base leading-relaxed mb-8">{service.fullDescription}</p>

              <h3 className="font-sans font-bold text-ink-dark text-lg mb-4">What We Deliver</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Comprehensive feasibility studies and site analysis',
                  'Detailed engineering design and 3D modeling',
                  'Expert project management and execution',
                  'Quality assurance and safety compliance',
                  'Sustainable construction practices',
                  'Post-construction support and maintenance',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-ink-muted">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary">
                Request a Quote
              </Link>
            </div>

            <aside>
              <div className="bg-white rounded-card shadow-card p-8 sticky top-28">
                <h3 className="font-sans font-bold text-ink-dark text-lg mb-6">Other Services</h3>
                <div className="space-y-4">
                  {otherServices.map((s) => (
                    <Link key={s.id} href={`/services/${s.slug}`} className="block group">
                      <h4 className="font-sans font-semibold text-ink-dark text-sm group-hover:text-accent transition-colors">{s.title}</h4>
                      <p className="text-ink-muted text-xs mt-1 line-clamp-2">{s.shortDescription}</p>
                    </Link>
                  ))}
                </div>
                <Link href="/services" className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider mt-6">
                  <ArrowLeft size={16} /> All Services
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
