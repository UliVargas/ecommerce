import { Dependencies } from '../../../infrastructure/config/dependencies'

type DeleteUseCase = (id: string) => Promise<number>

export default (dependencies: Dependencies): DeleteUseCase => async (id) => {
  return dependencies.userRepository.delete(id)
}
