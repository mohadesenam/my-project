import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json();
  const member = await prisma.teamMember.update({
    where: { id: parseInt(params.id) },
    data: {
      name: body.name,
      role: body.role,
      bio: body.bio,
      photo: body.photo,
      linkedin: body.linkedin,
      order: body.order,
    },
  });
  return NextResponse.json({ data: member });
}

export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  await prisma.teamMember.delete({ where: { id: parseInt(params.id) } });
  return NextResponse.json({ success: true });
}
