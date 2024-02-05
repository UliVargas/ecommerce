import Router from 'express-promise-router'
import { Dependencies } from '../../infrastructure/config/dependencies'
import ProductControllers from '../controllers/product.controller'

export default (dependencies: Dependencies) => {
  const router = Router()
  const productControllers = ProductControllers(dependencies)

  router.get('/', productControllers.findAll)

  return router
}
