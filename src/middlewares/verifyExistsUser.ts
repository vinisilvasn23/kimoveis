import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { userRepo } from "../repositories";
import { User } from "../entities";

export const verifyExistsUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;

  const foundEmail: User | null = await userRepo.findOneBy({
    email: email,
  });

  res.locals = { ...res.locals, foundUser: foundEmail };

  if (!foundEmail) {
    throw new AppError("Invalid credentials", 401);
  }

  return next();
};
