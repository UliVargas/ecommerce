import { Request, Response, NextFunction } from 'express'
import { findOneSchema } from '../../schemas/user.schema'
import { validation } from '../../validation'
import { ZodError } from 'zod'

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    validation(req.params, findOneSchema)
    next()
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).send({ errors: error.errors })
    }
    return res.status(500).send('Error making request, contact support')
  }
}
