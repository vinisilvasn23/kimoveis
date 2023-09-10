import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const verifyUserPermission = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { sub, admin } = res.locals.decoded;
  const id = req.params.id;
  if (admin) {
    return next();
  } else if (sub != id) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
