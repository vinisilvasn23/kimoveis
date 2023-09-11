"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginCreate = void 0;
const user_schema_1 = require("./user.schema");
const userLoginCreate = user_schema_1.userSchema.pick({
    email: true,
    password: true,
});
exports.userLoginCreate = userLoginCreate;
