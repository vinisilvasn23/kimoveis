import { Request, Response } from "express";
import userServices from "../services/user.services";
import { UserReturn } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userServices.create(req.body);
  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const user = await userServices.read();

  return res.status(200).json(user);
};
const partialUpdate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: UserReturn = await userServices.partialUpdate(
    res.locals.foundUser,
    req.body
  );

  return res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await userServices.destroy(res.locals.foundUser);
  return res.status(204).json();
};

export default { create, read, destroy, partialUpdate };
