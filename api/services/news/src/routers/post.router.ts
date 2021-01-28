import { queryFunction } from "../setup";
import * as express from "express";
import {
    handleGetPosts,
    handleCreatePost,
    handleUpdatePost
} from "../controllers/post.controller";

const getPostRouter = (router: express.Router, query: queryFunction) => {
    router.get("/posts", handleGetPosts(query));
    router.post("/posts", handleCreatePost(query));
    router.put("/posts", handleUpdatePost(query));
    return router;
};

export default getPostRouter;
