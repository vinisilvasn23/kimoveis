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
exports.verifyCategoryExists = void 0;
const errors_1 = require("../errors");
const repositories_1 = require("../repositories");
const verifyCategoryExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body.name;
    const categoryId = req.body.categoryId;
    const id = Number(req.params.categoryId);
    if (name) {
        const foundCategory = yield repositories_1.categoryRepo.findOneBy({
            name: name,
        });
        if (!foundCategory) {
            return next();
        }
        throw new errors_1.AppError("Category already exists", 409);
    }
    const category = categoryId
        ? yield repositories_1.categoryRepo.findOneBy({ id: categoryId })
        : yield repositories_1.categoryRepo.findOneBy({ id });
    if (!category) {
        throw new errors_1.AppError("Category not found", 404);
    }
    return next();
});
exports.verifyCategoryExists = verifyCategoryExists;
