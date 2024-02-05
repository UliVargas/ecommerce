import { Response, Request } from 'express'
import { FindAllService } from '../../domain/services/product/index.service'
import { Dependencies } from '../../infrastructure/config/dependencies'

export default (dependencies: Dependencies) => {
  const findAllService = FindAllService(dependencies)

  const findAll = async (req: Request, res: Response) => {
    const products = await findAllService()
    res.status(200).json(products)
  }

  return {
    findAll
  }
}
