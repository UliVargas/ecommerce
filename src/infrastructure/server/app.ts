import express, { Application, json, Request, Response } from 'express'
import morgan from 'morgan'
import { Dependencies } from '../config/dependencies'
import Router from '../../interfaces/routes/index.routes'
import ErrorHandle from '../../interfaces/middlewares/errors/handle'

export default async (dependencies: Dependencies): Promise<Application> => {
  const router = Router(dependencies)
  const app = express()

  app.use(json())
  app.use(morgan('dev'))
  app.use('/api', router)

  app.use((req: Request, res: Response) => {
    res.status(404).send('Route Not Found')
  })

  app.use(ErrorHandle)

  return app
}
