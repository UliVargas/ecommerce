export interface CartEntity {
  id :string
  cartId: string
  productId: string
  count: number
  price: number
  subtotal: number
  createdAt: Date
}
