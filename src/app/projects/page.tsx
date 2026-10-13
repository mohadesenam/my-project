import { prisma } from '@/lib/prisma';
import PageHero from '@/components/PageHero';
import ProjectsExplorer from '@/components/ProjectsExplorer';

export const metadata = {
  title: 'Projects',
  description: 'Explore STRATECH portfolio of engineering and construction projects across infrastructure, commercial, urban, and residential sectors.',
};

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { id: 'desc' },
  });

  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Projects"
        subtitle="A showcase of landmark engineering and construction projects delivered worldwide."
        image="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=1920&q=80"
      />
      <ProjectsExplorer projects={projects} />
    </>
  );
}
