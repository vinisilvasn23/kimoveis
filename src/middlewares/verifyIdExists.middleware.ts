import { Response, Request, NextFunction } from "express";
import { User } from "../entities";
import { userRepo } from "../repositories";
import { AppError } from "../errors";

export const verifyIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundUser: User | null = await userRepo.findOneBy({ id });

  if (!foundUser) throw new AppError("User not found", 404);

  res.locals.foundUser = foundUser;

  return next();
};
