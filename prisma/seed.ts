import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const services = [
  {
    title: 'Infrastructure Development',
    slug: 'infrastructure-development',
    shortDescription: 'Building the foundations of modern civilization through bridges, roads, and transit systems.',
    fullDescription: 'Our infrastructure development division delivers large-scale transportation, utility, and public works projects. From suspension bridges to highway interchanges, we combine structural engineering excellence with cutting-edge construction methodologies to build infrastructure that stands the test of time.',
    icon: 'Construction',
    image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=800&q=80',
  },
  {
    title: 'Commercial Buildings',
    slug: 'commercial-buildings',
    shortDescription: 'Iconic corporate towers and commercial complexes that define city skylines.',
    fullDescription: 'We specialize in the design and construction of premium commercial properties — from glass-clad office towers to mixed-use developments. Our approach integrates sustainable design, smart building systems, and architectural distinction to create workplaces that inspire.',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    title: 'Urban Solutions',
    slug: 'urban-solutions',
    shortDescription: 'Smart city planning and urban development for growing metropolitan areas.',
    fullDescription: 'Our urban solutions team tackles the complex challenges of modern city growth. We deliver master plans, transit-oriented developments, and smart infrastructure systems that make cities more livable, efficient, and sustainable for future generations.',
    icon: 'Building',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80',
  },
  {
    title: 'Residential Projects',
    slug: 'residential-projects',
    shortDescription: 'Luxury residential complexes and sustainable housing communities.',
    fullDescription: 'From high-rise luxury apartments to master-planned residential communities, we create living spaces that balance comfort, aesthetics, and sustainability. Our residential projects are designed to enhance quality of life while meeting the highest standards of construction excellence.',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  },
  {
    title: 'Project Management',
    slug: 'project-management',
    shortDescription: 'End-to-end project management ensuring on-time, on-budget delivery.',
    fullDescription: 'Our certified project managers oversee every phase of construction — from initial planning and procurement to execution and handover. Using advanced project controls, risk management, and real-time tracking, we ensure complex projects are delivered with precision.',
    icon: 'ClipboardList',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    title: 'Engineering Consulting',
    slug: 'engineering-consulting',
    shortDescription: 'Expert engineering consulting for structural, civil, and MEP disciplines.',
    fullDescription: 'Our engineering consultants provide specialized expertise across structural, civil, mechanical, electrical, and plumbing disciplines. We offer feasibility studies, structural assessments, value engineering, and technical advisory services to de-risk and optimize your construction projects.',
    icon: 'Compass',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4d6f4a?w=800&q=80',
  },
];

