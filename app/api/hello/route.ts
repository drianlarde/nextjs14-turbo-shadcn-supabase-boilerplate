// Implement API routes here like GET, POST, DELETE, ETC.

import { NextResponse } from "next/server";

// A sample GET method to get a message of 'Hello, world!'
export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}
