import { JWTPayload } from 'jose'
import { Dependencies } from '../../src/infrastructure/config/dependencies'
import { UserEntity } from '../../src/core/entities/user.entity'
import { ProductEntity } from '../../src/core/entities/product.entity'

export const dependencies: Dependencies = {
  userRepository: {
    create: function (payload: any): Promise<UserEntity> {
      throw new Error('Function not implemented.')
    },
    findAll: function (): Promise<UserEntity[]> {
      throw new Error('Function not implemented.')
    },
    findById: function (payload: any): Promise<UserEntity> {
      throw new Error('Function not implemented.')
    },
    findOneByEmail: function (email: string): Promise<UserEntity | null> {
      throw new Error('Function not implemented.')
    },
    update: function (id: string, data: Partial<UserEntity>): Promise<UserEntity | null> {
      throw new Error('Function not implemented.')
    },
    delete: function (id: string): Promise<number> {
      throw new Error('Function not implemented.')
    }
  },
  tokenRepository: {
    create: function (payload: any): Promise<string> {
      throw new Error('Function not implemented.')
    },
    decode: function (token: string): JWTPayload {
      throw new Error('Function not implemented.')
    }
  },
  encryptorRepository: {
    hash: function (password: string): Promise<string> {
      throw new Error('Function not implemented.')
    },
    compare: function (password: string, hash: string): Promise<boolean> {
      throw new Error('Function not implemented.')
    }
  },
  productRepository: {
    findAll: function (): Promise<ProductEntity[]> {
      throw new Error('Function not implemented.')
    },
    findById: function (id: string): Promise<ProductEntity | null> {
      throw new Error('Function not implemented.')
    },
    create: function (data: Partial<ProductEntity>): Promise<ProductEntity> {
      throw new Error('Function not implemented.')
    },
    update: function (id: string, data: Partial<ProductEntity>): Promise<ProductEntity | null> {
      throw new Error('Function not implemented.')
    },
    delete: function (id: string): Promise<number> {
      throw new Error('Function not implemented.')
    }
  }
}
