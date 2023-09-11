"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const validateBody = (schema) => (req, res, next) => {
    req.body = schema.parse(req.body);
    return next();
};
exports.validateBody = validateBody;
