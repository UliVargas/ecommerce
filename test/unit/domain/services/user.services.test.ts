import { describe, jest, it, expect } from '@jest/globals'
import { CreateService, FindAllService, FindOneService, LoginService } from '../../../../src/domain/services/user/index.service'
import { dependencies } from '../../../fixtures/dependencies'
import { user } from '../../../fixtures/mock/user'
import ErrorConstructor from '../../../../src/adapters/middlewares/errors/error.constructor'

describe('UserService', () => {
  describe('Create', () => {
    const createService = CreateService(dependencies)
    it('Should return the new created user', async () => {
      dependencies.encryptorRepository.hash = (jest.fn() as jest.MockedFunction<typeof dependencies.encryptorRepository.hash>).mockResolvedValue('hashed123')
      dependencies.userRepository.create = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.create>).mockResolvedValue({ ...user, password: 'hashed123' })

      const result = await createService(user)

      expect(result).toEqual({ ...user, password: 'hashed123' })
      expect(dependencies.encryptorRepository.hash).toBeCalledWith(user.password)
      expect(dependencies.userRepository.create).toBeCalledWith({ ...user, password: 'hashed123' })
    })
  })

  describe('FindAll', () => {
    const findAllService = FindAllService(dependencies)
    it('Should return an array with all the users', async () => {
      dependencies.userRepository.findAll = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findAll>).mockResolvedValue([user])

      const result = await findAllService()

      expect(result).toEqual([user])
    })

    it('Should return an empty array', async () => {
      dependencies.userRepository.findAll = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findAll>).mockResolvedValue([])

      const result = await findAllService()

      expect(result).toEqual([])
    })
  })

  describe('FindOne User By Email', () => {
    const findOneService = FindOneService(dependencies)
    it('Should return one user by email', async () => {
      dependencies.userRepository.findOne = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findOne>).mockResolvedValue(user)

      const result = await findOneService(user.email)

      expect(result).toEqual(user)
    })

    it('Should return one user by id', async () => {
      dependencies.userRepository.findOne = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findOne>).mockResolvedValue(user)

      const result = await findOneService(user.id!)

      expect(result).toEqual(user)
    })
  })

  describe('Login', () => {
    const loginService = LoginService(dependencies)
    it('Should throw USER_NOT_FOUND error if email does not exist', async () => {
      dependencies.userRepository.findOneByEmail = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findOneByEmail>).mockResolvedValue(null)

      await expect(loginService({ email: user.email, password: user.password }))
        .rejects.toThrowError(new ErrorConstructor({ errorCode: 'USER_NOT_FOUND' }))
      expect(dependencies.userRepository.findOneByEmail).toHaveBeenCalledWith(user.email)
    })

    it('Should throw INVALID_CREDENTIALS error if password does not match', async () => {
      dependencies.userRepository.findOneByEmail = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findOneByEmail>).mockResolvedValue(user)
      dependencies.encryptorRepository.compare = (jest.fn() as jest.MockedFunction<typeof dependencies.encryptorRepository.compare>).mockResolvedValue(false)

      await expect(loginService({ email: user.email, password: user.password }))
        .rejects.toThrowError(new ErrorConstructor({ errorCode: 'INVALID_CREDENTIALS' }))
      expect(dependencies.userRepository.findOneByEmail).toHaveBeenCalledWith(user.email)
      expect(dependencies.encryptorRepository.compare).toHaveBeenCalledWith(user.password, 'pass123')
    })

    it('Should return a token', async () => {
      dependencies.userRepository.findOneByEmail = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findOneByEmail>).mockResolvedValue(user)
      dependencies.encryptorRepository.compare = (jest.fn() as jest.MockedFunction<typeof dependencies.encryptorRepository.compare>).mockResolvedValue(true)
      dependencies.tokenRepository.create = (jest.fn() as jest.MockedFunction<typeof dependencies.tokenRepository.create>).mockResolvedValue('token123')

      const result = await loginService({ email: user.email, password: user.password })

      expect(result).toEqual({ token: 'token123' })
    })
  })
})
