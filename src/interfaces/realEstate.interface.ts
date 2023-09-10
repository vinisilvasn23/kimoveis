import { z } from "zod";
import { realEstateCreateSchema, realEstateSchema } from "../schemas";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";

type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;
type RealEstateSchema = z.infer<typeof realEstateSchema>;
type RealEstateRead = Array<RealEstate>;

type RealEstateRepo = Repository<RealEstate>;

export { RealEstateRepo, RealEstateCreate, RealEstateSchema, RealEstateRead };
