/**
 * MockUserService
 *
 * Ensures mock users exist in the database when USE_MOCK_AUTH is enabled.
 * Auto-creates users, departments, and balances on first API access.
 */

import { Role, TimeOffType } from '../generated/prisma/index';
import prisma from './prisma.service';

const useMockAuth = process.env.USE_MOCK_AUTH === "true";

const MOCK_USERS = {
  EMPLOYEE: {
    email: "frontend@example.com",
    name: "Test Employee",
    role: Role.EMPLOYEE,
    departmentName: "Engineering",
  },
  MANAGER: {
    email: "eng.manager@example.com",
    name: "Test Manager",
    role: Role.MANAGER,
    departmentName: "Engineering",
  },
  ADMIN: {
    email: "admin@example.com",
    name: "Admin User",
    role: Role.ADMIN,
    departmentName: "Human Resources",
  },
} as const;

/**
 * Ensures a mock user exists in the database, creating them (and their
 * department + time-off balances) if needed. Returns the user record.
 *
 * In non-mock mode, falls back to a standard findByEmail lookup.
 */
export async function ensureMockUser(email: string) {
  // If not in mock mode, just do a normal lookup
  if (!useMockAuth) {
    return prisma.user.findUnique({ where: { email } });
  }

  // Check if user already exists
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return existing;

  // Find the matching mock user config
  const mockConfig = Object.values(MOCK_USERS).find(u => u.email === email);
  if (!mockConfig) {
    // Not a known mock user email — fall through
    return null;
  }

  // Ensure the department exists
  let department = await prisma.department.findFirst({
    where: { name: mockConfig.departmentName },
  });
  if (!department) {
    department = await prisma.department.create({
      data: {
        name: mockConfig.departmentName,
        description: `${mockConfig.departmentName} department`,
      },
    });
  }

  // Find or create a manager for employees
  let managerId: string | undefined;
  if (mockConfig.role === Role.EMPLOYEE) {
    const manager = await prisma.user.findFirst({
      where: { role: Role.MANAGER, departmentId: department.id },
    });
    managerId = manager?.id;
  }

  // Create the user
  const user = await prisma.user.create({
    data: {
      email: mockConfig.email,
      name: mockConfig.name,
      role: mockConfig.role,
      password: "mock-no-password",
      departmentId: department.id,
      managerId,
    },
  });

  // Create time-off balances for current year
  const currentYear = new Date().getFullYear();
  const balanceTypes = [
    { type: TimeOffType.VACATION, days: 15 },
    { type: TimeOffType.SICK, days: 10 },
    { type: TimeOffType.PERSONAL, days: 3 },
  ];

  await prisma.timeOffBalance.createMany({
    data: balanceTypes.map(b => ({
      userId: user.id,
      year: currentYear,
      type: b.type,
      initialDays: b.days,
      usedDays: 0,
    })),
  });

  return user;
}
