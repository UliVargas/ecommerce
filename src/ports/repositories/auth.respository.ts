import { JWTPayload } from 'jose'

export interface AuthRepository {
  create(payload: any): Promise<string>
  decode(token: string): JWTPayload
}
