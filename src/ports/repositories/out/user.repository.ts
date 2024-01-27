import { UserEntity } from '../../../domain/entities/user.entity'
import { CreatePayload } from '../../../domain/services/user/create.service'
import { Repository } from './general.repository'

export interface UserRepository extends Repository<UserEntity, CreatePayload> {
  findOneByEmail(email: string): Promise<UserEntity | null>
}
