import { Request, Response } from "express";
import { UserLoginReturn } from "../interfaces";
import { loginServices } from "../services";
import { User } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const foundUser: User = res.locals.foundUser;
  const token: UserLoginReturn = await loginServices.create(
    req.body,
    foundUser
  );
  return res.status(200).json(token);
};

export default { create };
