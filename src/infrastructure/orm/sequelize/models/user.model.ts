import { Model, STRING, UUID, UUIDV4 } from 'sequelize'
import sequelize from '..'
import { UserEntity } from '../../../../domain/entities/user.entity'

export class User extends Model<UserEntity, Omit<UserEntity, 'id'>> {
  declare id: string
  declare name: string
  declare lastname: string
  declare email: string
  declare password: string
}

User.init({
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  name: {
    type: STRING,
    allowNull: false
  },
  lastname: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'Users',
  modelName: 'User'
})
