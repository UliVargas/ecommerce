import { JWTPayload } from 'jose'
import { AuthToken } from '../../ports/repositories/jwt.respository'
import * as jose from 'jose'

const secret = new TextEncoder().encode(
  'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2'
)
class JWTRepository implements AuthToken {
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
