"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const routers_1 = require("./routers");
const middlewares_1 = __importDefault(require("./middlewares"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/users", routers_1.userRouter);
app.use("/login", routers_1.loginRouter);
app.use("/categories", routers_1.categoriesRouter);
app.use("/realEstate", routers_1.realEstateRouter);
app.use("/schedules", routers_1.schedulesRouter);
app.use(middlewares_1.default.handleErrors);
exports.default = app;
