import ErrorConstructor from '../../../adapters/middlewares/errors/error.constructor'
import { Dependencies } from '../../../infrastructure/config/dependencies'

export default (dependencies: Dependencies) => async (payload: any) => {
  const product = await dependencies.productRepository.findOne(payload.id)

  if (product) {
    throw new ErrorConstructor({
      errorCode: 'PRODUCT_EXIST'
    })
  }

  return dependencies.productRepository.create(payload)
}
