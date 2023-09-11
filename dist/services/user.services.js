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
const bcryptjs_1 = require("bcryptjs");
const repositories_1 = require("../repositories");
const schemas_1 = require("../schemas");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = repositories_1.userRepo.create(payload);
    yield repositories_1.userRepo.save(user);
    return schemas_1.userReturnSchema.parse(user);
});
const read = () => __awaiter(void 0, void 0, void 0, function* () {
    return schemas_1.userReadSchema.parse(yield repositories_1.userRepo.find());
});
const partialUpdate = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (payload.password && payload.password !== user.password) {
        payload.password = (0, bcryptjs_1.hashSync)(payload.password, 10);
    }
    const userUpdate = yield repositories_1.userRepo.save(Object.assign(Object.assign({}, user), payload));
    return schemas_1.userReturnSchema.parse(userUpdate);
});
const destroy = (user) => __awaiter(void 0, void 0, void 0, function* () {
    yield repositories_1.userRepo.softRemove(user);
});
exports.default = { create, read, destroy, partialUpdate };
