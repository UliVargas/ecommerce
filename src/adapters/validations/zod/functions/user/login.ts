import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'
import { validation } from '../../validation'
import { loginSchema } from '../../schemas/user.schema'

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    validation(req.body, loginSchema)
    next()
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).send({ errors: error.errors })
    }
    return res.status(500).send('Error making request, contact support')
  }
}
