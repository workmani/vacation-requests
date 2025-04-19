import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db'; // Revert back to using the shared instance

export async function GET(_request: Request) {
  // Remove direct instantiation
  try {
    // Remove test logging
    const users = await prisma.user.findMany({});
    return NextResponse.json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    // Remove disconnect logic for shared instance
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  } 
  // Remove finally block
} 