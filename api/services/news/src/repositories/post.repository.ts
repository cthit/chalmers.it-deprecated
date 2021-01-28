import { queryFunction } from "../setup";
import { Post } from "../models/Post";

export const queryGetPosts = (query: queryFunction) =>
    query("SELECT * FROM post", [], res => res.rows);

export const queryCreatePost = (query: queryFunction, post: Post) =>
    query(
        "INSERT INTO post (user_id, group_id, title, body, url, image_urls) VALUES ($1, $2, $3, $4, $5, $6)",
        [
            post.user_id,
            post.group_id,
            post.title,
            post.body,
            post.url,
            post.image_urls
        ],
        res => res.rowCount > 0
    );

export const queryGetPostById = (query: queryFunction, id: number) =>
    query("SELECT * FROM post WHERE id=$1", [id], res => res.rows[0]);

export const queryUpdatePost = (query: queryFunction, post: Post) =>
    query(
        "UPDATE post SET (title, body, url, image_urls, updated_at) = ($1, $2, $3, $4, now()) WHERE id=$5",
        [post.title, post.body, post.url, post.image_urls, post.id],
        res => res.rowCount > 0
    );
