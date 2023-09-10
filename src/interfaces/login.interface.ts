import { z } from "zod";
import { userLoginCreate } from "../schemas";

type UserLoginCreate = z.infer<typeof userLoginCreate>;
type UserLoginReturn = { token: string };

export { UserLoginCreate, UserLoginReturn };
