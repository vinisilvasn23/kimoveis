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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_services_1 = __importDefault(require("../services/user.services"));
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_services_1.default.create(req.body);
    return res.status(201).json(user);
});
const read = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_services_1.default.read();
    return res.status(200).json(user);
});
const partialUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_services_1.default.partialUpdate(res.locals.foundUser, req.body);
    return res.status(200).json(user);
});
const destroy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_services_1.default.destroy(res.locals.foundUser);
    return res.status(204).json();
});
exports.default = { create, read, destroy, partialUpdate };
