import { sign } from "jsonwebtoken";
import { AppError } from "../errors";
import { UserLoginCreate, UserLoginReturn } from "../interfaces";
import { compare } from "bcryptjs";
import { User } from "../entities";

const create = async (
  payload: UserLoginCreate,
  foundUser: User
): Promise<UserLoginReturn> => {
  const comparePassword: boolean = await compare(
    payload.password,
    foundUser.password
  );

  if (!comparePassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = sign(
    { admin: foundUser.admin },
    process.env.SECRET_KEY!,
    {
      subject: foundUser.id.toString(),
      expiresIn: process.env.EXPIRES_IN!,
    }
  );

  return { token };
};

export default { create };
