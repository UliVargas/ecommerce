import { Role, UserEntity } from '../../../core/entities/user.entity'
import { Dependencies } from '../../../infrastructure/config/dependencies'
import ErrorConstructor from '../../../interfaces/middlewares/errors/error.constructor'

export interface CreatePayload {
  name: string
  lastname: string
  email: string
  password: string,
  role: Role
}

type CreateUser = (payload: CreatePayload) => Promise<UserEntity>

export default (dependencies: Dependencies): CreateUser => async (payload) => {
  const user = await dependencies.userRepository.findOneByEmail(payload.email)

  if (user) {
    throw new ErrorConstructor({ errorCode: 'USER_ALREADY_EXISTS' })
  }

  const hash = await dependencies.encryptorRepository.hash(payload.password)
  return dependencies.userRepository.create({
    ...payload,
    password: hash
  })
}
