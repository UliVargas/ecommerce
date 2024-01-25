import express, { Application, json } from 'express'
import morgan from 'morgan'
import { Dependencies } from '../config/dependencies'
import Router from '../../adapters/routes/index.routes'
import ErrorHandle from '../../adapters/middlewares/errors/handle'

export default async (dependencies: Dependencies): Promise<Application> => {
  const router = Router(dependencies)
  const app = express()

  app.use(json())
  app.use(morgan('dev'))
  app.use('/api', router)
  app.use(ErrorHandle)

  return app
}
