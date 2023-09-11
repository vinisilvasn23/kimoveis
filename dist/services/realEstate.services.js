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
const errors_1 = require("../errors");
const repositories_1 = require("../repositories");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield repositories_1.categoryRepo.findOneBy({ id: payload.categoryId });
    const existingAddress = yield repositories_1.addressRepo.findOne({
        where: {
            number: payload.address.number,
        },
    });
    if (existingAddress) {
        throw new errors_1.AppError("Address already exists", 409);
    }
    const address = repositories_1.addressRepo.create(Object.assign({}, payload.address));
    yield repositories_1.addressRepo.save(address);
    const realEstatePayload = Object.assign(Object.assign({}, payload), { address: address, category: category });
    const realEstate = repositories_1.realEstateRepo.create(realEstatePayload);
    yield repositories_1.realEstateRepo.save(realEstate);
    return realEstate;
});
const read = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield repositories_1.realEstateRepo.find({
        relations: {
            address: true,
        },
    });
});
exports.default = { create, read };
