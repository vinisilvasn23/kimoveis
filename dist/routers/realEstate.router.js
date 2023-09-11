"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.realEstateRouter = void 0;
const express_1 = require("express");
const realEstate_controllers_1 = __importDefault(require("../controllers/realEstate.controllers"));
const middlewares_1 = __importDefault(require("../middlewares"));
const schemas_1 = require("../schemas");
exports.realEstateRouter = (0, express_1.Router)();
exports.realEstateRouter.post("", middlewares_1.default.verifyToken, middlewares_1.default.validateAdmin, middlewares_1.default.validateBody(schemas_1.realEstateCreateSchema), middlewares_1.default.verifyCategoryExists, realEstate_controllers_1.default.create);
exports.realEstateRouter.get("", realEstate_controllers_1.default.read);
