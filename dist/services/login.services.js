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
const jsonwebtoken_1 = require("jsonwebtoken");
const errors_1 = require("../errors");
const bcryptjs_1 = require("bcryptjs");
const create = (payload, foundUser) => __awaiter(void 0, void 0, void 0, function* () {
    const comparePassword = yield (0, bcryptjs_1.compare)(payload.password, foundUser.password);
    if (!comparePassword) {
        throw new errors_1.AppError("Invalid credentials", 401);
    }
    const token = (0, jsonwebtoken_1.sign)({ admin: foundUser.admin }, process.env.SECRET_KEY, {
        subject: foundUser.id.toString(),
        expiresIn: process.env.EXPIRES_IN,
    });
    return { token };
});
exports.default = { create };
