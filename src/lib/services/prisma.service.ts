/**
 * PrismaService
 * 
 * Service that initializes and provides access to the Prisma client.
 * This is a singleton service to avoid multiple connections to the database.
 */

import { PrismaClient } from '../../lib/generated/prisma/index';

// Add additional Prisma middleware or extensions here
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });
};

// Define the global type for PrismaClient
declare global {
  // eslint-disable-next-line no-var
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

// Use a global variable to store the client in development to prevent
// multiple instances during hot reloading
export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

export default prisma; 