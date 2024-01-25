import { describe, jest, it, expect } from '@jest/globals'
import { CreateService, FindAllService } from '../../../../../domain/services/user/index.service'
import { dependencies } from '../../../dependencies'
import { user } from '../../../mock/user'

describe('UserService', () => {
  describe('Create', () => {
    const createService = CreateService(dependencies)
    it('Create User', async () => {
      dependencies.userRepository.create = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.create>).mockResolvedValue({ id: 'user123', ...user })
      const result = await createService(user)
      expect(result).toEqual({ id: 'user123', ...user })
      expect(dependencies.userRepository.create).toBeCalledWith(user)
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
})
