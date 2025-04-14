#!/usr/bin/env node

/**
 * Production migration script for Vacation Request application
 * 
 * This script handles database migrations in production environments.
 * It uses Prisma's migrate deploy command which safely applies pending
 * migrations without generating new ones or resetting the database.
 * 
 * Usage:
 *   node scripts/migrate-production.js
 * 
 * Environment variables:
 *   DATABASE_URL - PostgreSQL connection string (required)
 *   MIGRATION_TIMEOUT - Timeout in seconds (default: 30)
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Configuration
const timeout = process.env.MIGRATION_TIMEOUT || 30;
const timeoutMs = timeout * 1000;

// Validate environment
if (!process.env.DATABASE_URL) {
  console.error('❌ ERROR: DATABASE_URL environment variable is required');
  process.exit(1);
}

// Ensure we're running from the project root
const packageJsonPath = path.resolve(process.cwd(), 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ ERROR: Script must be run from the project root directory');
  process.exit(1);
}

console.log('🔄 Starting production database migration');

try {
  // Apply migrations
  console.log('📦 Applying pending migrations...');
  
  execSync('npx prisma migrate deploy', { 
    stdio: 'inherit',
    timeout: timeoutMs
  });
  
  // Generate Prisma client
  console.log('🔧 Generating Prisma client...');
  
  execSync('npx prisma generate', { 
    stdio: 'inherit',
    timeout: timeoutMs
  });
  
  console.log('✅ Migration completed successfully');
} catch (error) {
  console.error('❌ Migration failed:', error.message);
  process.exit(1);
} 