import { describe, it, jest, expect } from '@jest/globals'
import { CreateService } from '../../../../domain/services/user/index.service'
import { dependencies } from '../../dependencies'
import { userRepository } from '../../sequelize.repository'
import { user } from '../../mock/user'

describe('UserRepository', () => {
  describe('Create', () => {
    const createService = CreateService(dependencies)
    it('Create User', async () => {
      userRepository.create = (jest.fn() as jest.MockedFunction<typeof userRepository.create>).mockResolvedValue({ id: 'user123', ...user })
      const result = await createService(user)
      expect(result).toEqual({ id: 'user123', ...user })
    })
  })
})
