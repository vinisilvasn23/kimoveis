"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouter = void 0;
const express_1 = require("express");
const categories_controllers_1 = __importDefault(require("../controllers/categories.controllers"));
const middlewares_1 = __importDefault(require("../middlewares"));
const schemas_1 = require("../schemas");
exports.categoriesRouter = (0, express_1.Router)();
exports.categoriesRouter.post("", middlewares_1.default.verifyToken, middlewares_1.default.validateAdmin, middlewares_1.default.validateBody(schemas_1.categoryCreateSchema), middlewares_1.default.verifyCategoryExists, categories_controllers_1.default.create);
exports.categoriesRouter.get("", categories_controllers_1.default.read);
exports.categoriesRouter.get("/:id/realEstate", categories_controllers_1.default.readRealEstateByCategory);
