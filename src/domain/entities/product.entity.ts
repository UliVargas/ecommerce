export interface Product {
  id: string
  title: string
  description: string
  stock: string
  slug: string
  tags: string[]
  category: string
  price: number
  images: string[]
  averageRating: number
  isFeatured: boolean
  isAvailable: boolean
}
