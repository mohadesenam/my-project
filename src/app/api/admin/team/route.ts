import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const team = await prisma.teamMember.findMany({ orderBy: { order: 'asc' } });
  return NextResponse.json({ data: team });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const member = await prisma.teamMember.create({
    data: {
      name: body.name,
      role: body.role,
      bio: body.bio,
      photo: body.photo,
      linkedin: body.linkedin || null,
      order: body.order || 0,
    },
  });
  return NextResponse.json({ data: member });
}
