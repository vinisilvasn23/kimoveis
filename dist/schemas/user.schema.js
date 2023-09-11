"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = exports.userReadSchema = exports.userUpdateSchema = exports.userReturnSchema = exports.userCreateSchema = void 0;
const zod_1 = require("zod");
const userSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    name: zod_1.z.string().max(45),
    email: zod_1.z.string().email().max(45),
    password: zod_1.z.string().max(120),
    admin: zod_1.z.boolean().default(false),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
    deletedAt: zod_1.z.string().nullable(),
});
exports.userSchema = userSchema;
const userCreateSchema = userSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
});
exports.userCreateSchema = userCreateSchema;
const userReturnSchema = userSchema.omit({ password: true });
exports.userReturnSchema = userReturnSchema;
const userUpdateSchema = userCreateSchema.partial().omit({ admin: true });
exports.userUpdateSchema = userUpdateSchema;
const userReadSchema = userReturnSchema.array();
exports.userReadSchema = userReadSchema;
