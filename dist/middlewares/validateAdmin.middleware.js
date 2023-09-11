"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAdmin = void 0;
const errors_1 = require("../errors");
const validateAdmin = (req, res, next) => {
    const { admin } = res.locals.decoded;
    if (!admin) {
        throw new errors_1.AppError("Insufficient permission", 403);
    }
    return next();
};
exports.validateAdmin = validateAdmin;
