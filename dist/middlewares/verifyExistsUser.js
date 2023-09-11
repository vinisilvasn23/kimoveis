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
exports.verifyExistsUser = void 0;
const errors_1 = require("../errors");
const repositories_1 = require("../repositories");
const verifyExistsUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const foundEmail = yield repositories_1.userRepo.findOneBy({
        email: email,
    });
    res.locals = Object.assign(Object.assign({}, res.locals), { foundUser: foundEmail });
    if (!foundEmail) {
        throw new errors_1.AppError("Invalid credentials", 401);
    }
    return next();
});
exports.verifyExistsUser = verifyExistsUser;
