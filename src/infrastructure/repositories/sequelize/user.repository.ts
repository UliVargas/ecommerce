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

  async findOne (payload: string): Promise<UserEntity | null> {
    const user = await UserModel.findOne({ where: { email: payload } })
    if (!user) return null
    return user?.toJSON()
  }
}

export default UserSequelizeRepository
