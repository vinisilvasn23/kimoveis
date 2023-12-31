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
const categories_services_1 = __importDefault(require("../services/categories.services"));
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield categories_services_1.default.create(req.body);
    return res.status(201).json(category);
});
const read = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield categories_services_1.default.read();
    return res.status(200).json(category);
});
const readRealEstateByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const categoryRealEstate = yield categories_services_1.default.readRealEstateByCategory(id);
    return res.status(200).json(categoryRealEstate);
});
exports.default = { create, read, readRealEstateByCategory };
