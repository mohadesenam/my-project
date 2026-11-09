import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const projects = await prisma.project.findMany({ orderBy: { id: 'desc' } });
  return NextResponse.json({ data: projects });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const project = await prisma.project.create({
    data: {
      title: body.title,
      slug: body.slug,
      category: body.category,
      description: body.description,
      location: body.location,
      year: body.year,
      client: body.client,
      area: body.area,
      coverImage: body.coverImage,
      gallery: body.gallery || '[]',
      featured: body.featured || false,
    },
  });
  return NextResponse.json({ data: project });
}