const projects = [
  {
    title: 'Skyline Tower',
    slug: 'skyline-tower',
    category: 'Commercial',
    description: 'A 62-story commercial skyscraper featuring a state-of-the-art glass curtain wall and integrated smart building systems. This iconic tower serves as a landmark in the city\'s financial district.',
    location: 'Dubai, UAE',
    year: '2023',
    client: 'Meridian Holdings',
    area: '185,000 m²',
    coverImage: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&q=80',
    gallery: JSON.stringify([
      'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
      'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&q=80',
    ]),
    featured: true,
  },
  {
    title: 'Corporate Headquarters',
    slug: 'corporate-headquarters',
    category: 'Commercial',
    description: 'A modern corporate campus designed for a global technology company, featuring open-plan offices, sustainable materials, and a striking geometric facade.',
    location: 'Singapore',
    year: '2022',
    client: 'NexTech Corporation',
    area: '92,000 m²',
    coverImage: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&q=80',
    gallery: JSON.stringify([
      'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
      'https://images.unsplash.com/photo-1605132789311-92530f3c1e13?w=800&q=80',
    ]),
    featured: true,
  },
  {
    title: 'International Business Center',
    slug: 'international-business-center',
    category: 'Urban',
    description: 'A mixed-use development combining office space, retail, and a luxury hotel in a sweeping curvilinear form that has become an architectural icon.',
    location: 'London, UK',
    year: '2023',
    client: 'Crown Estates',
    area: '140,000 m²',
    coverImage: 'https://images.unsplash.com/photo-1605132789311-92530f3c1e13?w=800&q=80',
    gallery: JSON.stringify([
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=800&q=80',
      'https://images.unsplash.com/photo-1546484959-f9a381d1330d?w=800&q=80',
    ]),
    featured: true,
  },
  {
    title: 'Harbor Bridge Expansion',
    slug: 'harbor-bridge-expansion',
    category: 'Infrastructure',
    description: 'A major suspension bridge expansion connecting two metropolitan areas, featuring advanced seismic engineering and a cable-stayed design spanning 2.4 kilometers.',
    location: 'Istanbul, Türkiye',
    year: '2021',
    client: 'Ministry of Transport',
    area: '2.4 km span',
    coverImage: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=800&q=80',
    gallery: JSON.stringify([
      'https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=800&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    ]),
    featured: false,
  },
  {
    title: 'Marina Heights Residences',
    slug: 'marina-heights-residences',
    category: 'Residential',
    description: 'A luxury residential tower complex with 480 units, waterfront views, and integrated amenities including a marina, spa, and sky gardens.',
    location: 'Abu Dhabi, UAE',
    year: '2022',
    client: 'Vantage Developments',
    area: '78,000 m²',
    coverImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    gallery: JSON.stringify([
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=800&q=80',
    ]),
    featured: false,
  },
  {
    title: 'Central Transit Hub',
    slug: 'central-transit-hub',
    category: 'Urban',
    description: 'A modern multi-modal transit interchange integrating rail, bus, and metro lines with a soaring steel-and-glass canopy and public plaza.',
    location: 'Berlin, Germany',
    year: '2023',
    client: 'City of Berlin',
    area: '45,000 m²',
    coverImage: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80',
    gallery: JSON.stringify([
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80',
      'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80',
    ]),
    featured: false,
  },
];

const teamMembers = [
  { name: 'Daniel Hartwell', role: 'CEO & Founder', bio: 'With over 25 years in engineering leadership, Daniel founded STRATECH to redefine construction excellence.', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80', linkedin: 'https://linkedin.com', order: 1 },
  { name: 'Sophia Chen', role: 'Chief Engineer', bio: 'Sophia leads our structural engineering division, bringing expertise in seismic design and sustainable materials.', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', linkedin: 'https://linkedin.com', order: 2 },
  { name: 'Marcus Reid', role: 'Director of Operations', bio: 'Marcus oversees project delivery across 30+ countries, ensuring every build meets our quality standards.', photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80', linkedin: 'https://linkedin.com', order: 3 },
  { name: 'Amara Okafor', role: 'Head of Urban Planning', bio: 'Amara specializes in smart city design and transit-oriented development for growing metropolitan areas.', photo: 'https://i.pravatar.cc/400?img=44', linkedin: 'https://linkedin.com', order: 4 },
];

const testimonials = [
  { name: 'James Whitfield', company: 'Meridian Holdings', text: 'STRATECH delivered our headquarters ahead of schedule and beyond expectations. Their attention to detail and engineering precision is unmatched in the industry.', rating: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
  { name: 'Elena Vasquez', company: 'Crown Estates', text: 'Working with STRATECH transformed our vision into reality. Their team handled every challenge with professionalism and innovative solutions.', rating: 5, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
  { name: 'Raj Patel', company: 'NexTech Corporation', text: 'The International Business Center project was complex, but STRATECH managed it flawlessly. Communication was excellent throughout.', rating: 5, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' },
];

async function main() {
  console.log('Seeding database...');

  for (const s of services) {
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: {},
      create: s,
    });
  }

  for (const p of projects) {
    await prisma.project.upsert({
      where: { slug: p.slug },
      update: p,
      create: p,
    });
  }

  for (const t of teamMembers) {
    const existing = await prisma.teamMember.findFirst({ where: { name: t.name } });
    if (!existing) await prisma.teamMember.create({ data: t });
  }

  for (const t of testimonials) {
    const existing = await prisma.testimonial.findFirst({ where: { name: t.name } });
    if (!existing) await prisma.testimonial.create({ data: t });
  }

  console.log('Seed complete.');
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
