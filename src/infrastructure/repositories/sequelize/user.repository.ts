import { UserEntity } from '../../../domain/entities/user.entity'
import { UserRepository } from '../../../ports/repositories/out/user.repository'
import { UserModel } from '../../orm/sequelize/models/index.model'
import { CreatePayload } from '../../../domain/services/user/create.service'

export default class UserSequelizeRepository implements UserRepository {
  async create (payload: CreatePayload): Promise<UserEntity> {
    return this.toResponse(await UserModel.create(payload))
  }

  async findAll (): Promise<UserEntity[]> {
    return this.toResponse(await UserModel.findAll())
  }

  async findOne (payload: string): Promise<UserEntity | null> {
    const user = await UserModel.findByPk(payload)
    if (!user) return null
    return this.toResponse(user)
  }

  async findOneByEmail (email: string): Promise<UserEntity | null> {
    const user = await UserModel.findByPk(email)
    if (!user) return null
    return this.toResponse(user)
  }

  toResponse (obj: any) {
    if (Array.isArray(obj)) {
      return obj.map(user => user.toJSON())
    }

    return obj.toJSON()
  }
}
