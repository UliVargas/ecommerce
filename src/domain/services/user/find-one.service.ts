import ErrorConstructor from '../../../adapters/middlewares/errors/error.constructor'
import { Dependencies } from '../../../infrastructure/config/dependencies'

export default (dependencies: Dependencies) => async (userId: string) => {
  const user = await dependencies.userRepository.findOne(userId)

  if (!user) {
    throw new ErrorConstructor({
      errorCode: 'USER_NOT_FOUND'
    })
  }
  return user
}
