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
const errors_1 = require("../errors");
const repositories_1 = require("../repositories");
const schemas_1 = require("../schemas");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const category = repositories_1.categoryRepo.create(payload);
    yield repositories_1.categoryRepo.save(category);
    return category;
});
const read = () => __awaiter(void 0, void 0, void 0, function* () {
    return schemas_1.categoryReadSchema.parse(yield repositories_1.categoryRepo.find());
});
const readRealEstateByCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const realEstatesCategory = yield repositories_1.categoryRepo.findOne({
        where: {
            id: categoryId,
        },
        relations: {
            realEstate: true,
        },
    });
    if (!realEstatesCategory) {
        throw new errors_1.AppError("Category not found", 404);
    }
    return realEstatesCategory;
});
exports.default = { create, read, readRealEstateByCategory };
