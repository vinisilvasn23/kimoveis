import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, Schedule, User } from "./entities";
import {
  AddressRepo,
  CategoryRepo,
  RealEstateRepo,
  ScheduleRepo,
  UserRepo,
} from "./interfaces";

export const userRepo: UserRepo = AppDataSource.getRepository(User);
export const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category);
export const realEstateRepo: RealEstateRepo =
  AppDataSource.getRepository(RealEstate);
export const addressRepo: AddressRepo = AppDataSource.getRepository(Address);
export const schedulesRepo: ScheduleRepo =
  AppDataSource.getRepository(Schedule);
