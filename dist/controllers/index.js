"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schedulesControllers = exports.realEstateControllers = exports.loginControllers = exports.userControllers = void 0;
const user_controllers_1 = __importDefault(require("./user.controllers"));
exports.userControllers = user_controllers_1.default;
const login_controllers_1 = __importDefault(require("./login.controllers"));
exports.loginControllers = login_controllers_1.default;
const realEstate_controllers_1 = __importDefault(require("./realEstate.controllers"));
exports.realEstateControllers = realEstate_controllers_1.default;
const schedules_controllers_1 = __importDefault(require("./schedules.controllers"));
exports.schedulesControllers = schedules_controllers_1.default;
