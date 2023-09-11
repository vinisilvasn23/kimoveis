"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schedulesRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = __importDefault(require("../middlewares"));
const schemas_1 = require("../schemas");
exports.schedulesRouter = (0, express_1.Router)();
exports.schedulesRouter.post("", middlewares_1.default.verifyToken, middlewares_1.default.validateBody(schemas_1.scheduleCreateSchema), controllers_1.schedulesControllers.create);
exports.schedulesRouter.get("/realEstate/:id", middlewares_1.default.verifyToken, middlewares_1.default.validateAdmin, controllers_1.schedulesControllers.read);
