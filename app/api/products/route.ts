import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const products = await prisma.product.findMany();

  return NextResponse.json({ products });
}

export async function POST() {
  console.log("SERVER");

  return NextResponse.json({ data: "server" });
}

export async function DELETE() {}
