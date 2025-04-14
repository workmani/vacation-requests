/**
 * DepartmentService
 * 
 * Service for handling department-related database operations
 */

import { Department } from '../../lib/generated/prisma/index';
import prisma from './prisma.service';

export class DepartmentService {
  /**
   * Find a department by ID
   */
  static async findById(id: string): Promise<Department | null> {
    return prisma.department.findUnique({
      where: { id },
    });
  }

  /**
   * Get all departments
   */
  static async findAll(): Promise<Department[]> {
    return prisma.department.findMany({
      orderBy: { name: 'asc' },
    });
  }

  /**
   * Create a new department
   */
  static async create(data: {
    name: string;
    description?: string;
  }): Promise<Department> {
    return prisma.department.create({ data });
  }

  /**
   * Update a department
   */
  static async update(
    id: string,
    data: Partial<{
      name: string;
      description: string;
    }>
  ): Promise<Department> {
    return prisma.department.update({
      where: { id },
      data,
    });
  }

  /**
   * Delete a department by ID
   */
  static async delete(id: string): Promise<Department> {
    return prisma.department.delete({
      where: { id },
    });
  }

  /**
   * Find a department by name
   */
  static async findByName(name: string): Promise<Department | null> {
    return prisma.department.findFirst({
      where: { name: { equals: name, mode: 'insensitive' } },
    });
  }

  /**
   * Get department with users
   */
  static async findWithUsers(id: string): Promise<Department & { users: any[] }> {
    return prisma.department.findUniqueOrThrow({
      where: { id },
      include: { 
        users: {
          orderBy: { name: 'asc' },
        }
      },
    });
  }

  /**
   * Get all departments with user counts
   */
  static async findAllWithUserCounts(): Promise<(Department & { userCount: number })[]> {
    const departments = await prisma.department.findMany({
      orderBy: { name: 'asc' },
      include: {
        _count: {
          select: { users: true },
        },
      },
    });

    return departments.map(dept => ({
      ...dept,
      userCount: dept._count.users,
      _count: undefined as any,
    }));
  }
} 