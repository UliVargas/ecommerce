import { WhereOptions } from 'sequelize'
import { UserEntity } from '../../../domain/entities/user.entity'
import { UserRepository } from '../../../ports/repositories/out/user.repository'
import { UserModel } from '../../orm/sequelize/models/index.model'
import { emailRegexValidation } from '../../utilities/constants'

class UserSequelizeRepository implements UserRepository {
  async create (payload: UserEntity): Promise<UserEntity> {
    return await UserModel.create(payload)
  }

  findAll (): Promise<UserEntity[]> {
    return UserModel.findAll()
  }

  async findOne (payload: string): Promise<UserEntity | null> {
    let where: WhereOptions = {}
    const isEmail = emailRegexValidation.test(payload)

    if (isEmail) {
      where = {
        email: payload
      }
    } else {
      where = {
        id: payload
      }
    }

    const user = await UserModel.findOne({
      where
    })

    return user
  }
}

export default UserSequelizeRepository
