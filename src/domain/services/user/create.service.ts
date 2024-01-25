import { Dependencies } from '../../../infrastructure/config/dependencies'
import { UserEntity } from '../../entities/user.entity'

interface CreatePayload {
  name: string
  lastname: string
  email: string
  password: string
}

type CreateUser = (payload: CreatePayload) => Promise<UserEntity>

export default (dependencies: Dependencies): CreateUser => async (payload) => {
  const hash = await dependencies.encryptorRepository.hash(payload.password)
  return dependencies.userRepository.create({
    ...payload,
    password: hash
  })
}
