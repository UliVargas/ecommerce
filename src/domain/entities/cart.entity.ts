export enum Status {
  abandoned = 'abandoned',
  active = 'active',
  complete = 'complete'
}
export interface CartEntity {
  id: string
  userId: string
  status: Status
  createdAt: Date
}
