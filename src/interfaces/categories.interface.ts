import { z } from "zod";
import { categoryCreateSchema, categorySchema } from "../schemas";
import { Repository } from "typeorm";
import { Category } from "../entities";

type CategoryCreate = z.infer<typeof categoryCreateSchema>;
type CategorySchema = z.infer<typeof categorySchema>;
type CategoryRead = Array<CategorySchema>;

type CategoryRepo = Repository<Category>;

export { CategoryRepo, CategoryCreate, CategorySchema, CategoryRead };
