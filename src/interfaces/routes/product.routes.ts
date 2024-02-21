import Router from 'express-promise-router'
import { Dependencies } from '../../infrastructure/config/dependencies'
import ProductControllers from '../controllers/product.controller'
import ProductValidation from '../validations/zod/functions/product'
import Auth from '../middlewares/auth'

export default (dependencies: Dependencies) => {
  const router = Router()
  const productControllers = ProductControllers(dependencies)
  const auth = Auth(dependencies)

  router.get('/', auth, productControllers.findAll)
  router.get('/:productId', auth, productControllers.findOne)
  router.post('/', auth, ProductValidation.CreateProduct, productControllers.create)

  return router
}
