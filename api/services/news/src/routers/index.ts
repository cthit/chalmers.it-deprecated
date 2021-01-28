import { queryFunction } from "../setup";
import * as express from "express";
import getCatRouter from "./cat.router";
import getPostRouter from "./post.router";

const initRoutes = (
    app: express.Application,
    query: queryFunction,
    createRouter: () => express.Router
) => {
    app.use("/api", getCatRouter(createRouter(), query));
    app.use("/api", getPostRouter(createRouter(), query));
};

export default initRoutes;
