import { Router } from "express";
import realEstateControllers from "../controllers/realEstate.controllers";
import middlewares from "../middlewares";
import { realEstateCreateSchema } from "../schemas";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.validateAdmin,
  middlewares.validateBody(realEstateCreateSchema),
  middlewares.verifyCategoryExists,
  realEstateControllers.create
);
realEstateRouter.get("", realEstateControllers.read);
