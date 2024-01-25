import { NextFunction, Response, Request } from 'express'
import { errors, errorsDB } from '.'
import ErrorConstructor from './error.constructor'

export const formatError = (error: any): ErrorConstructor => {
  let errToSend: ErrorConstructor
  let errorInErrors = errors[error.errorCode] ?? errorsDB[error.parent.code]

  if (errorInErrors) {
    errorInErrors = {
      ...errorInErrors,
      message: errorInErrors.message ?? error.message,
      errorCode: error.errorCode ?? error.parent.code
    }
    errToSend = new ErrorConstructor(errorInErrors)
  } else if (error instanceof ErrorConstructor) {
    errToSend = error
  } else {
    errToSend = new ErrorConstructor(error)
  }
  return errToSend
}

export default (error: Error, req: Request, res: Response, next: NextFunction) => {
  const { message, statusCode, ...rest } = formatError(error)
  res.status(statusCode || 500).send({
    ...rest,
    message
  })
}
