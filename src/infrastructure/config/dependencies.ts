import { AuthRepository } from '../../ports/repositories/auth.respository'
import { EncryptorRepository } from '../../ports/repositories/encryptor.repository'
import { UserRepository } from '../../ports/repositories/user.repository'
import BcryptRepository from '../auth/bcrypt.repository'
import JWTRepository from '../auth/jwt.repository'
import { UserSequelizeRepository } from '../repositories/sequelize'

export interface Dependencies {
  userRepository: UserRepository
  tokenRepository: AuthRepository
  encryptorRepository: EncryptorRepository
}

export default async (): Promise<Dependencies> => {
  const userRepository: UserRepository = new UserSequelizeRepository()
  const tokenRepository: any = new JWTRepository()
  const encryptorRepository: EncryptorRepository = new BcryptRepository()

  return {
    userRepository,
    tokenRepository,
    encryptorRepository
  }
}
