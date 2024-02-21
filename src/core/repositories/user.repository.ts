import { UserEntity } from '../entities/user.entity'
import { Repository } from './general.repository'

export interface UserRepository extends Repository<UserEntity> {
  findOneByEmail(email: string): Promise<UserEntity | null>
}
