import { ProductEntity } from '../../../domain/entities/product.entity'
import { ProductRepository } from '../../../ports/repositories/out/product.repository'
import { ProductModel } from '../../orm/sequelize/models/index.model'

export default class ProductSequelizeRepository implements ProductRepository {
  create (payload: any): Promise<ProductEntity> {
    return ProductModel.create(payload)
  }

  findAll (): Promise<ProductEntity[]> {
    return ProductModel.findAll()
  }

  findOne (payload: string): Promise<ProductEntity | null> {
    return ProductModel.findByPk(payload)
  }
}
