import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json();
  const message = await prisma.contactMessage.update({
    where: { id: parseInt(params.id) },
    data: { status: body.status },
  });
  return NextResponse.json({ data: message });
}

export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  await prisma.contactMessage.delete({ where: { id: parseInt(params.id) } });
  return NextResponse.json({ success: true });
}
