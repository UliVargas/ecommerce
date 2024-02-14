import { Response, Request } from 'express'
import { FindAllService, FindOneService, CreateService } from '../../domain/services/product/index.service'
import { Dependencies } from '../../infrastructure/config/dependencies'

export default (dependencies: Dependencies) => {
  const findAllService = FindAllService(dependencies)
  const findOneService = FindOneService(dependencies)
  const createService = CreateService(dependencies)

  const findAll = async (req: Request, res: Response) => {
    const products = await findAllService()
    res.status(200).json(products)
  }

  const findOne = async (req: Request, res: Response) => {
    const user = await findOneService(req.params.productId)
    res.status(200).json(user)
  }

  const create = async (req: Request, res: Response) => {
    const user = await createService(req.body)
    res.status(200).json(user)
  }

  return {
    findAll,
    findOne,
    create
  }
}
