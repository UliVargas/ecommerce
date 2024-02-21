import { Response, Request } from 'express'

import { Dependencies } from '../../infrastructure/config/dependencies'
import { FindAllUseCase, CreateUseCase, FindOneUseCase } from '../../application/use-cases/product/index.use-case'

export default (dependencies: Dependencies) => {
  const findAllUseCase = FindAllUseCase(dependencies)
  const findOneUseCase = FindOneUseCase(dependencies)
  const createUseCase = CreateUseCase(dependencies)

  const findAll = async (req: Request, res: Response) => {
    const products = await findAllUseCase()
    res.status(200).json(products)
  }

  const findOne = async (req: Request, res: Response) => {
    const user = await findOneUseCase(req.params.productId)
    res.status(200).json(user)
  }

  const create = async (req: Request, res: Response) => {
    const user = await createUseCase(req.body)
    res.status(200).json(user)
  }

  return {
    findAll,
    findOne,
    create
  }
}
