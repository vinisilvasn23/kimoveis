"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressCreateSchema = exports.addressSchema = void 0;
const zod_1 = require("zod");
const addressSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    street: zod_1.z.string().max(45),
    zipCode: zod_1.z.string().max(8),
    number: zod_1.z.number().positive(),
    city: zod_1.z.string().max(20),
    state: zod_1.z.string().max(2),
});
exports.addressSchema = addressSchema;
const addressCreateSchema = addressSchema.omit({ id: true });
exports.addressCreateSchema = addressCreateSchema;
