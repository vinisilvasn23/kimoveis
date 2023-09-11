"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const errors_1 = require("../errors");
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization)
        throw new errors_1.AppError("Missing bearer token", 401);
    const token = authorization.split(" ")[1];
    const decoded = (0, jsonwebtoken_1.verify)(token, process.env.SECRET_KEY);
    res.locals = Object.assign(Object.assign({}, res.locals), { decoded });
    return next();
};
exports.verifyToken = verifyToken;
