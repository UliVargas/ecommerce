import { Request, Response } from 'express'
import { ControllersRepository } from './index.repository'

export interface UserControllersRepository extends ControllersRepository {
  login: (req: Request, res: Response) => Promise<void>
}
