import Router from 'express-promise-router'

import UserRouter from './user.routes'
import { Dependencies } from '../../infrastructure/config/dependencies'
export default (dependencies: Dependencies) => {
  const router = Router()
  const userRouter = UserRouter(dependencies)

  router.use('/users', userRouter)

  return router
}

// http://localhost:4000/api/users
// http://localhost:4000/api/cart
// http://localhost:4000/api/products
