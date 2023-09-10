import { ScheduleCreate, ScheduleReadRealEstate } from "../interfaces";
import { realEstateRepo, schedulesRepo, userRepo } from "../repositories";
import { RealEstate, Schedule, User } from "../entities";
import { AppError } from "../errors";

const create = async (
  payload: ScheduleCreate,
  sub: string
): Promise<string> => {
  const userId: number = Number(sub);
  const user: User | null = await userRepo.findOneBy({
    id: userId,
  });

  const convertDate: Date = new Date(payload.date);
  const convertHour: number = Number(payload.hour.slice(0, -3));

  if (convertHour <= 8 || convertHour > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  const convertDay = convertDate.getDay();
  if (convertDay === 5 || convertDay === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  const existingUserSchedule: Schedule | null = await schedulesRepo.findOne({
    where: {
      user: { id: userId },
      date: payload.date,
      hour: payload.hour,
    },
  });

  if (existingUserSchedule) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  const existingSchedule: Schedule | null = await schedulesRepo.findOne({
    where: {
      realEstate: { id: payload.realEstateId },
      date: payload.date,
      hour: payload.hour,
    },
  });

  if (existingSchedule) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  const realEstate: RealEstate | null = await realEstateRepo.findOne({
    where: { id: payload.realEstateId },
  });
  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  const newSchedule: Schedule = schedulesRepo.create({
    ...payload,
    user: user!,
    realEstate: realEstate!,
  });

  await schedulesRepo.save(newSchedule);
  return "Schedule created";
};

const read = async (realEstateId: number): Promise<ScheduleReadRealEstate> => {
  const realEstate: RealEstate | null = await realEstateRepo.findOne({
    where: { id: realEstateId },
    relations: {
      address: true,
      schedules: {
        user: true,
      },
      category: true,
    },
  });

  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }
  return realEstate;
};

export default { create, read };
