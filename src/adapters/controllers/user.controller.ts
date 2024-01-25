import { Request, Response } from 'express'
import { Dependencies } from '../../infrastructure/config/dependencies'
import LoginService from '../../domain/services/user/login.service'
import CreateService from '../../domain/services/user/create.service'

export default (dependencies: Dependencies) => {
  const loginService = LoginService(dependencies)
  const createService = CreateService(dependencies)

  const create = async (req: Request, res: Response) => {
    const user = await createService(req.body)
    res.status(201).json(user)
  }

  const findAll = (req: Request, res: Response) => {
    res.json({
      message: 'Users!'
    })
  }

  const findOne = (req: Request, res: Response) => {
    res.json({
      message: 'Users!'
    })
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
