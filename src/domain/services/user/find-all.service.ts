import { Dependencies } from '../../../infrastructure/config/dependencies'

export default (dependencies: Dependencies) => () => {
  return dependencies.userRepository.findAll()
}
