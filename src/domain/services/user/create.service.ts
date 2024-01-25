import { Dependencies } from '../../../infrastructure/config/dependencies'
import { UserEntity } from '../../entities/user.entity'

interface CreatePayload {
  name: string
  lastname: string
  email: string
  password: string
}

type CreateUser = (payload: CreatePayload) => Promise<UserEntity>

export default (dependencies: Dependencies): CreateUser => (payload) => {
  return dependencies.userRepository.create(payload)
}
