import { NextFunction, Request, Response } from 'express'
import { Dependencies } from '../../infrastructure/config/dependencies'
import ErrorConstructor from './errors/error.constructor'

export default (dependencies: Dependencies) => (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    throw new ErrorConstructor({
      errorCode: 'MISSING_TOKEN'
    })
  }

  const JWTPayload = dependencies.tokenRepository.decode(token ?? '')

  if (!JWTPayload) {
    throw new ErrorConstructor({
      errorCode: 'INVALID_TOKEN'
    })
  }

  next()
}
