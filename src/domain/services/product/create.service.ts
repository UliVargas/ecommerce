import ErrorConstructor from '../../../adapters/middlewares/errors/error.constructor'
import { Dependencies } from '../../../infrastructure/config/dependencies'
import { ProductEntity } from '../../entities/product.entity'

export type CreateProduct = Omit<ProductEntity, 'id'>

export default (dependencies: Dependencies) => async (payload: CreateProduct) => {
  return dependencies.productRepository.create(payload)
}
