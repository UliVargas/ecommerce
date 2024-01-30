import { Model, STRING, DECIMAL, DATE, UUID, UUIDV4 } from 'sequelize'
import sequelize from '../../infrastructure/orm/sequelize'
class Transaction extends Model {
  public transaction_id!: number
  public order_id!: number // Referencia al pedido asociado
  public transaction_status!: string
  public amount!: number
  public transaction_date!: Date
}

Transaction.init(
  {
    id: {
      type: UUID,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    orderId: {
      type: STRING,
      allowNull: false
    },
    status: {
      type: STRING,
      allowNull: false
    },
    amount: {
      type: DECIMAL(10, 2),
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'Transaction',
    modelName: 'Transactions',
    timestamps: false,
    createdAt: true
  }
)
