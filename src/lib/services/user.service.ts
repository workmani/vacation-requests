/**
 * UserService
 * 
 * Service for handling user-related database operations
 */

import { Role, User } from '../../lib/generated/prisma/index';
import prisma from './prisma.service';

export class UserService {
  /**
   * Find a user by ID
   */
  static async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  /**
   * Find a user by email
   */
  static async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  /**
   * Get all users with pagination
   */
  static async findAll(page = 1, limit = 10): Promise<User[]> {
    return prisma.user.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { name: 'asc' },
    });
  }

  /**
   * Create a new user
   */
  static async create(data: {
    name: string;
    email: string;
    password: string;
    role?: Role;
    departmentId?: string;
    managerId?: string;
  }): Promise<User> {
    return prisma.user.create({ data });
  }

  /**
   * Update a user
   */
  static async update(
    id: string,
    data: Partial<{
      name: string;
      email: string;
      password: string;
      role: Role;
      departmentId: string;
      managerId: string;
    }>
  ): Promise<User> {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  /**
   * Delete a user by ID
   */
  static async delete(id: string): Promise<User> {
    return prisma.user.delete({
      where: { id },
    });
  }

  /**
   * Find users by role
   */
  static async findByRole(role: Role, page = 1, limit = 10): Promise<User[]> {
    return prisma.user.findMany({
      where: { role },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { name: 'asc' },
    });
  }

  /**
   * Find all managers
   */
  static async findManagers(): Promise<User[]> {
    return prisma.user.findMany({
      where: { role: Role.MANAGER },
      orderBy: { name: 'asc' },
    });
  }

  /**
   * Find users by department
   */
  static async findByDepartment(departmentId: string, page = 1, limit = 10): Promise<User[]> {
    return prisma.user.findMany({
      where: { departmentId },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { name: 'asc' },
    });
  }

  /**
   * Find all employees of a manager
   */
  static async findEmployeesByManager(managerId: string): Promise<User[]> {
    return prisma.user.findMany({
      where: { managerId },
      orderBy: { name: 'asc' },
    });
  }

  /**
   * Count total users (for pagination)
   */
  static async count(filters?: { role?: Role; departmentId?: string }): Promise<number> {
    return prisma.user.count({
      where: filters,
    });
  }
} 