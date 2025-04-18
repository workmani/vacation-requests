import { PrismaClient } from '@/lib/generated/prisma';

// Prevent multiple instances of Prisma Client in development
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// Export a singleton instance of Prisma Client
export const prisma = globalForPrisma.prisma || new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

// If we're not in production, attach the Prisma instance to the global object
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// For use in API routes
export default prisma; 