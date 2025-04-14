# Database Migrations Guide

This document outlines the process for managing database migrations in the Vacation Request application.

## Development Environment

### Setup PostgreSQL

1. Install PostgreSQL:
   - Windows: Download and install from [PostgreSQL official site](https://www.postgresql.org/download/windows/)
   - Mac: `brew install postgresql`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. Create a database:
   ```sql
   CREATE DATABASE vacation_request;
   ```

3. Update your `.env` file with the correct connection string:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/vacation_request?schema=public"
   ```

### Creating Migrations

To create a new migration after schema changes:

```bash
npx prisma migrate dev --name <migration_name>
```

This command will:
1. Save the current schema state
2. Generate SQL migration files in `prisma/migrations/`
3. Apply the migration to your development database
4. Generate the Prisma client

### Development Workflow

1. Make changes to the Prisma schema (`schema.prisma`)
2. Run `npx prisma migrate dev --name <descriptive_name>`
3. Review generated SQL in the migrations folder
4. Test the changes with the updated database

### Reset Development Database

If needed, you can reset your development database:

```bash
npx prisma migrate reset
```

This will:
1. Drop the database/schema
2. Create a new database/schema
3. Apply all migrations
4. Run seed scripts (if configured)

## Production Environment

### Applying Migrations to Production

**NEVER use `migrate dev` in production.** Instead:

```bash
npx prisma migrate deploy
```

This command:
1. Applies pending migrations without generating new ones
2. Is safe for production use
3. Won't drop the database or cause data loss

### Deployment Process

1. Include migration as part of your CI/CD pipeline
2. Set production DATABASE_URL as an environment variable in your hosting environment
3. Run `npx prisma migrate deploy` during deployment
4. Generate the Prisma client with `npx prisma generate`

Example deployment script:

```bash
#!/bin/bash
# Apply any pending migrations
npx prisma migrate deploy
# Generate Prisma client
npx prisma generate
# Start the application
npm start
```

### Rollback Strategy

Prisma doesn't provide built-in rollback functionality. Instead:

1. Create a new "rollback" migration that reverses the changes
2. Apply this new migration using `npx prisma migrate deploy`

For emergency rollbacks:
1. Keep backups of your production database
2. Restore the backup if a migration fails

## Migration Best Practices

1. Make small, incremental changes
2. Always review generated SQL before applying to production
3. Test migrations on a staging environment first
4. Add comments to complex migrations
5. Never modify an existing migration that has been applied
6. Create new migrations for any changes
7. Document breaking changes clearly

## Common Tasks

### Add a New Field

```prisma
model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  name  String
  // Add new field
  phone String?
}
```

### Create a New Index

```prisma
model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  name  String

  @@index([name])
}
```

### Modify a Field Type

This requires special attention as it might cause data loss. Always create a migration plan:

1. Add a new field
2. Write a script to copy data from old field to new field
3. Update application to use new field
4. When ready, remove the old field

### Add a Relation

```prisma
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  // Add relation
  authorId  Int
  author    User     @relation(fields: [authorId], references: [id])
}
```

## Troubleshooting

### Migration Failed

If a migration fails:

1. Check the error message
2. Fix the issue in your schema
3. Run `npx prisma migrate dev` again

### Database Out of Sync

If your database and Prisma schema are out of sync:

```bash
npx prisma migrate reset --force
```

**Warning**: This will delete all data in the development database.

### Conflict with Existing Migration

If you have conflicts with an existing migration:

1. Never modify existing migrations
2. Create a new migration that fixes the problem
3. If in development and safe to do so, reset your database 