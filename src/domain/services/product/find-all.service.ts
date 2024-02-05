import { Dependencies } from '../../../infrastructure/config/dependencies'
import { ProductEntity } from '../../entities/product.entity'

type FindAllService = () => Promise<ProductEntity[]>

export default (dependencies: Dependencies): FindAllService => async () => {
  return dependencies.productRepository.findAll()
}
