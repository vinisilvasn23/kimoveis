import { Router } from "express";
import userControllers from "../controllers/user.controllers";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";

export const userRouter: Router = Router();
userRouter.use("/:id", middlewares.verifyIdExists, middlewares.verifyToken);
userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.verifyEmailExists,
  userControllers.create
);
userRouter.get(
  "",
  middlewares.verifyToken,
  middlewares.validateAdmin,
  userControllers.read
);
userRouter.patch(
  "/:id",
  middlewares.verifyUserPermission,
  middlewares.validateBody(userUpdateSchema),
  userControllers.partialUpdate
);
userRouter.delete("/:id", middlewares.validateAdmin, userControllers.destroy);
