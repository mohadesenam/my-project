import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const services = await prisma.service.findMany({ orderBy: { id: 'asc' } });
  return NextResponse.json({ data: services });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const service = await prisma.service.create({
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
