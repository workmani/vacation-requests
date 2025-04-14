/**
 * TimeOffRequestService
 * 
 * Service for handling time off request related database operations
 */

import { RequestStatus, TimeOffRequest, TimeOffType } from '../../lib/generated/prisma/index';
import prisma from './prisma.service';

export class TimeOffRequestService {
  /**
   * Find a time off request by ID
   */
  static async findById(id: string): Promise<TimeOffRequest | null> {
    return prisma.timeOffRequest.findUnique({
      where: { id },
      include: { 
        user: true,
        reviewer: true,
        comments: {
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    });
  }

  /**
   * Get all time off requests with pagination
   */
  static async findAll(page = 1, limit = 10): Promise<TimeOffRequest[]> {
    return prisma.timeOffRequest.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        user: true,
        reviewer: true
      }
    });
  }

  /**
   * Create a new time off request
   */
  static async create(data: {
    userId: string;
    type: TimeOffType;
    startDate: Date;
    endDate: Date;
    duration: number;
    notes?: string;
    status?: RequestStatus;
  }): Promise<TimeOffRequest> {
    return prisma.timeOffRequest.create({ 
      data,
      include: {
        user: true
      }
    });
  }

  /**
   * Update a time off request
   */
  static async update(
    id: string,
    data: Partial<{
      type: TimeOffType;
      status: RequestStatus;
      startDate: Date;
      endDate: Date;
      duration: number;
      notes: string;
      reviewerId: string;
      reviewedAt: Date;
    }>
  ): Promise<TimeOffRequest> {
    // If status is being updated to approved or rejected, set the reviewedAt time
    if (data.status === RequestStatus.APPROVED || data.status === RequestStatus.REJECTED) {
      data.reviewedAt = new Date();
    }

    return prisma.timeOffRequest.update({
      where: { id },
      data,
      include: {
        user: true,
        reviewer: true,
        comments: true
      }
    });
  }

  /**
   * Delete a time off request
   */
  static async delete(id: string): Promise<TimeOffRequest> {
    return prisma.timeOffRequest.delete({
      where: { id }
    });
  }

  /**
   * Find time off requests by user
   */
  static async findByUser(userId: string, page = 1, limit = 10): Promise<TimeOffRequest[]> {
    return prisma.timeOffRequest.findMany({
      where: { userId },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        reviewer: true,
        comments: true
      }
    });
  }

  /**
   * Find time off requests by status
   */
  static async findByStatus(status: RequestStatus, page = 1, limit = 10): Promise<TimeOffRequest[]> {
    return prisma.timeOffRequest.findMany({
      where: { status },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        user: true,
        reviewer: true
      }
    });
  }

  /**
   * Find time off requests for a manager's team
   */
  static async findByManager(managerId: string, page = 1, limit = 10): Promise<TimeOffRequest[]> {
    return prisma.timeOffRequest.findMany({
      where: {
        user: {
          managerId
        }
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        user: true,
        reviewer: true,
        comments: true
      }
    });
  }

  /**
   * Find time off requests by date range
   */
  static async findByDateRange(startDate: Date, endDate: Date, page = 1, limit = 10): Promise<TimeOffRequest[]> {
    return prisma.timeOffRequest.findMany({
      where: {
        OR: [
          // Starts during the range
          {
            startDate: {
              gte: startDate,
              lte: endDate
            }
          },
          // Ends during the range
          {
            endDate: {
              gte: startDate,
              lte: endDate
            }
          },
          // Spans the entire range
          {
            startDate: {
              lte: startDate
            },
            endDate: {
              gte: endDate
            }
          }
        ]
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { startDate: 'asc' },
      include: {
        user: true
      }
    });
  }

  /**
   * Add a comment to a time off request
   */
  static async addComment(requestId: string, content: string): Promise<TimeOffRequest> {
    return prisma.timeOffRequest.update({
      where: { id: requestId },
      data: {
        comments: {
          create: {
            content
          }
        }
      },
      include: {
        comments: {
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    });
  }

  /**
   * Count total requests (for pagination)
   */
  static async count(filters?: { 
    userId?: string; 
    status?: RequestStatus;
    type?: TimeOffType;
    managerId?: string;
  }): Promise<number> {
    const where: any = { ...filters };
    
    // Handle manager filter differently as it's a relation
    if (filters?.managerId) {
      where.user = { managerId: filters.managerId };
      delete where.managerId;
    }
    
    return prisma.timeOffRequest.count({ where });
  }
} 