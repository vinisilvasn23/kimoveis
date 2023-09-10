import { z } from "zod";
import { User } from "../entities";
import { DeepPartial, Repository } from "typeorm";
import { userCreateSchema, userReturnSchema } from "../schemas";
import { QueryResult } from "pg";

type UserCreate = z.infer<typeof userCreateSchema>;
type UserReturn = z.infer<typeof userReturnSchema>;
type UserRead = Array<UserReturn>;
type UserUpdate = DeepPartial<User>;
type UserResult = QueryResult<User>;

type UserRepo = Repository<User>;

export { UserCreate, UserRead, UserReturn, UserRepo, UserUpdate, UserResult };
