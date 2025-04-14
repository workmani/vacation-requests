/**
 * TimeOffBalanceService
 * 
 * Service for handling time off balance related database operations
 */

import { TimeOffBalance, TimeOffType } from '../../lib/generated/prisma/index';
import prisma from './prisma.service';

export class TimeOffBalanceService {
  /**
   * Find a time off balance by ID
   */
  static async findById(id: string): Promise<TimeOffBalance | null> {
    return prisma.timeOffBalance.findUnique({
      where: { id },
      include: { user: true }
    });
  }

  /**
   * Find a user's balance by type and year
   */
  static async findByUserTypeAndYear(
    userId: string,
    type: TimeOffType,
    year: number
  ): Promise<TimeOffBalance | null> {
    return prisma.timeOffBalance.findFirst({
      where: {
        userId,
        type,
        year
      }
    });
  }

  /**
   * Get all balances for a user
   */
  static async findByUser(userId: string): Promise<TimeOffBalance[]> {
    return prisma.timeOffBalance.findMany({
      where: { userId },
      orderBy: [
        { year: 'desc' },
        { type: 'asc' }
      ]
    });
  }

  /**
   * Get all current year balances for a user
   */
  static async findCurrentYearBalances(userId: string): Promise<TimeOffBalance[]> {
    const currentYear = new Date().getFullYear();
    return prisma.timeOffBalance.findMany({
      where: { 
        userId, 
        year: currentYear 
      },
      orderBy: { type: 'asc' }
    });
  }

  /**
   * Create a new time off balance
   */
  static async create(data: {
    userId: string;
    year: number;
    type: TimeOffType;
    initialDays: number;
    usedDays?: number;
    adjustmentDays?: number;
  }): Promise<TimeOffBalance> {
    return prisma.timeOffBalance.create({ 
      data: {
        ...data,
        usedDays: data.usedDays ?? 0,
        adjustmentDays: data.adjustmentDays ?? 0
      } 
    });
  }

  /**
   * Update a time off balance
   */
  static async update(
    id: string,
    data: Partial<{
      initialDays: number;
      usedDays: number;
      adjustmentDays: number;
    }>
  ): Promise<TimeOffBalance> {
    return prisma.timeOffBalance.update({
      where: { id },
      data
    });
  }

  /**
   * Delete a time off balance
   */
  static async delete(id: string): Promise<TimeOffBalance> {
    return prisma.timeOffBalance.delete({
      where: { id }
    });
  }

  /**
   * Adjust a user's balance when a time off request is approved
   */
  static async adjustForApprovedRequest(
    userId: string,
    type: TimeOffType,
    days: number
  ): Promise<TimeOffBalance> {
    const currentYear = new Date().getFullYear();
    
    // Find or create the balance record
    const balance = await prisma.timeOffBalance.findFirst({
      where: {
        userId,
        type,
        year: currentYear
      }
    });

    if (!balance) {
      throw new Error(`No balance found for user ${userId} of type ${type} for year ${currentYear}`);
    }

    // Update the used days
    return prisma.timeOffBalance.update({
      where: { id: balance.id },
      data: {
        usedDays: balance.usedDays + days
      }
    });
  }

  /**
   * Get available balance (initialDays + adjustmentDays - usedDays)
   */
  static async getAvailableBalance(
    userId: string,
    type: TimeOffType,
    year = new Date().getFullYear()
  ): Promise<number> {
    const balance = await prisma.timeOffBalance.findFirst({
      where: {
        userId,
        type,
        year
      }
    });

    if (!balance) {
      return 0;
    }

    return balance.initialDays + balance.adjustmentDays - balance.usedDays;
  }

  /**
   * Create or update balances for a new year for all users
   */
  static async createYearlyBalances(year: number, defaultValues: Record<TimeOffType, number>): Promise<void> {
    // Get all users
    const users = await prisma.user.findMany();

    // Create balance records for each user and each type
    for (const user of users) {
      for (const [typeStr, initialDays] of Object.entries(defaultValues)) {
        const type = typeStr as TimeOffType;
        
        // Check if a balance already exists
        const existingBalance = await prisma.timeOffBalance.findFirst({
          where: {
            userId: user.id,
            type,
            year
          }
        });

        if (!existingBalance) {
          await prisma.timeOffBalance.create({
            data: {
              userId: user.id,
              type,
              year,
              initialDays,
              usedDays: 0,
              adjustmentDays: 0
            }
          });
        }
      }
    }
  }

  /**
   * Process year-end rollover based on company policy
   * This is a simplified example; real implementations would have more complex rules
   */
  static async processYearEndRollover(
    fromYear: number,
    toYear: number,
    maxCarryOver: Record<TimeOffType, number> = {
      [TimeOffType.VACATION]: 5,
      [TimeOffType.SICK]: 0,
      [TimeOffType.PERSONAL]: 0
    },
    defaultValues: Record<TimeOffType, number> = {
      [TimeOffType.VACATION]: 15,
      [TimeOffType.SICK]: 10, 
      [TimeOffType.PERSONAL]: 3
    }
  ): Promise<void> {
    // Get all users
    const users = await prisma.user.findMany();

    // Process each user
    for (const user of users) {
      // Process each time off type
      for (const [typeStr, maxCarry] of Object.entries(maxCarryOver)) {
        const type = typeStr as TimeOffType;
        
        // Get previous year's balance
        const previousBalance = await prisma.timeOffBalance.findFirst({
          where: {
            userId: user.id,
            type,
            year: fromYear
          }
        });

        // Calculate carry over amount
        let carryOverDays = 0;
        if (previousBalance) {
          const remainingDays = previousBalance.initialDays + previousBalance.adjustmentDays - previousBalance.usedDays;
          carryOverDays = Math.min(remainingDays, maxCarry);
        }

        // Get or create new year's balance
        const newBalance = await prisma.timeOffBalance.findFirst({
          where: {
            userId: user.id,
            type,
            year: toYear
          }
        });

        if (newBalance) {
          // Update existing balance with carryover as adjustment
          await prisma.timeOffBalance.update({
            where: { id: newBalance.id },
            data: {
              adjustmentDays: carryOverDays
            }
          });
        } else {
          // Create new balance with default values plus carryover
          await prisma.timeOffBalance.create({
            data: {
              userId: user.id,
              type,
              year: toYear,
              initialDays: defaultValues[type],
              usedDays: 0,
              adjustmentDays: carryOverDays
            }
          });
        }
      }
    }
  }
} 