import { z } from "zod";
import { addressCreateSchema } from "./address.schema";
import { categorySchema } from "./category.schema";
import { scheduleRealEstateRead } from "./schedule.schema";

const realEstateSchema = z.object({
  id: z.number().positive(),
  value: z.union([z.string(), z.number()]),
  size: z.number().positive(),
  address: addressCreateSchema,
  categoryId: z.number().positive(),
  sold: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const realEstateCreateSchema = realEstateSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  sold: true,
});

const realEstateReadSchema = realEstateSchema
  .omit({
    categoryId: true,
  })
  .extend({
    category: categorySchema,
    schedules: scheduleRealEstateRead,
  });

export { realEstateCreateSchema, realEstateSchema, realEstateReadSchema };
