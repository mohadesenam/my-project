import { prisma } from '@/lib/prisma';
import Hero from '@/components/home/Hero';
import ServiceCards from '@/components/home/ServiceCards';
import AboutExpertise from '@/components/home/AboutExpertise';
import FeaturedProjects from '@/components/home/FeaturedProjects';

export default async function HomePage() {
  const featuredProjects = await prisma.project.findMany({
    where: { featured: true },
    take: 3,
  });

  return (
    <>
      <Hero />
      <ServiceCards />
      <AboutExpertise />
      <FeaturedProjects projects={featuredProjects} />
    </>
  );
}
