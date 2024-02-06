import { Dependencies } from '../../../infrastructure/config/dependencies'
import { ProductEntity } from '../../entities/product.entity'

type FindOneService = (productId: string) => Promise<ProductEntity | null>

export default (dependencies: Dependencies): FindOneService => async (productId) => {
  return dependencies.productRepository.findOne(productId)
}
