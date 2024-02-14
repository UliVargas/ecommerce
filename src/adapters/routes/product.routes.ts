import Router from 'express-promise-router'
import { Dependencies } from '../../infrastructure/config/dependencies'
import ProductControllers from '../controllers/product.controller'
import { CreateProductValidation } from '../validations/zod/functions/product'

export default (dependencies: Dependencies) => {
  const router = Router()
  const productControllers = ProductControllers(dependencies)

  router.get('/', productControllers.findAll)
  router.get('/:productId', productControllers.findOne)
  router.post('/', CreateProductValidation, productControllers.create)

  return router
}
