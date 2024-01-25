import express, { Application, json } from 'express'
import Router from '../../adapters/routes/index.routes'
import { Dependencies } from '../config/dependencies'
import morgan from 'morgan'

export default async (dependencies: Dependencies): Promise<Application> => {
  const router = Router(dependencies)
  const app = express()

  app.use(json())
  app.use('/api', router)

  return app
}
