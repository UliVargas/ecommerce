import { ZodError } from 'zod'
import { Request, Response, NextFunction } from 'express'
import { validation } from '../../validation'
import { createProductSchema } from '../../schemas/product.schema'

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    validation(req.body, createProductSchema)
    next()
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).send({ errors: error.errors })
    }
    return res.status(500).send('Error making request, contact support')
  }
}
