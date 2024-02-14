import { ProductEntity } from '../../../domain/entities/product.entity'
import { ProductRepository } from '../../../ports/repositories/out/product.repository'
import { ProductModel } from '../../orm/sequelize/models/index.model'
import { CreateProduct } from '../../../domain/services/product/create.service'

export default class ProductSequelizeRepository implements ProductRepository {
  create (payload: CreateProduct): Promise<ProductEntity> {
    return ProductModel.create(payload)
  }

  findAll (): Promise<ProductEntity[]> {
    return ProductModel.findAll()
  }

  findOne (elementId: string): Promise<ProductEntity | null> {
    return ProductModel.findByPk(elementId)
  }
}
