import { prisma } from '@/lib/prisma';
import PageHero from '@/components/PageHero';
import AboutContent from '@/components/AboutContent';

export const metadata = {
  title: 'About Us',
  description: 'Learn about STRATECH — our story, mission, vision, core values, and the expert team behind our engineering excellence.',
};

export default async function AboutPage() {
  const team = await prisma.teamMember.findMany({
    orderBy: { order: 'asc' },
  });

  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About STRATECH"
        subtitle="Building the future with expertise and excellence since 2009."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
      />
      <AboutContent team={team} />
    </>
  );
}
