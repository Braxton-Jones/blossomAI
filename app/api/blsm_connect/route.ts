import { NextResponse } from "next/server";

export async function POST(req: Request, {}) {
  const body = await req.json();
  console.log('Received data:', body);
  return NextResponse.next();
}