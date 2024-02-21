import { CreatePayload } from '../../../application/use-cases/user/create.use-case'
import { UserEntity } from '../../../core/entities/user.entity'
import { UserRepository } from '../../../core/repositories/user.repository'
import { UserModel } from '../../orm/sequelize/models/index.model'

export default class UserSequelizeRepository implements UserRepository {
  async findById (id: string): Promise<UserEntity | null> {
    const user = await UserModel.findByPk(id)
    if (!user) return null
    return user
  }

  async create (payload: CreatePayload): Promise<UserEntity> {
    return await UserModel.create(payload)
  }

  async findAll (): Promise<UserEntity[]> {
    return await UserModel.findAll()
  }

  async findOneByEmail (email: string): Promise<UserEntity | null> {
    const user = await UserModel.findOne({
      where: {
        email
      }
    })
    if (!user) return null
    return user
  }

  update (id: string, data: Partial<UserEntity>): Promise<UserEntity | null> {
    throw new Error('Method not implemented.')
  }

  delete (id: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
