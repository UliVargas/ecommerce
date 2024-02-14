import { UserEntity } from '../../../domain/entities/user.entity'
import { UserRepository } from '../../../ports/repositories/out/user.repository'
import { UserModel } from '../../orm/sequelize/models/index.model'
import { CreatePayload } from '../../../domain/services/user/create.service'

export default class UserSequelizeRepository implements UserRepository {
  async create (payload: CreatePayload): Promise<UserEntity> {
    return await UserModel.create(payload)
  }

  async findAll (): Promise<UserEntity[]> {
    return await UserModel.findAll()
  }

  async findOne (elementId: string): Promise<UserEntity | null> {
    const user = await UserModel.findByPk(elementId)
    if (!user) return null
    return user
  }

  async findOneByEmail (email: string): Promise<UserEntity | null> {
    const user = await UserModel.findByPk(email)
    if (!user) return null
    return user
  }
}
