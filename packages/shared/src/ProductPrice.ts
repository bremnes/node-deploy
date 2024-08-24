import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { faker } from '@faker-js/faker';

export const ProductPriceDef = z.object({
  id: z.string(),
  createdAt: z.string(),
  modifiedAt: z.string().optional(),
  supplierId: z.string(),
  price: z.number()
});

export const ProductPriceSchema = zodToJsonSchema(ProductPriceDef, 'ProductPrice');

export type ProductPrice = z.infer<typeof ProductPriceDef>;

export function productPriceMock(): ProductPrice {
  return {
    id: faker.string.uuid(),
    createdAt: faker.date.recent().toISOString(),
    modifiedAt: faker.date.recent().toISOString(),
    supplierId: faker.string.uuid(),
    price: faker.number.float({ min: 1, max: 2000, fractionDigits: 2 }),
  }
}
