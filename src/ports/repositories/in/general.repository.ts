import { Request, Response } from 'express'

export interface Repository {
  create: (req:Request, res: Response) => Promise<void>
  findAll: (req:Request, res: Response) => Promise<void>
  findOne: (req:Request, res: Response) => Promise<void>
}
