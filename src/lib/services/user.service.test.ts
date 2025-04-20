import { describe, it, expect, vi, beforeEach } from 'vitest'
import { PrismaClient, Role } from '../../lib/generated/prisma/index' // Import type for casting & Role enum
import { UserService } from './user.service'

// Mock the Prisma client for UserService
vi.mock('./prisma.service', () => {
  const mockPrisma = {
    user: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      count: vi.fn(),
      // Add other user model methods if needed
    },
    // Mock other models if UserService interacts with them directly (unlikely)
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
// Access the mock functions via the exported structure
const mockUserDb = (PrismaServiceMock as any).__mockPrisma.user

describe('UserService', () => {

  beforeEach(() => {
    // Reset mocks before each test
    vi.resetAllMocks()
  })

  // --- Test cases for UserService static methods ---

  describe('findById', () => {
    it('should return a user when found by ID', async () => {
      // Arrange
      const userId = 'user-test-id'
      const mockUser = {
        id: userId, name: 'Test User', email: 'test@example.com', role: Role.EMPLOYEE,
        password: 'hashedpassword', departmentId: null, managerId: null,
        createdAt: new Date(), updatedAt: new Date()
      }
      mockUserDb.findUnique.mockResolvedValue(mockUser)

      // Act
      const result = await UserService.findById(userId)

      // Assert
      expect(mockUserDb.findUnique).toHaveBeenCalledTimes(1)
      expect(mockUserDb.findUnique).toHaveBeenCalledWith({ where: { id: userId } })
      expect(result).toEqual(mockUser)
    })

    it('should return null when user not found by ID', async () => {
      // Arrange
      const userId = 'not-found-id'
      mockUserDb.findUnique.mockResolvedValue(null)

      // Act
      const result = await UserService.findById(userId)

      // Assert
      expect(mockUserDb.findUnique).toHaveBeenCalledTimes(1)
      expect(mockUserDb.findUnique).toHaveBeenCalledWith({ where: { id: userId } })
      expect(result).toBeNull()
    })

    it('should handle errors during findById', async () => {
      // Arrange
      const userId = 'error-id'
      const testError = new Error('DB lookup failed')
      mockUserDb.findUnique.mockRejectedValue(testError)

      // Act & Assert
      await expect(UserService.findById(userId)).rejects.toThrow(testError)
      expect(mockUserDb.findUnique).toHaveBeenCalledTimes(1)
    })
  })

  describe('findByEmail', () => {
    it('should return a user when found by email', async () => {
      // Arrange
      const userEmail = 'test@example.com'
      const mockUser = { id: 'user-email-id', name: 'Email User', email: userEmail, role: Role.EMPLOYEE, password: '...', createdAt: new Date(), updatedAt: new Date() }
      mockUserDb.findUnique.mockResolvedValue(mockUser)
      // Act
      const result = await UserService.findByEmail(userEmail)
      // Assert
      expect(mockUserDb.findUnique).toHaveBeenCalledTimes(1)
      expect(mockUserDb.findUnique).toHaveBeenCalledWith({ where: { email: userEmail } })
      expect(result).toEqual(mockUser)
    })

    it('should return null when user not found by email', async () => {
      // Arrange
      const userEmail = 'notfound@example.com'
      mockUserDb.findUnique.mockResolvedValue(null)
      // Act
      const result = await UserService.findByEmail(userEmail)
      // Assert
      expect(mockUserDb.findUnique).toHaveBeenCalledTimes(1)
      expect(mockUserDb.findUnique).toHaveBeenCalledWith({ where: { email: userEmail } })
      expect(result).toBeNull()
    })

    it('should handle errors during findByEmail', async () => {
      // Arrange
      const userEmail = 'error@example.com'
      const testError = new Error('DB error')
      mockUserDb.findUnique.mockRejectedValue(testError)
      // Act & Assert
      await expect(UserService.findByEmail(userEmail)).rejects.toThrow(testError)
    })
  })

  describe('findAll', () => {
    it('should return a paginated list of users ordered by name', async () => {
      // Arrange
      const mockUsers = [{ id: 'u1', name: 'Alice' }, { id: 'u2', name: 'Bob' }]
      mockUserDb.findMany.mockResolvedValue(mockUsers as any)
      const page = 2
      const limit = 5
      // Act
      const result = await UserService.findAll(page, limit)
      // Assert
      expect(mockUserDb.findMany).toHaveBeenCalledTimes(1)
      expect(mockUserDb.findMany).toHaveBeenCalledWith({
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { name: 'asc' },
      })
      expect(result).toEqual(mockUsers)
    })

    it('should use default pagination when not provided', async () => {
      // Arrange
      const mockUsers = [{ id: 'u3', name: 'Charlie' }]
      mockUserDb.findMany.mockResolvedValue(mockUsers as any)
      // Act
      await UserService.findAll()
      // Assert
      expect(mockUserDb.findMany).toHaveBeenCalledTimes(1)
      expect(mockUserDb.findMany).toHaveBeenCalledWith({
        skip: 0, // Default page 1
        take: 10, // Default limit 10
        orderBy: { name: 'asc' },
      })
    })

    it('should handle errors during findAll', async () => {
      // Arrange
      const testError = new Error('DB error')
      mockUserDb.findMany.mockRejectedValue(testError)
      // Act & Assert
      await expect(UserService.findAll()).rejects.toThrow(testError)
    })
  })

  describe('create', () => {
    it('should create a user and return it', async () => {
      // Arrange
      const inputData = { name: 'New User', email: 'new@example.com', password: 'plainpassword' }
      const expectedUser = { ...inputData, id: 'new-id', role: Role.EMPLOYEE, createdAt: new Date(), updatedAt: new Date() }
      mockUserDb.create.mockResolvedValue(expectedUser as any)
      // Act
      const result = await UserService.create(inputData)
      // Assert
      expect(mockUserDb.create).toHaveBeenCalledTimes(1)
      expect(mockUserDb.create).toHaveBeenCalledWith({ data: inputData })
      expect(result).toEqual(expectedUser)
    })

    it('should handle errors during create', async () => {
      // Arrange
      const inputData = { name: 'Fail User', email: 'fail@example.com', password: 'bad' }
      const testError = new Error('DB create error')
      mockUserDb.create.mockRejectedValue(testError)
      // Act & Assert
      await expect(UserService.create(inputData)).rejects.toThrow(testError)
    })
  })

  describe('update', () => {
    it('should update a user and return the updated user', async () => {
      // Arrange
      const userId = 'update-user-id'
      const updateData = { name: 'Updated Name', role: Role.MANAGER }
      const expectedUser = { id: userId, name: 'Updated Name', email: '...', role: Role.MANAGER, password: '...', createdAt: new Date(), updatedAt: new Date() }
      mockUserDb.update.mockResolvedValue(expectedUser as any)
      // Act
      const result = await UserService.update(userId, updateData)
      // Assert
      expect(mockUserDb.update).toHaveBeenCalledTimes(1)
      expect(mockUserDb.update).toHaveBeenCalledWith({ where: { id: userId }, data: updateData })
      expect(result).toEqual(expectedUser)
    })

    it('should handle errors during update', async () => {
      // Arrange
      const userId = 'update-fail-id'
      const updateData = { name: 'Fail Update' }
      const testError = new Error('DB update error')
      mockUserDb.update.mockRejectedValue(testError)
      // Act & Assert
      await expect(UserService.update(userId, updateData)).rejects.toThrow(testError)
    })
  })

  describe('delete', () => {
    it('should delete a user and return the deleted user', async () => {
      // Arrange
      const userId = 'delete-user-id'
      const deletedUser = { id: userId, name: 'Deleted User', email: '...', role: Role.EMPLOYEE, password: '...', createdAt: new Date(), updatedAt: new Date() }
      mockUserDb.delete.mockResolvedValue(deletedUser as any)
      // Act
      const result = await UserService.delete(userId)
      // Assert
      expect(mockUserDb.delete).toHaveBeenCalledTimes(1)
      expect(mockUserDb.delete).toHaveBeenCalledWith({ where: { id: userId } })
      expect(result).toEqual(deletedUser)
    })

    it('should handle errors during delete', async () => {
      // Arrange
      const userId = 'delete-fail-id'
      const testError = new Error('DB delete error')
      mockUserDb.delete.mockRejectedValue(testError)
      // Act & Assert
      await expect(UserService.delete(userId)).rejects.toThrow(testError)
    })
  })

  describe('findByRole', () => {
    it('should return users filtered by role with pagination', async () => {
      // Arrange
      const role = Role.ADMIN
      const page = 1
      const limit = 5
      const mockAdmins = [{ id: 'a1', name: 'Admin One', role: Role.ADMIN }]
      mockUserDb.findMany.mockResolvedValue(mockAdmins as any)
      // Act
      const result = await UserService.findByRole(role, page, limit)
      // Assert
      expect(mockUserDb.findMany).toHaveBeenCalledTimes(1)
      expect(mockUserDb.findMany).toHaveBeenCalledWith({
        where: { role },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { name: 'asc' },
      })
      expect(result).toEqual(mockAdmins)
    })

    it('should handle errors during findByRole', async () => {
      // Arrange
      const testError = new Error('DB error')
      mockUserDb.findMany.mockRejectedValue(testError)
      // Act & Assert
      await expect(UserService.findByRole(Role.MANAGER)).rejects.toThrow(testError)
    })
  })

  describe('findManagers', () => {
    it('should return all users with the MANAGER role', async () => {
      // Arrange
      const mockManagers = [{ id: 'm1', name: 'Manager A', role: Role.MANAGER }]
      mockUserDb.findMany.mockResolvedValue(mockManagers as any)
      // Act
      const result = await UserService.findManagers()
      // Assert
      expect(mockUserDb.findMany).toHaveBeenCalledTimes(1)
      expect(mockUserDb.findMany).toHaveBeenCalledWith({
        where: { role: Role.MANAGER },
        orderBy: { name: 'asc' },
      })
      expect(result).toEqual(mockManagers)
    })

    it('should handle errors during findManagers', async () => {
      // Arrange
      const testError = new Error('DB error')
      mockUserDb.findMany.mockRejectedValue(testError)
      // Act & Assert
      await expect(UserService.findManagers()).rejects.toThrow(testError)
    })
  })

  describe('findByDepartment', () => {
    it('should return users filtered by department with pagination', async () => {
      // Arrange
      const departmentId = 'dept-123'
      const page = 3
      const limit = 2
      const mockUsers = [{ id: 'u5', name: 'Dept User', departmentId }]
      mockUserDb.findMany.mockResolvedValue(mockUsers as any)
      // Act
      const result = await UserService.findByDepartment(departmentId, page, limit)
      // Assert
      expect(mockUserDb.findMany).toHaveBeenCalledTimes(1)
      expect(mockUserDb.findMany).toHaveBeenCalledWith({
        where: { departmentId },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { name: 'asc' },
      })
      expect(result).toEqual(mockUsers)
    })

    it('should handle errors during findByDepartment', async () => {
      // Arrange
      const testError = new Error('DB error')
      mockUserDb.findMany.mockRejectedValue(testError)
      // Act & Assert
      await expect(UserService.findByDepartment('dept-err')).rejects.toThrow(testError)
    })
  })

  describe('findEmployeesByManager', () => {
    it('should return all users reporting to a specific manager', async () => {
      // Arrange
      const managerId = 'manager-xyz'
      const mockEmployees = [{ id: 'e1', name: 'Emp One', managerId }]
      mockUserDb.findMany.mockResolvedValue(mockEmployees as any)
      // Act
      const result = await UserService.findEmployeesByManager(managerId)
      // Assert
      expect(mockUserDb.findMany).toHaveBeenCalledTimes(1)
      expect(mockUserDb.findMany).toHaveBeenCalledWith({
        where: { managerId },
        orderBy: { name: 'asc' },
      })
      expect(result).toEqual(mockEmployees)
    })

    it('should handle errors during findEmployeesByManager', async () => {
      // Arrange
      const testError = new Error('DB error')
      mockUserDb.findMany.mockRejectedValue(testError)
      // Act & Assert
      await expect(UserService.findEmployeesByManager('manager-err')).rejects.toThrow(testError)
    })
  })

  describe('count', () => {
    it('should return the total count of users', async () => {
      // Arrange
      const count = 42
      mockUserDb.count.mockResolvedValue(count)
      // Act
      const result = await UserService.count()
      // Assert
      expect(mockUserDb.count).toHaveBeenCalledTimes(1)
      expect(mockUserDb.count).toHaveBeenCalledWith({ where: undefined })
      expect(result).toBe(count)
    })

    it('should return the count of users with filters applied', async () => {
      // Arrange
      const count = 15
      const filters = { role: Role.EMPLOYEE, departmentId: 'dept-filter' }
      mockUserDb.count.mockResolvedValue(count)
      // Act
      const result = await UserService.count(filters)
      // Assert
      expect(mockUserDb.count).toHaveBeenCalledTimes(1)
      expect(mockUserDb.count).toHaveBeenCalledWith({ where: filters })
      expect(result).toBe(count)
    })

    it('should handle errors during count', async () => {
      // Arrange
      const testError = new Error('DB count error')
      mockUserDb.count.mockRejectedValue(testError)
      // Act & Assert
      await expect(UserService.count()).rejects.toThrow(testError)
    })
  })

  // --- All methods covered --- 

}) 