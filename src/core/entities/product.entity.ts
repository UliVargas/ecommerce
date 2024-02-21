export interface ProductEntity {
  id: string
  title: string
  description: string
  stock: number
  slug: string
  tags: string[]
  category: string
  price: number
  images: string[]
  averageRating: number
  isFeatured: boolean
  isAvailable: boolean
}
