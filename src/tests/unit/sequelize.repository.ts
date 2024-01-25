import { UserEntity } from '../../domain/entities/user.entity'
import { UserRepository } from '../../ports/repositories/user.repository'

export const userRepository: UserRepository = {
  create: function (payload: string | UserEntity): Promise<UserEntity> {
    throw new Error('Function not implemented.')
  },
  findAll: function (): Promise<UserEntity[]> {
    throw new Error('Function not implemented.')
  },
  findOne: function (payload: string | UserEntity): Promise<UserEntity> {
    throw new Error('Function not implemented.')
  }
}
