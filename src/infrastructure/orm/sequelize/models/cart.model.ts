import { ENUM, Model, UUID, UUIDV4 } from 'sequelize'
import { Status } from '../../../../domain/entities/cart.entity'
import sequelize from '..'
export class Cart extends Model {
  declare id: string
  declare status: Status
}

Cart.init({
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  status: {
    type: ENUM({
      values: ['active', 'abandoned', 'complete']
    }),
    defaultValue: 'active'
  }
}, {
  sequelize,
  tableName: 'Cart',
  modelName: 'Cart',
  timestamps: false,
  createdAt: true
})
