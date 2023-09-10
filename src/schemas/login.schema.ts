import { userSchema } from "./user.schema";

const userLoginCreate = userSchema.pick({
  email: true,
  password: true,
});

export { userLoginCreate };
