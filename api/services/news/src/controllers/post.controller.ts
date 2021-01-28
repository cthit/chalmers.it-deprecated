import { to, findImageUrls } from "../utils/utils";
import {
    queryGetPosts,
    queryCreatePost,
    queryGetPostById,
    queryUpdatePost
} from "../repositories/post.repository";
import express from "express";
import { User } from "../models/User";
import { canPostAs } from "../services/post.service";

export const handleGetPosts = query => async (req, res) => {
    const [err, posts] = await to(queryGetPosts(query));
    err ? res.status(500).json(err) : res.status(200).json(posts);
};

export const handleCreatePost = query => async (req: express.Request, res) => {
    const user: User = JSON.parse(req.header("user") || null);
    if (!user || !canPostAs(user, req.body.group_id)) {
        res.status(401).json(
            "User is not authorized to post as the specified group"
        );
        return;
    }

    const [err, ok] = await to(
        queryCreatePost(query, {
            ...req.body,
            user_id: user.cid,
            image_urls: findImageUrls(req.body.body)
        })
    );
    err ? res.status(400).json(err) : res.status(201).json({ success: ok });
};

export const handleUpdatePost = query => async (req: express.Request, res) => {
    const user: User = JSON.parse(req.header("user") || null);
    const [, post] = await to(queryGetPostById(query, req.body.id));
    if (!post) {
        res.status(404).json(`Unable to find post with id: ${req.body.id}`);
        return;
    }
    if (!user || !canPostAs(user, post.group_id)) {
        res.status(401).json("User is not authorized to change post");
        return;
    }
    const [err, ok] = await to(
        queryUpdatePost(query, {
            ...post,
            ...req.body,
            image_urls: findImageUrls(req.body.body || post.body)
        })
    );
    err ? res.status(400).json(err) : res.status(201).json({ success: ok });
};
