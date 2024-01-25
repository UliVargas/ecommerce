import { JWTPayload } from 'jose'

export interface AuthToken {
  create(payload: any): Promise<string>
  decode(token: string): JWTPayload
}
