import { NextFunction, Request, Response } from 'express'
import { Dependencies } from '../../infrastructure/config/dependencies'

export default (dependencies: Dependencies) => (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) {
    const error = {
      message: 'Unauthorized',
      errorCode: 401
    }
    return res.status(401).json(error)
  }

  const JWTPayload = dependencies.tokenRepository.decode(token ?? '')

  if (!JWTPayload) {
    const error = {
      message: 'Forbidden',
      errorCode: 403
    }
    return res.status(403).json(error)
  }

  next()
}
