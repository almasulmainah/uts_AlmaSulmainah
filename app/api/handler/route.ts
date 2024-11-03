import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, message, rating } = await req.json();

  // Data validation
  if (!name || !email || !message || typeof rating !== 'number') {
    return NextResponse.json({ message: 'Data tidak valid' }, { status: 400 });
  }

  // Data processing or storage logic
  console.log('Data yang diterima:', { name, email, message, rating });

  // Return a success response in JSON format
  return NextResponse.json({ message: 'Rating berhasil disimpan' }, { status: 200 });
}

export function OPTIONS() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}