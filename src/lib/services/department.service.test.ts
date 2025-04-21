import { describe, it, expect, vi, beforeEach, Mock } from 'vitest'
import { PrismaClient, Department as PrismaDepartment } from '../../lib/generated/prisma/index'
import { DepartmentService } from './department.service'

// Define types for the mock Prisma client structure using Mock
type MockPrismaDepartment = {
  findMany: Mock
  findUnique: Mock
  findUniqueOrThrow: Mock
  create: Mock
  update: Mock
  delete: Mock
  findFirst: Mock
  count: Mock
}
type MockPrismaClient = {
  department: MockPrismaDepartment
  // Add other potential mocked parts if needed, e.g., user, $transaction
  $transaction: Mock
}

// Mock the Prisma client
vi.mock('./prisma.service', () => {
  const mockPrisma: MockPrismaClient = {
    department: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      findUniqueOrThrow: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      findFirst: vi.fn(),
      count: vi.fn(),
    },
    // Mock other parts if needed
    $transaction: vi.fn(),
  }
  return {
    prisma: mockPrisma as unknown as PrismaClient,
    default: mockPrisma as unknown as PrismaClient,
    __mockPrisma: mockPrisma
  }
})

// Type assertion for the dynamically imported module
type PrismaServiceMockType = typeof import('./prisma.service') & {
  __mockPrisma: MockPrismaClient
}

// Dynamically import the mocked module and assert its type
const PrismaServiceMock = await import('./prisma.service') as PrismaServiceMockType

// Access the mock functions with the asserted type
const mockDepartmentDb = PrismaServiceMock.__mockPrisma.department

