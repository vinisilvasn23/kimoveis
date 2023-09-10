import { z } from "zod";
import { addressCreateSchema, addressSchema } from "../schemas";
import { Repository } from "typeorm";
import { Address } from "../entities";

type AddressCreate = z.infer<typeof addressCreateSchema>;
type AddressSchema = z.infer<typeof addressSchema>;

type AddressRepo = Repository<Address>;

export { AddressRepo, AddressCreate, AddressSchema };