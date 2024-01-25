import Router from 'express-promise-router'
import UserControllers from '../controllers/user.controller'
import { Dependencies } from '../../infrastructure/config/dependencies'
import Validations from '../validations/zod/functions/user'
// import Auth from '../middlewares/auth'

export default (dependencies: Dependencies) => {
  const router = Router()
  const userControllers = UserControllers(dependencies)
  // const auth = Auth(dependencies)

  router.get('/', userControllers.findAll)
  router.post('/', Validations.CreateUser, userControllers.create)
  router.post('/login', Validations.Login, userControllers.login)

  return router
}
