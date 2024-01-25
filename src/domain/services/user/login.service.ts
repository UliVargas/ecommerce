import { Dependencies } from '../../../infrastructure/config/dependencies'

interface LoginArgs {
  id: string,
  name: string
}

type LoginService = (payload: LoginArgs) => Promise<{ token: string }>

export default (dependencies: Dependencies): LoginService => async (payload) => {
  return {
    token: await dependencies.tokenRepository.create(payload)
  }
}
