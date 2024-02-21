import ErrorConstructor from '../../../interfaces/middlewares/errors/error.constructor'
import { Dependencies } from '../../../infrastructure/config/dependencies'

export default (dependencies: Dependencies) => async (id: string) => {
  const user = await dependencies.userRepository.findById(id)

  if (!user) {
    throw new ErrorConstructor({
      errorCode: 'USER_NOT_FOUND'
    })
  }

  return user
}
