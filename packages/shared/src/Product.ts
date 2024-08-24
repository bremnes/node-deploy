import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { faker } from '@faker-js/faker';

export const ProductDef = z.object({
  id: z.string(),
  createdAt: z.string(),
  modifiedAt: z.string().optional(),
  finalCost: z.number().optional(),
  finalPrice: z.number().optional(),
  name: z.string().optional(),
  productNumber: z.string().optional(),
  quantity: z.number().optional(),
  unit: z.enum(['pcs']).optional(),
  unitCost: z.number().optional(),
  unitPrice: z.number().optional(),
});

export const ProductSchema = zodToJsonSchema(ProductDef, 'Product');

export type Product = z.infer<typeof ProductDef>;

export function productMock(): Product {
  const unitPrice = faker.number.float({ min: 1, max: 4000, fractionDigits: 2 });
  const quantity = faker.number.int({ min: 1, max: 8 });

  return {
    id: faker.string.uuid(),
    createdAt: faker.date.recent().toISOString(),
    modifiedAt: faker.date.recent().toISOString(),
    quantity,
    unitPrice,
    unitCost: faker.number.float({ min: 1, max: 2000 }),
    name: faker.lorem.sentence(),
    unit: faker.helpers.arrayElement(['pcs']),
    productNumber: faker.number.int({ min: 5, max: 55 }).toString(),
    finalCost: unitPrice * quantity * 0.6,
    finalPrice: unitPrice * quantity
  }
}
