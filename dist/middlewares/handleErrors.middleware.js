"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = void 0;
const errors_1 = require("../errors");
const zod_1 = require("zod");
const jsonwebtoken_1 = require("jsonwebtoken");
const handleErrors = (error, req, res, next) => {
    if (error instanceof errors_1.AppError) {
        return res.status(error.status).json({ message: error.message });
    }
    if (error instanceof zod_1.ZodError) {
        return res.status(400).json({ message: error.flatten().fieldErrors });
    }
    if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
        return res.status(401).json({ message: error.message });
    }
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
};
exports.handleErrors = handleErrors;
