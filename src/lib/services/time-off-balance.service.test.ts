import { describe, it, expect, vi, beforeEach, afterEach, Mock } from 'vitest'
import { PrismaClient, TimeOffType, TimeOffBalance as PrismaTimeOffBalance, User as PrismaUser } from '../../lib/generated/prisma/index'
import { TimeOffBalanceService } from './time-off-balance.service'

// Define a type for the mock Prisma client structure using Mock
type MockPrismaTimeOffBalance = {
  findMany: Mock
  findUnique: Mock
  findFirst: Mock
  create: Mock
  update: Mock
  delete: Mock
  upsert: Mock
  count: Mock
}
type MockPrismaUser = {
  findMany: Mock
}
type MockPrismaClient = {
  timeOffBalance: MockPrismaTimeOffBalance
  user: MockPrismaUser
  $transaction: Mock
}

// Mock the Prisma client
vi.mock('./prisma.service', () => {
  const mockPrisma: MockPrismaClient = {
    timeOffBalance: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      findFirst: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      upsert: vi.fn(),
      count: vi.fn(),
    },
    user: {
      findMany: vi.fn(),
    },
    $transaction: vi.fn(),
  }
  return {
    prisma: mockPrisma as unknown as PrismaClient,
    default: mockPrisma as unknown as PrismaClient,
    __mockPrisma: mockPrisma,
  }
})

// Type assertion for the dynamically imported module
type PrismaServiceMockType = typeof import('./prisma.service') & {
  __mockPrisma: MockPrismaClient
}

// Dynamically import the mocked module and assert its type
const PrismaServiceMock = await import('./prisma.service') as PrismaServiceMockType

// Access the mock functions with the asserted type
const mockBalanceDb = PrismaServiceMock.__mockPrisma.timeOffBalance
const mockUserDb = PrismaServiceMock.__mockPrisma.user

// Define a type for the balance with included user
type BalanceWithUser = PrismaTimeOffBalance & { user: Partial<PrismaUser> }

// Import the missing type
type TimeOffBalance = PrismaTimeOffBalance

