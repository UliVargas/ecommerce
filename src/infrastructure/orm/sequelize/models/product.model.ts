import { ARRAY, BOOLEAN, Model, INTEGER, Optional, STRING, UUID, UUIDV4 } from 'sequelize'
import sequelize from '..'
import { ProductEntity } from '../../../../domain/entities/product.entity'

export class Product extends Model<ProductEntity, Optional<ProductEntity, 'id'>> {
  declare id: string
  declare title: string
  declare description: string
  declare stock: number
  declare slug: string
  declare tags: string[]
  declare category: string
  declare price: number
  declare images: string[]
  declare averageRating: number
  declare isFeatured: boolean
  declare isAvailable: boolean
}

Product.init({
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  title: {
    type: STRING,
    allowNull: false
  },
  description: {
    type: STRING,
    allowNull: false
  },
  stock: {
    type: INTEGER,
    allowNull: false
  },
  slug: {
    type: STRING,
    allowNull: false
  },
  tags: {
    type: ARRAY(STRING),
    defaultValue: []
  },
  category: {
    type: STRING,
    allowNull: false
  },
  price: {
    type: INTEGER,
    defaultValue: 0
  },
  images: {
    type: ARRAY(STRING),
    allowNull: false
  },
  averageRating: {
    type: INTEGER,
    defaultValue: 0
  },
  isFeatured: {
    type: BOOLEAN,
    defaultValue: false
  },
  isAvailable: {
    type: BOOLEAN,
    defaultValue: false
  }
}, {
  sequelize,
  modelName: 'Product',
  tableName: 'Products',
  timestamps: false,
  createdAt: true
})
