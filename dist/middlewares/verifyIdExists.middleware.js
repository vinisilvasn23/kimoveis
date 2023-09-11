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
exports.verifyIdExists = void 0;
const repositories_1 = require("../repositories");
const errors_1 = require("../errors");
const verifyIdExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const foundUser = yield repositories_1.userRepo.findOneBy({ id });
    if (!foundUser)
        throw new errors_1.AppError("User not found", 404);
    res.locals.foundUser = foundUser;
    return next();
});
exports.verifyIdExists = verifyIdExists;
