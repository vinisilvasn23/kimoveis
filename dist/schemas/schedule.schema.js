"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleRealEstateRead = exports.scheduleSchema = exports.scheduleCreateSchema = void 0;
const zod_1 = require("zod");
const user_schema_1 = require("./user.schema");
const scheduleSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    date: zod_1.z.string(),
    hour: zod_1.z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
    realEstateId: zod_1.z.number().positive(),
    userId: zod_1.z.number().positive(),
});
exports.scheduleSchema = scheduleSchema;
const scheduleCreateSchema = scheduleSchema.omit({
    id: true,
    userId: true,
});
exports.scheduleCreateSchema = scheduleCreateSchema;
const scheduleRealEstateRead = scheduleSchema
    .omit({ realEstateId: true, userId: true })
    .extend({
    user: user_schema_1.userSchema,
})
    .array();
exports.scheduleRealEstateRead = scheduleRealEstateRead;