describe('TimeOffBalanceService', () => {

  beforeEach(() => {
    vi.resetAllMocks()
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-05-20T10:00:00.000Z'))
  })

  afterEach(() => {
      vi.useRealTimers()
  })

  describe('findById', () => {
    it('should return a balance with user include when found by ID', async () => {
      // Arrange
      const balanceId = 'bal-abc'
      // Use full Prisma types where possible for mock results
      const mockResult: BalanceWithUser = {
        id: balanceId,
        userId: 'u1',
        year: 2024,
        type: TimeOffType.VACATION,
        initialDays: 15,
        usedDays: 2,
        adjustmentDays: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        user: { id: 'u1', name: 'User A' }, // Add necessary fields for Partial<PrismaUser>
      }
      mockBalanceDb.findUnique.mockResolvedValue(mockResult)

      // Act
      const result = await TimeOffBalanceService.findById(balanceId)

      // Assert
      expect(mockBalanceDb.findUnique).toHaveBeenCalledTimes(1)
      expect(mockBalanceDb.findUnique).toHaveBeenCalledWith({
        where: { id: balanceId },
        include: { user: true }
      })
      expect(result).toEqual(mockResult)
    })

    it('should return null when balance not found by ID', async () => {
      // Arrange
      const balanceId = 'not-found-bal'
      mockBalanceDb.findUnique.mockResolvedValue(null)

      // Act
      const result = await TimeOffBalanceService.findById(balanceId)

      // Assert
      expect(mockBalanceDb.findUnique).toHaveBeenCalledTimes(1)
      expect(result).toBeNull()
    })

    it('should handle errors during findById', async () => {
      // Arrange
      const balanceId = 'error-bal'
      const testError = new Error('DB lookup failed')
      mockBalanceDb.findUnique.mockRejectedValue(testError)

      // Act & Assert
      await expect(TimeOffBalanceService.findById(balanceId)).rejects.toThrow(testError)
    })
  })

  describe('findByUserTypeAndYear', () => {
    it('should return a balance when found by user, type, and year', async () => {
      // Arrange
      const args = { userId: 'u1', type: TimeOffType.VACATION, year: 2024 }
      const mockBalance: PrismaTimeOffBalance = {
        ...args,
        id: 'found-bal',
        initialDays: 10,
        usedDays: 0,
        adjustmentDays: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      mockBalanceDb.findFirst.mockResolvedValue(mockBalance)
      // Act
      const result = await TimeOffBalanceService.findByUserTypeAndYear(args.userId, args.type, args.year)
      // Assert
      expect(mockBalanceDb.findFirst).toHaveBeenCalledTimes(1)
      expect(mockBalanceDb.findFirst).toHaveBeenCalledWith({ where: args })
      expect(result).toEqual(mockBalance)
    })

    it('should return null when not found', async () => {
      // Arrange
      const args = { userId: 'u2', type: TimeOffType.SICK, year: 2023 }
      mockBalanceDb.findFirst.mockResolvedValue(null)
      // Act
      const result = await TimeOffBalanceService.findByUserTypeAndYear(args.userId, args.type, args.year)
      // Assert
      expect(mockBalanceDb.findFirst).toHaveBeenCalledTimes(1)
      expect(result).toBeNull()
    })

     it('should handle errors', async () => {
      // Arrange
       const args = { userId: 'u-err', type: TimeOffType.PERSONAL, year: 2024 }
       const testError = new Error('DB error')
       mockBalanceDb.findFirst.mockRejectedValue(testError)
       // Act & Assert
       await expect(TimeOffBalanceService.findByUserTypeAndYear(args.userId, args.type, args.year)).rejects.toThrow(testError)
    })
  })

  describe('findByUser', () => {
    it('should return all balances for a user ordered by year/type', async () => {
      // Arrange
      const userId = 'user-all-balances'
      const mockBalances: Partial<PrismaTimeOffBalance>[] = [{ id: 'b1' }, { id: 'b2' }]
      mockBalanceDb.findMany.mockResolvedValue(mockBalances)
      // Act
      const result = await TimeOffBalanceService.findByUser(userId)
      // Assert
      expect(mockBalanceDb.findMany).toHaveBeenCalledTimes(1)
      expect(mockBalanceDb.findMany).toHaveBeenCalledWith({
        where: { userId },
        orderBy: [{ year: 'desc' }, { type: 'asc' }]
      })
      expect(result).toEqual(mockBalances)
    })

     it('should handle errors', async () => {
      // Arrange
       const testError = new Error('DB error')
       mockBalanceDb.findMany.mockRejectedValue(testError)
       // Act & Assert
       await expect(TimeOffBalanceService.findByUser('err-user')).rejects.toThrow(testError)
    })
  })

  describe('findCurrentYearBalances', () => {
    it('should return current year balances for a user ordered by type', async () => {
      // Arrange
      const userId = 'user-current-balances'
      const currentYear = 2024
      const mockBalances: Partial<PrismaTimeOffBalance>[] = [{ id: 'b3', year: currentYear }]
      mockBalanceDb.findMany.mockResolvedValue(mockBalances)
      // Act
      const result = await TimeOffBalanceService.findCurrentYearBalances(userId)
      // Assert
      expect(mockBalanceDb.findMany).toHaveBeenCalledTimes(1)
      expect(mockBalanceDb.findMany).toHaveBeenCalledWith({
        where: { userId, year: currentYear },
        orderBy: { type: 'asc' }
      })
      expect(result).toEqual(mockBalances)
    })

     it('should handle errors', async () => {
      // Arrange
       const testError = new Error('DB error')
       mockBalanceDb.findMany.mockRejectedValue(testError)
       // Act & Assert
       await expect(TimeOffBalanceService.findCurrentYearBalances('err-user')).rejects.toThrow(testError)
    })
  })

  describe('create', () => {
    it('should create a balance with default used/adjustment days if not provided', async () => {
      // Arrange
      const inputData = { userId: 'u_new', year: 2024, type: TimeOffType.VACATION, initialDays: 20 }
      const expectedDbData = { ...inputData, usedDays: 0, adjustmentDays: 0 }
      const createdBalance: PrismaTimeOffBalance = {
        ...expectedDbData,
        id: 'new-bal-id',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      mockBalanceDb.create.mockResolvedValue(createdBalance)
      // Act
      const result = await TimeOffBalanceService.create(inputData)
      // Assert
      expect(mockBalanceDb.create).toHaveBeenCalledTimes(1)
      expect(mockBalanceDb.create).toHaveBeenCalledWith({ data: expectedDbData })
      expect(result).toEqual(createdBalance)
    })

    it('should create a balance with provided used/adjustment days', async () => {
      // Arrange
      const inputData = { userId: 'u_new2', year: 2024, type: TimeOffType.SICK, initialDays: 10, usedDays: 1, adjustmentDays: -1 }
      const createdBalance: PrismaTimeOffBalance = {
        ...inputData,
        id: 'new-bal-id2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      mockBalanceDb.create.mockResolvedValue(createdBalance)
      // Act
      const result = await TimeOffBalanceService.create(inputData)
      // Assert
      expect(mockBalanceDb.create).toHaveBeenCalledTimes(1)
      expect(mockBalanceDb.create).toHaveBeenCalledWith({ data: inputData })
      expect(result).toEqual(createdBalance)
    })

     it('should handle errors', async () => {
      // Arrange
       const inputData = { userId: 'fail', year: 2024, type: TimeOffType.PERSONAL, initialDays: 5 }
       const testError = new Error('DB create error')
       mockBalanceDb.create.mockRejectedValue(testError)
       // Act & Assert
       await expect(TimeOffBalanceService.create(inputData)).rejects.toThrow(testError)
    })
  })

  describe('update', () => {
    it('should update a balance record', async () => {
      // Arrange
      const balanceId = 'update-bal-id'
      const updateData: Partial<PrismaTimeOffBalance> = { usedDays: 5, adjustmentDays: 1 }
      const updatedBalance: PrismaTimeOffBalance = {
        id: balanceId,
        userId: 'u_upd',
        year: 2024,
        type: TimeOffType.VACATION,
        initialDays: 15,
        usedDays: 5, // updated
        adjustmentDays: 1, // updated
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date() // updated
      }
      mockBalanceDb.update.mockResolvedValue(updatedBalance)
        // Act
        const result = await TimeOffBalanceService.update(balanceId, updateData)
        // Assert
        expect(mockBalanceDb.update).toHaveBeenCalledTimes(1)
        expect(mockBalanceDb.update).toHaveBeenCalledWith({ where: { id: balanceId }, data: updateData })
        expect(result).toEqual(updatedBalance)
      })

     it('should handle errors', async () => {
      // Arrange
       const balanceId = 'update-fail-id'
       const updateData = { initialDays: 99 }
       const testError = new Error('DB update error')
       mockBalanceDb.update.mockRejectedValue(testError)
       // Act & Assert
       await expect(TimeOffBalanceService.update(balanceId, updateData)).rejects.toThrow(testError)
    })
  })

  describe('delete', () => {
    it('should delete a balance record', async () => {
        // Arrange
        const balanceId = 'delete-bal-id'
        const deletedBalance: PrismaTimeOffBalance = {
          id: balanceId,
          userId: 'u_del',
          year: 2023,
          type: TimeOffType.SICK,
          initialDays: 5,
          usedDays: 1,
          adjustmentDays: 0,
          createdAt: new Date('2023-01-01'),
          updatedAt: new Date('2023-05-05')
        }
        mockBalanceDb.delete.mockResolvedValue(deletedBalance)
          // Act
          const result = await TimeOffBalanceService.delete(balanceId)
          // Assert
          expect(mockBalanceDb.delete).toHaveBeenCalledTimes(1)
          expect(mockBalanceDb.delete).toHaveBeenCalledWith({ where: { id: balanceId } })
          expect(result).toEqual(deletedBalance)
        })

     it('should handle errors', async () => {
      // Arrange
       const balanceId = 'delete-fail-id'
       const testError = new Error('DB delete error')
       mockBalanceDb.delete.mockRejectedValue(testError)
       // Act & Assert
       await expect(TimeOffBalanceService.delete(balanceId)).rejects.toThrow(testError)
    })
  })

  describe('adjustForApprovedRequest', () => {
    it('should find the current year balance and increment usedDays', async () => {
      // Arrange
      const args = { userId: 'u_adjust', type: TimeOffType.VACATION, days: 3 }
      const currentYear = 2024
      // Use the full PrismaTimeOffBalance type as usedDays is needed
      const existingBalance: PrismaTimeOffBalance = {
        id: 'bal_adjust',
        userId: args.userId,
        type: args.type,
        year: currentYear,
        initialDays: 15, // Add missing properties for full type
        usedDays: 2,     // usedDays is definitely defined now
        adjustmentDays: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      const updatedBalance: Partial<PrismaTimeOffBalance> = { ...existingBalance, usedDays: 5 } // Keep updatedBalance Partial if needed
      mockBalanceDb.findFirst.mockResolvedValue(existingBalance) // Mock findFirst used internally
      mockBalanceDb.update.mockResolvedValue(updatedBalance)

      // Act
      const result = await TimeOffBalanceService.adjustForApprovedRequest(args.userId, args.type, args.days)

      // Assert
      expect(mockBalanceDb.findFirst).toHaveBeenCalledTimes(1)
      expect(mockBalanceDb.findFirst).toHaveBeenCalledWith({ where: { userId: args.userId, type: args.type, year: currentYear } })
      expect(mockBalanceDb.update).toHaveBeenCalledTimes(1)
      expect(mockBalanceDb.update).toHaveBeenCalledWith({
        where: { id: existingBalance.id },
        // No error here now, as existingBalance.usedDays is guaranteed to be a number
        data: { usedDays: existingBalance.usedDays + args.days }
      })
      expect(result).toEqual(updatedBalance)
    })

    it('should throw error if balance not found for adjustment', async () => {
       // Arrange
       const args = { userId: 'u_no_bal', type: TimeOffType.SICK, days: 1 }
       const currentYear = 2024
       mockBalanceDb.findFirst.mockResolvedValue(null)
       // Act & Assert
       await expect(TimeOffBalanceService.adjustForApprovedRequest(args.userId, args.type, args.days))
         .rejects.toThrow(`No balance found for user ${args.userId} of type ${args.type} for year ${currentYear}`)
       expect(mockBalanceDb.update).not.toHaveBeenCalled()
    })

    it('should handle DB errors during findFirst', async () => {
       // Arrange
       const args = { userId: 'u_find_err', type: TimeOffType.PERSONAL, days: 1 }
       const testError = new Error('DB find error')
       mockBalanceDb.findFirst.mockRejectedValue(testError)
       // Act & Assert
       await expect(TimeOffBalanceService.adjustForApprovedRequest(args.userId, args.type, args.days))
         .rejects.toThrow(testError)
       expect(mockBalanceDb.update).not.toHaveBeenCalled()
    })

     it('should handle DB errors during update', async () => {
       // Arrange
       const args = { userId: 'u_update_err', type: TimeOffType.VACATION, days: 2 }
       const currentYear = 2024
       const existingBalance: PrismaTimeOffBalance = {
         id: 'bal_update_err',
         userId: args.userId,
         type: args.type,
         year: currentYear,
         initialDays: 10,
         usedDays: 1,
         adjustmentDays: 0,
         createdAt: new Date(),
         updatedAt: new Date()
       }
       const testError = new Error('DB update error')
       mockBalanceDb.findFirst.mockResolvedValue(existingBalance)
       mockBalanceDb.update.mockRejectedValue(testError)
       // Act & Assert
       await expect(TimeOffBalanceService.adjustForApprovedRequest(args.userId, args.type, args.days))
         .rejects.toThrow(testError)
       expect(mockBalanceDb.findFirst).toHaveBeenCalledTimes(1)
       expect(mockBalanceDb.update).toHaveBeenCalledTimes(1)
    })
  })

  describe('getAvailableBalance', () => {
    it('should calculate available balance correctly', async () => {
      // Arrange
      const args = { userId: 'u_avail', type: TimeOffType.VACATION }
      const currentYear = 2024
      const balance: PrismaTimeOffBalance = {
        id: 'bal_avail',
        userId: args.userId,
        type: args.type,
        year: currentYear,
        initialDays: 15,
        adjustmentDays: 2,
        usedDays: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      mockBalanceDb.findFirst.mockResolvedValue(balance)
      // Act
      const result = await TimeOffBalanceService.getAvailableBalance(args.userId, args.type)
      // Assert
      expect(mockBalanceDb.findFirst).toHaveBeenCalledTimes(1)
      expect(mockBalanceDb.findFirst).toHaveBeenCalledWith({ where: { userId: args.userId, type: args.type, year: currentYear }})
      expect(result).toBe(12) // 15 + 2 - 5
    })

    it('should return 0 if balance record not found', async () => {
      // Arrange
      const args = { userId: 'u_avail_nobal', type: TimeOffType.SICK, year: 2023 }
      mockBalanceDb.findFirst.mockResolvedValue(null)
      // Act
      const result = await TimeOffBalanceService.getAvailableBalance(args.userId, args.type, args.year)
      // Assert
      expect(mockBalanceDb.findFirst).toHaveBeenCalledTimes(1)
      expect(mockBalanceDb.findFirst).toHaveBeenCalledWith({ where: args })
      expect(result).toBe(0)
    })

    it('should handle errors during DB lookup', async () => {
       // Arrange
       const args = { userId: 'u_avail_err', type: TimeOffType.PERSONAL }
       const testError = new Error('DB find error')
       mockBalanceDb.findFirst.mockRejectedValue(testError)
       // Act & Assert
       await expect(TimeOffBalanceService.getAvailableBalance(args.userId, args.type)).rejects.toThrow(testError)
    })
  })

  describe('createYearlyBalances', () => {
    it('should create balances for all users and types if they dont exist', async () => {
      // Arrange
      const year = 2025
      const defaultValues = { 
        [TimeOffType.VACATION]: 15, 
        [TimeOffType.SICK]: 10,
        [TimeOffType.PERSONAL]: 3
      }
      // Use Partial<PrismaUser> for mock data
      const users: Partial<PrismaUser>[] = [{ id: 'userA' }, { id: 'userB' }]
      mockUserDb.findMany.mockResolvedValue(users)
      // Simulate user A already has VACATION & PERSONAL, user B has none
      mockBalanceDb.findFirst
        // User A
        .mockResolvedValueOnce({ id: 'existingV' }) // VACATION - Exists
        .mockResolvedValueOnce(null)              // SICK - Does not exist
        .mockResolvedValueOnce({ id: 'existingP' }) // PERSONAL - Exists
        // User B
        .mockResolvedValueOnce(null)              // VACATION - Does not exist
        .mockResolvedValueOnce(null)              // SICK - Does not exist
        .mockResolvedValueOnce(null)              // PERSONAL - Does not exist

      // Act
      await TimeOffBalanceService.createYearlyBalances(year, defaultValues)

      // Assert
      expect(mockUserDb.findMany).toHaveBeenCalledTimes(1)
      expect(mockBalanceDb.findFirst).toHaveBeenCalledTimes(6) // 2 users * 3 types
      expect(mockBalanceDb.create).toHaveBeenCalledTimes(4) // Called for the 4 null returns
      
      // Check that create was called with the expected data, regardless of order
      expect(mockBalanceDb.create).toHaveBeenCalledWith(expect.objectContaining({
        data: { userId: 'userA', type: TimeOffType.SICK, year, initialDays: 10, usedDays: 0, adjustmentDays: 0 }
      }))
       expect(mockBalanceDb.create).toHaveBeenCalledWith(expect.objectContaining({
         data: { userId: 'userB', type: TimeOffType.VACATION, year, initialDays: 15, usedDays: 0, adjustmentDays: 0 }
       }))
        expect(mockBalanceDb.create).toHaveBeenCalledWith(expect.objectContaining({
          data: { userId: 'userB', type: TimeOffType.SICK, year, initialDays: 10, usedDays: 0, adjustmentDays: 0 }
        }))
         expect(mockBalanceDb.create).toHaveBeenCalledWith(expect.objectContaining({
           data: { userId: 'userB', type: TimeOffType.PERSONAL, year, initialDays: 3, usedDays: 0, adjustmentDays: 0 }
         }))

      // Check it wasn't called for the existing ones
      expect(mockBalanceDb.create).not.toHaveBeenCalledWith(expect.objectContaining({ 
         data: expect.objectContaining({ userId: 'userA', type: TimeOffType.VACATION }) 
      }))
      expect(mockBalanceDb.create).not.toHaveBeenCalledWith(expect.objectContaining({ 
         data: expect.objectContaining({ userId: 'userA', type: TimeOffType.PERSONAL }) 
      }))
    })

     it('should handle errors if finding users fails', async () => {
      // Arrange
      const year = 2025
      const defaultValues = { // Ensure all types are present
        [TimeOffType.VACATION]: 15, 
        [TimeOffType.SICK]: 10,
        [TimeOffType.PERSONAL]: 3
      }
      const testError = new Error('DB user find error')
      mockUserDb.findMany.mockRejectedValue(testError)

      // Act & Assert
      await expect(TimeOffBalanceService.createYearlyBalances(year, defaultValues)).rejects.toThrow(testError)
      expect(mockBalanceDb.findFirst).not.toHaveBeenCalled()
      expect(mockBalanceDb.create).not.toHaveBeenCalled()
    })
  })

  describe('processYearEndRollover', () => {
    const fromYear = 2024
    const toYear = 2025
    // Use Partial<PrismaUser> for mock data
    const users: Partial<PrismaUser>[] = [{ id: 'userX' }, { id: 'userY' }]
    const maxCarryOver = { 
      [TimeOffType.VACATION]: 5, 
      [TimeOffType.SICK]: 0, 
      [TimeOffType.PERSONAL]: 0 
    }
    const defaultValues = { 
      [TimeOffType.VACATION]: 15, 
      [TimeOffType.SICK]: 10, 
      [TimeOffType.PERSONAL]: 3 
    }

    beforeEach(() => {
      mockUserDb.findMany.mockResolvedValue(users)
    })

    it('should calculate carry-over and create/update new year balances', async () => {
       // Arrange Mocks for the 12 findFirst calls:
       // Each user/type pair does two calls: 1 for prev year, 1 for new year
       // Use Partial<PrismaTimeOffBalance> for mock return values
       mockBalanceDb.findFirst
         // User X
         .mockResolvedValueOnce({ initialDays: 10, adjustmentDays: 2, usedDays: 5 }) // Prev VAC (7 remain -> 5 carry)
         .mockResolvedValueOnce(null)              // New VAC (Does not exist yet -> expect create)
         .mockResolvedValueOnce({ initialDays: 8, adjustmentDays: 0, usedDays: 5 })  // Prev SICK (3 remain -> 0 carry)
         .mockResolvedValueOnce({ id: 'existing-sick-x' }) // New SICK (Exists -> expect update)
         .mockResolvedValueOnce(null)              // Prev PERS (Not found -> 0 carry)
         .mockResolvedValueOnce(null)              // New PERS (Does not exist yet -> expect create)
         // User Y
         .mockResolvedValueOnce({ initialDays: 2, adjustmentDays: 0, usedDays: 0 })  // Prev VAC (2 remain -> 2 carry)
         .mockResolvedValueOnce(null)              // New VAC (Does not exist yet -> expect create)
         .mockResolvedValueOnce({ initialDays: 1, adjustmentDays: 0, usedDays: 1 })  // Prev SICK (0 remain -> 0 carry)
         .mockResolvedValueOnce({ id: 'existing-sick-y' }) // New SICK (Exists -> expect update)
         .mockResolvedValueOnce({ initialDays: 1, adjustmentDays: 0, usedDays: 0 })  // Prev PERS (1 remain -> 0 carry)
         .mockResolvedValueOnce(null)              // New PERS (Does not exist yet -> expect create)
 
       // Mock create/update return values (can be simple Partial)
       mockBalanceDb.create.mockResolvedValue({} as Partial<PrismaTimeOffBalance>)
       mockBalanceDb.update.mockResolvedValue({} as Partial<PrismaTimeOffBalance>)
 
       // Act
       await TimeOffBalanceService.processYearEndRollover(fromYear, toYear, maxCarryOver, defaultValues)
 
       // Assert
       expect(mockUserDb.findMany).toHaveBeenCalledTimes(1)
       expect(mockBalanceDb.findFirst).toHaveBeenCalledTimes(12) // 2 users * 3 types * 2 finds
       expect(mockBalanceDb.create).toHaveBeenCalledTimes(4) // UserX(VAC,PERS), UserY(VAC,PERS)
       expect(mockBalanceDb.update).toHaveBeenCalledTimes(2) // UserX(SICK), UserY(SICK)
       expect(mockBalanceDb.upsert).not.toHaveBeenCalled() // Ensure upsert wasn't called
 
       // Check specific create calls
       expect(mockBalanceDb.create).toHaveBeenCalledWith({ data: { userId: 'userX', type: TimeOffType.VACATION, year: toYear, initialDays: 15, usedDays: 0, adjustmentDays: 5 } });
       expect(mockBalanceDb.create).toHaveBeenCalledWith({ data: { userId: 'userX', type: TimeOffType.PERSONAL, year: toYear, initialDays: 3, usedDays: 0, adjustmentDays: 0 } });
       expect(mockBalanceDb.create).toHaveBeenCalledWith({ data: { userId: 'userY', type: TimeOffType.VACATION, year: toYear, initialDays: 15, usedDays: 0, adjustmentDays: 2 } });
       expect(mockBalanceDb.create).toHaveBeenCalledWith({ data: { userId: 'userY', type: TimeOffType.PERSONAL, year: toYear, initialDays: 3, usedDays: 0, adjustmentDays: 0 } });
       
       // Check specific update calls
       expect(mockBalanceDb.update).toHaveBeenCalledWith({ where: { id: 'existing-sick-x' }, data: { adjustmentDays: 0 } });
       expect(mockBalanceDb.update).toHaveBeenCalledWith({ where: { id: 'existing-sick-y' }, data: { adjustmentDays: 0 } });
     })

    it('should handle errors if finding users fails', async () => {
      // Arrange
      const testError = new Error('DB user find error')
      mockUserDb.findMany.mockRejectedValue(testError)
      // Act & Assert
      await expect(TimeOffBalanceService.processYearEndRollover(fromYear, toYear, maxCarryOver, defaultValues)).rejects.toThrow(testError)
      expect(mockBalanceDb.findFirst).not.toHaveBeenCalled()
      expect(mockBalanceDb.create).not.toHaveBeenCalled()
      expect(mockBalanceDb.update).not.toHaveBeenCalled()
    })
  })

  describe('updateBalanceUsage', () => {
    it('should correctly adjust usedDays', async () => {
      // Arrange
      const args = { userId: 'user-adjust', type: TimeOffType.VACATION, days: 3 };
      const currentYear = new Date().getFullYear(); // Get current year for assertion
      const initialBalance: TimeOffBalance = {
        id: 'balance-id', userId: args.userId, type: args.type, year: currentYear, // Use currentYear here
        initialDays: 15, usedDays: 5, adjustmentDays: 0,
        createdAt: new Date(), updatedAt: new Date()
      };
      const expectedUpdatedBalance: TimeOffBalance = {
        ...initialBalance, usedDays: initialBalance.usedDays + args.days
      };
      mockBalanceDb.findFirst.mockResolvedValue(initialBalance);
      mockBalanceDb.update.mockResolvedValue(expectedUpdatedBalance);

      // Act
      const result = await TimeOffBalanceService.adjustForApprovedRequest(args.userId, args.type, args.days)
      // Assert
      expect(mockBalanceDb.findFirst).toHaveBeenCalledTimes(1)
      expect(mockBalanceDb.findFirst).toHaveBeenCalledWith({
        where: { userId: args.userId, type: args.type, year: currentYear } // Assert with currentYear
      })
      expect(mockBalanceDb.update).toHaveBeenCalledTimes(1)
      expect(mockBalanceDb.update).toHaveBeenCalledWith({
        where: { id: initialBalance.id },
        data: { usedDays: expectedUpdatedBalance.usedDays }
      })
      expect(result).toEqual(expectedUpdatedBalance)
    })

    it('should return null if initial balance not found', async () => {
      // Arrange
      const args = { userId: 'user-no-balance', type: TimeOffType.SICK, days: 1 };
      mockBalanceDb.findFirst.mockResolvedValue(null);
      const currentYear = new Date().getFullYear(); // Need year for error message check
      // Act & Assert
      // Expect adjustForApprovedRequest to throw when balance not found
      await expect(TimeOffBalanceService.adjustForApprovedRequest(args.userId, args.type, args.days))
            .rejects.toThrow(`No balance found for user ${args.userId} of type ${args.type} for year ${currentYear}`);

      expect(mockBalanceDb.findFirst).toHaveBeenCalledTimes(1)
      expect(mockBalanceDb.findFirst).toHaveBeenCalledWith({
        where: { userId: args.userId, type: args.type, year: currentYear } // Assert with currentYear
      })
      expect(mockBalanceDb.update).not.toHaveBeenCalled()
    })

    it('should handle errors during findFirst', async () => {
      // Arrange
      const args = { userId: 'user-find-error', type: TimeOffType.PERSONAL, days: 1 };
      const testError = new Error('DB find error')
      mockBalanceDb.findFirst.mockRejectedValue(testError)
      // Act & Assert
      await expect(TimeOffBalanceService.adjustForApprovedRequest(args.userId, args.type, args.days)).rejects.toThrow(testError)
      expect(mockBalanceDb.update).not.toHaveBeenCalled()
    })

    it('should handle errors during update', async () => {
      // Arrange
      const args = { userId: 'user-update-error', type: TimeOffType.VACATION, days: 2 };
      const currentYear = new Date().getFullYear(); // Get current year
      const initialBalance: TimeOffBalance = {
        id: 'balance-id', userId: args.userId, type: args.type, year: currentYear, // Use currentYear
        initialDays: 10, usedDays: 1, adjustmentDays: 0,
        createdAt: new Date(), updatedAt: new Date()
      };
      mockBalanceDb.findFirst.mockResolvedValue(initialBalance);
      const testError = new Error('DB update error')
      mockBalanceDb.update.mockRejectedValue(testError)
      // Act & Assert
      await expect(TimeOffBalanceService.adjustForApprovedRequest(args.userId, args.type, args.days)).rejects.toThrow(testError)
      expect(mockBalanceDb.findFirst).toHaveBeenCalledTimes(1)
      expect(mockBalanceDb.update).toHaveBeenCalledTimes(1)
    })
  })

  // --- All methods covered --- 

}) 