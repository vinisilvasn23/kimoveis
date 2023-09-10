import { z } from "zod";
import { userSchema } from "./user.schema";

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
  realEstateId: z.number().positive(),
  userId: z.number().positive(),
});

const scheduleCreateSchema = scheduleSchema.omit({
  id: true,
  userId: true,
});

const scheduleRealEstateRead = scheduleSchema
  .omit({ realEstateId: true, userId: true })
  .extend({
    user: userSchema,
  })
  .array();

export { scheduleCreateSchema, scheduleSchema, scheduleRealEstateRead };
