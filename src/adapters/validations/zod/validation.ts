import { type ZodObject } from 'zod'
export const validation = (inputs: unknown, schema: ZodObject<any, any>) => {
  return schema.parse(inputs)
}
