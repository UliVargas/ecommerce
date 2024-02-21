export enum TypeOfAddress {
  delivery = 'delivery',
  billing = 'billing'
}

export interface AddressEntity {
  id: string
  userId: string
  type: TypeOfAddress
  address: string
  city: string
  state: string
  postalCode: string
  contry: string
  phone: string
}
