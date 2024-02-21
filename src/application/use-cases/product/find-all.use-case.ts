import { ProductEntity } from '../../../core/entities/product.entity'
import { Dependencies } from '../../../infrastructure/config/dependencies'

type FindAllService = () => Promise<ProductEntity[]>

export default (dependencies: Dependencies): FindAllService => async () => {
  return dependencies.productRepository.findAll()
}
