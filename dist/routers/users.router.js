"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controllers_1 = __importDefault(require("../controllers/user.controllers"));
const middlewares_1 = __importDefault(require("../middlewares"));
const schemas_1 = require("../schemas");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.use("/:id", middlewares_1.default.verifyIdExists, middlewares_1.default.verifyToken);
exports.userRouter.post("", middlewares_1.default.validateBody(schemas_1.userCreateSchema), middlewares_1.default.verifyEmailExists, user_controllers_1.default.create);
exports.userRouter.get("", middlewares_1.default.verifyToken, middlewares_1.default.validateAdmin, user_controllers_1.default.read);
exports.userRouter.patch("/:id", middlewares_1.default.verifyUserPermission, middlewares_1.default.validateBody(schemas_1.userUpdateSchema), user_controllers_1.default.partialUpdate);
exports.userRouter.delete("/:id", middlewares_1.default.validateAdmin, user_controllers_1.default.destroy);
