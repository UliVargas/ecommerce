import { UserEntity } from '../../../domain/entities/user.entity'
import { UserRepository } from '../../../ports/repositories/user.repository'
import { UserModel } from '../../orm/sequelize/models/index.model'

class UserSequelizeRepository implements UserRepository {
  create (payload: UserEntity): Promise<UserEntity> {
    return UserModel.create(payload)
  }

  findAll (): Promise<UserEntity[]> {
    throw new Error('Method not implemented.')
  }

  findOne (payload: string): Promise<UserEntity> {
    throw new Error('Method not implemented.')
  }
}

export default UserSequelizeRepository
