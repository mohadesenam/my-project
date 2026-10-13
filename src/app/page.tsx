import { prisma } from '@/lib/prisma';
import Hero from '@/components/home/Hero';
import ServiceCards from '@/components/home/ServiceCards';
import StatsBar from '@/components/home/StatsBar';
import AboutExpertise from '@/components/home/AboutExpertise';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ProcessSection from '@/components/home/ProcessSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import CTABanner from '@/components/home/CTABanner';

export default async function HomePage() {
  const [featuredProjects, testimonials] = await Promise.all([
    prisma.project.findMany({
      where: { featured: true },
      take: 3,
    }),
    prisma.testimonial.findMany(),
  ]);

  return (
    <>
      <Hero />
      <ServiceCards />
      <StatsBar />
      <AboutExpertise />
      <FeaturedProjects projects={featuredProjects} />
      <ProcessSection />
      <WhyChooseUs />
      <Testimonials testimonials={testimonials} />
      <CTABanner />
    </>
  );
}
