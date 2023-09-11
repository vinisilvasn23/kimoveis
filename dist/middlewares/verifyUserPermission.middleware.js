"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUserPermission = void 0;
const errors_1 = require("../errors");
const verifyUserPermission = (req, res, next) => {
    const { sub, admin } = res.locals.decoded;
    const id = req.params.id;
    if (admin) {
        return next();
    }
    else if (sub != id) {
        throw new errors_1.AppError("Insufficient permission", 403);
    }
    return next();
};
exports.verifyUserPermission = verifyUserPermission;
