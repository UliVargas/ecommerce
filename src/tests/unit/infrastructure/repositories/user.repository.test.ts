import { describe, it, jest, expect, beforeEach } from '@jest/globals'
import { user } from '../../../fixtures/mock/user'
import { User } from '../../../../infrastructure/orm/sequelize/models/user.model'
import { UserModel } from '../../../../infrastructure/orm/sequelize/models/index.model'
import Dependencies, { Dependencies as IDependencies } from '../../../../infrastructure/config/dependencies'

describe('UserRepository', () => {
  const userModel = UserModel
  let dependencies: IDependencies

  beforeEach(async () => {
    dependencies = await Dependencies()
  })

  describe('Create', () => {
    it('Create User', async () => {
      const mockUser = new User({ id: 'user123', ...user, password: 'hashed123' })
      userModel.create = (jest.fn() as jest.MockedFunction<typeof userModel.create>).mockResolvedValue(mockUser)

      const result = await dependencies.userRepository.create(user)

      expect(result).toEqual(mockUser)
      expect(userModel.create).toHaveBeenCalledWith(user)
    })
  })

  describe('FindAll', () => {
    it('FindAll Users', async () => {
      const mockUser = new User({ id: 'user123', ...user, password: 'hashed123' })
      userModel.findAll = (jest.fn() as jest.MockedFunction<typeof userModel.findAll>).mockResolvedValue([mockUser])

      const result = await dependencies.userRepository.findAll()

      expect(result).toEqual([mockUser])
    })

    it('FindAll Users', async () => {
      userModel.findAll = (jest.fn() as jest.MockedFunction<typeof userModel.findAll>).mockResolvedValue([])

      const result = await dependencies.userRepository.findAll()

      expect(result).toEqual([])
    })
  })

  describe('FindOne', () => {
    it('FindOne User By Email', async () => {
      const userInstance = new User({ id: 'user123', ...user })
      userModel.findOne = (jest.fn() as jest.MockedFunction<typeof userModel.findOne>).mockResolvedValue(userInstance)

      const result = await dependencies.userRepository.findOne(user.email)

      expect(result).toEqual(userInstance)
    })

    it('FindOne User By Id', async () => {
      const userInstance = new User({ id: 'user123', ...user })
      userModel.findOne = (jest.fn() as jest.MockedFunction<typeof userModel.findOne>).mockResolvedValue(userInstance)

      const result = await dependencies.userRepository.findOne(user.id!)

      expect(result).toEqual(userInstance)
    })
  })
})
