import { Category } from "../entities";
import { AppError } from "../errors";
import { CategoryCreate, CategoryRead, CategorySchema } from "../interfaces";
import { categoryRepo } from "../repositories";
import { categoryReadSchema } from "../schemas";

const create = async (payload: CategoryCreate): Promise<CategorySchema> => {
  const category: Category = categoryRepo.create(payload);
  await categoryRepo.save(category);
  return category;
};

const read = async (): Promise<CategoryRead> => {
  return categoryReadSchema.parse(await categoryRepo.find());
};

const readRealEstateByCategory = async (categoryId: number): Promise<Category> => {
  const realEstatesCategory: Category | null = await categoryRepo.findOne({
    where: {
      id: categoryId,
    },
    relations: {
      realEstate: true,
    },
  });
  if (!realEstatesCategory) {
    throw new AppError("Category not found", 404);
  }

  return realEstatesCategory;
};

export default { create, read, readRealEstateByCategory };
