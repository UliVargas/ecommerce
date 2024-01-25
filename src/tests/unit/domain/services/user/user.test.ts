import { describe, jest, it, expect } from '@jest/globals'
import { CreateService, FindAllService, FindOneService } from '../../../../../domain/services/user/index.service'
import { dependencies } from '../../../dependencies'
import { user } from '../../../mock/user'

describe('UserService', () => {
  describe('Create', () => {
    const createService = CreateService(dependencies)
    it('Create User', async () => {
      dependencies.encryptorRepository.hash = (jest.fn() as jest.MockedFunction<typeof dependencies.encryptorRepository.hash>).mockResolvedValue('hashed123')
      dependencies.userRepository.create = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.create>).mockResolvedValue({ id: 'user123', ...user, password: 'hashed123' })

      const result = await createService(user)

      expect(result).toEqual({ id: 'user123', ...user, password: 'hashed123' })
      expect(dependencies.encryptorRepository.hash).toBeCalledWith(user.password)
      expect(dependencies.userRepository.create).toBeCalledWith({ ...user, password: 'hashed123' })
    })
  })

  describe('FindAll', () => {
    const findAllService = FindAllService(dependencies)
    it('FindAll Users', async () => {
      dependencies.userRepository.findAll = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findAll>).mockResolvedValue([user])

      const result = await findAllService()

      expect(result).toEqual([user])
    })
  })

  describe('FindOne', () => {
    const findOneService = FindOneService(dependencies)
    it('FindOne User By Email', async () => {
      dependencies.userRepository.findOne = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findOne>).mockResolvedValue(user)

      const result = await findOneService(user.email)

      expect(result).toEqual(user)
    })

    it('FindOne User By Id', async () => {
      dependencies.userRepository.findOne = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findOne>).mockResolvedValue(user)

      const result = await findOneService(user.id!)

      expect(result).toEqual(user)
    })
  })
})
