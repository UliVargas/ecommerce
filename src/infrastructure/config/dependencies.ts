import { AuthToken } from '../../ports/repositories/jwt.respository'
import { UserRepository } from '../../ports/repositories/user.repository'
import JWTRepository from '../auth/jwt'
import { UserSequelizeRepository } from '../repositories/sequelize'

export interface Dependencies {
  userRepository: UserRepository
  tokenRepository: AuthToken
}

export default async (): Promise<Dependencies> => {
  const userRepository: UserRepository = new UserSequelizeRepository()
  const tokenRepository: any = new JWTRepository()

  return {
    userRepository,
    tokenRepository
  }
}
