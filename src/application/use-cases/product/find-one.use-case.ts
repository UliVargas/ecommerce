import { ProductEntity } from '../../../core/entities/product.entity'
import { Dependencies } from '../../../infrastructure/config/dependencies'

type FindOneService = (productId: string) => Promise<ProductEntity | null>

export default (dependencies: Dependencies): FindOneService => async (productId) => {
  return dependencies.productRepository.findById(productId)
}
