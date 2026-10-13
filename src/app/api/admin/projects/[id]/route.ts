import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json();
  const project = await prisma.project.update({
    where: { id: parseInt(params.id) },
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
      gallery: body.gallery,
      featured: body.featured,
    },
  });
  return NextResponse.json({ data: project });
}

export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  await prisma.project.delete({ where: { id: parseInt(params.id) } });
  return NextResponse.json({ success: true });
}
