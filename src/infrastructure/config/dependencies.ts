import { AuthRepository } from '../../ports/repositories/in/auth.respository'
import { EncryptorRepository } from '../../ports/repositories/out/encryptor.repository'
import { ProductRepository } from '../../ports/repositories/out/product.repository'
import { UserRepository } from '../../ports/repositories/out/user.repository'
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
