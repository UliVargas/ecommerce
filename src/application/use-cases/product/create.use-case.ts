import { ProductEntity } from '../../../core/entities/product.entity'
import { Dependencies } from '../../../infrastructure/config/dependencies'

export type CreateProduct = Omit<ProductEntity, 'id'>

export default (dependencies: Dependencies) => async (payload: CreateProduct) => {
  return dependencies.productRepository.create(payload)
}
