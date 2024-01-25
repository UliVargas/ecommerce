import { env } from '../../config/env'

export const config = {
  database: env.DB_NAME!,
  username: env.DB_USERNAME!,
  password: env.DB_PASSWORD!,
  host: env.DB_HOST!,
  port: +env.DB_PORT!
}
