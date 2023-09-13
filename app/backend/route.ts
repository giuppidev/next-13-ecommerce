import { NextResponse } from "next/server";

export async function GET() {
  console.log("SERVER");

  return NextResponse.json({ data: "server" });
}

export async function POST() {
  console.log("SERVER");

  return NextResponse.json({ data: "server" });
}
