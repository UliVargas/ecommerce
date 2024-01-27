export enum Role {
  admin = 'admin',
  user = 'user'
}

export interface UserEntity {
  id: string
  name: string
  lastname: string
  email: string
  password: string
  role: Role
}
