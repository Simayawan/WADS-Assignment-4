import { NextResponse } from 'next/server';
import { features } from '@/lib/db';

export async function GET() {
  return NextResponse.json(features, { status: 200 });
}

export async function POST(request: Request) {
  const body = await request.json();
  const newFeature = { id: Date.now(), ...body };
  // In dummy data, we just return the success
  return NextResponse.json({ message: "Feature Added", data: newFeature }, { status: 201 });
}