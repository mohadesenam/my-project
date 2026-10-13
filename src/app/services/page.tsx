import { prisma } from '@/lib/prisma';
import PageHero from '@/components/PageHero';
import ServicesGrid from '@/components/ServicesGrid';

export const metadata = {
  title: 'Services',
  description: 'Explore STRATECH comprehensive engineering and construction services — from infrastructure development to engineering consulting.',
};

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    orderBy: { id: 'asc' },
  });

  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="Comprehensive engineering and construction solutions delivered with precision, innovation, and excellence."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
      />
      <ServicesGrid services={services} />
    </>
  );
}
