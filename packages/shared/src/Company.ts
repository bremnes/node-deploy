import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { faker } from '@faker-js/faker';

export const CompanyDef = z.object({
  id: z.string().uuid(),
  createdAt: z.string(),
  createdById: z.string().uuid().optional(),
  modifiedAt: z.string().optional(),
  name: z.string().optional(),
});

export const CompanySchema = zodToJsonSchema(CompanyDef, 'Company');

export type Company = z.infer<typeof CompanyDef>;

export function companyMock(): Company {
  return {
    id: faker.string.uuid(),
    createdAt: faker.date.recent().toISOString(),
    modifiedAt: faker.date.recent().toISOString(),
    name: faker.company.name(),
  }
}
