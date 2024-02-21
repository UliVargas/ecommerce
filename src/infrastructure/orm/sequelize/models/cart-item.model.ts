import { Model, INTEGER, UUID, UUIDV4 } from 'sequelize'
import { Status } from '../../../../core/entities/cart.entity'
import sequelize from '..'
export class CartItem extends Model {
  declare id: string
  declare status: Status
}

CartItem.init({
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  count: {
    type: INTEGER,
    defaultValue: 0
  },
  price: {
    type: INTEGER,
    defaultValue: 0
  },
  subtotal: {
    type: INTEGER,
    defaultValue: 0
  }
}, {
  sequelize,
  tableName: 'CartItems',
  modelName: 'CartItem',
  timestamps: false,
  createdAt: true
})
