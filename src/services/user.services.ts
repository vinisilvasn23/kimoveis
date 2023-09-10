import { hashSync } from "bcryptjs";
import { User } from "../entities";
import { UserCreate, UserRead, UserReturn, UserUpdate } from "../interfaces";
import { userRepo } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = userRepo.create(payload);
  await userRepo.save(user);

  return userReturnSchema.parse(user);
};

const read = async (): Promise<UserRead> => {
  return userReadSchema.parse(await userRepo.find());
};

const partialUpdate = async (
  user: User,
  payload: UserUpdate
): Promise<UserReturn> => {
  if (payload.password && payload.password !== user.password) {
    payload.password = hashSync(payload.password, 10);
  }
  const userUpdate = await userRepo.save({ ...user, ...payload });
  return userReturnSchema.parse(userUpdate);
};

const destroy = async (user: User): Promise<void> => {
  await userRepo.softRemove(user);
};

export default { create, read, destroy, partialUpdate };
