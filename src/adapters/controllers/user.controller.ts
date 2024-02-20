import { Request, Response } from 'express'
import { Dependencies } from '../../infrastructure/config/dependencies'
import { LoginService, CreateService, FindAllService, FindOneService } from '../../domain/services/user/index.service'
import { UserRepository } from '../../ports/adapters/in/user.repository'

export default (dependencies: Dependencies): UserRepository => {
  const loginService = LoginService(dependencies)
  const createService = CreateService(dependencies)
  const findAllService = FindAllService(dependencies)
  const findOneService = FindOneService(dependencies)

  const create = async (req: Request, res: Response) => {
    const user = await createService(req.body)
    res.status(201).json(user)
  }

  const findAll = async (req: Request, res: Response) => {
    const users = await findAllService()
    res.status(200).json(users)
  }

  const findOne = async (req: Request, res: Response) => {
    const user = await findOneService(req.params.userId)
    res.status(200).json(user)
  }

  const login = async (req: Request, res: Response) => {
    const { email, password } = req.body
    const token = await loginService({ email, password })
    res.status(200).json(token)
  }

  return {
    create,
    findAll,
    findOne,
    login
  }
}
