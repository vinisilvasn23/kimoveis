"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Schedule = exports.RealEstate = exports.Category = exports.Address = void 0;
const addressers_entity_1 = __importDefault(require("./addressers.entity"));
exports.Address = addressers_entity_1.default;
const categories_entity_1 = __importDefault(require("./categories.entity"));
exports.Category = categories_entity_1.default;
const realEstates_entity_1 = __importDefault(require("./realEstates.entity"));
exports.RealEstate = realEstates_entity_1.default;
const schedules_entity_1 = __importDefault(require("./schedules.entity"));
exports.Schedule = schedules_entity_1.default;
const users_entity_1 = __importDefault(require("./users.entity"));
exports.User = users_entity_1.default;
