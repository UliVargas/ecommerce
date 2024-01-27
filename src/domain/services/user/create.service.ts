import { Dependencies } from '../../../infrastructure/config/dependencies'
import { Role, UserEntity } from '../../entities/user.entity'

export interface CreatePayload {
  name: string
  lastname: string
  email: string
  password: string,
  role: Role
}

type CreateUser = (payload: CreatePayload) => Promise<UserEntity>

export default (dependencies: Dependencies): CreateUser => async (payload) => {
  const hash = await dependencies.encryptorRepository.hash(payload.password)
  return dependencies.userRepository.create({
    ...payload,
    password: hash
  })
}
