import { ProductEntity } from '../../../src/core/entities/product.entity'

export const product: ProductEntity = {
  id: 'product123',
  title: 'Product',
  description: 'This Product',
  stock: 1,
  slug: 'new_product',
  tags: ['product'],
  category: 'fisrt',
  price: 10,
  images: [],
  averageRating: 3,
  isFeatured: false,
  isAvailable: false
}
