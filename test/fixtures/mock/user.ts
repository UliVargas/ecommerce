import { Role, UserEntity } from '../../../src/core/entities/user.entity'

export const user: UserEntity = {
  id: '71d27aae-e958-4a6f-9b1a-f68e9d2d1d64',
  name: 'Jhon',
  lastname: 'Doe',
  email: 'jhon@email.com',
  password: 'pass123',
  role: Role.user
}
