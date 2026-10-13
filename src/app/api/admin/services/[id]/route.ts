import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json();
  const service = await prisma.service.update({
    where: { id: parseInt(params.id) },
    data: {
      title: body.title,
      slug: body.slug,
      shortDescription: body.shortDescription,
      fullDescription: body.fullDescription,
      icon: body.icon,
      image: body.image,
    },
  });
  return NextResponse.json({ data: service });
}

export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  await prisma.service.delete({ where: { id: parseInt(params.id) } });
  return NextResponse.json({ success: true });
}