describe('DepartmentService', () => {
  let departmentService: DepartmentService

  beforeEach(() => {
    // Reset mocks before each test
    vi.resetAllMocks()
    // Instantiate the service, which will use the mocked prisma
    departmentService = new DepartmentService()
  })

  it('should be defined', () => {
    expect(departmentService).toBeDefined()
  })

  // Test cases for DepartmentService static methods

  describe('findAll', () => {
    it('should return a list of departments ordered by name', async () => {
      // Arrange
      const mockDepartments: PrismaDepartment[] = [
        { id: '1', name: 'Engineering', description: 'Builds stuff', createdAt: new Date(), updatedAt: new Date() },
        { id: '2', name: 'HR', description: 'People stuff', createdAt: new Date(), updatedAt: new Date() },
      ]
      mockDepartmentDb.findMany.mockResolvedValue(mockDepartments)

      // Act
      const result = await DepartmentService.findAll()

      // Assert
      expect(mockDepartmentDb.findMany).toHaveBeenCalledTimes(1)
      expect(mockDepartmentDb.findMany).toHaveBeenCalledWith({ orderBy: { name: 'asc' } })
      expect(result).toEqual(mockDepartments)
    })

    it('should handle errors when finding all departments', async () => {
      // Arrange
      const testError = new Error('Database error')
      mockDepartmentDb.findMany.mockRejectedValue(testError)

      // Act & Assert
      await expect(DepartmentService.findAll()).rejects.toThrow(testError)
      expect(mockDepartmentDb.findMany).toHaveBeenCalledTimes(1)
    })
  })

  // --- Add tests for findById, create, update, delete, findByName, findWithUsers, findAllWithUserCounts ---

  describe('findById', () => {
    it('should return a department when found', async () => {
      // Arrange
      const departmentId = 'test-id'
      const mockDepartment: PrismaDepartment = { id: departmentId, name: 'Found Dept', description: null, createdAt: new Date(), updatedAt: new Date() }
      mockDepartmentDb.findUnique.mockResolvedValue(mockDepartment)

      // Act
      const result = await DepartmentService.findById(departmentId)

      // Assert
      expect(mockDepartmentDb.findUnique).toHaveBeenCalledTimes(1)
      expect(mockDepartmentDb.findUnique).toHaveBeenCalledWith({ where: { id: departmentId } })
      expect(result).toEqual(mockDepartment)
    })

    it('should return null when department not found', async () => {
      // Arrange
      const departmentId = 'not-found-id'
      mockDepartmentDb.findUnique.mockResolvedValue(null)

      // Act
      const result = await DepartmentService.findById(departmentId)

      // Assert
      expect(mockDepartmentDb.findUnique).toHaveBeenCalledTimes(1)
      expect(mockDepartmentDb.findUnique).toHaveBeenCalledWith({ where: { id: departmentId } })
      expect(result).toBeNull()
    })

    it('should handle errors during findById', async () => {
      // Arrange
      const departmentId = 'error-id'
      const testError = new Error('DB lookup failed')
      mockDepartmentDb.findUnique.mockRejectedValue(testError)

      // Act & Assert
      await expect(DepartmentService.findById(departmentId)).rejects.toThrow(testError)
      expect(mockDepartmentDb.findUnique).toHaveBeenCalledTimes(1)
    })
  })

  describe('create', () => {
    it('should create a new department and return it', async () => {
      // Arrange
      const inputData = { name: 'New Department', description: 'Creates things' }
      const expectedOutput: PrismaDepartment = {
        id: 'new-dept-id',
        ...inputData,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      mockDepartmentDb.create.mockResolvedValue(expectedOutput)

      // Act
      const result = await DepartmentService.create(inputData)

      // Assert
      expect(mockDepartmentDb.create).toHaveBeenCalledTimes(1)
      expect(mockDepartmentDb.create).toHaveBeenCalledWith({ data: inputData })
      expect(result).toEqual(expectedOutput)
    })

    it('should handle errors during department creation', async () => {
      // Arrange
      const inputData = { name: 'Failing Department', description: 'Fails things' }
      const testError = new Error('DB insertion failed')
      mockDepartmentDb.create.mockRejectedValue(testError)

      // Act & Assert
      await expect(DepartmentService.create(inputData)).rejects.toThrow(testError)
      expect(mockDepartmentDb.create).toHaveBeenCalledTimes(1)
      expect(mockDepartmentDb.create).toHaveBeenCalledWith({ data: inputData })
    })
  })

  describe('update', () => {
    it('should update a department and return the updated data', async () => {
      // Arrange
      const departmentId = 'update-id'
      const updateData = { name: 'Updated Department Name', description: 'Updated Desc' }
      const expectedUpdatedDepartment: PrismaDepartment = {
        id: departmentId,
        ...updateData,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      mockDepartmentDb.update.mockResolvedValue(expectedUpdatedDepartment)

      // Act
      const result = await DepartmentService.update(departmentId, updateData)

      // Assert
      expect(mockDepartmentDb.update).toHaveBeenCalledTimes(1)
      expect(mockDepartmentDb.update).toHaveBeenCalledWith({
        where: { id: departmentId },
        data: updateData,
      })
      expect(result).toEqual(expectedUpdatedDepartment)
    })

    it('should handle errors during department update', async () => {
      // Arrange
      const departmentId = 'update-error-id'
      const updateData = { name: 'Error Update' }
      const testError = new Error('DB update failed')
      mockDepartmentDb.update.mockRejectedValue(testError)

      // Act & Assert
      await expect(DepartmentService.update(departmentId, updateData)).rejects.toThrow(testError)
      expect(mockDepartmentDb.update).toHaveBeenCalledTimes(1)
      expect(mockDepartmentDb.update).toHaveBeenCalledWith({
        where: { id: departmentId },
        data: updateData,
      })
    })

    // Note: Prisma's update usually throws an error if the record to update is not found.
    // We are implicitly testing this via the error handling case above.
    // If specific 'not found' handling were implemented in the service, we'd add a test for that.
  })

  describe('delete', () => {
    it('should delete a department and return the deleted record', async () => {
      // Arrange
      const departmentId = 'delete-id'
      const expectedDeletedDepartment: PrismaDepartment = {
        id: departmentId,
        name: 'Deleted Dept',
        description: 'Was here',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      mockDepartmentDb.delete.mockResolvedValue(expectedDeletedDepartment)

      // Act
      const result = await DepartmentService.delete(departmentId)

      // Assert
      expect(mockDepartmentDb.delete).toHaveBeenCalledTimes(1)
      expect(mockDepartmentDb.delete).toHaveBeenCalledWith({ where: { id: departmentId } })
      expect(result).toEqual(expectedDeletedDepartment)
    })

    it('should handle errors during department deletion', async () => {
      // Arrange
      const departmentId = 'delete-error-id'
      const testError = new Error('DB deletion failed')
      mockDepartmentDb.delete.mockRejectedValue(testError)

      // Act & Assert
      await expect(DepartmentService.delete(departmentId)).rejects.toThrow(testError)
      expect(mockDepartmentDb.delete).toHaveBeenCalledTimes(1)
      expect(mockDepartmentDb.delete).toHaveBeenCalledWith({ where: { id: departmentId } })
    })

    // Note: Prisma's delete usually throws an error if the record to delete is not found.
    // We are implicitly testing this via the error handling case above.
  })

  describe('findByName', () => {
    it('should return a department when found by name (case-insensitive)', async () => {
      // Arrange
      const departmentName = 'Findable Dept'
      const mockDepartment = { id: 'found-by-name-id', name: departmentName, description: null, createdAt: new Date(), updatedAt: new Date() }
      mockDepartmentDb.findFirst.mockResolvedValue(mockDepartment)

      // Act
      const result = await DepartmentService.findByName(departmentName.toLowerCase()) // Test case-insensitivity

      // Assert
      expect(mockDepartmentDb.findFirst).toHaveBeenCalledTimes(1)
      expect(mockDepartmentDb.findFirst).toHaveBeenCalledWith({
        where: { name: { equals: departmentName.toLowerCase(), mode: 'insensitive' } },
      })
      expect(result).toEqual(mockDepartment)
    })

    it('should return null when department not found by name', async () => {
      // Arrange
      const departmentName = 'not-found-name'
      mockDepartmentDb.findFirst.mockResolvedValue(null)

      // Act
      const result = await DepartmentService.findByName(departmentName)

      // Assert
      expect(mockDepartmentDb.findFirst).toHaveBeenCalledTimes(1)
      expect(mockDepartmentDb.findFirst).toHaveBeenCalledWith({
        where: { name: { equals: departmentName, mode: 'insensitive' } },
      })
      expect(result).toBeNull()
    })

    it('should handle errors during findByName', async () => {
      // Arrange
      const departmentName = 'error-name'
      const testError = new Error('DB lookup failed')
      mockDepartmentDb.findFirst.mockRejectedValue(testError)

      // Act & Assert
      await expect(DepartmentService.findByName(departmentName)).rejects.toThrow(testError)
      expect(mockDepartmentDb.findFirst).toHaveBeenCalledTimes(1)
    })
  })

  describe('findWithUsers', () => {
    it('should return a department with its users', async () => {
      // Arrange
      const departmentId = 'dept-with-users-id'
      const mockUsers = [
        { id: 'user1', name: 'Alice', email: 'alice@test.com' },
        { id: 'user2', name: 'Bob', email: 'bob@test.com' },
      ]
      const mockDepartmentWithUsers = {
        id: departmentId, name: 'Dept With Users', description: null, createdAt: new Date(), updatedAt: new Date(),
        users: mockUsers
      }
      mockDepartmentDb.findUniqueOrThrow.mockResolvedValue(mockDepartmentWithUsers)

      // Act
      const result = await DepartmentService.findWithUsers(departmentId)

      // Assert
      expect(mockDepartmentDb.findUniqueOrThrow).toHaveBeenCalledTimes(1)
      expect(mockDepartmentDb.findUniqueOrThrow).toHaveBeenCalledWith({
        where: { id: departmentId },
        include: { users: { orderBy: { name: 'asc' } } },
      })
      expect(result).toEqual(mockDepartmentWithUsers)
      expect(result.users).toEqual(mockUsers)
    })

    it('should throw an error if department not found', async () => {
      // Arrange
      const departmentId = 'throw-not-found-id'
      const testError = new Error('Record not found') // Prisma throws specific errors, but general error is fine for mock
      mockDepartmentDb.findUniqueOrThrow.mockRejectedValue(testError)

      // Act & Assert
      await expect(DepartmentService.findWithUsers(departmentId)).rejects.toThrow(testError)
      expect(mockDepartmentDb.findUniqueOrThrow).toHaveBeenCalledTimes(1)
      expect(mockDepartmentDb.findUniqueOrThrow).toHaveBeenCalledWith({
        where: { id: departmentId },
        include: { users: { orderBy: { name: 'asc' } } },
      })
    })

    // General DB error handling is covered by the case above
  })

  describe('findAllWithUserCounts', () => {
    it('should return departments with user counts', async () => {
      // Arrange
      // Use the Prisma type with _count directly
      const mockData: (PrismaDepartment & { _count?: { users?: number } })[] = [
        { id: 'd1', name: 'Dept A', description: '', createdAt: new Date(), updatedAt: new Date(), _count: { users: 5 } },
        { id: 'd2', name: 'Dept B', description: '', createdAt: new Date(), updatedAt: new Date(), _count: { users: 3 } }
      ]
      mockDepartmentDb.findMany.mockResolvedValue(mockData)

      // Act
      const result = await DepartmentService.findAllWithUserCounts()

      // Assert
      expect(mockDepartmentDb.findMany).toHaveBeenCalledTimes(1)
      expect(mockDepartmentDb.findMany).toHaveBeenCalledWith({
        include: { _count: { select: { users: true } } },
        orderBy: { name: 'asc' }
      })
      // Update expectation to match the actual structure received
      expect(result).toEqual([
        expect.objectContaining({ id: 'd1', name: 'Dept A', userCount: 5 }), // Use userCount instead of _count.users
        expect.objectContaining({ id: 'd2', name: 'Dept B', userCount: 3 }) // Use userCount and the actual count received (3)
      ])
    })

    it('should handle errors during findAllWithUserCounts', async () => {
      // Arrange
      const testError = new Error('DB findMany failed')
      mockDepartmentDb.findMany.mockRejectedValue(testError)

      // Act & Assert
      await expect(DepartmentService.findAllWithUserCounts()).rejects.toThrow(testError)
      expect(mockDepartmentDb.findMany).toHaveBeenCalledTimes(1)
    })
  })

  // --- All methods covered --- 

}) 