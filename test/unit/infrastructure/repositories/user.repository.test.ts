import { describe, it, jest, expect, beforeEach } from '@jest/globals'
import { user } from '../../../fixtures/mock/user'
import { User } from '../../../../src/infrastructure/orm/sequelize/models/user.model'
import { UserModel } from '../../../../src/infrastructure/orm/sequelize/models/index.model'
import Dependencies, { Dependencies as IDependencies } from '../../../../src/infrastructure/config/dependencies'

describe('UserRepository', () => {
  const userModel = UserModel
  let dependencies: IDependencies

  beforeEach(async () => {
    dependencies = await Dependencies()
  })

  describe('Create', () => {
    it('Should return the new created user', async () => {
      const userInstance = new User({ ...user, password: 'hashed123' })
      userModel.create = (jest.fn() as jest.MockedFunction<typeof userModel.create>).mockResolvedValue(userInstance)

      const result = await dependencies.userRepository.create(user)

      expect(result).toEqual(userInstance)
      expect(userModel.create).toHaveBeenCalledWith(user)
    })
  })

  describe('FindAll', () => {
    it('Should return an array with all the users', async () => {
      const userInstance = new User({ ...user, password: 'hashed123' })
      userModel.findAll = (jest.fn() as jest.MockedFunction<typeof userModel.findAll>).mockResolvedValue([userInstance])

      const result = await dependencies.userRepository.findAll()

      expect(result).toEqual([userInstance])
    })

    it('Should return an empty array', async () => {
      userModel.findAll = (jest.fn() as jest.MockedFunction<typeof userModel.findAll>).mockResolvedValue([])

      const result = await dependencies.userRepository.findAll()

      expect(result).toEqual([])
    })
  })

  describe('FindOne', () => {
    it('Should return one user by email', async () => {
      const userInstance = new User(user)
      userModel.findOne = (jest.fn() as jest.MockedFunction<typeof userModel.findOne>).mockResolvedValue(userInstance)

      const result = await dependencies.userRepository.findById(user.email)

      expect(result).toEqual(userInstance)
    })

    it('Should return one user by id', async () => {
      const userInstance = new User({ ...user })
      userModel.findOne = (jest.fn() as jest.MockedFunction<typeof userModel.findOne>).mockResolvedValue(userInstance)

      const result = await dependencies.userRepository.findById(user.id!)

      expect(result).toEqual(userInstance)
    })
  })
})
