"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("../repositories");
const errors_1 = require("../errors");
const create = (payload, sub) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(sub);
    const user = yield repositories_1.userRepo.findOneBy({
        id: userId,
    });
    const convertDate = new Date(payload.date);
    const convertHour = Number(payload.hour.slice(0, -3));
    if (convertHour <= 8 || convertHour > 18) {
        throw new errors_1.AppError("Invalid hour, available times are 8AM to 18PM", 400);
    }
    const convertDay = convertDate.getDay();
    if (convertDay === 5 || convertDay === 6) {
        throw new errors_1.AppError("Invalid date, work days are monday to friday", 400);
    }
    const existingUserSchedule = yield repositories_1.schedulesRepo.findOne({
        where: {
            user: { id: userId },
            date: payload.date,
            hour: payload.hour,
        },
    });
    if (existingUserSchedule) {
        throw new errors_1.AppError("User schedule to this real estate at this date and time already exists", 409);
    }
    const existingSchedule = yield repositories_1.schedulesRepo.findOne({
        where: {
            realEstate: { id: payload.realEstateId },
            date: payload.date,
            hour: payload.hour,
        },
    });
    if (existingSchedule) {
        throw new errors_1.AppError("Schedule to this real estate at this date and time already exists", 409);
    }
    const realEstate = yield repositories_1.realEstateRepo.findOne({
        where: { id: payload.realEstateId },
    });
    if (!realEstate) {
        throw new errors_1.AppError("RealEstate not found", 404);
    }
    const newSchedule = repositories_1.schedulesRepo.create(Object.assign(Object.assign({}, payload), { user: user, realEstate: realEstate }));
    yield repositories_1.schedulesRepo.save(newSchedule);
    return "Schedule created";
});
const read = (realEstateId) => __awaiter(void 0, void 0, void 0, function* () {
    const realEstate = yield repositories_1.realEstateRepo.findOne({
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
        throw new errors_1.AppError("RealEstate not found", 404);
    }
    return realEstate;
});
exports.default = { create, read };
