import { describe, jest, it, expect } from '@jest/globals'
import { CreateUseCase, FindAllUseCase, FindOneUseCase, LoginUseCase, DeleteUseCase } from '../../../../src/application/use-cases/user/index.use-case'
import { dependencies } from '../../../fixtures/dependencies'
import { user } from '../../../fixtures/mock/user'
import ErrorConstructor from '../../../../src/interfaces/middlewares/errors/error.constructor'

describe('UserService', () => {
  describe('Create', () => {
    const createUsCreateUseCase = CreateUseCase(dependencies)

    it('Should throw an error if the user already exists', async () => {
      dependencies.userRepository.findOneByEmail = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findOneByEmail>).mockResolvedValue(user)

      await expect(createUsCreateUseCase(user))
        .rejects.toThrowError(new ErrorConstructor({ errorCode: 'USER_ALREADY_EXISTS' }))
      expect(dependencies.userRepository.findOneByEmail).toBeCalledWith(user.email)
    })

    it('Should return the new created user', async () => {
      dependencies.userRepository.findOneByEmail = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findOneByEmail>).mockResolvedValue(null)
      dependencies.encryptorRepository.hash = (jest.fn() as jest.MockedFunction<typeof dependencies.encryptorRepository.hash>).mockResolvedValue('hashed123')
      dependencies.userRepository.create = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.create>).mockResolvedValue({ ...user, password: 'hashed123' })

      const result = await createUsCreateUseCase(user)

      expect(result).toEqual({ ...user, password: 'hashed123' })
      expect(dependencies.encryptorRepository.hash).toBeCalledWith(user.password)
      expect(dependencies.userRepository.create).toBeCalledWith({ ...user, password: 'hashed123' })
    })
  })

  describe('FindAll', () => {
    const findAllUseCaFindAllUseCase = FindAllUseCase(dependencies)
    it('Should return an array with all the users', async () => {
      dependencies.userRepository.findAll = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findAll>).mockResolvedValue([user])

      const result = await findAllUseCaFindAllUseCase()

      expect(result).toEqual([user])
    })

    it('Should return an empty array', async () => {
      dependencies.userRepository.findAll = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findAll>).mockResolvedValue([])

      const result = await findAllUseCaFindAllUseCase()

      expect(result).toEqual([])
    })
  })

  describe('FindOne User By Email', () => {
    const findOneUseFindOneUseCase = FindOneUseCase(dependencies)
    it('Should return one user by email', async () => {
      dependencies.userRepository.findById = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findById>).mockResolvedValue(user)

      const result = await findOneUseFindOneUseCase(user.email)

      expect(result).toEqual(user)
    })

    it('Should return one user by id', async () => {
      dependencies.userRepository.findById = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findById>).mockResolvedValue(user)

      const result = await findOneUseFindOneUseCase(user.id!)

      expect(result).toEqual(user)
    })
  })

  describe('Login', () => {
    const loginUseLoginUseCase = LoginUseCase(dependencies)
    it('Should throw USER_NOT_FOUND error if email does not exist', async () => {
      dependencies.userRepository.findOneByEmail = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findOneByEmail>).mockResolvedValue(null)

      await expect(loginUseLoginUseCase({ email: user.email, password: user.password }))
        .rejects.toThrowError(new ErrorConstructor({ errorCode: 'USER_NOT_FOUND' }))
      expect(dependencies.userRepository.findOneByEmail).toHaveBeenCalledWith(user.email)
    })

    it('Should throw INVALID_CREDENTIALS error if password does not match', async () => {
      dependencies.userRepository.findOneByEmail = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findOneByEmail>).mockResolvedValue(user)
      dependencies.encryptorRepository.compare = (jest.fn() as jest.MockedFunction<typeof dependencies.encryptorRepository.compare>).mockResolvedValue(false)

      await expect(loginUseLoginUseCase({ email: user.email, password: user.password }))
        .rejects.toThrowError(new ErrorConstructor({ errorCode: 'INVALID_CREDENTIALS' }))
      expect(dependencies.userRepository.findOneByEmail).toHaveBeenCalledWith(user.email)
      expect(dependencies.encryptorRepository.compare).toHaveBeenCalledWith(user.password, 'pass123')
    })

    it('Should return a token', async () => {
      dependencies.userRepository.findOneByEmail = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.findOneByEmail>).mockResolvedValue(user)
      dependencies.encryptorRepository.compare = (jest.fn() as jest.MockedFunction<typeof dependencies.encryptorRepository.compare>).mockResolvedValue(true)
      dependencies.tokenRepository.create = (jest.fn() as jest.MockedFunction<typeof dependencies.tokenRepository.create>).mockResolvedValue('token123')

      const result = await loginUseLoginUseCase({ email: user.email, password: user.password })

      expect(result).toEqual({ token: 'token123' })
    })
  })

  describe('Delete', () => {
    const deleteUseCase = DeleteUseCase(dependencies)
    it('Should return the deleted user', async () => {
      dependencies.userRepository.delete = (jest.fn() as jest.MockedFunction<typeof dependencies.userRepository.delete>).mockResolvedValue(1)

      const result = await deleteUseCase(user.id)

      expect(result).toEqual(1)
      expect(dependencies.userRepository.findById).toBeCalledWith(user.id)
    })
  })
})
