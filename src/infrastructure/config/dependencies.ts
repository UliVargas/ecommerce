import { AuthRepository } from '../../core/repositories/auth.respository'
import { EncryptorRepository } from '../../core/repositories/encryptor.repository'
import { ProductRepository } from '../../core/repositories/product.repository'
import { UserRepository } from '../../core/repositories/user.repository'
import BcryptRepository from '../auth/bcrypt.repository'
import JWTRepository from '../auth/jwt.repository'
import { UserSequelizeRepository } from '../repositories/sequelize'
import ProductSequelizeRepository from '../repositories/sequelize/product.repository'

export interface Dependencies {
  userRepository: UserRepository
  productRepository: ProductRepository
  tokenRepository: AuthRepository
  encryptorRepository: EncryptorRepository
}

export default async (): Promise<Dependencies> => {
  const userRepository: UserRepository = new UserSequelizeRepository()
  const productRepository: ProductRepository = new ProductSequelizeRepository()
  const tokenRepository: any = new JWTRepository()
  const encryptorRepository: EncryptorRepository = new BcryptRepository()

  return {
    userRepository,
    productRepository,
    tokenRepository,
    encryptorRepository
  }
}
