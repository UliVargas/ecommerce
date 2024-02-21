import ErrorConstructor from '../../../interfaces/middlewares/errors/error.constructor'
import { Dependencies } from '../../../infrastructure/config/dependencies'

interface LoginArgs {
  email: string,
  password: string
}

type LoginService = (payload: LoginArgs) => Promise<{ token: string }>

export default (dependencies: Dependencies): LoginService => async (payload) => {
  const user = await dependencies.userRepository.findOneByEmail(payload.email)

  if (!user) {
    throw new ErrorConstructor({
      errorCode: 'USER_NOT_FOUND'
    })
  }

  if (!await dependencies.encryptorRepository.compare(payload.password, user.password)) {
    throw new ErrorConstructor({
      errorCode: 'INVALID_CREDENTIALS'
    })
  }

  return {
    token: await dependencies.tokenRepository.create({ id: user.id })
  }
}
