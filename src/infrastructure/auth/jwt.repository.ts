import { JWTPayload } from 'jose'
import { AuthRepository } from '../../ports/repositories/in/auth.respository'
import * as jose from 'jose'
import { env } from '../config/env'

const secret = new TextEncoder().encode(env.SECRET_KEY)

class JWTRepository implements AuthRepository {
  async create (payload: any): Promise<string> {
    return await new jose.SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('24h')
      .sign(secret)
  }

  decode (token: string): JWTPayload {
    return jose.decodeJwt(token)
  }
}

export default JWTRepository
