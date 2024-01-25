import { UserEntity } from '../../../domain/entities/user.entity'
import { Repository } from './general.repository'

export interface UserRepository extends Repository<UserEntity> {}
