import { ProductEntity } from '../../../domain/entities/product.entity'
import { Repository } from './general.repository'
import { CreateProduct } from '../../../domain/services/product/create.service'

export interface ProductRepository extends Repository<ProductEntity, CreateProduct | string> {}
