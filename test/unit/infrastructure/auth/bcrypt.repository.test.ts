import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals'
import * as bcrypt from 'bcrypt'
import Dependencies, { Dependencies as IDependencies } from '../../../../src/infrastructure/config/dependencies'

describe.skip('BcryptRepository', () => {
  let dependencies: IDependencies

  beforeEach(async () => {
    dependencies = await Dependencies()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('hash', () => {
    it('should hash the password using bcrypt', async () => {
      const password = 'password'
      const hashedPassword = 'hashedPassword'
      jest.spyOn(bcrypt, 'hash').mockResolvedValue(hashedPassword as never)

      const result = await dependencies.encryptorRepository.hash(password)

      expect(bcrypt.hash).toHaveBeenCalledWith(password, 10)
      expect(result).toBe(hashedPassword)
    })
  })

  // describe('compare', () => {
  //   it('should compare the password and hash using bcrypt', async () => {
  //     const password = 'password'
  //     const hash = 'hash'
  //     const isMatch = true
  //     bcryptMock.compare.mockResolvedValue(isMatch as never)

  //     const result = await dependencies.encryptorRepository.compare(password, hash)

  //     expect(bcryptMock.compare).toHaveBeenCalledWith(password, hash)
  //     expect(result).toBe(isMatch)
  //   })
  // })
})
