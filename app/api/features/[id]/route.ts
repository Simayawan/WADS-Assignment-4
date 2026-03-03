import { NextResponse } from 'next/server';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json();
  return NextResponse.json({ message: `Feature ${params.id} updated`, data: body });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ message: `Feature ${params.id} deleted` });
}