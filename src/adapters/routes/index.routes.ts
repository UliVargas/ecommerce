import Router from 'express-promise-router'

import UserRouter from './user.routes'
import ProductRouter from './product.routes'
import { Dependencies } from '../../infrastructure/config/dependencies'
export default (dependencies: Dependencies) => {
  const router = Router()
  const userRouter = UserRouter(dependencies)
  const productRouter = ProductRouter(dependencies)

  router.use('/users', userRouter)
  router.use('/products', productRouter)

  return router
}
