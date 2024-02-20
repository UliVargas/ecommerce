import { Request, Response } from 'express'
import { Repository } from './general.repository'

export interface UserRepository extends Repository {
  login: (req: Request, res: Response) => Promise<void>
}
