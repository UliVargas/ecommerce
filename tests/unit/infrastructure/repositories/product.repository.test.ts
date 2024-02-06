import { beforeEach, describe, expect, it, jest } from '@jest/globals'
import { product } from '../../../fixtures/mock/product'
import { Product } from '../../../../src/infrastructure/orm/sequelize/models/product.model'
import { ProductModel } from '../../../../src/infrastructure/orm/sequelize/models/index.model'
import Dependencies, { Dependencies as IDependencies } from '../../../../src/infrastructure/config/dependencies'

describe('ProductRepository', () => {
  const productModel = ProductModel
  let dependencies: IDependencies

  beforeEach(async () => {
    dependencies = await Dependencies()
  })

  describe('FindAll', () => {
    it('Should return array with the products', async () => {
      const productInstance = new Product(product)
      productModel.findAll = (jest.fn() as jest.MockedFunction<typeof productModel.findAll>).mockResolvedValue([productInstance])

      const result = await dependencies.productRepository.findAll()

      expect(result).toEqual([productInstance])
      expect(productModel.findAll).toHaveBeenCalled()
    })

    it('Should return an empty array', async () => {
      productModel.findAll = (jest.fn() as jest.MockedFunction<typeof productModel.findAll>).mockResolvedValue([])

      const result = await dependencies.productRepository.findAll()

      expect(result).toEqual([])
      expect(productModel.findAll).toHaveBeenCalled()
    })
  })

  describe('FindOne', () => {
    it('Should return one product', async () => {
      const productInstance = new Product(product)
      productModel.findByPk = (jest.fn() as jest.MockedFunction<typeof productModel.findByPk>).mockResolvedValue(productInstance)

      const result = await dependencies.productRepository.findOne(product.id)

      expect(result).toEqual(productInstance)
      expect(productModel.findByPk).toHaveBeenCalledWith(product.id)
    })

    it('Should return a null', async () => {
      productModel.findByPk = (jest.fn() as jest.MockedFunction<typeof productModel.findByPk>).mockResolvedValue(null)

      const result = await dependencies.productRepository.findOne(product.id)

      expect(result).toEqual(null)
      expect(productModel.findByPk).toHaveBeenCalledWith(product.id)
    })
  })
})
