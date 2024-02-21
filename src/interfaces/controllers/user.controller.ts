import { Request, Response } from 'express'
import { Dependencies } from '../../infrastructure/config/dependencies'
import { LoginUseCase, CreateUseCase, FindAllUseCase, FindOneUseCase } from '../../application/use-cases/user/index.use-case'
import { UserControllersRepository } from '../../core/interfaces/user.repository'

export default (dependencies: Dependencies): UserControllersRepository => {
  const loginUseCase = LoginUseCase(dependencies)
  const createUseCase = CreateUseCase(dependencies)
  const findAllUseCase = FindAllUseCase(dependencies)
  const findOneUseCase = FindOneUseCase(dependencies)

  const create = async (req: Request, res: Response) => {
    const user = await createUseCase(req.body)
    res.status(201).json(user)
  }

  const findAll = async (req: Request, res: Response) => {
    const users = await findAllUseCase()
    res.status(200).json(users)
  }

  const findOne = async (req: Request, res: Response) => {
    const user = await findOneUseCase(req.params.userId)
    res.status(200).json(user)
  }

  const login = async (req: Request, res: Response) => {
    const { email, password } = req.body
    const token = await loginUseCase({ email, password })
    res.status(200).json(token)
  }

  return {
    create,
    findAll,
    findOne,
    login
  }
}
