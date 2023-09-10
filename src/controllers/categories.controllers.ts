import { Request, Response } from "express";
import categoriesServices from "../services/categories.services";
import { CategoryRead, CategorySchema } from "../interfaces";
import { Category } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const category: CategorySchema = await categoriesServices.create(req.body);
  return res.status(201).json(category);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const category: CategoryRead = await categoriesServices.read();

  return res.status(200).json(category);
};
const readRealEstateByCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);
  const categoryRealEstate: Category = await categoriesServices.readRealEstateByCategory(
    id
  );
  return res.status(200).json(categoryRealEstate);
};

export default { create, read, readRealEstateByCategory };
