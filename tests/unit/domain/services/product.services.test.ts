import { describe, expect, jest, it } from '@jest/globals'
import { FindAllService } from '../../../../src/domain/services/product/index.service'
import { dependencies } from '../../../fixtures/dependencies'
import { product } from '../../../fixtures/mock/product'

describe('ProductService', () => {
  describe('FindAll', () => {
    const findAllService = FindAllService(dependencies)
    it('Should return array with the products', async () => {
      dependencies.productRepository.findAll = (jest.fn() as jest.MockedFunction<typeof dependencies.productRepository.findAll>).mockResolvedValue([product])

      const result = await findAllService()

      expect(result).toEqual([product])
      expect(dependencies.productRepository.findAll).toHaveBeenCalled()
    })

    it('Should return empty array products', async () => {
      dependencies.productRepository.findAll = (jest.fn() as jest.MockedFunction<typeof dependencies.productRepository.findAll>).mockResolvedValue([])

      const result = await findAllService()

      expect(result).toEqual([])
      expect(dependencies.productRepository.findAll).toHaveBeenCalled()
    })
  })
})
