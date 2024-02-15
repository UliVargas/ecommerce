import { describe, expect, jest, it } from '@jest/globals'
import { FindAllService, FindOneService, CreateService } from '../../../../src/domain/services/product/index.service'
import { dependencies } from '../../../fixtures/dependencies'
import { product } from '../../../fixtures/mock/product'

describe('ProductService', () => {
  describe('FindAll', () => {
    const findAllService = FindAllService(dependencies)
    it('Should return array with the products', async () => {
      dependencies.productRepository.findAll = (jest.fn() as jest.MockedFunction<typeof dependencies.productRepository.findAll>).mockResolvedValue([product])

      const result = await findAllService()

      expect(result).toEqual(product)
      expect(dependencies.productRepository.findAll).toHaveBeenCalled()
    })

    it('Should return an empty array products', async () => {
      dependencies.productRepository.findAll = (jest.fn() as jest.MockedFunction<typeof dependencies.productRepository.findAll>).mockResolvedValue([])

      const result = await findAllService()

      expect(result).toEqual([])
      expect(dependencies.productRepository.findAll).toHaveBeenCalled()
    })
  })

  describe('FindOne', () => {
    const findOneService = FindOneService(dependencies)
    it('Should return one products', async () => {
      dependencies.productRepository.findOne = (jest.fn() as jest.MockedFunction<typeof dependencies.productRepository.findOne>).mockResolvedValue(product)

      const result = await findOneService(product.id)

      expect(result).toEqual(product)
      expect(dependencies.productRepository.findOne).toHaveBeenCalledWith(product.id)
    })

    it('Should return a null', async () => {
      dependencies.productRepository.findOne = (jest.fn() as jest.MockedFunction<typeof dependencies.productRepository.findOne>).mockResolvedValue(null)

      const result = await findOneService(product.id)

      expect(result).toEqual(null)
      expect(dependencies.productRepository.findOne).toHaveBeenCalledWith(product.id)
    })
  })

  describe('Create', () => {
    const createService = CreateService(dependencies)

    it('deberia retornar el producto creado', async () => {
      dependencies.productRepository.findOne = (jest.fn() as jest.MockedFunction<typeof dependencies.productRepository.findOne>).mockResolvedValue(null)
      dependencies.productRepository.create = (jest.fn() as jest.MockedFunction<typeof dependencies.productRepository.create>).mockResolvedValue(product)

      const result = await createService(product)

      expect(result).toEqual(product)
    })
  })
})
