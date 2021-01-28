import { queryFunction } from "../setup";
import { handleGetCats } from "../controllers/cat.controller";
import * as express from "express";

const getCatRouter = (router: express.Router, query: queryFunction) => {
    router.get("/", handleGetCats(query));
    return router;
};

export default getCatRouter;
