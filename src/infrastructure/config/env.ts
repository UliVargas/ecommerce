import dotenv from 'dotenv'
dotenv.config()

export const env = {
  PORT: process.env.PORT,
  PROJECT_NAME: 'ecommerce',
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  NODE_ENV: process.env.NODE_ENV
}
