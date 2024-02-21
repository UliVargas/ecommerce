import { z } from 'zod'

const props = {
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  stock: z.number(),
  slug: z.string(),
  tags: z.array(z.string()),
  category: z.string(),
  price: z.number(),
  images: z.array(z.string()),
  averageRating: z.number(),
  isFeatured: z.boolean(),
  isAvailable: z.boolean()
}

export const createProductSchema = z.object({
  title: props.title,
  description: props.description,
  stock: props.stock,
  slug: props.slug,
  tags: props.tags,
  category: props.category,
  price: props.price,
  images: props.images,
  averageRating: props.averageRating,
  isFeatured: props.isFeatured,
  isAvailable: props.isAvailable
})
