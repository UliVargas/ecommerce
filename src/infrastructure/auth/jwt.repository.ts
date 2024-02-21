import { JWTPayload } from 'jose'
import { AuthRepository } from '../../core/repositories/auth.respository'
import * as jose from 'jose'
import { env } from '../config/env'

const secret = new TextEncoder().encode(env.SECRET_KEY)

class JWTRepository implements AuthRepository {
  create (payload: any): Promise<string> {
    return new jose.SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('24h')
      .sign(secret)
  }

  decode (token: string): JWTPayload {
    return jose.decodeJwt(token)
  }
}

export default JWTRepository
