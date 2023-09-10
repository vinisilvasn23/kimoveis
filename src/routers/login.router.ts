import { Router } from "express";
import middlewares from "../middlewares";
import { loginControllers } from "../controllers";
import { userLoginCreate } from "../schemas";

export const loginRouter: Router = Router();

loginRouter.post(
  "",
  middlewares.validateBody(userLoginCreate),
  middlewares.verifyExistsUser,
  loginControllers.create
);
