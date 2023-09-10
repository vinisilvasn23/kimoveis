import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { userRepo } from "../repositories";
import { User } from "../entities";

export const verifyEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;

  const foundEmail: User | null = await userRepo.findOneBy({
    email: email,
  });

  if (foundEmail) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
