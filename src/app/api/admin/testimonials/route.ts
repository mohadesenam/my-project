import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const testimonials = await prisma.testimonial.findMany({ orderBy: { id: 'desc' } });
  return NextResponse.json({ data: testimonials });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const testimonial = await prisma.testimonial.create({
    data: {
      name: body.name,
      company: body.company,
      text: body.text,
      rating: body.rating || 5,
      avatar: body.avatar,
    },
  });
  return NextResponse.json({ data: testimonial });
}
