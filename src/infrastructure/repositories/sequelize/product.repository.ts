import { CreateProduct } from '../../../application/use-cases/product/create.use-case'
import { ProductEntity } from '../../../core/entities/product.entity'
import { ProductRepository } from '../../../core/repositories/product.repository'
import { ProductModel } from '../../orm/sequelize/models/index.model'

export default class ProductSequelizeRepository implements ProductRepository {
  create (payload: CreateProduct): Promise<ProductEntity> {
    return ProductModel.create(payload)
  }

  findAll (): Promise<ProductEntity[]> {
    return ProductModel.findAll()
  }

  findById (id: string): Promise<ProductEntity | null> {
    return ProductModel.findByPk(id)
  }

  update (id: string, data: Partial<ProductEntity>): Promise<ProductEntity | null> {
    throw new Error('Method not implemented.')
  }

  delete (id: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
