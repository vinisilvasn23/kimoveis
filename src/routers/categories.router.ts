import { Router } from "express";
import categoriesControllers from "../controllers/categories.controllers";
import middlewares from "../middlewares";
import { categoryCreateSchema } from "../schemas";

export const categoriesRouter: Router = Router();

categoriesRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.validateAdmin,
  middlewares.validateBody(categoryCreateSchema),
  middlewares.verifyCategoryExists,
  categoriesControllers.create
);
categoriesRouter.get("", categoriesControllers.read);
categoriesRouter.get(
  "/:id/realEstate",
  categoriesControllers.readRealEstateByCategory
);
