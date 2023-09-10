import {
  UserCreate,
  UserRead,
  UserReturn,
  UserRepo,
  UserUpdate,
  UserResult,
} from "./user.interfaces";
import { UserLoginCreate, UserLoginReturn } from "./login.interface";

import {
  CategoryCreate,
  CategoryRepo,
  CategorySchema,
  CategoryRead,
} from "./categories.interface";
import {
  RealEstateRepo,
  RealEstateCreate,
  RealEstateSchema,
  RealEstateRead,
} from "./realEstate.interface";
import {
  ScheduleRepo,
  ScheduleCreate,
  ScheduleReadRealEstate,
} from "./schedules.interface";

import { AddressRepo, AddressCreate, AddressSchema } from "./address.interface";

export {
  UserCreate,
  UserRead,
  UserReturn,
  UserRepo,
  UserUpdate,
  UserResult,
  UserLoginCreate,
  UserLoginReturn,
  CategoryCreate,
  CategoryRepo,
  CategorySchema,
  CategoryRead,
  RealEstateRepo,
  RealEstateCreate,
  RealEstateSchema,
  RealEstateRead,
  ScheduleRepo,
  ScheduleCreate,
  ScheduleReadRealEstate,
  AddressRepo,
  AddressCreate,
  AddressSchema,
};
