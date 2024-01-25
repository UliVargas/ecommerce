interface ErrorParams {
  errorCode?: string,
  statusCode?: number,
  message?: string,
  status?: number
}
export default class ErrorConstructor extends Error {
  errorCode: string
  statusCode: number

  constructor ({
    errorCode = 'NO_FURTHER_INFORMATION',
    statusCode,
    message,
    status
  }: ErrorParams) {
    super(message)
    this.errorCode = errorCode
    this.statusCode = statusCode || status || 500
    if (!this.message) this.message = 'NO_FURTHER_INFORMATION'
  }
}
