"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleErrors_middleware_1 = require("./handleErrors.middleware");
const validateBody_middleware_1 = require("./validateBody.middleware");
const verifyIdExists_middleware_1 = require("./verifyIdExists.middleware");
const validateAdmin_middleware_1 = require("./validateAdmin.middleware");
const verifyToken_middleware_1 = require("./verifyToken.middleware");
const verifyEmailExists_middleware_1 = require("./verifyEmailExists.middleware");
const verifyExistsUser_1 = require("./verifyExistsUser");
const verifyCategoryExists_middlewares_1 = require("./verifyCategoryExists.middlewares");
const verifyUserPermission_middleware_1 = require("./verifyUserPermission.middleware");
exports.default = {
    handleErrors: handleErrors_middleware_1.handleErrors,
    validateBody: validateBody_middleware_1.validateBody,
    verifyIdExists: verifyIdExists_middleware_1.verifyIdExists,
    validateAdmin: validateAdmin_middleware_1.validateAdmin,
    verifyToken: verifyToken_middleware_1.verifyToken,
    verifyEmailExists: verifyEmailExists_middleware_1.verifyEmailExists,
    verifyExistsUser: verifyExistsUser_1.verifyExistsUser,
    verifyCategoryExists: verifyCategoryExists_middlewares_1.verifyCategoryExists,
    verifyUserPermission: verifyUserPermission_middleware_1.verifyUserPermission
};
