import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { categoryRepo } from "../repositories";
import { Category } from "../entities";

export const verifyCategoryExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const name = req.body.name;
  const categoryId = req.body.categoryId;
  const id = Number(req.params.categoryId);

  if (name) {
    const foundCategory: Category | null = await categoryRepo.findOneBy({
      name: name,
    });

    if (!foundCategory) {
      return next();
    }
    throw new AppError("Category already exists", 409);
  }

  const category = categoryId
    ? await categoryRepo.findOneBy({ id: categoryId })
    : await categoryRepo.findOneBy({ id });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return next();
};
