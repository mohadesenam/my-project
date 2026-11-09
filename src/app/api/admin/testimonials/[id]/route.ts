import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json();
  const testimonial = await prisma.testimonial.update({
    where: { id: parseInt(params.id) },
    data: {
      name: body.name,
      company: body.company,
      text: body.text,
      rating: body.rating,
      avatar: body.avatar,
    },
  });
  return NextResponse.json({ data: testimonial });
}

export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  await prisma.testimonial.delete({ where: { id: parseInt(params.id) } });
  return NextResponse.json({ success: true });
}
