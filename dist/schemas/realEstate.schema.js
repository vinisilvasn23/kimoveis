"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.realEstateReadSchema = exports.realEstateSchema = exports.realEstateCreateSchema = void 0;
const zod_1 = require("zod");
const address_schema_1 = require("./address.schema");
const category_schema_1 = require("./category.schema");
const schedule_schema_1 = require("./schedule.schema");
const realEstateSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    value: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
    size: zod_1.z.number().positive(),
    address: address_schema_1.addressCreateSchema,
    categoryId: zod_1.z.number().positive(),
    sold: zod_1.z.boolean().default(false),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
exports.realEstateSchema = realEstateSchema;
const realEstateCreateSchema = realEstateSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    sold: true,
});
exports.realEstateCreateSchema = realEstateCreateSchema;
const realEstateReadSchema = realEstateSchema
    .omit({
    categoryId: true,
})
    .extend({
    category: category_schema_1.categorySchema,
    schedules: schedule_schema_1.scheduleRealEstateRead,
});
exports.realEstateReadSchema = realEstateReadSchema;
