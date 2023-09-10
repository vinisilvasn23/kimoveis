import { Router } from "express";
import { schedulesControllers } from "../controllers";
import middlewares from "../middlewares";
import { scheduleCreateSchema } from "../schemas";

export const schedulesRouter: Router = Router();

schedulesRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.validateBody(scheduleCreateSchema),
  schedulesControllers.create
);
schedulesRouter.get(
  "/realEstate/:id",
  middlewares.verifyToken,
  middlewares.validateAdmin,
  schedulesControllers.read
);
