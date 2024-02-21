// Prupose: Define the interface for the controller repository
import { Request, Response } from 'express'

export interface ControllersRepository {
  create: (req:Request, res: Response) => Promise<void>
  findAll: (req:Request, res: Response) => Promise<void>
  findOne: (req:Request, res: Response) => Promise<void>
}
