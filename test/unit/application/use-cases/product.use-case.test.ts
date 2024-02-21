import { describe, expect, jest, it } from '@jest/globals'
import { CreateUseCase, FindAllUseCase, FindOneUseCase } from '../../../../src/application/use-cases/product/index.use-case'
import { dependencies } from '../../../fixtures/dependencies'
import { product } from '../../../fixtures/mock/product'

describe('ProductService', () => {
  describe('FindAll', () => {
    const findAllUseCase = FindAllUseCase(dependencies)
    it('Should return array with the products', async () => {
      dependencies.productRepository.findAll = (jest.fn() as jest.MockedFunction<typeof dependencies.productRepository.findAll>).mockResolvedValue([product])

      const result = await findAllUseCase()

      expect(result).toEqual([product])
      expect(dependencies.productRepository.findAll).toHaveBeenCalled()
    })

    it('Should return an empty array products', async () => {
      dependencies.productRepository.findAll = (jest.fn() as jest.MockedFunction<typeof dependencies.productRepository.findAll>).mockResolvedValue([])

      const result = await findAllUseCase()

      expect(result).toEqual([])
      expect(dependencies.productRepository.findAll).toHaveBeenCalled()
    })
  })

  describe('FindOne', () => {
    const findOneUseCase = FindOneUseCase(dependencies)
    it('Should return one products', async () => {
      dependencies.productRepository.findById = (jest.fn() as jest.MockedFunction<typeof dependencies.productRepository.findById>).mockResolvedValue(product)

      const result = await findOneUseCase(product.id)

      expect(result).toEqual(product)
      expect(dependencies.productRepository.findById).toHaveBeenCalledWith(product.id)
    })

    it('Should return a null', async () => {
      dependencies.productRepository.findById = (jest.fn() as jest.MockedFunction<typeof dependencies.productRepository.findById>).mockResolvedValue(null)

      const result = await findOneUseCase(product.id)

      expect(result).toEqual(null)
      expect(dependencies.productRepository.findById).toHaveBeenCalledWith(product.id)
    })
  })

  describe('Create', () => {
    const createUseCase = CreateUseCase(dependencies)

    it('deberia retornar el producto creado', async () => {
      dependencies.productRepository.findById = (jest.fn() as jest.MockedFunction<typeof dependencies.productRepository.findById>).mockResolvedValue(null)
      dependencies.productRepository.create = (jest.fn() as jest.MockedFunction<typeof dependencies.productRepository.create>).mockResolvedValue(product)

      const result = await createUseCase(product)

      expect(result).toEqual(product)
    })
  })
})
