"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schedulesServices = exports.realEstateServices = exports.loginServices = exports.userServices = void 0;
const user_services_1 = __importDefault(require("./user.services"));
exports.userServices = user_services_1.default;
const login_services_1 = __importDefault(require("./login.services"));
exports.loginServices = login_services_1.default;
const realEstate_services_1 = __importDefault(require("./realEstate.services"));
exports.realEstateServices = realEstate_services_1.default;
const schedules_services_1 = __importDefault(require("./schedules.services"));
exports.schedulesServices = schedules_services_1.default;
