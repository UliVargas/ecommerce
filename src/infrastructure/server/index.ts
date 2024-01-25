import dependencies from '../config/dependencies'
import { env } from '../config/env'
import { logger } from '../utilities/logger'
import app from './app'
import http from 'http'

// Normaliza el puerto
function normalizePort (value: any) {
  const port = parseInt(value, 10)

  if (isNaN(port)) return value
  if (port >= 0) return port
  return false
}

const PORT = normalizePort(env.PORT ?? 3001)

// Función para cachear los errores al arrancar el servidor
function onError (error: any) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof PORT === 'string'
    ? 'Pipe ' + PORT
    : 'Port ' + PORT

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      return process.exit(1)
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      return process.exit(1)
    default:
      throw error
  }
}

dependencies().then(dependencies => {
  app(dependencies).then((app) => {
    const server = http.createServer(app)
    function onListening () {
      const addr: any = server.address()
      const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port
      logger.info(`Running ${env.PROJECT_NAME} on ${bind}`)
    }
    app.set('port', PORT)
    server.listen(PORT)
    server.on('error', onError)
    server.on('listening', onListening)
  })
})
