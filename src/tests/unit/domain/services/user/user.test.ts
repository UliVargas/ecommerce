import { describe, jest, it, expect } from '@jest/globals'
import { CreateService, FindAllService, FindOneService, LoginService } from '../../../../../domain/services/user/index.service'
import { dependencies } from '../../../../fixtures/dependencies'
import { user } from '../../../../fixtures/mock/user'

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

  describe('Login User', () => {
    const loginService = LoginService(dependencies)
    it('Login', async () => {
      dependencies.userRepository.findOne = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findOne>).mockResolvedValue(user)
      dependencies.encryptorRepository.compare = (jest.fn() as jest.MockedFunction<typeof dependencies.encryptorRepository.compare>).mockResolvedValue(true)
      dependencies.tokenRepository.create = (jest.fn() as jest.MockedFunction<typeof dependencies.tokenRepository.create>).mockResolvedValue('token123')

      const result = await loginService({ email: user.email, password: user.password })

      expect(result).toEqual({ token: 'token123' })
    })
  })
})
