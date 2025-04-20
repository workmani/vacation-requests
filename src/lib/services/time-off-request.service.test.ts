import { describe, it, expect, vi, beforeEach } from 'vitest'
import { PrismaClient, Role, TimeOffRequest, TimeOffType, RequestStatus } from '../../lib/generated/prisma/index'
import { TimeOffRequestService } from './time-off-request.service'

// Mock the Prisma client
vi.mock('./prisma.service', () => {
  const mockPrisma = {
    timeOffRequest: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      count: vi.fn(),
    },
    comment: { // Needed for includes/creates
      findMany: vi.fn(),
      create: vi.fn(),
    },
    user: { // Needed for includes
      findUnique: vi.fn(),
    },
    $transaction: vi.fn(),
  }
  return {
    prisma: mockPrisma as unknown as PrismaClient,
    default: mockPrisma as unknown as PrismaClient,
    __mockPrisma: mockPrisma,
  }
})

// Dynamically import the mocked module
const PrismaServiceMock = await import('./prisma.service')
// Access the mock functions
const mockRequestDb = (PrismaServiceMock as any).__mockPrisma.timeOffRequest
const mockCommentDb = (PrismaServiceMock as any).__mockPrisma.comment
const mockUserDb = (PrismaServiceMock as any).__mockPrisma.user

