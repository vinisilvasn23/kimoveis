"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryReadSchema = exports.categoryCreateSchema = exports.categorySchema = void 0;
const zod_1 = require("zod");
const categorySchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    name: zod_1.z.string().max(45),
});
exports.categorySchema = categorySchema;
const categoryCreateSchema = categorySchema.omit({ id: true });
exports.categoryCreateSchema = categoryCreateSchema;
const categoryReadSchema = categorySchema.array();
exports.categoryReadSchema = categoryReadSchema;
