import { Sequelize } from 'sequelize'
import { config } from './config'

const {
  database,
  username,
  password,
  ...rest
} = config

export default new Sequelize(
  database,
  username,
  password,
  {
    dialect: 'postgres',
    ...rest
  }
)