describe('TimeOffRequestService', () => {

  beforeEach(() => {
    vi.resetAllMocks()
  })

  // --- Test cases for TimeOffRequestService static methods ---

  describe('findById', () => {
    it('should return a request with includes when found by ID', async () => {
      // Arrange
      const requestId = 'req-abc'
      const mockRequest: TimeOffRequest = {
        id: requestId, userId: 'user1', type: TimeOffType.VACATION,
        status: RequestStatus.PENDING, startDate: new Date('2024-01-10'), endDate: new Date('2024-01-12'),
        duration: 3, notes: 'Test', reviewerId: null, reviewedAt: null,
        createdAt: new Date(), updatedAt: new Date()
      }
      const mockIncludedData = {
        ...mockRequest,
        user: { id: 'user1', name: 'Test User', email: 'test@test.com', role: Role.EMPLOYEE, password: '...', departmentId: 'd1', managerId: 'm1', createdAt: new Date(), updatedAt: new Date() },
        reviewer: null,
        comments: [],
      }
      mockRequestDb.findUnique.mockResolvedValue(mockIncludedData)

      // Act
      const result = await TimeOffRequestService.findById(requestId)

      // Assert
      expect(mockRequestDb.findUnique).toHaveBeenCalledTimes(1)
      expect(mockRequestDb.findUnique).toHaveBeenCalledWith({
        where: { id: requestId },
        include: {
          user: true,
          reviewer: true,
          comments: { orderBy: { createdAt: 'desc' } }
        }
      })
      expect(result).toEqual(mockIncludedData)
    })

    it('should return null when request not found by ID', async () => {
      // Arrange
      const requestId = 'not-found-req'
      mockRequestDb.findUnique.mockResolvedValue(null)

      // Act
      const result = await TimeOffRequestService.findById(requestId)

      // Assert
      expect(mockRequestDb.findUnique).toHaveBeenCalledTimes(1)
      expect(mockRequestDb.findUnique).toHaveBeenCalledWith(expect.objectContaining({ where: { id: requestId } }))
      expect(result).toBeNull()
    })

    it('should handle errors during findById', async () => {
      // Arrange
      const requestId = 'error-req'
      const testError = new Error('DB lookup failed')
      mockRequestDb.findUnique.mockRejectedValue(testError)

      // Act & Assert
      await expect(TimeOffRequestService.findById(requestId)).rejects.toThrow(testError)
      expect(mockRequestDb.findUnique).toHaveBeenCalledTimes(1)
    })
  })

  describe('findAll', () => {
    it('should return a paginated list of requests with includes', async () => {
      // Arrange
      const page = 1, limit = 10
      const mockRequests = [
        { id: 'r1', userId: 'u1', user: { name: 'User 1' }, reviewer: null },
        { id: 'r2', userId: 'u2', user: { name: 'User 2' }, reviewer: { name: 'Manager 1' } },
      ]
      mockRequestDb.findMany.mockResolvedValue(mockRequests as any)

      // Act
      const result = await TimeOffRequestService.findAll(page, limit)

      // Assert
      expect(mockRequestDb.findMany).toHaveBeenCalledTimes(1)
      expect(mockRequestDb.findMany).toHaveBeenCalledWith({
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: { user: true, reviewer: true }
      })
      expect(result).toEqual(mockRequests)
    })

    it('should use default pagination', async () => {
       // Arrange
       mockRequestDb.findMany.mockResolvedValue([])
       // Act
       await TimeOffRequestService.findAll()
       // Assert
       expect(mockRequestDb.findMany).toHaveBeenCalledWith(expect.objectContaining({
         skip: 0,
         take: 10,
       }))
    })

    it('should handle errors during findAll', async () => {
      // Arrange
      const testError = new Error('DB error')
      mockRequestDb.findMany.mockRejectedValue(testError)
      // Act & Assert
      await expect(TimeOffRequestService.findAll()).rejects.toThrow(testError)
    })
  })

  describe('create', () => {
    it('should create a request and return it with user included', async () => {
      // Arrange
      const inputData = {
        userId: 'user-creator',
        type: TimeOffType.SICK,
        startDate: new Date('2024-02-01'),
        endDate: new Date('2024-02-01'),
        duration: 1,
        notes: 'Flu',
        status: RequestStatus.PENDING // Explicitly setting default
      }
      const expectedRequest = { ...inputData, id: 'new-req-id', createdAt: new Date(), updatedAt: new Date() }
      const expectedResultWithUser = { ...expectedRequest, user: { name: 'Creator'} }
      mockRequestDb.create.mockResolvedValue(expectedResultWithUser as any)

      // Act
      const result = await TimeOffRequestService.create(inputData)

      // Assert
      expect(mockRequestDb.create).toHaveBeenCalledTimes(1)
      expect(mockRequestDb.create).toHaveBeenCalledWith({
        data: inputData,
        include: { user: true }
      })
      expect(result).toEqual(expectedResultWithUser)
    })

     it('should handle errors during create', async () => {
      // Arrange
       const inputData = { userId: 'fail', type: TimeOffType.PERSONAL, startDate: new Date(), endDate: new Date(), duration: 1 }
       const testError = new Error('DB create error')
       mockRequestDb.create.mockRejectedValue(testError)
       // Act & Assert
       await expect(TimeOffRequestService.create(inputData)).rejects.toThrow(testError)
    })
  })

  describe('update', () => {
    beforeEach(() => {
      // Mock Date constructor for predictable reviewedAt
      vi.useFakeTimers()
      vi.setSystemTime(new Date('2024-01-01T12:00:00.000Z'))
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it('should update a request and return it with includes', async () => {
      // Arrange
      const requestId = 'update-req-id'
      const updateData = { notes: 'Updated note' }
      const expectedResult = { id: requestId, notes: 'Updated note', user: {}, reviewer: {}, comments: [] }
      mockRequestDb.update.mockResolvedValue(expectedResult as any)

      // Act
      const result = await TimeOffRequestService.update(requestId, updateData)

      // Assert
      expect(mockRequestDb.update).toHaveBeenCalledTimes(1)
      expect(mockRequestDb.update).toHaveBeenCalledWith({
        where: { id: requestId },
        data: updateData, // reviewedAt not set here
        include: { user: true, reviewer: true, comments: true }
      })
      expect(result).toEqual(expectedResult)
    })

    it('should set reviewedAt when status changes to APPROVED', async () => {
      // Arrange
      const requestId = 'approve-req-id'
      const updateData = { status: RequestStatus.APPROVED, reviewerId: 'manager1' }
      const expectedResult = { id: requestId, status: RequestStatus.APPROVED, reviewedAt: new Date('2024-01-01T12:00:00.000Z') }
      mockRequestDb.update.mockResolvedValue(expectedResult as any)
      const expectedDate = new Date('2024-01-01T12:00:00.000Z')

      // Act
      await TimeOffRequestService.update(requestId, updateData)

      // Assert
      expect(mockRequestDb.update).toHaveBeenCalledTimes(1)
      // Check that data passed includes the reviewedAt set by the service
      expect(mockRequestDb.update).toHaveBeenCalledWith(expect.objectContaining({
        data: { ...updateData, reviewedAt: expectedDate },
      }))
    })

    it('should set reviewedAt when status changes to REJECTED', async () => {
      // Arrange
      const requestId = 'reject-req-id'
      const updateData = { status: RequestStatus.REJECTED, reviewerId: 'manager1' }
      const expectedResult = { id: requestId, status: RequestStatus.REJECTED, reviewedAt: new Date('2024-01-01T12:00:00.000Z') }
      mockRequestDb.update.mockResolvedValue(expectedResult as any)
      const expectedDate = new Date('2024-01-01T12:00:00.000Z')

      // Act
      await TimeOffRequestService.update(requestId, updateData)

      // Assert
      expect(mockRequestDb.update).toHaveBeenCalledTimes(1)
      expect(mockRequestDb.update).toHaveBeenCalledWith(expect.objectContaining({
        data: { ...updateData, reviewedAt: expectedDate },
      }))
    })

    it('should NOT set reviewedAt when status changes to PENDING', async () => {
      // Arrange
      const requestId = 'pending-req-id'
      const updateData = { status: RequestStatus.PENDING } // e.g., reverting an approval
      mockRequestDb.update.mockResolvedValue({ id: requestId } as any)

      // Act
      await TimeOffRequestService.update(requestId, updateData)

      // Assert
      expect(mockRequestDb.update).toHaveBeenCalledTimes(1)
      // Check that data passed does NOT include reviewedAt
      expect(mockRequestDb.update).toHaveBeenCalledWith(expect.objectContaining({
        data: { status: RequestStatus.PENDING },
      }))
      expect(mockRequestDb.update.mock.calls[0][0].data).not.toHaveProperty('reviewedAt')
    })

    it('should handle errors during update', async () => {
      // Arrange
      const requestId = 'update-fail-id'
      const updateData = { notes: 'Fail' }
      const testError = new Error('DB update error')
      mockRequestDb.update.mockRejectedValue(testError)
      // Act & Assert
      await expect(TimeOffRequestService.update(requestId, updateData)).rejects.toThrow(testError)
    })
  })

  describe('delete', () => {
    it('should delete a request', async () => {
      // Arrange
      const requestId = 'delete-req-id'
      const deletedRequest = { id: requestId, userId: 'u1' }
      mockRequestDb.delete.mockResolvedValue(deletedRequest as any)
      // Act
      const result = await TimeOffRequestService.delete(requestId)
      // Assert
      expect(mockRequestDb.delete).toHaveBeenCalledTimes(1)
      expect(mockRequestDb.delete).toHaveBeenCalledWith({ where: { id: requestId } })
      expect(result).toEqual(deletedRequest)
    })

     it('should handle errors during delete', async () => {
      // Arrange
       const requestId = 'delete-fail-id'
       const testError = new Error('DB delete error')
       mockRequestDb.delete.mockRejectedValue(testError)
       // Act & Assert
       await expect(TimeOffRequestService.delete(requestId)).rejects.toThrow(testError)
    })
  })

  describe('findByUser', () => {
    it('should return requests for a user with includes', async () => {
      // Arrange
      const userId = 'user-with-reqs'
      const page = 1, limit = 5
      const mockRequests = [{ id: 'r3', userId, reviewer: { name: 'Manager' }, comments: [] }]
      mockRequestDb.findMany.mockResolvedValue(mockRequests as any)

      // Act
      const result = await TimeOffRequestService.findByUser(userId, page, limit)

      // Assert
      expect(mockRequestDb.findMany).toHaveBeenCalledTimes(1)
      expect(mockRequestDb.findMany).toHaveBeenCalledWith({
        where: { userId },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: { reviewer: true, comments: true }
      })
      expect(result).toEqual(mockRequests)
    })

     it('should handle errors during findByUser', async () => {
       // Arrange
       const testError = new Error('DB error')
       mockRequestDb.findMany.mockRejectedValue(testError)
       // Act & Assert
       await expect(TimeOffRequestService.findByUser('err-user')).rejects.toThrow(testError)
    })
  })

  describe('findByStatus', () => {
    it('should return requests filtered by status with includes', async () => {
      // Arrange
      const status = RequestStatus.APPROVED
      const page = 1, limit = 10
      const mockRequests = [{ id: 'r4', status, user: { name: 'U' }, reviewer: { name: 'M'} }]
      mockRequestDb.findMany.mockResolvedValue(mockRequests as any)

      // Act
      const result = await TimeOffRequestService.findByStatus(status, page, limit)

      // Assert
      expect(mockRequestDb.findMany).toHaveBeenCalledTimes(1)
      expect(mockRequestDb.findMany).toHaveBeenCalledWith({
        where: { status },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: { user: true, reviewer: true }
      })
      expect(result).toEqual(mockRequests)
    })

     it('should handle errors during findByStatus', async () => {
       // Arrange
       const testError = new Error('DB error')
       mockRequestDb.findMany.mockRejectedValue(testError)
       // Act & Assert
       await expect(TimeOffRequestService.findByStatus(RequestStatus.PENDING)).rejects.toThrow(testError)
    })
  })

  describe('findByManager', () => {
    it('should return requests for users reporting to a manager', async () => {
      // Arrange
      const managerId = 'manager-abc'
      const page = 1, limit = 10
      const mockRequests = [{ id: 'r5', user: { managerId } }]
      mockRequestDb.findMany.mockResolvedValue(mockRequests as any)

      // Act
      const result = await TimeOffRequestService.findByManager(managerId, page, limit)

      // Assert
      expect(mockRequestDb.findMany).toHaveBeenCalledTimes(1)
      expect(mockRequestDb.findMany).toHaveBeenCalledWith({
        where: { user: { managerId } },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: { user: true, reviewer: true, comments: true }
      })
      expect(result).toEqual(mockRequests)
    })

     it('should handle errors during findByManager', async () => {
       // Arrange
       const testError = new Error('DB error')
       mockRequestDb.findMany.mockRejectedValue(testError)
       // Act & Assert
       await expect(TimeOffRequestService.findByManager('err-manager')).rejects.toThrow(testError)
    })
  })

  describe('findByDateRange', () => {
    it('should return requests overlapping the date range', async () => {
      // Arrange
      const startDate = new Date('2024-03-01')
      const endDate = new Date('2024-03-10')
      const page = 1, limit = 10
      const mockRequests = [{ id: 'r6' }]
      mockRequestDb.findMany.mockResolvedValue(mockRequests as any)

      // Act
      const result = await TimeOffRequestService.findByDateRange(startDate, endDate, page, limit)

      // Assert
      expect(mockRequestDb.findMany).toHaveBeenCalledTimes(1)
      expect(mockRequestDb.findMany).toHaveBeenCalledWith({
        where: {
          OR: [
            { startDate: { gte: startDate, lte: endDate } },
            { endDate: { gte: startDate, lte: endDate } },
            { startDate: { lte: startDate }, endDate: { gte: endDate } }
          ]
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { startDate: 'asc' },
        include: { user: true }
      })
      expect(result).toEqual(mockRequests)
    })

     it('should handle errors during findByDateRange', async () => {
       // Arrange
       const testError = new Error('DB error')
       mockRequestDb.findMany.mockRejectedValue(testError)
       // Act & Assert
       await expect(TimeOffRequestService.findByDateRange(new Date(), new Date())).rejects.toThrow(testError)
    })
  })

  describe('addComment', () => {
    it('should add a comment to a request and return the updated request', async () => {
      // Arrange
      const requestId = 'req-with-comment'
      const content = 'This is a test comment'
      const expectedResult = { id: requestId, comments: [{ content }] }
      // Mock the update method which is used by addComment
      mockRequestDb.update.mockResolvedValue(expectedResult as any)

      // Act
      const result = await TimeOffRequestService.addComment(requestId, content)

      // Assert
      expect(mockRequestDb.update).toHaveBeenCalledTimes(1)
      expect(mockRequestDb.update).toHaveBeenCalledWith({
        where: { id: requestId },
        data: {
          comments: { create: { content } }
        },
        include: { comments: { orderBy: { createdAt: 'desc' } } }
      })
      expect(result).toEqual(expectedResult)
    })

     it('should handle errors during addComment', async () => {
       // Arrange
       const testError = new Error('DB comment error')
       mockRequestDb.update.mockRejectedValue(testError)
       // Act & Assert
       await expect(TimeOffRequestService.addComment('err-req', 'fail comment')).rejects.toThrow(testError)
    })
  })

  describe('count', () => {
    it('should return the total count of requests', async () => {
      // Arrange
      const count = 100
      mockRequestDb.count.mockResolvedValue(count)
      // Act
      const result = await TimeOffRequestService.count()
      // Assert
      expect(mockRequestDb.count).toHaveBeenCalledTimes(1)
      expect(mockRequestDb.count).toHaveBeenCalledWith({ where: {} })
      expect(result).toBe(count)
    })

    it('should return the count with filters (userId)', async () => {
      // Arrange
      const count = 5
      const filters = { userId: 'user-filter' }
      mockRequestDb.count.mockResolvedValue(count)
      // Act
      const result = await TimeOffRequestService.count(filters)
      // Assert
      expect(mockRequestDb.count).toHaveBeenCalledTimes(1)
      expect(mockRequestDb.count).toHaveBeenCalledWith({ where: { userId: filters.userId } })
      expect(result).toBe(count)
    })

    it('should return the count with filters (status)', async () => {
      // Arrange
      const count = 10
      const filters = { status: RequestStatus.PENDING }
      mockRequestDb.count.mockResolvedValue(count)
      // Act
      const result = await TimeOffRequestService.count(filters)
      // Assert
      expect(mockRequestDb.count).toHaveBeenCalledTimes(1)
      expect(mockRequestDb.count).toHaveBeenCalledWith({ where: { status: filters.status } })
      expect(result).toBe(count)
    })

     it('should return the count with filters (managerId)', async () => {
      // Arrange
      const count = 20
      const filters = { managerId: 'manager-filter' }
      mockRequestDb.count.mockResolvedValue(count)
      // Act
      const result = await TimeOffRequestService.count(filters)
      // Assert
      expect(mockRequestDb.count).toHaveBeenCalledTimes(1)
      // Check that the where clause includes the nested user filter
      expect(mockRequestDb.count).toHaveBeenCalledWith({ where: { user: { managerId: filters.managerId } } })
      expect(result).toBe(count)
    })

    it('should handle errors during count', async () => {
      // Arrange
      const testError = new Error('DB count error')
      mockRequestDb.count.mockRejectedValue(testError)
      // Act & Assert
      await expect(TimeOffRequestService.count()).rejects.toThrow(testError)
    })
  })

  // --- All methods covered --- 

}) 