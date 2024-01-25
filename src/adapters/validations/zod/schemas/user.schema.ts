import { z } from 'zod'

const props = {
  name: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  password: z.string()
}

export const createUserSchema = z.object({
  name: props.name,
  lastname: props.lastname,
  email: props.email,
  password: props.password
})

export const loginSchema = z.object({
  email: props.email,
  password: props.password
})
