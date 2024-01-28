import { EncryptorRepository } from '../../ports/repositories/out/encryptor.repository'
import * as bcrypt from 'bcrypt'

class BcryptRepository implements EncryptorRepository {
  hash (password: string): Promise<string> {
    return bcrypt.hash(password, 10)
  }

  compare (password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }
}

export default BcryptRepository
