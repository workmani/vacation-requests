import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(_request: Request) {
  try {
    const departments = await prisma.department.findMany({
      // Add ordering or other options if needed
      orderBy: {
        name: 'asc', 
      }
    });
    return NextResponse.json({ departments });
  } catch (error) {
    console.error("Error fetching departments:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
} 