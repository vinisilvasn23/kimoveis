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
const services_1 = require("../services");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sub } = res.locals.decoded;
    const shedule = yield services_1.schedulesServices.create(req.body, sub);
    return res.status(201).json({ message: shedule });
});
const read = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const realEstateId = Number(req.params.id);
    const schedule = yield services_1.schedulesServices.read(realEstateId);
    return res.status(200).json(schedule);
});
exports.default = { create, read };
