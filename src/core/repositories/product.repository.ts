import { ProductEntity } from '../entities/product.entity'
import { Repository } from './general.repository'

export interface ProductRepository extends Repository<ProductEntity> {}
