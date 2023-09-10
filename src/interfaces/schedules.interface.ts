import { z } from "zod";
import { realEstateReadSchema, scheduleCreateSchema } from "../schemas";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;
type ScheduleReadRealEstate = z.infer<typeof realEstateReadSchema>;

type ScheduleRepo = Repository<Schedule>;

export { ScheduleRepo, ScheduleCreate, ScheduleReadRealEstate };
