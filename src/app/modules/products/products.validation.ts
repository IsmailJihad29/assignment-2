import { z } from 'zod';

const variantValidationSchema = z.object({
  type: z.string().min(1),
  value: z.string().min(1)
});

const inventoryValidationSchema = z.object({
  quantity: z.number().int().nonnegative().min(1),
  inStock: z.boolean()
});

const productsValidationSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().nonnegative().min(1),
  category: z.string().min(1),
  tags: z.array(z.string()).min(1),
  variants: z.array(variantValidationSchema).min(1),
  inventory: inventoryValidationSchema
});

export default productsValidationSchema;
