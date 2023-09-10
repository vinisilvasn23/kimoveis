import "express-async-errors";
import "reflect-metadata";
import express, { Application } from "express";
import {
  categoriesRouter,
  realEstateRouter,
  schedulesRouter,
  loginRouter,
  userRouter,
} from "./routers";
import middlewares from "./middlewares";

const app: Application = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", loginRouter);
app.use("/categories", categoriesRouter);
app.use("/realEstate", realEstateRouter);
app.use("/schedules", schedulesRouter);

app.use(middlewares.handleErrors);

export default app;
